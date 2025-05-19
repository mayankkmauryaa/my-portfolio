
import { Card, CardContent } from '@/components/ui/card';

const AchievementsSection = () => {
    const achievements = [
        {
            title: "Programming Competitions",
            description: "Participated and recognized in national-level programming competitions."
        },
        {
            title: "Open Source & Community Contribution",
            description: "Contributed to tech communities through open-source and college events."
        }
    ];

    return (
        <section id="achievements" className="section-padding bg-white">
            <div className="container mx-auto px-4">
                <h2 className="section-title">Achievements</h2>
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {achievements.map((achievement, index) => (
                            <Card key={index} className="reveal" style={{ transitionDelay: `${index * 100}ms` }}>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                                    <p className="text-gray-700">{achievement.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AchievementsSection;
