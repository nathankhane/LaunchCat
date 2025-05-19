import { Nav } from '@/components/Nav';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star } from 'lucide-react';
import Image from 'next/image';

// TODO: Replace with actual data fetching
const mockProduct = {
    id: '1',
    title: 'AI Code Assistant',
    description: 'Your personal AI coding companion that helps you write better code faster.',
    longDescription: `Transform your coding workflow with our AI-powered code assistant. 
    Get instant suggestions, bug fixes, and code explanations. 
    Perfect for developers of all skill levels.`,
    imageUrl: '/placeholder.jpg',
    price: 49,
    rating: 4.8,
    reviewCount: 128,
    dealType: 'TOP_PICK' as const,
    features: [
        'Real-time code suggestions',
        'Bug detection and fixes',
        'Code explanation and documentation',
        'Multiple language support',
        'VS Code integration',
    ],
    tiers: [
        {
            id: '1',
            name: 'Starter',
            price: 29,
            interval: 'month',
            features: [
                'Basic code suggestions',
                'Limited language support',
                'Community support',
            ],
        },
        {
            id: '2',
            name: 'Pro',
            price: 49,
            interval: 'month',
            features: [
                'Advanced code suggestions',
                'All language support',
                'Priority support',
                'Custom integrations',
                'Team collaboration',
            ],
        },
        {
            id: '3',
            name: 'Enterprise',
            price: 99,
            interval: 'month',
            features: [
                'Everything in Pro',
                'Dedicated support',
                'Custom training',
                'SLA guarantee',
                'On-premise deployment',
            ],
        },
    ],
};

export default function ProductPage({ params }: { params: { slug: string } }) {
    return (
        <main>
            <Nav />

            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Product Image */}
                    <div className="relative aspect-video lg:aspect-square rounded-lg overflow-hidden">
                        <Image
                            src={mockProduct.imageUrl}
                            alt={mockProduct.title}
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Product Info */}
                    <div>
                        <h1 className="text-4xl font-bold mb-4">{mockProduct.title}</h1>
                        <div className="flex items-center gap-2 mb-4">
                            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                            <span className="font-medium">{mockProduct.rating}</span>
                            <span className="text-gray-500">({mockProduct.reviewCount} reviews)</span>
                        </div>
                        <p className="text-lg text-gray-600 mb-8">{mockProduct.longDescription}</p>

                        {/* Features */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                            <ul className="space-y-2">
                                {mockProduct.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-green-500 rounded-full" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Pricing Tabs */}
                        <Tabs defaultValue="tiers" className="w-full">
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="tiers">Subscription Tiers</TabsTrigger>
                                <TabsTrigger value="buyout">Buy Out</TabsTrigger>
                            </TabsList>
                            <TabsContent value="tiers">
                                <div className="grid gap-4 mt-4">
                                    {mockProduct.tiers.map((tier) => (
                                        <Card key={tier.id}>
                                            <CardHeader>
                                                <CardTitle>{tier.name}</CardTitle>
                                                <CardDescription>
                                                    ${tier.price}/{tier.interval}
                                                </CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <ul className="space-y-2">
                                                    {tier.features.map((feature) => (
                                                        <li key={feature} className="flex items-center gap-2">
                                                            <span className="w-2 h-2 bg-green-500 rounded-full" />
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </CardContent>
                                            <CardFooter>
                                                <Button className="w-full">Subscribe Now</Button>
                                            </CardFooter>
                                        </Card>
                                    ))}
                                </div>
                            </TabsContent>
                            <TabsContent value="buyout">
                                <Card className="mt-4">
                                    <CardHeader>
                                        <CardTitle>Lifetime Access</CardTitle>
                                        <CardDescription>
                                            One-time payment for unlimited access
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-3xl font-bold mb-4">${mockProduct.price * 12}</div>
                                        <p className="text-gray-600">
                                            Get lifetime access to all features and future updates.
                                            No recurring payments.
                                        </p>
                                    </CardContent>
                                    <CardFooter>
                                        <Button className="w-full">Buy Now</Button>
                                    </CardFooter>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>
        </main>
    );
} 