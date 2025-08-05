'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowDown, Github, Linkedin, Instagram, Phone, MessageSquareText } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    return (
        <section
            id="hero"
            className="min-h-screen flex items-center py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden"
        >
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                    {/* Left Text Content */}
                    <div className="md:w-1/2 mb-12 md:mb-0 z-10">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                            Hi, I'm{' '}
                            <span className="bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent">
                                Mayank Maurya
                            </span>
                        </h1>
                        {/* Typing Role Animation */}
                        <TypeAnimation
                            sequence={[
                                '| Full Stack Developer ', 2000,
                                '| Software Developer ', 2000,
                                '| Tech Consultant ', 2000,
                                '| Problem Solver ', 2000,
                                '| Open Source Contributor ', 2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            className="text-xl md:text-2xl text-purple-400 mb-4 block"
                            repeat={Infinity}
                        />

                        <p className="text-lg md:text-xl text-gray-300 mb-8">
                            Computer Science undergraduate passionate about solving real-world problems using technology.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-6">
                            <Button
                                size="lg"
                                className="text-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                            >
                                <a href="#projects" className="flex items-center">
                                    View My Work
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </a>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="text-lg border-gray-600 text-gray-200 hover:bg-gray-700 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-600 hover:to-purple-600"
                            >
                                <a
                                    href="https://drive.google.com/file/d/1Wjrz5OZZeqFe_ifLKxypKMc54AYJ4b4E/view?usp=sharing"
                                    // href="https://docs.google.com/document/d/1TQl5GC9lpyaPtpLqgvZ62iEg0hfzj26T/edit?usp=sharing&ouid=102006936980537279310&rtpof=true&sd=true"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Download Resume
                                </a>
                            </Button>
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-4 mt-2 text-gray-400">
                            <a href="https://www.linkedin.com/in/mayankmaurya05" target="_blank" aria-label="LinkedIn" rel="noopener noreferrer">
                                <Linkedin className="hover:text-blue-400 transition-colors w-6 h-6" />
                            </a>
                            <a href="https://github.com/mayankkmauryaa" target="_blank" aria-label="GitHub" rel="noopener noreferrer">
                                <Github className="hover:text-blue-400 transition-colors w-6 h-6" />
                            </a>
                            <a href="https://leetcode.com/u/mayankkmauryaa/" target="_blank" aria-label="LeetCode" rel="noopener noreferrer">
                                {/* <MessageSquareText className="hover:text-yellow-400 transition-colors w-6 h-6" /> */}
                                <svg className="hover:text-yellow-400 transition-colors w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/mayankkmauryaa/" target="_blank" aria-label="Instagram" rel="noopener noreferrer">
                                <Instagram className="hover:text-pink-400 transition-colors w-6 h-6" />
                            </a>
                            <a href="https://wa.me/918439480764?text=Hi%20Mayank%2C%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20connect!" target="_blank" aria-label="WhatsApp" rel="noopener noreferrer">
                                <Phone className="hover:text-green-400 transition-colors w-6 h-6" />
                            </a>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="md:w-1/2 md:absolute md:right-0 md:top-0 md:h-full flex items-center justify-center">
                        <div className="relative">

                            <div className="w-[320px] h-[320px] md:w-[400px] md:h-[400px] relative">
                                <div
                                    className="absolute inset-0 overflow-hidden"
                                    style={{
                                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                                        boxShadow: '0 10px 25px rgba(53, 186, 0, 0.5)',
                                        background: 'linear-gradient(45deg, #1a1a1a, #2a2a2a)',
                                    }}
                                >
                                    <img
                                        src="https://ik.imagekit.io/mayankmaurya/maya%20indiagate.JPG?updatedAt=1748136188497"
                                        alt="Mayank Maurya"
                                        className="object-cover w-full h-full object-center"
                                        style={{ objectPosition: 'right 30%' }}
                                    />
                                </div>
                                <div
                                    className="absolute -inset-2 opacity-30"
                                    style={{
                                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                                        background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
                                        filter: 'blur(8px)',
                                        zIndex: -1,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white">
                <ArrowDown className="w-6 h-6" />
            </div>
        </section>
    );
};

export default HeroSection;
