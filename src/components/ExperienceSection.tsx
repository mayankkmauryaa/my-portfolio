import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const ExperienceSection = () => {
    return (
        <section id="experience" className="py-20 bg-white text-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-8 text-center">
                    <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">My Experience</span>
                </h2>
                <div className="max-w-6xl mx-auto space-y-12">

                    {/* ─────────────── DevsLane Ongoing Training ─────────────── */}
                    <Card className="reveal dark:bg-gray-800/70 dark:border-gray-700">
                        <CardContent className="p-6 md:p-8">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                                <div>
                                    <div className="flex items-center gap-3 mb-1">
                                        <img src="https://devslane.com/favicon.png" alt="DevsLane" className="h-8 w-auto" />
                                        {/* <img src="https://devslane.com/devslane.svg" alt="DevsLane" className="h-8 w-auto" /> */}
                                        {/* devslane.svg to logo.svg */}

                                        <h3 className="text-2xl font-semibold text-black dark:text-white">Full Stack Software Engineering Training</h3>
                                    </div>
                                    <p className="text-lg text-purple-400">Escecion Technologies Pvt. Ltd. (DevsLane) · Remote</p>
                                </div>
                                <span className="text-sm bg-yellow-500 px-3 py-1 rounded-full mt-2 md:mt-0 text-white">Ongoing · Since June 2025</span>
                            </div>

                            <p className="text-gray-400 dark:text-gray-300 mb-6">
                                Actively participating in an ongoing Full Stack Software Engineering Training conducted remotely by Escecion Technologies Pvt. Ltd. (DevsLane). The program focuses on hands-on project-based learning using the MERN stack and professional development practices.
                            </p>

                            <ul className="list-disc list-inside text-blue-300 dark:text-blue-200 ml-4 space-y-1">
                                <li>Started in June 2025; currently ongoing with progressive modules and mentorship</li>
                                <li>Working on real-world tasks involving MongoDB, Express.js, React.js, and Node.js</li>
                                <li>Focusing on backend logic, REST APIs, authentication, and deployment</li>
                                <li>Demonstrating strong commitment to learning and consistent skill growth</li>
                            </ul>

                            <div className="flex gap-4 mt-6">
                                <a
                                    href="https://drive.google.com/file/d/1Ub2H6weFPgPkMP3wBAhosc2wNFBJ6bxF/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-md bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-4 py-2 rounded-md"
                                >
                                    View Ongoing Certificate
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </a>
                            </div>

                        </CardContent>
                    </Card>
                    {/* ─────────────── Internship ─────────────── */}

                    <Card className="reveal dark:bg-gray-800/70 dark:border-gray-700">
                        <CardContent className="p-6 md:p-8">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                                <div>
                                    <div className="flex items-center gap-3 mb-1">
                                        <img src="https://futureinterns.com/wp-content/uploads/2025/05/cropped-cropped-Future-Interns-Site-Logo.png" alt="Future Interns" className="h-8 w-auto" />

                                        <h3 className="text-2xl font-semibold text-black dark:text-white">Full Stack Intern</h3>
                                    </div>
                                    <p className="text-lg text-purple-400 ">Future Interns · Remote</p>
                                </div>
                                <span className="text-sm bg-green-600 px-3 py-1 rounded-full mt-2 md:mt-0 text-white">Completed · June 2025</span>
                            </div>

                            <p className="text-gray-400 dark:text-gray-300 mb-6">
                                Completed a 1-month intensive internship focused on real-world development projects in full-stack web development. Delivered three major tasks from scratch, incorporating frontend, backend, and deployment skills.
                            </p>

                            <div className="space-y-6">
                                {/* Tasks */}
                                <div>
                                    <h4 className="text-x font-semibold text-blue-400">🔹 Task 1: Personal Portfolio Website</h4>
                                    {/* <ul className="list-disc list-inside text-gray-300 ml-4 mt-2">
                                        <li>Built using HTML, CSS, and JavaScript (React.js)</li>
                                        <li>Backend with Node.js, database integration using MySQL/MongoDB</li>
                                        <li>Interactive resume, email-enabled contact form, and SEO optimization</li>
                                    </ul> */}
                                </div>

                                <div>
                                    <h4 className="text-x font-semibold text-blue-400">🔹 Task 2: Weather Dashboard</h4>
                                    {/* <ul className="list-disc list-inside text-gray-300 ml-4 mt-2">
                                        <li>React-based UI that fetches real-time data from OpenWeather API</li>
                                        <li>Shows temperature, humidity, and forecast for searched cities</li>
                                        <li>Implemented "save favorite cities" feature</li>
                                    </ul> */}
                                </div>

                                <div>
                                    <h4 className="text-x font-semibold text-blue-400">🔹 Task 3: AI-Powered Brand Website Redesign</h4>
                                    {/* <ul className="list-disc list-inside text-gray-300 ml-4 mt-2">
                                        <li>Rebranded Amazon.com using Next.js and Tailwind CSS</li>
                                        <li>Integrated Strapi CMS for scalable content management</li>
                                        <li>Used Adobe Firefly and Durable for AI-generated UI elements</li>
                                    </ul> */}
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4 mt-8">
                                <a
                                    href="https://drive.google.com/file/d/1e3E7mLzGtBUw4A1W6I6kgRMcBBimf8rj/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-md bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-2 rounded-md"
                                >
                                    View LOR
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </a>

                                <a
                                    href="https://drive.google.com/file/d/1wF5rnvGSe9P-WK3Y0QlLSENTtY3qk4mR/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-md border bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-4 py-2 rounded-md"
                                >
                                    View Certificate
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </a>
                            </div>
                        </CardContent>
                    </Card>

                    {/* ─────────────── Coursera Meta Specialization ─────────────── */}
                    {/* <Card className="reveal dark:bg-gray-800/70 dark:border-gray-700">
                        <CardContent className="p-6 md:p-8">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                                <div>
                                    <h3 className="text-2xl font-semibold text-white">Meta Front-End Developer Specialization</h3>
                                    <p className="text-lg text-purple-400">Coursera · Remote</p>
                                </div>
                                <span className="text-sm bg-green-600 px-3 py-1 rounded-full mt-2 md:mt-0 text-white">Completed · July 2025</span>
                            </div>

                            <p className="text-gray-300 mb-6">
                                A comprehensive 9-course professional certification by Meta, designed to prepare learners for entry-level front-end developer roles. This program emphasized hands-on learning and industry-standard tools.
                            </p>

                            <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                                <li>Completed all 9 courses, including HTML, CSS, JavaScript, React (Basic to Advanced)</li>
                                <li>Built a front-end capstone project showcasing responsive design and interactivity</li>
                                <li>Covered Git-based version control and real-world coding interview prep</li>
                                <li>Strong focus on UX/UI principles, accessibility, and web standards</li>
                            </ul>

                            <div className="flex gap-4 mt-6">
                                <a
                                    href="https://coursera.org/verify/professional-cert/7VWKM6F16EJD"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-md bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-2 rounded-md"
                                >
                                    View Coursera Certificate
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </a>
                                <a
                                    href="https://www.credly.com/go/HY6sHgDM"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-md border bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-4 py-2 rounded-md"
                                >
                                    View Meta Badge
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </a>
                            </div>

                        </CardContent>
                    </Card>

                    <Card className="reveal dark:bg-gray-800/70 dark:border-gray-700">
                        <CardContent className="p-6 md:p-8">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                                <div>
                                    <h3 className="text-2xl font-semibold text-white">Meta Front-End Developer Specialization</h3>
                                    <p className="text-lg text-purple-400">Meta via Coursera · Remote</p>
                                </div>
                                <span className="text-sm bg-green-600 px-3 py-1 rounded-full mt-2 md:mt-0 text-white">Completed · July 2025</span>
                            </div>

                            <p className="text-gray-300 mb-6">
                                Earned Meta’s industry-recognized front-end specialization certificate on Coursera. This 10-course program equips learners with hands-on experience in front-end technologies, design principles, and job readiness.
                            </p>

                            <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                                <li>HTML, CSS, JavaScript, and Git (Version Control)</li>
                                <li>React.js (Basics & Advanced), UX/UI Design</li>
                                <li>Completed Capstone Project and Interview Prep Modules</li>
                            </ul>

                            <div className="mt-6">
                                <p className="text-lg font-semibold text-blue-400 mb-2">🔹 Course Credentials:</p>
                                <ul className="text-gray-300 text-sm space-y-1 ml-4 list-disc">
                                    <li>
                                        <strong>Introduction to Front-End Development</strong> – ID: LAY704S41B8I
                                    </li>
                                    <li>
                                        <strong>Programming with JavaScript</strong> – ID: J4VQ05NBYRCS
                                    </li>
                                    <li>
                                        <strong>Version Control</strong> – ID: RSNLFP46RPZL
                                    </li>
                                    <li>
                                        <strong>HTML and CSS in Depth</strong> – ID: GJSNRF6NFQGS
                                    </li>
                                    <li>
                                        <strong>React Basics</strong> – ID: 3VDZ0AOMA2HB
                                    </li>
                                    <li>
                                        <strong>Advanced React</strong> – ID: CZS8XG2W1SKZ
                                    </li>
                                    <li>
                                        <strong>Principles of UX/UI Design</strong> – ID: ESUF7B0L0A7M
                                    </li>
                                    <li>
                                        <strong>Front-End Developer Capstone</strong> – ID: P6IYIYX4XPSM
                                    </li>
                                    <li>
                                        <strong>Coding Interview Preparation</strong> – ID: G3Y1L991512G
                                    </li>
                                    <li>
                                        <strong>Meta Front-End Developer Specialization</strong> – ID: 7VWKM6F16EJD
                                    </li>
                                </ul>
                            </div>

                            <div className="flex flex-wrap gap-4 mt-6">
                                <a
                                    href="https://coursera.org/verify/professional-cert/7VWKM6F16EJD"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-md bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-2 rounded-md"
                                >
                                    View Coursera Certificate
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </a>
                                <a
                                    href="https://www.credly.com/go/HY6sHgDM"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-md border bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-4 py-2 rounded-md"
                                >
                                    View Meta Badge
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </a>
                            </div>
                        </CardContent>
                    </Card> */}

                    <Card className="reveal dark:bg-gray-800/70 dark:border-gray-700">
                        <CardContent className="p-6 md:p-8">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                                <div>
                                    <div className="flex items-center gap-3 mb-1">
                                        <img src="https://media.licdn.com/dms/image/v2/C4E0BAQFdNatYGiBelg/company-logo_200_200/company-logo_200_200/0/1636138754252/facebook_logo?e=1756944000&v=beta&t=6QKCDmOSidq2ZFLvp9h0yv45HLBBdh5yJoDfBlT0CCg" alt="Meta" className="h-8 w-auto" />

                                        <h3 className="text-2xl font-semibold text-black dark:text-white">Meta Front-End Developer Specialization</h3>
                                    </div>
                                    <p className="text-lg text-purple-400">Meta • Coursera · Remote</p>
                                </div>
                                <span className="text-sm bg-green-600 px-3 py-1 rounded-full mt-2 md:mt-0 text-white">Completed · July 2025</span>
                            </div>

                            <p className="text-gray-400 dark:text-gray-300 mb-6">
                                A complete 10-course specialization from Meta covering core front-end technologies including React, JavaScript, HTML/CSS, UX/UI, Git, and real-world project work. Includes a verified certificate and badge.
                            </p>

                            <ul className="list-disc list-inside text-gray-400 ml-4 space-y-2 text-sm">
                                {[
                                    {
                                        title: 'Meta Front-End Developer Specialization',
                                        credentialId: '7VWKM6F16EJD',
                                        url: 'https://www.coursera.org/account/accomplishments/specialization/7VWKM6F16EJD',
                                    },
                                    {
                                        title: 'Introduction to Front-End Development',
                                        credentialId: 'LAY704S41B8I',
                                        url: 'https://www.coursera.org/account/accomplishments/verify/LAY704S41B8I',
                                    },
                                    {
                                        title: 'Programming with JavaScript',
                                        credentialId: 'J4VQ05NBYRCS',
                                        url: 'https://www.coursera.org/account/accomplishments/verify/J4VQ05NBYRCS',
                                    },
                                    {
                                        title: 'Version Control',
                                        credentialId: 'RSNLFP46RPZL',
                                        url: 'https://www.coursera.org/account/accomplishments/verify/RSNLFP46RPZL',
                                    },
                                    {
                                        title: 'HTML and CSS in Depth',
                                        credentialId: 'GJSNRF6NFQGS',
                                        url: 'https://www.coursera.org/account/accomplishments/verify/GJSNRF6NFQGS',
                                    },
                                    {
                                        title: 'React Basics',
                                        credentialId: '3VDZ0AOMA2HB',
                                        url: 'https://www.coursera.org/account/accomplishments/verify/3VDZ0AOMA2HB',
                                    },
                                    {
                                        title: 'Advanced React',
                                        credentialId: 'CZS8XG2W1SKZ',
                                        url: 'https://www.coursera.org/account/accomplishments/verify/CZS8XG2W1SKZ',
                                    },
                                    {
                                        title: 'Principles of UX/UI Design',
                                        credentialId: 'ESUF7B0L0A7M',
                                        url: 'https://www.coursera.org/account/accomplishments/verify/ESUF7B0L0A7M',
                                    },
                                    {
                                        title: 'Front-End Developer Capstone',
                                        credentialId: 'P6IYIYX4XPSM',
                                        url: 'https://www.coursera.org/account/accomplishments/verify/P6IYIYX4XPSM',
                                    },
                                    {
                                        title: 'Coding Interview Preparation',
                                        credentialId: 'G3Y1L991512G',
                                        url: 'https://www.coursera.org/account/accomplishments/verify/G3Y1L991512G',
                                    },
                                ].map(({ title, credentialId, url }, index) => (
                                    <li key={index}>
                                        <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                                            {title}
                                        </a>{' '}
                                        — Credential ID: <span className="text-green-500 dark:text-white">{credentialId}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* <ul className="text-gray-300 text-sm space-y-4 ml-1">
                                {[
                                    {
                                        title: 'Meta Front-End Developer Specialization',
                                        credentialId: '7VWKM6F16EJD',
                                        url: 'https://www.coursera.org/account/accomplishments/specialization/7VWKM6F16EJD',
                                    },
                                    {
                                        title: 'Introduction to Front-End Development',
                                        credentialId: 'LAY704S41B8I',
                                        url: 'https://www.coursera.org/account/accomplishments/verify/LAY704S41B8I',
                                    },
                                    {
                                        title: 'Programming with JavaScript',
                                        credentialId: 'J4VQ05NBYRCS',
                                        url: 'https://www.coursera.org/account/accomplishments/verify/J4VQ05NBYRCS',
                                    },
                                    {
                                        title: 'Version Control',
                                        credentialId: 'RSNLFP46RPZL',
                                        url: 'https://www.coursera.org/account/accomplishments/verify/RSNLFP46RPZL',
                                    },
                                    {
                                        title: 'HTML and CSS in Depth',
                                        credentialId: 'GJSNRF6NFQGS',
                                        url: 'https://www.coursera.org/account/accomplishments/verify/GJSNRF6NFQGS',
                                    },
                                    {
                                        title: 'React Basics',
                                        credentialId: '3VDZ0AOMA2HB',
                                        url: 'https://www.coursera.org/account/accomplishments/verify/3VDZ0AOMA2HB',
                                    },
                                    {
                                        title: 'Advanced React',
                                        credentialId: 'CZS8XG2W1SKZ',
                                        url: 'https://www.coursera.org/account/accomplishments/verify/CZS8XG2W1SKZ',
                                    },
                                    {
                                        title: 'Principles of UX/UI Design',
                                        credentialId: 'ESUF7B0L0A7M',
                                        url: 'https://www.coursera.org/account/accomplishments/verify/ESUF7B0L0A7M',
                                    },
                                    {
                                        title: 'Front-End Developer Capstone',
                                        credentialId: 'P6IYIYX4XPSM',
                                        url: 'https://www.coursera.org/account/accomplishments/verify/P6IYIYX4XPSM',
                                    },
                                    {
                                        title: 'Coding Interview Preparation',
                                        credentialId: 'G3Y1L991512G',
                                        url: 'https://www.coursera.org/account/accomplishments/verify/G3Y1L991512G',
                                    },
                                ].map(({ title, credentialId, url }, index) => (
                                    <li key={index} className="border-b border-gray-700 pb-3">
                                        <a
                                            href={url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-400 hover:underline text-base font-medium"
                                        >
                                            {title}
                                        </a>
                                        <div className="mt-1 text-xs text-gray-400 font-mono">
                                            Credential ID: <span className="text-white">{credentialId}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul> */}


                            <div className="flex gap-4 mt-6">
                                <a
                                    href="https://www.credly.com/badges/de3f15da-9cb5-4435-9590-4ec30ca10c55/linked_in_profile"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-md bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-4 py-2 rounded-md"
                                >
                                    View Meta Badge
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </a>
                            </div>
                        </CardContent>
                    </Card>



                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
