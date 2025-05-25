
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ProjectsSection = () => {
    const projects = [
        // {
        //     title: "Career Guidance Toolkit",
        //     description: "Web app using React.js, Tailwind CSS, FastAPI, and AI to recommend careers based on user interests.",
        //     tags: ["React.js", "Tailwind CSS", "FastAPI", "AI"]
        // },
        {
            title: "AI-Powered Code Generator",
            description: "Tool built with FastAPI, React.js, OpenAI API, and Electron.js for generating and explaining code.",
            tags: ["FastAPI", "React.js", "OpenAI API", "Electron.js"]
        },
        {
            title: "Hospital Management System",
            description: "Developed using Python and MySQL for patient record and billing management.",
            tags: ["Python", "MySQL"]
        },
        {
            title: "School Management System",
            description: "Built a full student/staff management platform using Python and MySQL.",
            tags: ["Python", "MySQL"]
        },
        {
            title: "Library Management System",
            description: "Created a system to manage inventory and student records in Python with a MySQL backend.",
            tags: ["Python", "MySQL"]
        },
        {
            title: "Line Tracer Robot",
            description: "Designed a robot using IR sensors and Arduino to follow lines autonomously.",
            tags: ["Arduino", "IR Sensors", "Robotics"]
        },
        {
            title: "RC Car",
            description: "Built a remote-controlled car integrating motor drivers, Bluetooth module, and Arduino.",
            tags: ["Arduino", "Bluetooth", "Motor Drivers"]
        },
        {
            title: "3D Printer",
            description: "Assembled and calibrated a custom 3D printer using open-source firmware and mechanical components.",
            tags: ["3D Printing", "Firmware", "Hardware"]
        },
        {
            title: "Quadcopter Drone",
            description: "Built and configured a working drone using ESCs, motors, flight controller, and RC transmitter.",
            tags: ["Drone", "ESCs", "Motors", "RC"]
        }
    ];

    return (
        <section id="projects" className="section-padding bg-white">
            <div className="container mx-auto px-4">
                <h2 className="section-title">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <Card key={index} className="reveal hover:shadow-lg transition-shadow" style={{ transitionDelay: `${index * 50}ms` }}>
                            <CardHeader className="pb-4">
                                <CardTitle>{project.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-base">{project.description}</CardDescription>
                            </CardContent>
                            <CardFooter>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIndex) => (
                                        <Badge key={tagIndex} variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
