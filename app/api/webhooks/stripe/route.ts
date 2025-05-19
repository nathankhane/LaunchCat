import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { supabase } from '@/lib/supabase';

export async function POST(req: Request) {
    const body = await req.text();
    const signature = headers().get('stripe-signature');

    if (!signature) {
        return new NextResponse('No signature', { status: 400 });
    }

    let event;

    try {
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET!
        );
    } catch (error) {
        return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 });
    }

    const session = event.data.object;

    switch (event.type) {
        case 'checkout.session.completed': {
            // Handle successful checkout
            const { customer, subscription, payment_intent } = session;

            // Get user ID from metadata
            const userId = session.metadata?.userId;
            const productId = session.metadata?.productId;
            const tierId = session.metadata?.tierId;

            if (!userId || !productId) {
                return new NextResponse('Missing metadata', { status: 400 });
            }

            // Create purchase record
            const { error: purchaseError } = await supabase
                .from('purchases')
                .insert({
                    buyer_id: userId,
                    product_id: productId,
                    tier_id: tierId,
                    stripe_payment_id: payment_intent || subscription,
                    amount: session.amount_total / 100, // Convert from cents
                    status: 'active',
                });

            if (purchaseError) {
                console.error('Error creating purchase:', purchaseError);
                return new NextResponse('Error creating purchase', { status: 500 });
            }

            break;
        }

        case 'customer.subscription.updated': {
            // Handle subscription updates
            const { id, status } = session;

            // Update purchase status
            const { error: updateError } = await supabase
                .from('purchases')
                .update({ status })
                .eq('stripe_payment_id', id);

            if (updateError) {
                console.error('Error updating purchase:', updateError);
                return new NextResponse('Error updating purchase', { status: 500 });
            }

            break;
        }

        case 'customer.subscription.deleted': {
            // Handle subscription cancellation
            const { id } = session;

            // Update purchase status
            const { error: updateError } = await supabase
                .from('purchases')
                .update({ status: 'cancelled' })
                .eq('stripe_payment_id', id);

            if (updateError) {
                console.error('Error updating purchase:', updateError);
                return new NextResponse('Error updating purchase', { status: 500 });
            }

            break;
        }

        default:
            console.log(`Unhandled event type: ${event.type}`);
    }

    return new NextResponse(null, { status: 200 });
} 