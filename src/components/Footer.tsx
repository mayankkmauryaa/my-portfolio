import { Linkedin, Github, Instagram, MessageSquareText, Phone, Code2 } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socials = [
        {
            href: "https://wa.me/918439480764?text=Hi%20Mayank%2C%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20connect!",
            label: "WhatsApp",
            icon: Phone,
            className: "hover:text-green-500",
        },
        {
            href: "https://www.linkedin.com/in/mayankmaurya05",
            label: "LinkedIn",
            icon: Linkedin,
        },
        {
            href: "https://github.com/mayankkmauryaa",
            label: "GitHub",
            icon: Github,
        },
        {
            href: "https://leetcode.com/u/mayankkmauryaa/",
            label: "LeetCode",
            icon: Code2,
        },
        {
            href: "https://www.instagram.com/mayankkmauryaa/",
            label: "Instagram",
            icon: Instagram,
        },
    ];

    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0 text-center md:text-left">
                        <h2 className="text-2xl font-bold">Mayank Maurya</h2>
                        <p className="text-gray-400">Computer Science Undergraduate</p>
                    </div>

                    <div className="flex space-x-6">
                        {socials.map(({ href, icon: Icon, label, className = '' }, index) => (
                            <a
                                key={index}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className={`text-gray-400 hover:text-white transition-colors ${className}`}
                            >
                                <Icon className="w-6 h-6" />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                    <p className="text-gray-400"> © {currentYear} Mayank Maurya. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
