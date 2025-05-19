import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error('Missing STRIPE_SECRET_KEY');
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2023-10-16',
    typescript: true,
});

export async function createCheckoutSession({
    priceId,
    customerId,
    successUrl,
    cancelUrl,
}: {
    priceId: string;
    customerId: string;
    successUrl: string;
    cancelUrl: string;
}) {
    const session = await stripe.checkout.sessions.create({
        mode: 'subscription',
        payment_method_types: ['card'],
        line_items: [
            {
                price: priceId,
                quantity: 1,
            },
        ],
        customer: customerId,
        success_url: successUrl,
        cancel_url: cancelUrl,
    });

    return session;
}

export async function createPaymentIntent({
    amount,
    customerId,
}: {
    amount: number;
    customerId: string;
}) {
    const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(amount * 100), // Convert to cents
        currency: 'usd',
        customer: customerId,
        automatic_payment_methods: {
            enabled: true,
        },
    });

    return paymentIntent;
}

export async function createCustomer({
    email,
    name,
}: {
    email: string;
    name: string;
}) {
    const customer = await stripe.customers.create({
        email,
        name,
    });

    return customer;
}

export async function createPrice({
    productId,
    unitAmount,
    interval,
}: {
    productId: string;
    unitAmount: number;
    interval?: 'day' | 'week' | 'month' | 'year';
}) {
    const price = await stripe.prices.create({
        product: productId,
        unit_amount: Math.round(unitAmount * 100), // Convert to cents
        currency: 'usd',
        recurring: interval
            ? {
                interval,
            }
            : undefined,
    });

    return price;
}

export async function createProduct({
    name,
    description,
}: {
    name: string;
    description: string;
}) {
    const product = await stripe.products.create({
        name,
        description,
    });

    return product;
} 