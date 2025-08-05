import { Award, Code2, Users, Briefcase, Rocket } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AchievementsSection = () => {
    const achievements = [
        {
            title: "Programming Competitions",
            description: "Recognized in national-level programming contests, including internal university hackathons and external challenges.",
            icon: <Award className="w-6 h-6 text-yellow-600" />,
        },
        {
            title: "Open Source & Community Contribution",
            description: "Contributed to open-source repositories and supported peers in student developer clubs and coding events.",
            icon: <Code2 className="w-6 h-6 text-blue-600" />,
        },
        {
            title: "Virtual Experience Certifications",
            description: "Completed simulations by top firms like Deloitte, JPMorgan, AWS, and Tata Group through Forage.",
            icon: <Briefcase className="w-6 h-6 text-green-600" />,
        },
        {
            title: "Hackathons & Internships",
            description: "Engaged in virtual internships and hackathon sprints focused on real-world problem solving.",
            icon: <Rocket className="w-6 h-6 text-purple-600" />,
        },
        {
            title: "Leadership & Collaboration",
            description: "Actively collaborated in team projects during internships and academic coursework.",
            icon: <Users className="w-6 h-6 text-pink-600" />,
        }
    ];

    return (
        <section id="achievements" className="section-padding bg-white py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Achievements</h2>

                <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {achievements.map((item, index) => (
                        <Card
                            key={index}
                            className="hover:shadow-lg border border-gray-200 transition-all duration-300 transform hover:-translate-y-1"
                            style={{ transitionDelay: `${index * 80}ms` }}
                        >
                            <CardContent className="p-6">
                                <div className="flex items-center mb-4">
                                    {item.icon}
                                    <h3 className="text-xl font-semibold text-gray-800 ml-3">{item.title}</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">{item.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AchievementsSection;
