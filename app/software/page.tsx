import { Nav } from '@/components/Nav';
import { ProductCard } from '@/components/ProductCard';
import { ProfileCard } from '@/components/ProfileCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// TODO: Replace with actual data fetching
const mockProducts = [
    {
        id: '1',
        title: 'AI Code Assistant',
        description: 'Your personal AI coding companion that helps you write better code faster.',
        imageUrl: '/placeholder.jpg',
        price: 49,
        rating: 4.8,
        reviewCount: 128,
        dealType: 'TOP_PICK' as const,
    },
    {
        id: '2',
        title: 'DevOps Dashboard',
        description: 'Monitor your infrastructure and deployments in one place with real-time alerts.',
        imageUrl: '/placeholder.jpg',
        price: 39,
        rating: 4.5,
        reviewCount: 87,
        dealType: 'DEAL' as const,
    },
    {
        id: '3',
        title: 'Database Manager Pro',
        description: 'Visual database management tool for SQL and NoSQL databases with query optimization.',
        imageUrl: '/placeholder.jpg',
        price: 59,
        rating: 4.7,
        reviewCount: 112,
    },
    {
        id: '4',
        title: 'API Testing Suite',
        description: 'Comprehensive API testing toolbox with request builder, mock servers, and test automation.',
        imageUrl: '/placeholder.jpg',
        price: 29,
        rating: 4.6,
        reviewCount: 94,
        dealType: 'MOST_PURCHASED' as const,
    },
    {
        id: '5',
        title: 'Code Formatter Ultra',
        description: 'Format and lint your code across multiple languages with customizable rules.',
        imageUrl: '/placeholder.jpg',
        price: 19,
        rating: 4.4,
        reviewCount: 156,
    },
    {
        id: '6',
        title: 'Git Workflow Manager',
        description: 'Visualize and manage complex Git workflows with branch management and PR integrations.',
        imageUrl: '/placeholder.jpg',
        price: 45,
        rating: 4.9,
        reviewCount: 73,
    },
    {
        id: '7',
        title: 'Frontend Component Library',
        description: 'Ready-to-use UI components with React, Vue, and Angular support.',
        imageUrl: '/placeholder.jpg',
        price: 99,
        rating: 4.7,
        reviewCount: 211,
        dealType: 'TOP_PICK' as const,
    },
    {
        id: '8',
        title: 'Serverless Deployment Tool',
        description: 'Deploy to AWS Lambda, Azure Functions and more with a simple CLI command.',
        imageUrl: '/placeholder.jpg',
        price: 69,
        rating: 4.6,
        reviewCount: 142,
    },
    {
        id: '9',
        title: 'Mobile App Builder',
        description: 'Create cross-platform mobile apps without coding. Drag-and-drop interface.',
        imageUrl: '/placeholder.jpg',
        price: 79,
        rating: 4.3,
        reviewCount: 167,
    }
];

// Mock developers/companies data
const mockProfiles = [
    {
        id: '1',
        name: 'Sophie Bennett',
        description: 'Product Designer who focuses on simplicity & usability.',
        imageUrl: '/placeholder.jpg',
        followers: 312,
        following: 48,
    },
    {
        id: '2',
        name: 'Alex Morgan',
        description: 'Full-stack developer creating tools for modern workflows.',
        imageUrl: '/placeholder.jpg',
        followers: 427,
        following: 62,
    },
    {
        id: '3',
        name: 'TechForge',
        description: 'Building next-gen developer tools and utilities.',
        imageUrl: '/placeholder.jpg',
        followers: 1205,
        following: 34,
    },
    {
        id: '4',
        name: 'CodeCraft Studios',
        description: 'A boutique dev shop specializing in dev tools.',
        imageUrl: '/placeholder.jpg',
        followers: 892,
        following: 103,
    },
    {
        id: '5',
        name: 'DevFlow',
        description: 'Streamlining developer workflows since 2018.',
        imageUrl: '/placeholder.jpg',
        followers: 1562,
        following: 87,
    },
    {
        id: '6',
        name: 'Ryan Chen',
        description: 'A Product Designer focused on intuitive user experiences.',
        imageUrl: '/placeholder.jpg',
        followers: 624,
        following: 128,
        variant: 'dark',
    }
];

const categories = [
    'All',
    'AI Tools',
    'Development',
    'Productivity',
    'Design',
    'Marketing',
];

