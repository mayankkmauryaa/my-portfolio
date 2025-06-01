
import { useState } from 'react';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, MapPin, Phone, ArrowUp } from 'lucide-react';

const ContactSection = () => {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    // current state false
    const [showScrollButton, setShowScrollButton] = useState(false);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);

        // Show success toast
        toast({
            title: "Message sent!",
            description: "Thanks for reaching out. I'll get back to you soon.",
        });

        // Reset form
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };
    // scroll button when 300px scrolled
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollButton(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        document.documentElement.style.scrollBehavior = 'smooth';

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div>
            <section id="contact" className="section-padding dark:bg-gray-900/95 bg-blue-50">
                <div className="container mx-auto px-4">
                    <h2 className="section-title dark:text-white">Get In Touch</h2>
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="reveal">
                            <h3 className="text-2xl font-bold mb-4 dark:text-white">Contact Info</h3>
                            <div className="space-y-4">
                                <div className="flex items-center hover:bg-blue-100/10 p-2 rounded-md transition-colors group">
                                    <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-3 mr-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/30 transition-colors">
                                        <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold dark:text-white">Location</h4>
                                        <p className="text-gray-600 dark:text-gray-400">Gajruala, Amroha, U.P, INDIA</p>
                                    </div>
                                </div>

                                <div className="flex items-center hover:bg-blue-100/10 p-2 rounded-md transition-colors group">
                                    <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-3 mr-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/30 transition-colors">
                                        <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold dark:text-white">Phone</h4>
                                        <p className="text-gray-600 dark:text-gray-400">+91 8439480764</p>
                                    </div>
                                </div>

                                <div className="flex items-center hover:bg-blue-100/10 p-2 rounded-md transition-colors group">
                                    <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-3 mr-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/30 transition-colors">
                                        <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold dark:text-white">Email</h4>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            <a href="mailto:hpmayankmaurya@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400">
                                                hpmayankmaurya@gmail.com
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <h3 className="text-xl font-bold mb-4 dark:text-white">Connect With Me</h3>
                                <div className="flex space-x-4">
                                    <a href="https://www.linkedin.com/in/mayankmaurya05" target="_blank" rel="noopener noreferrer" className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800/30 transition-colors">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </a>
                                    <a href="https://github.com/mayankkmauryaa" target="_blank" rel="noopener noreferrer" className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800/30 transition-colors">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                    <a href="https://leetcode.com/u/mayankkmauryaa/" target="_blank" rel="noopener noreferrer" className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800/30 transition-colors">
                                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                            <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                                        </svg>
                                    </a>
                                    <a href="https://www.instagram.com/mayankkmauryaa/" target="_blank" rel="noopener noreferrer" className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800/30 transition-colors">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                    <a href="https://wa.me/8439480764?text=Hi%20Mayank%2C%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20connect!" target="_blank" rel="noopener noreferrer" className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800/30 transition-colors">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                                            <path d="M16.001 3.2c-7.063 0-12.8 5.738-12.8 12.8 0 2.266.601 4.478 1.738 6.412l-1.838 5.354 5.54-1.812a12.741 12.741 0 0 0 7.36 2.239c7.063 0 12.8-5.738 12.8-12.8s-5.737-12.8-12.8-12.8zm0 23.2c-2.174 0-4.311-.626-6.15-1.805l-.442-.277-3.287 1.078 1.086-3.184-.287-.492c-1.051-1.79-1.607-3.834-1.607-5.82 0-6.283 5.117-11.4 11.4-11.4s11.4 5.117 11.4 11.4-5.117 11.4-11.4 11.4zm6.282-8.292c-.343-.172-2.041-1.01-2.358-1.126-.317-.116-.549-.172-.78.173s-.897 1.126-1.1 1.36c-.202.235-.404.26-.747.087-.343-.174-1.45-.535-2.763-1.709-1.021-.911-1.709-2.032-1.911-2.376-.199-.343-.021-.528.15-.699.154-.154.343-.4.515-.6.173-.2.23-.343.345-.573.116-.23.057-.435-.029-.608-.087-.173-.78-1.888-1.07-2.588-.281-.675-.566-.58-.78-.591l-.663-.012c-.23 0-.6.086-.913.43-.313.343-1.195 1.168-1.195 2.846 0 1.678 1.224 3.293 1.393 3.522.172.23 2.393 3.652 5.799 5.122.811.35 1.443.559 1.937.716.814.26 1.554.223 2.14.135.653-.097 2.041-.833 2.33-1.637.287-.804.287-1.492.199-1.637-.087-.145-.313-.23-.655-.404z" />

                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

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

                                <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">Send Message</Button>
                            </form>
                        </div>
                    </div>
                </div>
                {/* <a href="#hero" className="fixed bottom-8 left-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition" aria-label="Back to top">⬆️</a> */}
                {/* <a
                href="#hero"
                className="fixed bottom-8 left-8 bg-gray-600 text-white p-3 rounded-full shadow-md hover:bg-gray-700 transition"
                aria-label="Back to top"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
            </a> */}
            </section>
            {showScrollButton && (
                <button
                    onClick={scrollToTop}
                    
                    className="fixed bottom-4 md:bottom-8 left-4 md:left-8 z-50 bg-white text-blue-600 hover:bg-blue-100 shadow-lg p-3 rounded-full transition-colors border border-blue-200"
                    aria-label="Scroll to top"
                ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                    {/* <ArrowUp className="w-5 h-5" /> */}
                </button>
            )}
        </div>
    );
};

export default ContactSection;
