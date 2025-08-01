
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
            }`}>
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <a href="https://mayankmaurya.netlify.app/" className="text-xl font-bold">
                        <span className="gradient-text">Mayank Maurya</span>
                    </a>
                    <nav className="hidden md:flex items-center space-x-8">
                        {[
                            { href: '#about', label: 'About' },
                            { href: '#experience', label: 'Experience' },
                            { href: '#skills', label: 'Skills' },
                            { href: '#projects', label: 'Projects' },
                            { href: '#education', label: 'Education' }

                        ].map((item) => (
                            <a
                                href={item.href}
                                className="text-gray-400 hover:text-blue-600 transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}
                        <Button className="w-full" asChild onClick={() => setMobileMenuOpen(false)}>
                            <a href="#contact">Get In Touch</a>
                        </Button>
                    </nav>
                    <button
                        className="md:hidden text-gray-700"
                        onClick={toggleMobileMenu}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-50">
                        <div className="absolute top-6 right-6">
                            <button
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-white hover:text-gray-300 transition"
                            >
                                ✕
                            </button>
                        </div>
                        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl p-6 m-6 mt-20 space-y-4">
                            <nav className="flex flex-col space-y-4 text-center">
                                {[
                                    { href: '#about', label: 'About' },
                                    { href: '#experience', label: 'Experience' },
                                    { href: '#skills', label: 'Skills' },
                                    { href: '#projects', label: 'Projects' },
                                    { href: '#education', label: 'Education' }
                                ].map((item) => (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium text-lg transition-colors"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.label}
                                    </a>
                                ))}
                                <Button className="w-full" asChild onClick={() => setMobileMenuOpen(false)}>
                                    <a href="#contact">Get In Touch</a>
                                </Button>
                            </nav>
                        </div>
                    </div>
                )}

            </div>
        </header>
    );
};

export default Header;
