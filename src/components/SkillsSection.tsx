
import { Card, CardContent } from '@/components/ui/card';

const SkillsSection = () => {
    const skillCategories = [
        {
            title: "Languages",
            skills: ["Python", "Java", "JavaScript", "C"],
            icon: "💻"
        },
        {
            title: "Web Development",
            skills: [
                "React.js", 
                "HTML", "CSS",
                "Tailwind CSS", "Node.js"
            ],
            icon: "🌐"
        },
        {
            title: "Backend & Tools(just known)",
            skills: ["FastAPI", "Firebase",
                // "Redis", 
                "PostMan",
                "Git", "Docker", "AWS S3"],
            icon: "🔧"
        },
        {
            title: "Databases",
            skills: ["MySQL", "MongoDB"],
            icon: "🗄️"
        },
        {
            title: "Core",
            skills: ["Algorithms & Data Structures", "Machine Learning (Basics)", "JAVA OOPS", "CN", "CO", "DBMS", "SQL Queries"],
            icon: "🧠"
        }
    ];

    return (
        <section id="skills" className="section-padding bg-blue-50">
            <div className="container mx-auto px-4">
                <h2 className="section-title">Technical Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, index) => (
                        <Card key={index} className="reveal" style={{ transitionDelay: `${index * 100}ms` }}>
                            <CardContent className="p-6">
                                <div className="text-4xl mb-4">{category.icon}</div>
                                <h3 className="text-xl font-bold mb-3">{category.title}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, skillIndex) => (
                                        <span
                                            key={skillIndex}
                                            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
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
