'use client';

import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    price: number;
    rating: number;
    reviewCount: number;
    dealType?: 'DEAL' | 'TOP_PICK' | 'MOST_PURCHASED';
}

export function ProductCard({
    id,
    title,
    description,
    imageUrl,
    price,
    rating,
    reviewCount,
    dealType,
}: ProductCardProps) {
    return (
        <Link href={`/software/${id}`}>
            <Card className="h-full hover:shadow-lg transition-shadow rounded-3xl overflow-hidden border-0 shadow-sm">
                <CardHeader className="p-0">
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                        <Image
                            src={imageUrl}
                            alt={title}
                            fill
                            className="object-cover"
                        />
                        {dealType && (
                            <div className="absolute top-3 right-3">
                                <Badge variant="secondary" className="bg-white/80 backdrop-blur-sm text-gray-800 font-medium">
                                    {dealType.replace('_', ' ')}
                                </Badge>
                            </div>
                        )}
                    </div>
                </CardHeader>
                <CardContent className="p-5">
                    <div className="flex items-start justify-between">
                        <h3 className="font-bold text-xl text-gray-800">{title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 mt-2 line-clamp-2">{description}</p>
                    <div className="flex items-center gap-1 mt-3">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{rating.toFixed(1)}</span>
                        <span className="text-sm text-gray-500">({reviewCount})</span>
                    </div>
                </CardContent>
                <CardFooter className="px-5 pb-5 pt-0">
                    <div className="text-lg font-bold text-purple-700">${price}</div>
                </CardFooter>
            </Card>
        </Link>
    );
} 