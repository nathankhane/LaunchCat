import { Nav } from '../components/Nav';
import { ProductCard } from '../components/ProductCard';
import Link from 'next/link';
import Image from 'next/image';

// Mock products data
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
    }
];

// Features data
const features = [
    {
        title: "Easy Integration",
        description: "Our tools integrate seamlessly with your existing workflow and tech stack.",
        icon: "🔌"
    },
    {
        title: "Developer First",
        description: "Built by developers for developers, with a focus on productivity and ease of use.",
        icon: "👨‍💻"
    },
    {
        title: "Customizable",
        description: "Fully customizable to fit your specific needs and preferences.",
        icon: "⚙️"
    },
    {
        title: "Great Support",
        description: "Dedicated support team to help you get the most out of your tools.",
        icon: "🛟"
    }
];

// Partners/Integrations
const partners = [
    { name: "GitHub", logo: "github" },
    { name: "VS Code", logo: "vscode" },
    { name: "GitLab", logo: "gitlab" },
    { name: "Slack", logo: "slack" },
    { name: "Jira", logo: "jira" },
    { name: "Docker", logo: "docker" },
];

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            <Nav />

            {/* Hero Section - Inspired by Tailark hero-section-8 */}
            <section className="relative overflow-hidden bg-gradient-to-br from-purple-700 to-blue-600">
                <div className="absolute inset-0 bg-grid-white/20 bg-[length:20px_20px] [mask-image:radial-gradient(white,transparent_70%)]"></div>

                <div className="container relative mx-auto px-4 py-24 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                    <div className="max-w-2xl text-center lg:text-left">
                        <h1 className="text-3xl font-extrabold text-white sm:text-5xl md:text-6xl">
                            Launch Your Developer Tools to Success
                            <span className="block text-yellow-300">Find the Perfect Solutions</span>
                        </h1>

                        <p className="mt-8 max-w-xl text-lg text-gray-100 sm:text-xl">
                            The marketplace for indie developers to sell their tools and solopreneurs to find the perfect solutions.
                        </p>

                        <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
                            <Link href="/software" className="inline-block rounded-lg bg-white px-8 py-3 text-sm font-medium text-purple-700 shadow-lg transition hover:bg-gray-100 focus:outline-none focus:ring">
                                Browse Tools
                            </Link>
                            <Link href="/signup" className="inline-block rounded-lg border border-white bg-transparent px-8 py-3 text-sm font-medium text-white shadow-lg transition hover:bg-white/10 focus:outline-none focus:ring">
                                Start Selling
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Abstract shapes */}
                <div className="absolute -right-10 -top-20 h-72 w-72 rounded-full bg-yellow-300 blur-[100px] opacity-60"></div>
                <div className="absolute -bottom-20 left-10 h-72 w-72 rounded-full bg-blue-400 blur-[100px] opacity-60"></div>
            </section>

            {/* Features Section - Inspired by Tailark features-1 */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                            Features Developers Love
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                            Our marketplace is built with developers in mind, offering tools and features that make your life easier.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {features.map((feature, index) => (
                            <div key={index} className="rounded-xl bg-white p-8 shadow-lg transition-all hover:shadow-xl">
                                <div className="mb-4 text-4xl">{feature.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                                <p className="mt-3 text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Products Section */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                            Featured Tools
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                            Discover the top-rated developer tools that are changing the game.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {mockProducts.slice(0, 4).map((product) => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link href="/software" className="inline-block rounded-lg bg-purple-700 px-8 py-3 text-sm font-medium text-white shadow-lg transition hover:bg-purple-800 focus:outline-none focus:ring">
                            View All Tools
                        </Link>
                    </div>
                </div>
            </section>

            {/* Integrations Section - Inspired by Tailark integrations-1 */}
            <section className="py-24 bg-white border-t border-gray-200">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                            Seamless Integrations
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                            Our tools integrate with the platforms you already use and love.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                        {partners.map((partner, index) => (
                            <div key={index} className="text-center">
                                <div className="h-16 w-16 mx-auto mb-2 flex items-center justify-center rounded-full bg-gray-100">
                                    <span className="text-2xl">{partner.logo.charAt(0).toUpperCase()}</span>
                                </div>
                                <p className="text-sm font-medium text-gray-700">{partner.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-br from-purple-700 to-blue-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold sm:text-4xl mb-6">
                        Ready to Launch Your Developer Tool?
                    </h2>
                    <p className="mb-8 max-w-xl mx-auto text-lg">
                        Join our marketplace today and reach thousands of developers looking for solutions like yours.
                    </p>
                    <Link href="/signup" className="inline-block rounded-lg bg-white px-8 py-3 text-sm font-medium text-purple-700 shadow-lg transition hover:bg-gray-100 focus:outline-none focus:ring">
                        Start Selling Now
                    </Link>
                </div>
            </section>
        </main>
    );
} 