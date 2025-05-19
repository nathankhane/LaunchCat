'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';

interface ProfileCardProps {
    name: string;
    description: string;
    imageUrl: string;
    followers: number;
    following: number;
    variant?: 'light' | 'dark' | 'default';
    verified?: boolean;
}

export function ProfileCard({
    name,
    description,
    imageUrl,
    followers,
    following,
    variant = 'default',
    verified = true,
}: ProfileCardProps) {
    const bgClass = {
        default: 'bg-white',
        light: 'bg-gray-100',
        dark: 'bg-gray-800',
    }[variant];

    const textClass = {
        default: 'text-gray-800',
        light: 'text-gray-800',
        dark: 'text-white',
    }[variant];

    const descriptionClass = {
        default: 'text-gray-600',
        light: 'text-gray-600',
        dark: 'text-gray-300',
    }[variant];

    return (
        <div className={`rounded-3xl p-5 ${bgClass} shadow-sm transition-all hover:shadow-md`}>
            {/* Profile Image */}
            <div className="relative w-full aspect-[1/1] mb-4 overflow-hidden rounded-[20px]">
                <Image
                    src={imageUrl}
                    alt={name}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Profile Info */}
            <div className="flex items-center gap-1 mb-2">
                <h3 className={`font-bold text-xl ${textClass}`}>{name}</h3>
                {verified && (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                        <circle cx="10" cy="10" r="10" fill="#15803D" />
                        <path d="M8.5 10.5L10 12L13.5 8.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                )}
            </div>

            <p className={`text-sm ${descriptionClass} mb-4`}>{description}</p>

            {/* Stats and Follow Button */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-4 h-4 mr-1 ${descriptionClass}`}>
                            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                        </svg>
                        <span className={`text-sm font-medium ${textClass}`}>{followers}</span>
                    </div>
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-4 h-4 mr-1 ${descriptionClass}`}>
                            <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clipRule="evenodd" />
                        </svg>
                        <span className={`text-sm font-medium ${textClass}`}>{following}</span>
                    </div>
                </div>
                <Button variant="outline" size="sm" className="rounded-full px-6 h-9">
                    Follow
                </Button>
            </div>
        </div>
    );
} 