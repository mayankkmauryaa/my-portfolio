
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
                    <a href="#hero" className="text-xl font-bold">
                        <span className="gradient-text">Mayank Maurya</span>
                    </a>
                    <nav className="hidden md:flex items-center space-x-8">
                        <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
                        <a href="#skills" className="text-gray-600 hover:text-blue-600 transition-colors">Skills</a>
                        <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors">Projects</a>
                        <a href="#education" className="text-gray-600 hover:text-blue-600 transition-colors">Education</a>
                        <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
                    </nav>
                    <div className="hidden md:block">
                        <Button asChild>
                            <a href="#contact">Get In Touch</a>
                        </Button>
                    </div>
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
                    <div className="md:hidden mt-4 bg-black rounded-lg shadow-lg p-4 absolute left-4 right-4">
                        <nav className="flex flex-col space-y-3">
                            <a
                                href="#about"
                                className="text-gray-600 hover:text-blue-600 transition-colors py-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                About
                            </a>
                            <a
                                href="#skills"
                                className="text-gray-600 hover:text-blue-600 transition-colors py-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Skills
                            </a>
                            <a
                                href="#projects"
                                className="text-gray-600 hover:text-blue-600 transition-colors py-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Projects
                            </a>
                            <a
                                href="#education"
                                className="text-gray-600 hover:text-blue-600 transition-colors py-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Education
                            </a>
                            <a
                                href="#contact"
                                className="text-gray-600 hover:text-blue-600 transition-colors py-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Contact
                            </a>
                            <Button className="w-full" asChild onClick={() => setMobileMenuOpen(false)}>
                                <a href="#contact">Get In Touch</a>
                            </Button>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
