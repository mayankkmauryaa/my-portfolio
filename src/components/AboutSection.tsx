import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
// import { Progress } from '@/components/ui/progress';
import GitHubCalendar from 'react-github-calendar';


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
                {/* <div className="photo-container left">
                        {[1, 2, 3].map((i) => (
                            <img
                                key={i}
                                src={`/images/about-photos/photo${i}.jpg`}
                                alt={`Random ${i}`}
                                className={`float-img float${i}`}
                            />
                        ))}
                        <div className="photo-container right">
                            {[4, 5, 6].map((i) => (
                                <img
                                    key={i}
                                    src={`/images/about-photos/photo${i}.jpg`}
                                    alt={`Random ${i}`}
                                    className={`float-img float${i}`}
                                />
                            ))}
                        </div>
                    </div> */}
                <div className="max-w-3xl mx-auto">
                    <Card className="reveal mb-8 dark:bg-gray-800/70 dark:border-gray-700">
                        <CardContent className="p-6 md:p-8">
                            <p className="text-lg leading-relaxed mb-4 dark:text-gray-200">
                                I'm an aspiring tech consultant and highly motivated Computer Science undergraduate with a passion for solving real-world business problems using innovative technologies.
                            </p>
                            <p className="text-lg leading-relaxed mb-4 dark:text-gray-200">
                                Proficient in software development with a strong foundation in full-stack development and collaborative project execution. Known for excellent communication, critical thinking, adaptability, and a proactive approach.
                            </p>
                            <p className="text-lg leading-relaxed dark:text-gray-200">
                                I have completed my Data Structures and Algorithms journey up through Trees and Binary Search Trees, and I'm constantly expanding my knowledge in the field of computer science and software engineering.
                            </p>
                        </CardContent>
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
                                    dark:text-blue-100 hover:bg-blue-400 py-1.5 justify-center">
                                        {skill}
                                    </Badge>
                                ))}
                            </div>

                            <div className="mt-8 space-y-8">
                                <div>
                                    <h4 className="text-xl font-semibold mb-4 dark:text-white flex items-center gap-2">
                                        {/* <a href="https://leetcode.com/u/mayankkmauryaa/"> */}
                                        <a href="https://leetcode.com/u/mayankkmauryaa/" aria-label="Visit my LeetCode profile" title="LeetCode Profile">


                                            <svg className="w-6 h-6 text-yellow-500" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                                            </svg>
                                        </a>
                                        <a href="https://leetcode.com/u/mayankkmauryaa/" aria-label="Visit my LeetCode profile" title="LeetCode Profile">
                                            LeetCode Progress</a>
                                    </h4>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Submission Heatmap */}
                                        <div className="mt-6">
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

                                        <div className="dark:bg-gray-900/50 bg-gray-100 p-5 rounded-lg border dark:border-gray-700">
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
                                                    <div className="flex gap-3">
                                                        <div className="flex flex-col items-center">
                                                            <Avatar className="w-10 h-10 border-2 border-blue-400">
                                                                <AvatarImage src="https://assets.leetcode.com/static_assets/others/lg25100.png" />
                                                                <AvatarFallback className="bg-green-500/20 text-green-700">LC</AvatarFallback>
                                                            </Avatar>
                                                            <span className="text-xs mt-1 dark:text-gray-400">100 Days Badge 2025</span>
                                                        </div>
                                                        <div className="flex flex-col items-center">
                                                            <Avatar className="w-10 h-10 border-2 border-lime-300">
                                                                <AvatarImage src="https://assets.leetcode.com/static_assets/others/lg2550.png" />
                                                                <AvatarFallback className="bg-purple-500/20 text-purple-700">LC</AvatarFallback>
                                                            </Avatar>
                                                            <span className="text-xs mt-1 dark:text-gray-400">50 Days Badge 2025</span>
                                                        </div>
                                                        <div className="flex flex-col items-center">
                                                            <Avatar className="w-10 h-10 border-2 border-blue-300">
                                                                <AvatarImage src="https://assets.leetcode.com/static_assets/marketing/2024-100-lg.png" />
                                                                <AvatarFallback className="bg-yellow-500/20 text-yellow-700">LC</AvatarFallback>
                                                            </Avatar>
                                                            <span className="text-xs mt-1 dark:text-gray-400">100 Days Badge 2024</span>
                                                        </div>
                                                        <div className="flex flex-col items-center">
                                                            <Avatar className="w-10 h-10 border-2 border-green-500">
                                                                <AvatarImage src="https://assets.leetcode.com/static_assets/marketing/2024-50-lg.png" />
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
                                            <a href="https://github.com/mayankkmauryaa">
                                                <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                                </svg>
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


                                    <a href="https://github.com/mayankkmauryaa">

                                        <div className="dark:bg-gray-900/50 bg-gray-100 p-5 rounded-lg border dark:border-gray-700">
                                            <div className="flex justify-between items-center mb-4">
                                                <span className="font-semibold dark:text-gray-300">Contribution Activity</span>
                                                {/* <img
                                                    src="https://img.shields.io/github/repos/mayankkmauryaa?label=Public%20Repos&style=flat-square&logo=github"
                                                    alt="GitHub Repositories Count"
                                                    className="h-5"
                                                /> */}

                                                <span className="text-sm font-medium text-green-600 dark:text-green-400">
                                                    {repoCount !== null ? `${repoCount} +repositories` : 'Loading...'}
                                                </span>


                                            </div>

                                            {/* GitHub contribution graph representation */}


                                            <div className="flex flex-wrap gap-1 mb-4">

                                                {/* Stats + Languages Side by Side */}
                                                <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
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

        </section>
    );
};

export default AboutSection;
