'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function Navbar() {
    const [navbar, setNavbar] = useState(false);
    return (

        <nav className="w-full dark:bg-gray-800 fixed top-0 left-0 right-0 z-10">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        {/* LOGO */}
                        <Link href="/">
                            <div className="flex items-center mb-4 sm:mb-0">
                                <img src="https://aarabhya.com/assets/images/icon.png" className="h-8 mr-3" alt="Nalkato Logo" />
                                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Nalkato</span>
                            </div>
                        </Link>
                        {/* HAMBURGER BUTTON FOR MOBILE */}
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border focus:border-gray-400"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <Image src="/close.svg" width={30} height={30} alt="logo" />
                                ) : (
                                    <Image
                                        src="/hamburger-menu.svg"
                                        width={30}
                                        height={30}
                                        alt="logo"
                                        className="focus:border-none active:border-none"
                                    />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden'
                            }`}
                    >
                        <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                            <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                                <Link href="/" onClick={() => setNavbar(!navbar)}>
                                    Home
                                </Link>
                            </li>
                            <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                                <Link href="#blog" onClick={() => setNavbar(!navbar)}>
                                    About
                                </Link>
                            </li>
                            <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                                <Link href="/Services" onClick={() => setNavbar(!navbar)}>
                                    Services
                                </Link>
                            </li>
                            <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                                <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;