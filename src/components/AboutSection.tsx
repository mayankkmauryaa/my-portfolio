import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import GitHubCalendar from 'react-github-calendar';
import { Github, Code2 } from 'lucide-react';


const AboutSection = () => {
    const [repoCount, setRepoCount] = useState(null);
    const [calendarLoaded, setCalendarLoaded] = useState(false);

    useEffect(() => {
        fetch('https://api.github.com/users/mayankkmauryaa')
            .then((res) => res.json())
            .then((data) => {
                setRepoCount(data.public_repos);
            })
            .catch((err) => console.error('Error fetching GitHub data', err));
    }, []);
    useEffect(() => {
        const timer = setTimeout(() => {
            setCalendarLoaded(true);
        }, 1200); // adjust delay as needed
        return () => clearTimeout(timer);
    }, []);

    return (
        <section id="about" className="section-padding dark:bg-gray-900 bg-white">

            <div className="container mx-auto px-4">
                <h2 className="section-title dark:text-white">About Me</h2>

                <div className="max-w-6xl mx-auto">
                    {/* 3x3     8x1*/}
                    <Card className="reveal mb-8 dark:bg-gray-800/70 dark:border-gray-700">
                        <CardContent className="p-6 md:p-8">
                            <p className="text-lg leading-relaxed mb-4 dark:text-gray-200">
                                I'm an aspiring tech consultant and driven Computer Science undergraduate, passionate about solving real-world business problems through technology and innovation.
                            </p>
                            <p className="text-lg leading-relaxed mb-4 dark:text-gray-200">
                                Skilled in full-stack development with hands-on experience in collaborative, agile-driven projects. I bring strong communication, critical thinking, and a proactive mindset to every team I work with.
                            </p>
                            <p className="text-lg leading-relaxed dark:text-gray-200">
                                I’ve built a solid foundation in Data Structures and Algorithms up to Trees and BSTs, and I continuously push my learning in system design, cloud services, and modern software engineering practices.
                            </p>

                        </CardContent>
                    </Card>
                    <Card className="reveal mb-8 dark:bg-gray-800/70 dark:border-gray-700">
                        {/* Tech Stack Icons */}
                        <div className="flex gap-4 m-8 items-center flex-wrap">
                            <h3 className="text-2xl font-bold dark:text-white">My Preferred Languages : </h3>
                            <div className="flex gap-4">
                            <img src="icons\html.svg" alt="HTML" className="w-8 h-8" />
                            <img src="icons\css.svg" alt="CSS" className="w-8 h-8" />
                            <img src="icons\js.svg" alt="JavaScript" className="w-8 h-8" />
                            <img src="/icons/react.svg" alt="React" className="w-8 h-8" />
                            <img src="icons\node.svg" alt="Node.js" className="w-8 h-8" />
                            <img src="/icons/java.svg" alt="Java" className="w-8 h-8" />
                            <img src="/icons/python.svg" alt="Java" className="w-8 h-8" />
                            <img src="/icons/mysql.svg" alt="Java" className="w-8 h-8" />
                            </div>
                        </div>
                    </Card>
                    <Card className="reveal dark:bg-gray-800/70 dark:border-gray-700" style={{ transitionDelay: "100ms" }}>
                        <CardContent className="p-6 md:p-8">
                            <h3 className="text-2xl font-bold mb-4 dark:text-white">DSA Journey</h3>
                            <p className="text-lg leading-relaxed mb-4 dark:text-gray-200">
                                I've built a strong foundation in Data Structures and Algorithms, completing in-depth learning of:
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                                {[
                                    "Arrays", "Linked Lists", "Stacks", "Queues",
                                    "Hash Tables", "Heaps", "Trees", "Binary Search Trees",
                                    "Graph Algorithms", "Searching", "Sorting", "Dynamic Programming"
                                ].map((skill) => (
                                    <Badge key={skill} className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-white
                                    dark:text-blue-100 hover:bg-blue-400 py-2 justify-center">
                                        {skill}
                                    </Badge>
                                ))}
                            </div>

                            <div className="mt-8 space-y-8">
                                <div>
                                    <h4 className="text-xl font-semibold mb-4 dark:text-white flex items-center gap-2">
                                        <a href="https://leetcode.com/u/mayankkmauryaa/" aria-label="Visit my LeetCode profile" title="LeetCode Profile">
                                            <Code2 className="hover:text-yellow-400 transition-colors w-6 h-6" />
                                        </a>
                                        <a href="https://leetcode.com/u/mayankkmauryaa/" aria-label="Visit my LeetCode profile" title="LeetCode Profile">
                                            LeetCode Progress</a>
                                    </h4>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Submission Heatmap */}
                                        <div className="dark:bg-gray-800/0 pt-5 rounded-lg ">
                                            <h5 className="text-base font-semibold mb-2 dark:text-gray-300">Submission Heatmap</h5>
                                            <a href="https://leetcode.com/u/mayankkmauryaa/">
                                                {/* Stats Card */}
                                                {/* <img
                                                src="https://leetcard.jacoblin.cool/mayankkmauryaa?ext=contest"
                                                alt="LeetCode Stats"
                                                className="rounded-xl border dark:border-gray-800 shadow"
                                            /> */}
                                                <img
                                                    src="https://leetcard.jacoblin.cool/mayankkmauryaa?ext=heatmap&theme=unicorn"
                                                    alt="Submission Heatmap"
                                                    className="rounded-lg border dark:border-gray-800 shadow"
                                                />
                                            </a>
                                        </div>

                                        <div className="dark:bg-gray-800/0 p-5 rounded-lg">
                                            <a href="https://leetcode.com/u/mayankkmauryaa/">

                                                <h5 className="text-base font-semibold mb-3 dark:text-gray-300">Badges & Achievements</h5>
                                                <div className="flex flex-wrap gap-2">
                                                    <Badge variant="outline" className="bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 dark:border-yellow-800">
                                                        75+ Days Streak
                                                    </Badge>
                                                    <Badge variant="outline" className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800">
                                                        Daily Challenge
                                                    </Badge>
                                                    <Badge variant="outline" className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 dark:border-purple-800">
                                                        Contest MAX Rating: 1466
                                                    </Badge>
                                                </div>

                                                <div className="mt-4">
                                                    <div className="flex gap-3 flex-wrap justify-center">
                                                        <div className="flex flex-col items-center">
                                                            <Avatar className="w-10 h-10 border-2 border-purple-400">
                                                                <AvatarImage src="https://assets.leetcode.com/static_assets/others/200.gif" />
                                                                <AvatarFallback className="bg-green-500/20 text-green-700">LC</AvatarFallback>
                                                            </Avatar>
                                                            <span className="text-xs mt-1 dark:text-gray-400">200 Days Badge 2025</span>
                                                        </div>
                                                        <div className="flex flex-col items-center">
                                                            <Avatar className="w-10 h-10 border-2 border-blue-400">
                                                                <AvatarImage src="https://assets.leetcode.com/static_assets/others/25100.gif" />
                                                                <AvatarFallback className="bg-green-500/20 text-green-700">LC</AvatarFallback>
                                                            </Avatar>
                                                            <span className="text-xs mt-1 dark:text-gray-400">100 Days Badge 2025</span>
                                                        </div>
                                                        <div className="flex flex-col items-center">
                                                            <Avatar className="w-10 h-10 border-2 border-lime-300">
                                                                <AvatarImage src="https://assets.leetcode.com/static_assets/others/2550.gif" />
                                                                <AvatarFallback className="bg-purple-500/20 text-purple-700">LC</AvatarFallback>
                                                            </Avatar>
                                                            <span className="text-xs mt-1 dark:text-gray-400">50 Days Badge 2025</span>
                                                        </div>
                                                        <div className="flex flex-col items-center">
                                                            <Avatar className="w-10 h-10 border-2 border-blue-300">
                                                                <AvatarImage src="https://assets.leetcode.com/static_assets/marketing/2024-100-new.gif" />
                                                                <AvatarFallback className="bg-yellow-500/20 text-yellow-700">LC</AvatarFallback>
                                                            </Avatar>
                                                            <span className="text-xs mt-1 dark:text-gray-400">100 Days Badge 2024</span>
                                                        </div>
                                                        <div className="flex flex-col items-center">
                                                            <Avatar className="w-10 h-10 border-2 border-green-500">
                                                                <AvatarImage src="https://assets.leetcode.com/static_assets/marketing/2024-50.gif" />
                                                                <AvatarFallback className="bg-blue-500/20 text-blue-700">LC</AvatarFallback>
                                                            </Avatar>
                                                            <span className="text-xs mt-1 dark:text-gray-400">50 Days Badge 2024</span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between items-center mb-4">
                                        <h4 className="text-xl font-semibold dark:text-white flex items-center gap-2">

                                            <a href="https://github.com/mayankkmauryaa" target="_blank" aria-label="GitHub" rel="noopener noreferrer">
                                                <Github className="hover:text-blue-400 transition-colors w-6 h-6" />
                                            </a>
                                            <a href="https://github.com/mayankkmauryaa">GitHub Activity</a>
                                        </h4>

                                        <div>
                                            <img
                                                src="https://img.shields.io/github/followers/mayankkmauryaa?label=Followers&style=social"
                                                alt="GitHub Followers"
                                            />
                                        </div>
                                    </div>


                                    <a href="https://github.com/mayankkmauryaa" target='_blank'>

                                        <div className="dark:bg-gray-900/50 bg-gray-100 p-5 rounded-lg border dark:border-gray-700">
                                            <div className="flex justify-between items-center mb-4">
                                                <span className="font-semibold dark:text-gray-300">Contribution Activity</span>
                                                <span className="text-sm font-medium text-green-600 dark:text-green-400">
                                                    {repoCount !== null ? `${repoCount}+ repositories` : 'Loading...'}
                                                </span>


                                            </div>

                                            {/* GitHub contribution graph representation */}


                                            <div className="gap-1 mb-4">

                                                {/* Stats + Languages Side by Side */}
                                                <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-6">
                                                    <img
                                                        src="https://github-readme-stats.vercel.app/api/top-langs/?username=mayankkmauryaa&layout=compact&theme=transparent"
                                                        alt="Top Languages"
                                                        className="w-full md:w-1/2 max-w-md"
                                                    />
                                                    <img
                                                        src="https://github-readme-stats.vercel.app/api?username=mayankkmauryaa&show_icons=true&count_private=true&include_all_commits=true&theme=transparent"
                                                        alt="GitHub Stats"
                                                        className="w-full md:w-1/2 max-w-xl"
                                                    />

                                                </div>

                                                {/* <GitHubCalendar username="mayankkmauryaa" /> */}
                                                {/* GitHub Contribution Calendar */}
                                                <div className="overflow-x-auto p-2 border dark:border-gray-700 rounded-lg bg-gray-100 dark:bg-gray-900/50 text-gray-800 dark:text-gray-200">

                                                    {!calendarLoaded && (
                                                        <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                                                            Loading GitHub Calendar...
                                                        </div>
                                                    )}

                                                    <div style={{ display: calendarLoaded ? 'block' : 'none' }}>
                                                        <GitHubCalendar
                                                            username="mayankkmauryaa"
                                                            blockSize={12}
                                                            blockMargin={4}
                                                            colorScheme="light"
                                                            fontSize={14}
                                                        // onLoad={setCalendarLoaded(true)}
                                                        />
                                                    </div>
                                                </div>

                                            </div>

                                            <div className="flex justify-between text-xs dark:text-gray-400">
                                            </div>

                                            <div className="mt-4">
                                                <div className="flex flex-wrap gap-2">
                                                    <Badge variant="outline" className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 dark:border-purple-800">
                                                        Regular Commits
                                                    </Badge>
                                                    <Badge variant="outline" className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400 dark:border-indigo-800">
                                                        Open Source Contributor
                                                    </Badge>
                                                    <Badge variant="outline" className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800">
                                                        100+ Contributions
                                                    </Badge>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

        </section >
    );
};

export default AboutSection;
