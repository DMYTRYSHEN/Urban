import { useState } from "react";
import logo from "./Logo_main.svg"; // Замініть на ваш шлях до логотипа
import LanguageSelector from './LanguageSelector'

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header id="header" className="group">
            <div className="fixed z-20 w-full border-b bg-white/50 dark:bg-gray-950/50 backdrop-blur-2xl">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="flex items-center justify-between h-16 lg:h-[72px]">
                        {/* Hamburger Button */}
                        <button
                            type="button"
                            className="p-2 -m-2 text-gray-900 transition-all duration-200 lg:hidden hover:text-gray-700"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >

                            
                            <svg
                                className="w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>

                        {/* Logo */}
                        <div className="flex items-center flex-shrink-0 ml-4 lg:ml-0">
                            <a
                                href="#"
                                title="Urban Wave"
                                className="inline-flex rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                            >
                                <span className="sr-only">Urban Wave</span>
                                <img className="w-auto h-8" src={logo} alt="Logo" />
                            </a>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex lg:items-center lg:space-x-8">
                            <a
                                href="#"
                                className="text-base font-medium text-gray-900 transition-all duration-200 rounded hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                            >
                                Create Free Account
                            </a>
                            <a
                                href="#"
                                className="text-base font-medium text-gray-900 transition-all duration-200 rounded hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                            >
                                Login
                            </a>
                            <LanguageSelector />
                        </div>
                        <div className="flex items-center justify-end space-x-5">
                            <span className="hidden w-px h-6 bg-gray-200 lg:block" aria-hidden="true"></span>

                            <button type="button" className="p-2 -m-2 text-gray-900 transition-all duration-200 hover:text-gray-700">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>

                            <span className="w-px h-6 bg-gray-200 lg:hidden" aria-hidden="true"></span>

                            <button type="button" className="inline-flex items-center p-2 -m-2 text-gray-900 transition-all duration-200 lg:ml-6 hover:text-gray-700">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                                <span className="inline-flex items-center justify-center w-5 h-5 ml-1 text-xs font-bold text-white bg-gray-600 rounded-full"> 2 </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-16 left-0 z-10 w-full bg-white dark:bg-gray-950 shadow-lg lg:hidden">
                    <div className="px-4 py-6 space-y-4">
                        <a
                            href="#"
                            className="block text-base font-medium text-gray-900 transition-all duration-200 rounded hover:text-gray-700"
                        >
                            Create Free Account
                        </a>
                        <a
                            href="#"
                            className="block text-base font-medium text-gray-900 transition-all duration-200 rounded hover:text-gray-700"
                        >
                            Login
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
