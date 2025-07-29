import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const ExperienceSection = () => {
    return (
        <section id="experience" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-8 text-center">
                    <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">My Experience</span>
                </h2>
                <div className="max-w-3xl mx-auto">
                    <Card className="reveal mb-8 dark:bg-gray-800/70 dark:border-gray-700">
                        <CardContent className="p-6 md:p-8">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                                <div>
                                    <h3 className="text-2xl font-semibold text-white">Full Stack Intern</h3>
                                    <p className="text-lg text-purple-400">Future Interns · Remote</p>
                                </div>
                                <span className="text-sm bg-gray-600 px-3 py-1 rounded-full mt-2 md:mt-0 text-white">June 2025 – June 2025</span>
                            </div>

                            <p className="text-gray-300 mb-6">
                                Completed a 1-month intensive internship focused on real-world development projects in full-stack web development. Delivered three major tasks from scratch, incorporating frontend, backend, and deployment skills.
                            </p>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-xl font-semibold text-blue-400">🔹 Task 1: Personal Portfolio Website</h4>
                                    <ul className="list-disc list-inside text-gray-300 ml-4 mt-2">
                                        <li>Built using HTML, CSS, and JavaScript (React.js)</li>
                                        <li>Backend with Node.js, database integration using MySQL/MongoDB</li>
                                        <li>Interactive resume, email-enabled contact form, and SEO optimization</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-xl font-semibold text-blue-400">🔹 Task 2: Weather Dashboard</h4>
                                    <ul className="list-disc list-inside text-gray-300 ml-4 mt-2">
                                        <li>React-based UI that fetches real-time data from OpenWeather API</li>
                                        <li>Shows temperature, humidity, and forecast for searched cities</li>
                                        <li>Implemented "save favorite cities" feature</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-xl font-semibold text-blue-400">🔹 Task 3: AI-Powered Brand Website Redesign</h4>
                                    <ul className="list-disc list-inside text-gray-300 ml-4 mt-2">
                                        <li>Rebranded Amazon.com using Next.js and Tailwind CSS</li>
                                        <li>Integrated Strapi CMS for scalable content management</li>
                                        <li>Used Adobe Firefly and Durable for AI-generated UI elements</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4 mt-8">
                                <Button size="lg" className="text-md bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                                    <a
                                        href="https://drive.google.com/file/d/1e3E7mLzGtBUw4A1W6I6kgRMcBBimf8rj/view?usp=sharing"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View LOR
                                    </a>
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>

                                <Button size="lg" variant="outline" className="text-md border-gray-600 text-gray-200 hover:bg-gray-700 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-600 hover:to-purple-600">
                                    <a
                                        href="https://drive.google.com/file/d/1wF5rnvGSe9P-WK3Y0QlLSENTtY3qk4mR/view?usp=sharing"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View Certificate
                                    </a>
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>

                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
