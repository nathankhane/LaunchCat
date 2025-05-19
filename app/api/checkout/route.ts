import { NextResponse } from 'next/server';
import { createCheckoutSession, createPaymentIntent } from '@/lib/stripe';
import { supabase } from '@/lib/supabase';

export async function POST(req: Request) {
    try {
        const { productId, tierId, userId, type } = await req.json();

        // Get product and tier details
        const { data: product, error: productError } = await supabase
            .from('products')
            .select('*, product_tiers(*)')
            .eq('id', productId)
            .single();

        if (productError) {
            return new NextResponse('Product not found', { status: 404 });
        }

        // Get user details
        const { data: user, error: userError } = await supabase
            .from('users')
            .select('*')
            .eq('id', userId)
            .single();

        if (userError) {
            return new NextResponse('User not found', { status: 404 });
        }

        // Get or create Stripe customer
        let customerId = user.stripe_customer_id;

        if (!customerId) {
            const customer = await stripe.customers.create({
                email: user.email,
                name: user.full_name,
            });
            customerId = customer.id;

            // Update user with Stripe customer ID
            await supabase
                .from('users')
                .update({ stripe_customer_id: customerId })
                .eq('id', userId);
        }

        if (type === 'subscription') {
            // Create or get Stripe price
            const tier = product.product_tiers.find((t: any) => t.id === tierId);
            if (!tier) {
                return new NextResponse('Tier not found', { status: 404 });
            }

            const price = await stripe.prices.create({
                product: product.stripe_product_id,
                unit_amount: Math.round(tier.price * 100),
                currency: 'usd',
                recurring: {
                    interval: 'month',
                },
            });

            // Create checkout session
            const session = await createCheckoutSession({
                priceId: price.id,
                customerId,
                successUrl: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/buyer?success=true`,
                cancelUrl: `${process.env.NEXT_PUBLIC_APP_URL}/software/${productId}?canceled=true`,
            });

            return NextResponse.json({ url: session.url });
        } else {
            // One-time payment
            const paymentIntent = await createPaymentIntent({
                amount: product.price,
                customerId,
            });

            return NextResponse.json({
                clientSecret: paymentIntent.client_secret,
            });
        }
    } catch (error) {
        console.error('Error creating checkout:', error);
        return new NextResponse('Error creating checkout', { status: 500 });
    }
} 