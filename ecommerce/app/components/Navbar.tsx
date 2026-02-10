"use client";

import Link from 'next/link';
import { MapPin, ChevronDown, Search, User, ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';

function Navbar() {
    const isLoggedIn = true;
    // const isLoggedIn = false;
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className='bg-yellow-300 w-full px-2 py-2 relative shadow-md'>

                <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
                    {/* Logo */}
                    <div className="flex justify-center items-center gap-2 font-bold">
                        <div className="bg-black p-2 text-white rounded">
                            FOA
                        </div>
                        <p className='hidden sm:block'>FOA-Food</p>
                    </div>

                    {/* Location */}
                    <div className="flex flex-col leading-tight hidden sm:flex">
                        <div className="text-sm font-semibold">
                            Delivery in 8 minutes
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-700 font-medium">
                            <MapPin size={14} />
                            <span>Location</span>
                            <ChevronDown size={14} />
                        </div>
                    </div>

                    {/* Search div */}
                    <div className='flex-1 mx-2 min-w-0'>
                        <div className='bg-gray-100 rounded-lg px-3 h-10 flex items-center w-full' >
                            <input type="text" placeholder='Search anythings you are craving' className='bg-transparent flex-1 text-sm  w-full min-w-0 outline-none' />
                            <Search />
                        </div>
                    </div>


                    {/* Login /account */}

                    <div className='px-4 py-2 font-medium hidden sm:block'>
                        {isLoggedIn ? (
                            <Link href='/account' className="flex items-center gap-1 text-sm text-gray-700 "> <User size={14} />Account <ChevronDown size={14} /> </Link>
                        ) : (
                            <Link href="/login">Login</Link>
                        )}
                    </div>

                    {/* Cart */}

                    <div className='bg-green-500 px-3 py-2 rounded-lg text-white flex gap-2 justify-center items-center'>
                        <ShoppingCart size={18} className="hidden sm:inline" />cart
                    </div>

                    {/* Hamburger (Mobile Only) */}
                    <button
                        className="sm:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Modile Dropdrown */}

                    {isOpen && (
                        <div className='sm:hidden absolute right-2 left-2 top-16 bg-white shadow-lg rounded-lg w-64 p-4 flex flex-col gap-4 z-10 '>

                            {/* location */}
                            <div className="flex flex-col leading-tight ">
                                <div className="text-sm font-semibold">
                                    Delivery in 8 minutes
                                </div>
                                <div className="flex items-center gap-1 text-sm text-gray-700 font-medium">
                                    <MapPin size={14} />
                                    <span>Location</span>
                                    <ChevronDown size={14} />
                                </div>
                            </div>

                            <div className='bg-black w-full h-[1px]'></div>
                            {/* Account */}
                            {isLoggedIn ? (
                                <Link href='/account' className="flex items-center gap-2 text-sm  "> <User size={14} />Account <ChevronDown size={14} /> </Link>
                            ) : (
                                <Link href="/login">Login</Link>
                            )}
                        </div>

                    )}

                </div>

            </div>


        </>
    );
}

export default Navbar