'use client';

import React from 'react';
import { Search, ShoppingCart, User, LogOut } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useAuth } from '../lib/auth';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from './ui/dropdown-menu';

export function Nav() {
    const { user, signOut } = useAuth();

    return (
        <nav className="border-b">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold">
                    Launch Cat
                </Link>

                <div className="flex-1 max-w-2xl mx-8">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <Input
                            type="search"
                            placeholder="Search for tools..."
                            className="pl-10 w-full"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    {user ? (
                        <>
                            <Link href="/sell">
                                <Button variant="outline">Sell</Button>
                            </Link>
                            <Link href="/cart">
                                <Button variant="ghost" size="icon">
                                    <ShoppingCart size={20} />
                                </Button>
                            </Link>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon">
                                        <User size={20} />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem asChild>
                                        <Link href="/dashboard">Dashboard</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <Link href="/dashboard/settings">Settings</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                        className="text-red-600"
                                        onClick={() => signOut()}
                                    >
                                        <LogOut className="w-4 h-4 mr-2" />
                                        Sign out
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </>
                    ) : (
                        <>
                            <Link href="/login">
                                <Button variant="outline">Sign in</Button>
                            </Link>
                            <Link href="/signup">
                                <Button>Sign up</Button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
} 