'use client';

import { useState } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ProjectsSection = () => {
    const projectGroups = [
        {
            title: 'Future Interns Internship Tasks',
            key: 'internship',
            projects: [
                {
                    title: 'Personal Portfolio Website',
                    description:
                        'Built a responsive and animated personal portfolio using React.js. Hosted on Vercel.',
                    tags: ['React.js'],
                },
                {
                    title: 'Weather Dashboard',
                    description:
                        'A real-time weather app built with React and OpenWeatherMap API. Features location-based search and current forecast display.',
                    tags: ['React.js', 'Node.js', 'API Integration'],
                },
                {
                    title: 'AI-Powered Brand Website Redesign',
                    description:
                        'Redesigned a fictional brand website using Next.js and styled-components with AI-generated content, layout, and branding.',
                    tags: ['Next.js', 'styled-components', 'SEO', 'AI Tools'],
                }
            ]
        },
        // {
        //     title: 'My day2day tasks',
        //     key: 'personal',
        //     projects: [
        //         {
        //             title: 'Personal Portfolio Website',
        //             description:
        //                 'Built a responsive and animated personal portfolio using React.js, TypeScript, Tailwind CSS, and Framer Motion. Hosted on Netlify.',
        //             tags: ['React.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        //         },
        //     ],
        // },
        {
            title: 'Full Stack & Real-time Applications',
            key: 'fullstack',
            projects: [
                {
                    title: 'Real-Time Chat App (WhatsApp Clone)',
                    description:
                        'A full-stack real-time chat app using React, Node.js, Express, MongoDB, and Socket.IO. Includes auth, typing indicators, and message history.',
                    tags: ['MERN Stack', 'Socket.IO', 'JWT Auth', 'MongoDB'],
                },
                {
                    title: 'Amazon.com UI Redesign',
                    description:
                        'Revamped Amazon’s homepage using Next.js and styled-components, replicating the layout with SEO, accessibility, and mobile responsiveness.',
                    tags: ['Next.js', 'styled-components', 'Responsive UI'],
                }
            ]
        },
        {
            title: 'AI & Career Tools',
            key: 'ai',
            projects: [
                {
                    title: 'Resume Generator',
                    description:
                        'An AI-based resume builder using React and GPT API to generate tailored resumes from user input.',
                    tags: ['React', 'GPT', 'AI', 'Tailwind'],
                },
                {
                    title: 'JobMatch AI',
                    description:
                        'A tool that analyzes resumes and job descriptions to calculate matching percentage using NLP and cosine similarity.',
                    tags: ['Python', 'NLP', 'Streamlit'],
                }
            ]
        },
        {
            title: 'Python + MySQL Management Systems',
            key: 'management',
            projects: [
                {
                    title: 'Hospital Management System',
                    description:
                        'CLI-based system with patient records, billing, and appointment modules using Python and MySQL.',
                    tags: ['Python', 'MySQL', 'OOP'],
                },
                {
                    title: 'Inventory Management Tool',
                    description:
                        'A simple inventory management CLI for small businesses using Python and persistent MySQL backend.',
                    tags: ['Python', 'MySQL', 'Database'],
                }
            ]
        },
        {
            title: 'Hardware & Robotics',
            key: 'robotics',
            projects: [
                {
                    title: 'Obstacle Avoiding Robot',
                    description:
                        'Built using Arduino and ultrasonic sensors, this robot navigates by avoiding obstacles in real time.',
                    tags: ['Arduino', 'C++', 'Sensors'],
                },
                {
                    title: 'Line Following Robot',
                    description:
                        'Follows a path using IR sensors. Tuned with PID control logic for accuracy and curve handling.',
                    tags: ['Embedded C', 'Robotics', 'PID'],
                }
            ]
        }
    ];

    const [activeGroupKey, setActiveGroupKey] = useState('internship');
    const activeGroup = projectGroups.find((group) => group.key === activeGroupKey);

    return (
        <section id="projects" className="section-padding bg-white dark:bg-gray-900">
            <div className="max-w-8xl mx-auto container mx-auto px-4">
                <h2 className="section-title mb-8 text-3xl font-bold text-gray-800 dark:text-white">Projects</h2>

                {/* Filters */}
                <div className="max-w-6xl mx-auto flex flex-wrap gap-3 mb-6">
                    {projectGroups.map((group) => (
                        <button
                            key={group.key}
                            onClick={() => setActiveGroupKey(group.key)}
                            className={`dark:bg-blue-100 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-semibold border transition ${activeGroupKey === group.key
                                ? 'dark:bg-blue-600 dark:text-white bg-blue-600 text-white border-blue-600'
                                : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
                                }`}
                        >
                            {group.title}
                        </button>
                    ))}
                </div>

                {/* Active Group */}
                {activeGroup && (
                    <div className="mb-12">
                        <h3 className="dark:text-gray-300 max-w-6xl mx-auto text-2xl font-semibold text-gray-700 mb-6 border-b border-gray-300 pb-2">
                            {activeGroup.title}
                        </h3>
                        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {activeGroup.projects.map((project, i) => (
                                <Card
                                    key={i}
                                    className="dark:bg-blue-100 hover:shadow-xl border border-blue-200 transition-transform transform hover:-translate-y-1"
                                    style={{ transitionDelay: `${i * 40}ms` }}
                                >
                                    <CardHeader>
                                        <CardTitle>{project.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-base">{project.description}</CardDescription>
                                    </CardContent>
                                    <CardFooter>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag, j) => (
                                                <Badge
                                                    key={j}
                                                    variant="secondary"
                                                    className="dark:bg-blue-200 bg-blue-100 text-blue-800 hover:bg-blue-300"
                                                >
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProjectsSection;
