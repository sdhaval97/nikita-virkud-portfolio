import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: 'Resources', path: '/resources' },
    { name: 'Contact', path: '/contact' },
];

export default function Layout() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    return (
        <div className="min-h-screen bg-brand-black text-brand-white flex flex-col">
            <header className="sticky top-0 z-50 bg-brand-black/80 backdrop-blur-md border-b border-brand-gray">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0">
                            <Link to="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-purple to-purple-400">
                                Nikita Virkud
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`${location.pathname === link.path
                                            ? 'text-brand-purple'
                                            : 'text-gray-300 hover:text-brand-white transition-colors'
                                        } font-medium`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-gray-300 hover:text-white focus:outline-none"
                            >
                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden bg-brand-black border-b border-brand-gray">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === link.path
                                            ? 'bg-brand-gray text-brand-purple'
                                            : 'text-gray-300 hover:bg-brand-gray hover:text-white'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </header>

            <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
                <Outlet />
            </main>

            <footer className="border-t border-brand-gray py-8 mt-auto">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} Nikita Virkud. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
