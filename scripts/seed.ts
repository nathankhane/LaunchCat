import { supabase } from '@/lib/supabase';
import { stripe } from '@/lib/stripe';

async function seed() {
    try {
        // Create demo users
        const { data: seller, error: sellerError } = await supabase
            .from('users')
            .insert({
                email: 'seller@example.com',
                full_name: 'Demo Seller',
                role: 'SELLER',
            })
            .select()
            .single();

        if (sellerError) throw sellerError;

        const { data: buyer, error: buyerError } = await supabase
            .from('users')
            .insert({
                email: 'buyer@example.com',
                full_name: 'Demo Buyer',
                role: 'BUYER',
            })
            .select()
            .single();

        if (buyerError) throw buyerError;

        // Create Stripe products
        const aiAssistant = await stripe.products.create({
            name: 'AI Code Assistant',
            description: 'Your personal AI coding companion that helps you write better code faster.',
        });

        const designTool = await stripe.products.create({
            name: 'Design System Pro',
            description: 'A comprehensive design system for modern web applications.',
        });

        // Create demo products
        const { data: products, error: productsError } = await supabase
            .from('products')
            .insert([
                {
                    seller_id: seller.id,
                    title: 'AI Code Assistant',
                    description: 'Your personal AI coding companion that helps you write better code faster.',
                    image_url: '/placeholder.jpg',
                    price: 49,
                    deal_type: 'TOP_PICK',
                    stripe_product_id: aiAssistant.id,
                },
                {
                    seller_id: seller.id,
                    title: 'Design System Pro',
                    description: 'A comprehensive design system for modern web applications.',
                    image_url: '/placeholder.jpg',
                    price: 79,
                    deal_type: 'MOST_PURCHASED',
                    stripe_product_id: designTool.id,
                },
            ])
            .select();

        if (productsError) throw productsError;

        // Create product tiers
        const { error: tiersError } = await supabase
            .from('product_tiers')
            .insert([
                {
                    product_id: products[0].id,
                    name: 'Starter',
                    description: 'Perfect for individual developers',
                    price: 29,
                    features: [
                        'Basic code suggestions',
                        'Limited language support',
                        'Community support',
                    ],
                },
                {
                    product_id: products[0].id,
                    name: 'Pro',
                    description: 'For professional developers and teams',
                    price: 49,
                    features: [
                        'Advanced code suggestions',
                        'All language support',
                        'Priority support',
                        'Custom integrations',
                        'Team collaboration',
                    ],
                },
                {
                    product_id: products[1].id,
                    name: 'Basic',
                    description: 'Essential design components',
                    price: 49,
                    features: [
                        'Core components',
                        'Basic documentation',
                        'Community support',
                    ],
                },
                {
                    product_id: products[1].id,
                    name: 'Professional',
                    description: 'Complete design system with advanced features',
                    price: 79,
                    features: [
                        'All components',
                        'Advanced documentation',
                        'Priority support',
                        'Custom themes',
                        'Team collaboration',
                    ],
                },
            ]);

        if (tiersError) throw tiersError;

        console.log('Seed completed successfully!');
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
}

seed(); 