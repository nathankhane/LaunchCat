import { Nav } from '@/components/Nav';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, ExternalLink, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// TODO: Replace with actual data fetching
const mockPurchases = [
    {
        id: '1',
        title: 'AI Code Assistant',
        description: 'Your personal AI coding companion that helps you write better code faster.',
        imageUrl: '/placeholder.jpg',
        price: 49,
        purchaseDate: '2024-03-15',
        status: 'active',
        type: 'subscription',
        tier: 'Pro',
        nextBillingDate: '2024-04-15',
        licenseKey: 'XXXX-XXXX-XXXX-XXXX',
        downloadUrl: '#',
        documentationUrl: '#',
    },
    // Add more mock purchases...
];

export default function BuyerDashboardPage() {
    return (
        <main>
            <Nav />

            <div className="container mx-auto px-4 py-8">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-bold">My Purchases</h1>
                    <Button>Browse More Tools</Button>
                </div>

                {/* Purchases Tabs */}
                <Tabs defaultValue="active" className="space-y-4">
                    <TabsList>
                        <TabsTrigger value="active">Active</TabsTrigger>
                        <TabsTrigger value="expired">Expired</TabsTrigger>
                        <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
                    </TabsList>
                    <TabsContent value="active">
                        <div className="grid gap-4">
                            {mockPurchases.map((purchase) => (
                                <Card key={purchase.id}>
                                    <CardHeader>
                                        <div className="flex items-start gap-4">
                                            <div className="relative w-24 h-24 rounded-lg overflow-hidden">
                                                <Image
                                                    src={purchase.imageUrl}
                                                    alt={purchase.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <CardTitle>{purchase.title}</CardTitle>
                                                <CardDescription>{purchase.description}</CardDescription>
                                                <div className="flex items-center gap-4 mt-2">
                                                    <div className="flex items-center gap-1">
                                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                                        <span className="text-sm font-medium">4.8</span>
                                                    </div>
                                                    <div className="text-sm text-muted-foreground">
                                                        Purchased on {purchase.purchaseDate}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-2xl font-bold">${purchase.price}</div>
                                                <div className="text-sm text-muted-foreground">
                                                    {purchase.type === 'subscription' ? 'Monthly' : 'One-time'}
                                                </div>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <h4 className="text-sm font-medium mb-1">License Key</h4>
                                                <div className="flex items-center gap-2">
                                                    <code className="text-sm bg-muted px-2 py-1 rounded">
                                                        {purchase.licenseKey}
                                                    </code>
                                                    <Button variant="ghost" size="icon">
                                                        <Download className="w-4 h-4" />
                                                    </Button>
                                                </div>
                                            </div>
                                            {purchase.type === 'subscription' && (
                                                <div>
                                                    <h4 className="text-sm font-medium mb-1">Next Billing Date</h4>
                                                    <div className="text-sm text-muted-foreground">
                                                        {purchase.nextBillingDate}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </CardContent>
                                    <CardFooter className="flex justify-between">
                                        <div className="flex gap-2">
                                            <Button variant="outline" size="sm">
                                                <Download className="w-4 h-4 mr-2" />
                                                Download
                                            </Button>
                                            <Button variant="outline" size="sm">
                                                <ExternalLink className="w-4 h-4 mr-2" />
                                                Documentation
                                            </Button>
                                        </div>
                                        {purchase.type === 'subscription' && (
                                            <Button variant="destructive" size="sm">
                                                Cancel Subscription
                                            </Button>
                                        )}
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>
                    <TabsContent value="expired">
                        <div className="text-center py-8 text-muted-foreground">
                            No expired purchases yet
                        </div>
                    </TabsContent>
                    <TabsContent value="cancelled">
                        <div className="text-center py-8 text-muted-foreground">
                            No cancelled purchases yet
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </main>
    );
} 