import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, MapPin, Phone, ArrowUp, Linkedin, Github, Instagram, MessageSquareText, LocateIcon } from 'lucide-react';

const ContactSection = () => {
    const { toast } = useToast();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [showScrollButton, setShowScrollButton] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { name, email, message } = formData;

        if (!name || !email || !message) {
            toast({
                title: "Please fill all fields",
                description: "All form fields are required before submission.",
                variant: "destructive",
            });
            return;
        }

        toast({
            title: "Message sent!",
            description: "Thanks for reaching out. I'll get back to you soon.",
        });

        setFormData({ name: '', email: '', message: '' });
    };

    useEffect(() => {
        const handleScroll = () => setShowScrollButton(window.scrollY > 300);
        window.addEventListener('scroll', handleScroll);
        document.documentElement.style.scrollBehavior = 'smooth';
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const socials = [
        { href: "https://www.linkedin.com/in/mayankmaurya05", icon: Linkedin },
        { href: "https://github.com/mayankkmauryaa", icon: Github },
        { href: "https://leetcode.com/u/mayankkmauryaa/", icon: MessageSquareText },
        { href: "https://www.instagram.com/mayankkmauryaa/", icon: Instagram },
        { href: "https://wa.me/918439480764?text=Hi%20Mayank%2C%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20connect!", icon: Phone },
    ];

    return (
        <div>
            <section id="contact" className="section-padding dark:bg-gray-900/95 bg-blue-50 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="section-title dark:text-white text-3xl font-bold text-center mb-12">Get In Touch</h2>
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

                        {/* LEFT - CONTACT INFO */}
                        <div className="reveal">
                            <h3 className="text-2xl font-bold mb-4 dark:text-white">Contact Info</h3>
                            <div className="space-y-5">

                                {/* Location */}
                                <div className="flex items-center gap-4 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                                    <MapPin className="text-blue-600 dark:text-blue-400 w-6 h-6" />
                                    <div>
                                        <h4 className="font-semibold dark:text-white">Location</h4>
                                        <p className="text-gray-600 dark:text-gray-400">Gajraula, Amroha, U.P, India</p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-center gap-4 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                                    <Phone className="text-blue-600 dark:text-blue-400 w-6 h-6" />
                                    <div>
                                        <h4 className="font-semibold dark:text-white">Phone</h4>
                                        <p className="text-gray-600 dark:text-gray-400">+91 8439480764</p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-center gap-4 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                                    <Mail className="text-blue-600 dark:text-blue-400 w-6 h-6" />
                                    <div>
                                        <h4 className="font-semibold dark:text-white">Email</h4>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            <a href="mailto:hpmayankmaurya@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-300">
                                                hpmayankmaurya@gmail.com
                                            </a>
                                        </p>
                                    </div>
                                </div>

                            </div>

                            {/* Socials */}
                            <div className="mt-8">
                                <h3 className="text-xl font-bold mb-4 dark:text-white">Connect With Me</h3>
                                <div className="flex gap-4">
                                    {socials.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 transition"
                                        >
                                            <social.icon className="w-5 h-5" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* RIGHT - CONTACT FORM */}
                        <div className="reveal" style={{ transitionDelay: "100ms" }}>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                                    <Input
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your Name"
                                        className="dark:bg-gray-800/50 dark:border-gray-700 dark:text-gray-100"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Your Email"
                                        className="dark:bg-gray-800/50 dark:border-gray-700 dark:text-gray-100"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Your Message"
                                        rows={6}
                                        className="dark:bg-gray-800/50 dark:border-gray-700 dark:text-gray-100"
                                        required
                                    />
                                </div>

                                <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                                    Send Message
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {showScrollButton && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-4 md:bottom-8 left-4 md:left-8 z-50 bg-white text-blue-600 hover:bg-blue-100 shadow-lg p-3 rounded-full transition-colors border border-blue-200"
                    aria-label="Scroll to top"
                >
                    <ArrowUp className="w-5 h-5" />
                </button>
            )}
        </div>
    );
};

export default ContactSection;
