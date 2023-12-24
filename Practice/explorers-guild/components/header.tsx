'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaSearch, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'
import { TfiClose } from 'react-icons/tfi';
import { AiOutlineMenu } from 'react-icons/ai'
import Contact from './contact';
import Booking from './book';

const Header = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className=" bg-gray-950 text-gray-100">
            <div className="container flex items-center justify-between h-16 mx-auto w-full">
                <Link href='/'>
                    <Image src='/logo3.png' alt='logo' width={32} height={32} className='mx-4 sm:mx-8 md:mx-12 lg:mx-16' />
                </Link>
                <div className="flex items-center">
                    {/* Mobile Menu Button */}
                    <div className='w-full mx-4 '>
                        <button
                            className="md:hidden rounded-md p-2 focus:outline-none duration-300 ease-in"
                            onClick={toggleMenu}
                        >
                            <AiOutlineMenu size={20} />
                        </button>
                    </div>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex space-x-8 mx-16">
                        <a href="/" className="text-white hover:text-gray-300">
                            Home
                        </a>
                        <a href="/Tours" className="text-white hover:text-gray-300">
                            Tours
                        </a>
                        <a href="/armada" className="text-white hover:text-gray-300">
                            Armada
                        </a>

                        <a className="text-white hover:text-gray-300">
                            <Contact />
                        </a>
                    </nav>

                    {/* Mobile Menu */}
                    <div
                        className={`md:hidden fixed top-0 left-0 h-screen w-full bg-white ${isMenuOpen ? "block" : "hidden"
                            }`}
                    >
                        <div className='flex w-full justify-end items-end'>
                            <button
                                className="p-2 ml-4 text-gray-500 rounded-md focus:outline-none focus:bg-gray-700 hover:bg-gray-700"
                                onClick={toggleMenu}
                            >
                                <TfiClose />
                            </button>
                        </div>
                        <nav className="flex flex-col space-y-4 py-8 px-4">
                            <a href="/" className="text-gray-500 hover:text-gray-700">
                                Home
                            </a>
                            <a href="/Tours" className="text-gray-500 hover:text-gray-700">
                                Tours
                            </a>
                            <a href="/armada" className="text-gray-500 hover:text-gray-700">
                                Armada
                            </a>

                            <a href="#" className="text-gray-500 hover:text-gray-700">
                                <Contact />
                            </a>
                            <div className="flex gap-4 py-1 text-sm font-extralight sm:text-md md:text-lg lg:text-xl xl:text-xl">
                                <Link href={'/'} className='text-gray-700 md:text-white hover:text-gray-500' ><FaFacebookF /></Link>
                                <Link href={'/'} className='text-gray-700 md:text-white hover:text-gray-500' ><FaInstagram /></Link>
                                <Link href={'/'} className='text-gray-700 md:text-white hover:text-gray-500' ><FaYoutube /></Link>
                            </div>

                        </nav>
                        {/* Insert logo or other content here */}
                    </div></div>

                <div className="flex transition ease-in-out duration-300  justify-end w-full mx-4 sm:mx-6 md:mx-12 lg:mx-16 items-center">
                    <a href="#" className="transition ease-in-out duration-300 text-gray-300 hover:text-gray-500">
                        <Booking />
                    </a>
                    <button
                        className="p-2 ml-4 text-gray-100 rounded-md focus:outline-none focus:bg-gray-700 hover:bg-gray-700"
                        onClick={toggleSearch}
                    >
                        <FaSearch />
                    </button>
                </div>


                {isSearchOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50 w-full">
                        <div className="w-full max-w-md p-6 bg-blue-200/[0.7] rounded-sm shadow-md">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-semibold text-gray-800">Search</h2>
                                <button
                                    className="text-gray-600 hover:text-gray-100 transition ease-in-out delay-800 focus:outline-none"
                                    onClick={toggleSearch}
                                >
                                    <TfiClose />
                                </button>
                            </div>
                            <form className="flex flex-col space-y-4">
                                <input
                                    className="px-4 py-2 border text-gray-500 border-gray-300 rounded-sm focus:outline-none focus:ring focus:ring-blue-300"
                                    type="text"
                                    placeholder="Search..."
                                />
                                <button
                                    className="px-4 py-2 bg-blue-900 text-white rounded-sm hover:bg-blue-950 focus:outline-none focus:bg-blue-800"
                                    type="submit"
                                >
                                    Search
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header