export default function SoftwarePage() {
    return (
        <main>
            <Nav />

            <div className="container mx-auto px-4 py-8">
                <div className="mb-8">
                    <Tabs defaultValue="tools" className="w-full">
                        <TabsList className="mb-6">
                            <TabsTrigger value="tools">Tools</TabsTrigger>
                            <TabsTrigger value="profiles">Developers & Companies</TabsTrigger>
                        </TabsList>

                        <TabsContent value="tools">
                            <div className="flex gap-8">
                                {/* Filters Sidebar */}
                                <aside className="w-64 shrink-0">
                                    <div className="space-y-6">
                                        {/* Search */}
                                        <div>
                                            <Label htmlFor="search">Search</Label>
                                            <Input
                                                id="search"
                                                type="search"
                                                placeholder="Search tools..."
                                                className="mt-2"
                                            />
                                        </div>

                                        {/* Categories */}
                                        <div>
                                            <h3 className="font-semibold mb-3">Categories</h3>
                                            <RadioGroup defaultValue="All" className="space-y-2">
                                                {categories.map((category) => (
                                                    <div key={category} className="flex items-center space-x-2">
                                                        <RadioGroupItem value={category} id={category} />
                                                        <Label htmlFor={category}>{category}</Label>
                                                    </div>
                                                ))}
                                            </RadioGroup>
                                        </div>

                                        {/* Price Range */}
                                        <div>
                                            <h3 className="font-semibold mb-3">Price Range</h3>
                                            <Slider
                                                defaultValue={[0, 100]}
                                                max={100}
                                                step={1}
                                                className="mt-2"
                                            />
                                            <div className="flex justify-between mt-2 text-sm text-gray-500">
                                                <span>$0</span>
                                                <span>$100</span>
                                            </div>
                                        </div>

                                        {/* Popularity */}
                                        <div>
                                            <h3 className="font-semibold mb-3">Sort By</h3>
                                            <RadioGroup defaultValue="popular" className="space-y-2">
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem value="popular" id="popular" />
                                                    <Label htmlFor="popular">Most Popular</Label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem value="newest" id="newest" />
                                                    <Label htmlFor="newest">Newest</Label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem value="price-low" id="price-low" />
                                                    <Label htmlFor="price-low">Price: Low to High</Label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem value="price-high" id="price-high" />
                                                    <Label htmlFor="price-high">Price: High to Low</Label>
                                                </div>
                                            </RadioGroup>
                                        </div>
                                    </div>
                                </aside>

                                {/* Product Grid */}
                                <div className="flex-1">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {mockProducts.map((product) => (
                                            <ProductCard key={product.id} {...product} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="profiles">
                            <div className="flex gap-8">
                                {/* Filters Sidebar */}
                                <aside className="w-64 shrink-0">
                                    <div className="space-y-6">
                                        {/* Search */}
                                        <div>
                                            <Label htmlFor="search-profiles">Search</Label>
                                            <Input
                                                id="search-profiles"
                                                type="search"
                                                placeholder="Search developers..."
                                                className="mt-2"
                                            />
                                        </div>

                                        {/* Type */}
                                        <div>
                                            <h3 className="font-semibold mb-3">Type</h3>
                                            <RadioGroup defaultValue="all" className="space-y-2">
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem value="all" id="all-profiles" />
                                                    <Label htmlFor="all-profiles">All</Label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem value="individuals" id="individuals" />
                                                    <Label htmlFor="individuals">Individuals</Label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem value="companies" id="companies" />
                                                    <Label htmlFor="companies">Companies</Label>
                                                </div>
                                            </RadioGroup>
                                        </div>

                                        {/* Specialty */}
                                        <div>
                                            <h3 className="font-semibold mb-3">Specialty</h3>
                                            <RadioGroup defaultValue="all-specialties" className="space-y-2">
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem value="all-specialties" id="all-specialties" />
                                                    <Label htmlFor="all-specialties">All</Label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem value="development" id="dev-specialty" />
                                                    <Label htmlFor="dev-specialty">Development</Label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem value="design" id="design-specialty" />
                                                    <Label htmlFor="design-specialty">Design</Label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem value="data" id="data-specialty" />
                                                    <Label htmlFor="data-specialty">Data & Analytics</Label>
                                                </div>
                                            </RadioGroup>
                                        </div>
                                    </div>
                                </aside>

                                {/* Profiles Grid */}
                                <div className="flex-1">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {mockProfiles.map((profile) => (
                                            <ProfileCard
                                                key={profile.id}
                                                name={profile.name}
                                                description={profile.description}
                                                imageUrl={profile.imageUrl}
                                                followers={profile.followers}
                                                following={profile.following}
                                                variant={profile.variant as any || 'default'}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </main>
    );
} 