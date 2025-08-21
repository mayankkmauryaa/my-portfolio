
import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { Toggle } from '@/components/ui/toggle';

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Check if user has a theme preference in localStorage
        const storedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        } else {
            setIsDark(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleTheme = () => {
        if (isDark) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDark(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDark(true);
        }
    };

    return (
        <div className="fixed bottom-4 md:bottom-8 right-4 md:right-8 z-50">
            <Toggle
                pressed={isDark}
                onPressedChange={toggleTheme}
                className="bg-white/30 w-12 h-12 rounded-full backdrop-blur-md shadow-lg hover:shadow-purple-400/20 transition-all duration-300
                "
                aria-label="Toggle theme"
            >
                {isDark ? (
                    <Sun className="w-5 h-5 text-yellow-400 animate-pulse" />
                ) : (
                    <Moon className="w-5 h-5 text-blue-400 animate-pulse" />
                )}
            </Toggle>
        </div>
    );
};

export default ThemeToggle;
