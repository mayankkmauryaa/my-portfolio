import { Code, Globe, Server, Database, Brain } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const SkillsSection = () => {
    const skillCategories = [
        {
            title: 'Languages',
            skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'C', 'SQL'],
            icon: <Code className="w-6 h-6 text-blue-600" />,
        },
        {
            title: 'Web Development',
            skills: ['React.js', 'HTML', 'CSS', 'Tailwind CSS', 'Node.js'],
            icon: <Globe className="w-6 h-6 text-purple-600" />,
        },
        {
            title: 'Backend & Tools',
            skills: ['FastAPI', 'Firebase', 'PostMan', 'Git', 'Docker', 'AWS S3'],
            icon: <Server className="w-6 h-6 text-green-600" />,
        },
        {
            title: 'Databases',
            skills: ['MySQL', 'MongoDB'],
            icon: <Database className="w-6 h-6 text-yellow-600" />,
        },
        {
            title: 'Core',
            skills: [
                'Algorithms & Data Structures',
                'Machine Learning (Basics)',
                'JAVA OOPS',
                'CN',
                'CO',
                'DBMS',
                'SQL Queries',
            ],
            icon: <Brain className="w-6 h-6 text-pink-600" />,
        },
    ];

    return (
        <section id="skills" className="section-padding bg-blue-50 py-16  dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Technical Skills</h2>

                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <Card
                            key={index}
                            className="reveal dark:bg-gray-700  hover:shadow-lg border border-gray-600 transition-all duration-300 transform hover:-translate-y-1"
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <CardContent className="p-6">
                                <div className="flex items-center mb-4">
                                    {category.icon}
                                    <h3 className="text-xl font-semibold text-gray-800 ml-3 dark:text-white">{category.title}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, skillIndex) => (
                                        <span
                                            key={skillIndex}
                                            className="dark:bg-blue-300 dark:text-500 bg-blue-100 dark:hover:bg-blue-400 text-blue-800 px-3 py-1 rounded-full text-sm font-medium transition hover:bg-blue-200"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
