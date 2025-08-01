
import { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import EducationSection from '@/components/EducationSection';
import ExperienceSection from '@/components/ExperienceSection'
import AchievementsSection from '@/components/AchievementsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';
import { setupScrollReveal } from '@/utils/scrollReveal';

const Index = () => {
    useEffect(() => {
        // Apply scroll reveal effect
        const cleanup = setupScrollReveal();

        // Add scroll behavior
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;

                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.getBoundingClientRect().top + window.scrollY - 100,
                        behavior: 'smooth'
                    });
                }
            });
        });

        return () => {
            cleanup();
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.removeEventListener('click', function () { });
            });
        };
    }, []);

    return (
        <div className="min-h-screen bg-white dark:bg-gray-00 transition-colors duration-300">
            <Header />
            <ThemeToggle />
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <SkillsSection />
            <ProjectsSection />
            <EducationSection />
            <AchievementsSection />
            <ContactSection />
            <Footer />
        </div>
    );
};

export default Index;
