import { Nav } from '@/components/Nav';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, DollarSign, ShoppingCart, Users } from 'lucide-react';

// TODO: Replace with actual data fetching
const mockStats = {
    totalRevenue: 12500,
    totalSales: 256,
    activeSubscribers: 189,
    averageRating: 4.8,
};

const mockProducts = [
    {
        id: '1',
        title: 'AI Code Assistant',
        description: 'Your personal AI coding companion that helps you write better code faster.',
        imageUrl: '/placeholder.jpg',
        price: 49,
        sales: 128,
        revenue: 6272,
    },
    // Add more mock products...
];

export default function SellerDashboardPage() {
    return (
        <main>
            <Nav />

            <div className="container mx-auto px-4 py-8">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-bold">Seller Dashboard</h1>
                    <Button>Add New Product</Button>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                            <DollarSign className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">${mockStats.totalRevenue}</div>
                            <p className="text-xs text-muted-foreground">
                                +20.1% from last month
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
                            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{mockStats.totalSales}</div>
                            <p className="text-xs text-muted-foreground">
                                +12% from last month
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Active Subscribers</CardTitle>
                            <Users className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{mockStats.activeSubscribers}</div>
                            <p className="text-xs text-muted-foreground">
                                +8% from last month
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
                            <BarChart className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{mockStats.averageRating}</div>
                            <p className="text-xs text-muted-foreground">
                                +0.2 from last month
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Products Tabs */}
                <Tabs defaultValue="active" className="space-y-4">
                    <TabsList>
                        <TabsTrigger value="active">Active Products</TabsTrigger>
                        <TabsTrigger value="drafts">Drafts</TabsTrigger>
                        <TabsTrigger value="archived">Archived</TabsTrigger>
                    </TabsList>
                    <TabsContent value="active">
                        <div className="grid gap-4">
                            {mockProducts.map((product) => (
                                <Card key={product.id}>
                                    <CardHeader>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <CardTitle>{product.title}</CardTitle>
                                                <CardDescription>{product.description}</CardDescription>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-2xl font-bold">${product.price}</div>
                                                <div className="text-sm text-muted-foreground">
                                                    {product.sales} sales
                                                </div>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex items-center justify-between">
                                            <div className="text-sm text-muted-foreground">
                                                Total Revenue: ${product.revenue}
                                            </div>
                                            <div className="flex gap-2">
                                                <Button variant="outline" size="sm">
                                                    Edit
                                                </Button>
                                                <Button variant="outline" size="sm">
                                                    View Analytics
                                                </Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>
                    <TabsContent value="drafts">
                        <div className="text-center py-8 text-muted-foreground">
                            No draft products yet
                        </div>
                    </TabsContent>
                    <TabsContent value="archived">
                        <div className="text-center py-8 text-muted-foreground">
                            No archived products yet
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </main>
    );
} 