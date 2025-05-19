# Launch Cat

A two-sided marketplace for developers to sell tools and solopreneurs to find solutions.

## Project Overview

Launch Cat is a modern web application built with Next.js 14 that enables developers to sell their tools and solopreneurs to discover and purchase solutions. The platform supports both subscription-based and one-time purchase models.

## Tech Stack

- **Frontend**: Next.js 14 (App Router), TypeScript, TailwindCSS
- **UI Components**: shadcn/ui
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Payments**: Stripe (Subscriptions & One-time payments)
- **State Management**: Zustand
- **Icons**: Lucide React

## Features Implemented

### Core Components
- Navigation bar with search, cart, and user menu
- Product card component for displaying software listings
- Responsive grid layouts for product listings
- Product detail pages with pricing tiers and buy-out options

### Pages
1. **Home Page** (`app/page.tsx`)
   - Hero section with call-to-action
   - Featured products carousel
   - Top picks and most purchased sections

2. **Software Listing** (`app/software/page.tsx`)
   - Search functionality
   - Category filters
   - Price range slider
   - Sorting options
   - Product grid display

3. **Product Detail** (`app/software/[slug]/page.tsx`)
   - Product information display
   - Feature list
   - Pricing tiers (subscription)
   - Buy-out option
   - Rating and reviews

4. **Seller Dashboard** (`app/dashboard/seller/page.tsx`)
   - Revenue statistics
   - Sales metrics
   - Product management
   - Active/Drafts/Archived tabs

5. **Buyer Dashboard** (`app/dashboard/buyer/page.tsx`)
   - Purchase history
   - Active subscriptions
   - License keys
   - Download links

### Backend Integration

1. **Supabase Setup**
   - Database schema with tables for users, products, tiers, purchases, and reviews
   - Row Level Security (RLS) policies
   - Authentication integration

2. **Stripe Integration**
   - Checkout session creation
   - Subscription handling
   - One-time payment processing
   - Webhook handling for payment events

3. **API Routes**
   - `/api/checkout` - Handles payment processing
   - `/api/webhooks/stripe` - Processes Stripe webhook events

## Database Schema

The database includes the following tables:
- `users` - User profiles and roles
- `products` - Software listings
- `product_tiers` - Subscription tiers and pricing
- `purchases` - Transaction records
- `reviews` - User reviews and ratings

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables in `.env.local`:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   STRIPE_SECRET_KEY=your-stripe-secret-key
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
   STRIPE_WEBHOOK_SECRET=your-stripe-webhook-secret
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Seed the database with demo data:
   ```bash
   npm run seed
   ```

## Project Structure

```
launch-cat/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── dashboard/         # Dashboard pages
│   ├── software/          # Product pages
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   └── ...               # Custom components
├── lib/                   # Utility functions
│   ├── supabase.ts       # Supabase client
│   └── stripe.ts         # Stripe client
├── public/               # Static assets
├── scripts/              # Utility scripts
│   └── seed.ts          # Database seeding
└── supabase/             # Database schema
    └── schema.sql       # SQL schema
```

## Next Steps

1. Implement user authentication flows
2. Add shopping cart functionality
3. Set up Stripe Connect for seller payouts
4. Add review and rating system
5. Implement search functionality
6. Add analytics dashboard
7. Set up email notifications
8. Add admin dashboard

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License. 