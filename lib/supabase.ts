import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Database = {
    public: {
        Tables: {
            users: {
                Row: {
                    id: string;
                    email: string;
                    full_name: string | null;
                    role: 'BUYER' | 'SELLER' | 'ADMIN';
                    created_at: string;
                    updated_at: string;
                };
                Insert: {
                    id: string;
                    email: string;
                    full_name?: string | null;
                    role?: 'BUYER' | 'SELLER' | 'ADMIN';
                    created_at?: string;
                    updated_at?: string;
                };
                Update: {
                    id?: string;
                    email?: string;
                    full_name?: string | null;
                    role?: 'BUYER' | 'SELLER' | 'ADMIN';
                    created_at?: string;
                    updated_at?: string;
                };
            };
            products: {
                Row: {
                    id: string;
                    seller_id: string;
                    title: string;
                    description: string;
                    image_url: string;
                    price: number;
                    deal_type: 'DEAL' | 'TOP_PICK' | 'MOST_PURCHASED' | null;
                    rating: number;
                    review_count: number;
                    created_at: string;
                    updated_at: string;
                };
                Insert: {
                    id?: string;
                    seller_id: string;
                    title: string;
                    description: string;
                    image_url: string;
                    price: number;
                    deal_type?: 'DEAL' | 'TOP_PICK' | 'MOST_PURCHASED' | null;
                    rating?: number;
                    review_count?: number;
                    created_at?: string;
                    updated_at?: string;
                };
                Update: {
                    id?: string;
                    seller_id?: string;
                    title?: string;
                    description?: string;
                    image_url?: string;
                    price?: number;
                    deal_type?: 'DEAL' | 'TOP_PICK' | 'MOST_PURCHASED' | null;
                    rating?: number;
                    review_count?: number;
                    created_at?: string;
                    updated_at?: string;
                };
            };
            product_tiers: {
                Row: {
                    id: string;
                    product_id: string;
                    name: string;
                    description: string | null;
                    price: number;
                    features: any;
                    created_at: string;
                    updated_at: string;
                };
                Insert: {
                    id?: string;
                    product_id: string;
                    name: string;
                    description?: string | null;
                    price: number;
                    features: any;
                    created_at?: string;
                    updated_at?: string;
                };
                Update: {
                    id?: string;
                    product_id?: string;
                    name?: string;
                    description?: string | null;
                    price?: number;
                    features?: any;
                    created_at?: string;
                    updated_at?: string;
                };
            };
            purchases: {
                Row: {
                    id: string;
                    buyer_id: string;
                    product_id: string;
                    tier_id: string | null;
                    stripe_payment_id: string;
                    amount: number;
                    status: string;
                    created_at: string;
                    updated_at: string;
                };
                Insert: {
                    id?: string;
                    buyer_id: string;
                    product_id: string;
                    tier_id?: string | null;
                    stripe_payment_id: string;
                    amount: number;
                    status: string;
                    created_at?: string;
                    updated_at?: string;
                };
                Update: {
                    id?: string;
                    buyer_id?: string;
                    product_id?: string;
                    tier_id?: string | null;
                    stripe_payment_id?: string;
                    amount?: number;
                    status?: string;
                    created_at?: string;
                    updated_at?: string;
                };
            };
            reviews: {
                Row: {
                    id: string;
                    product_id: string;
                    user_id: string;
                    rating: number;
                    comment: string | null;
                    created_at: string;
                    updated_at: string;
                };
                Insert: {
                    id?: string;
                    product_id: string;
                    user_id: string;
                    rating: number;
                    comment?: string | null;
                    created_at?: string;
                    updated_at?: string;
                };
                Update: {
                    id?: string;
                    product_id?: string;
                    user_id?: string;
                    rating?: number;
                    comment?: string | null;
                    created_at?: string;
                    updated_at?: string;
                };
            };
        };
    };
}; 