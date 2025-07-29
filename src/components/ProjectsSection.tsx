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
            projects: [
                {
                    title: 'Personal Portfolio Website',
                    description:
                        'Interactive portfolio with resume, projects and contact form. React.js frontend, Node.js backend, SEO‑friendly and deployed on Vercel.',
                    tags: ['React.js', 'Node.js', 'MySQL/MongoDB', 'SEO'],
                },
                {
                    title: 'Weather Dashboard',
                    description:
                        'React dashboard that consumes OpenWeather API to display real‑time temperature, humidity and multi‑day forecast with “save favourite city” support.',
                    tags: ['React.js', 'OpenWeather API', 'Node.js', 'UX'],
                },
                {
                    title: 'Amazon.com AI Re‑brand',
                    description:
                        'Full UI/UX redesign of Amazon using Next.js + Tailwind CSS. Content is served from Strapi CMS; AI tools (Durable, Adobe Firefly) generate brand assets.',
                    tags: ['Next.js', 'Tailwind CSS', 'Strapi', 'AI'],
                },
            ],
        },
        {
            title: 'Full Stack & Real-time Applications',
            projects: [
                {
                    title: 'Real‑Time Chat App',
                    description:
                        'WhatsApp‑style chat built with React, Socket.IO and MongoDB. Supports private rooms, JWT auth, typing indicators and message history.',
                    tags: ['React.js', 'Socket.IO', 'MongoDB', 'JWT'],
                },
                {
                    title: 'FlashCard Learning App',
                    description:
                        'Full‑stack flashcard platform with spaced‑repetition scheduling. React.js frontend, Express/Node backend, MongoDB storage.',
                    tags: ['React.js', 'Node.js', 'MongoDB', 'EdTech'],
                },
            ],
        },
        {
            title: 'AI & Career Tools',
            projects: [
                {
                    title: 'Career Guidance Toolkit',
                    description:
                        'AI‑assisted web app recommending career paths based on user interests. Built with React.js, Tailwind CSS and FastAPI backend.',
                    tags: ['React.js', 'Tailwind CSS', 'FastAPI', 'AI'],
                },
                {
                    title: 'AI‑Powered Code Generator',
                    description:
                        'Desktop tool (Electron) that calls the OpenAI API to generate, explain and refactor code snippets. FastAPI powers the API layer.',
                    tags: ['Electron.js', 'FastAPI', 'OpenAI API', 'React.js'],
                },
            ],
        },
        {
            title: 'Python + MySQL Management Systems',
            projects: [
                {
                    title: 'Hospital Management System',
                    description:
                        'Patient‑record and billing platform developed with Python and MySQL, featuring role‑based access and printable invoices.',
                    tags: ['Python', 'MySQL', 'CRUD', 'Healthcare'],
                },
                {
                    title: 'School Management System',
                    description:
                        'End‑to‑end student & staff administration suite in Python with a MySQL backend and Tkinter UI.',
                    tags: ['Python', 'MySQL', 'Tkinter', 'ERP'],
                },
                {
                    title: 'Library Management System',
                    description:
                        'Inventory + member tracking system written in Python with a MySQL database, including late‑fee automation.',
                    tags: ['Python', 'MySQL', 'Inventory', 'Automation'],
                },
            ],
        },
        {
            title: 'Hardware & Robotics',
            projects: [
                {
                    title: 'Line Tracer Robot',
                    description:
                        'Autonomous robot using IR sensors and Arduino to follow tracks with PID‑based speed control.',
                    tags: ['Arduino', 'IR Sensors', 'Robotics'],
                },
                {
                    title: 'RC Car',
                    description:
                        'Remote‑controlled car integrating motor drivers, Bluetooth module and custom Arduino firmware.',
                    tags: ['Arduino', 'Bluetooth', 'Motor Drivers'],
                },
                {
                    title: '3D Printer (DIY)',
                    description:
                        'Assembled and calibrated a custom FDM 3D printer with open‑source Marlin firmware and self‑designed frame.',
                    tags: ['3D Printing', 'Firmware', 'Hardware'],
                },
                {
                    title: 'Quadcopter Drone',
                    description:
                        'Configured a quadcopter with brushless motors, ESCs and an open‑source flight controller; tuned PID for stable flight.',
                    tags: ['Drone', 'ESCs', 'Flight Controller', 'PID'],
                },
            ],
        },
    ];

    return (
        <section id="projects" className="section-padding bg-white">
            <div className="container mx-auto px-4">
                <h2 className="section-title mb-8 text-3xl font-bold text-gray-800">Projects</h2>

                {projectGroups.map((group, groupIndex) => (
                    <div key={groupIndex} className="mb-12">
                        <h3 className="text-2xl font-semibold text-gray-700 mb-6 border-b border-gray-300 pb-2">
                            {group.title}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {group.projects.map((project, projectIndex) => (
                                <Card
                                    key={projectIndex}
                                    className="reveal hover:shadow-lg transition-shadow"
                                    style={{ transitionDelay: `${projectIndex * 50}ms` }}
                                >
                                    <CardHeader className="pb-4">
                                        <CardTitle>{project.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-base">
                                            {project.description}
                                        </CardDescription>
                                    </CardContent>
                                    <CardFooter>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag, tagIndex) => (
                                                <Badge
                                                    key={tagIndex}
                                                    variant="secondary"
                                                    className="bg-blue-100 text-blue-800 hover:bg-blue-200"
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
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;
