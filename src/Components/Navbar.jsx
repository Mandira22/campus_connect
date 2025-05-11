import React from 'react';
//import { Button } from '@/components/ui/button';

const Navbar = () => {
    return (
        <header className="py-4 border-b-2 border-gray-300  bg-emerald-50 w-full">
            <div className="container flex items-center justify-between px-9  ">
                <a href="#" className="text-2xl font-bold">
                    Campus Connect
                </a>
                <nav className="hidden md:flex items-center gap-6">
                    <a href="#" className="hover:text-primary transition-colors">
                        Discover
                    </a>
                    <a href="#" className="hover:text-primary transition-colors">
                        Special Deals
                    </a>
                    <a href="#" className="hover:text-primary transition-colors">
                        Community
                    </a>
                    <a href="#" className="hover:text-primary transition-colors">
                        About Us
                    </a>
                </nav>
                <div className="flex items-center gap-4">
                    <a href="#" className="text-sm hover:text-primary transition-colors">
                        Sign in
                    </a>
                   <button>register</button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;

