import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const EducationSection = () => {
    const educationData = [
        {
            degree: "Senior Secondary (PCM + CS)",
            institution: "St. Mary's Convent School, Gajraula",
            period: "12th Grade (2023): 70% | 10th Grade (2021): 86%",
            url: "https://www.stmarysgajraula.org/"
        },
        {
            degree: "B.Tech in C.S & Engineering",
            institution: "GLA University, Mathura",
            period: "Expected July 2027",
            url: "https://www.gla.ac.in/"
        }
    ];

    const certifications = [
        {
            title: "Goldman Sachs – Software Engineering Job Simulation",
            date: "Feb 2025",
            issuer: "Goldman Sachs",
            credentialId: "kFwcgzqGYpT6m9QeK",
            url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/MBA4MnZTNFEoJZGnk/NPdeQ43o8P9HJmJzg_MBA4MnZTNFEoJZGnk_3p85ZZGCqAbKh2cMP_1739215728377_completion_certificate.pdf",
            skills: ["Cryptography basics", "Password best-practice", "Password cracking"]
        },
        {
            title: "AWS APAC – Solutions Architecture Simulation",
            date: "Feb 2025",
            issuer: "AWS",
            credentialId: "GWZMxhLZygLRmuqzQ",
            url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_3p85ZZGCqAbKh2cMP_1740070224303_completion_certificate.pdf",
            skills: ["Architectural Drawings", "Amazon Web Services (AWS)", "Technical Support"]
        },
        {
            title: "Deloitte Australia – Data Analytics Job Simulation",
            date: "Mar 2025",
            issuer: "Deloitte",
            credentialId: "xq9dmwyadwywp7fJd",
            url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_3p85ZZGCqAbKh2cMP_1743186596450_completion_certificate.pdf",
            skills: ["Data Analysis", "Data Modeling", "Spreadsheets", "Tableau"]
        },
        {
            title: "Tata Group – ESG Job Simulation",
            date: "Apr 2025",
            issuer: "Tata Group",
            credentialId: "LEKgjxrengsarQw4g",
            url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/N8Muuhk6XsXgMTeu2_ifobHAoMjQs9s6bKS_3p85ZZGCqAbKh2cMP_1743878722241_completion_certificate.pdf",
            skills: ["Research Skills", "Critical Thinking", "Business Development", "Sustainability", "Written Communication"]
        },
        {
            title: "JPMorgan Chase – Investment Banking Job Simulation",
            date: "Apr 2025",
            issuer: "JPMorgan Chase",
            credentialId: "dJ7K6i4YsxLZZ7WtQ",
            url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ZtgA28qyexifyEdHE/YD2kY95RQxQtXxFTS_ZtgA28qyexifyEdHE_3p85ZZGCqAbKh2cMP_1744039941924_completion_certificate.pdf",
            skills: ["Client Communication", "Company Analysis", "M&A Screening", "Modelling", "Strategic Rationale"]
        },
        {
            title: "JPMorgan Chase & Co. – Quantitative Research Job Simulation",
            date: "May 2025",
            issuer: "JPMorgan Chase & Co.",
            credentialId: "N4Z8Se2kzsKgxpfbz",
            url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Sj7temL583QAYpHXD/bWqaecPDbYAwSDqJy_Sj7temL583QAYpHXD_3p85ZZGCqAbKh2cMP_1748516765112_completion_certificate.pdf",
            skills: ["Credit", "Data Analysis", "Derivatives", "Dynamic Programming", "Python", "Statistics"]
        },
        {
            title: "Deloitte Australia – Cyber Job Simulation",
            date: "Jul 2025",
            issuer: "Deloitte",
            credentialId: "XAdmreingysGgZpWf",
            url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/E9pA6qsdbeyEkp3ti_9PBTqmSxAf6zZTseP_3p85ZZGCqAbKh2cMP_1751795503655_completion_certificate.pdf",
            skills: ["Computer Networking", "Log Interpretation", "Log Inspection", "Web Application Security", "Web Security"]
        },
        {
            title: "Deloitte Australia – Technology Job Simulation",
            date: "Jul 2025",
            issuer: "Deloitte",
            credentialId: "qKpbvakdsYDb4WNQt",
            url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_3p85ZZGCqAbKh2cMP_1751793829961_completion_certificate.pdf",
            skills: ["Data Structures", "Programming", "Python", "Software Development"]
        }
    ];


    return (
        <section id="education" className="section-padding bg-blue-50">
            <div className="container mx-auto px-4">
                <h2 className="section-title">Education & Certifications</h2>

                <div className="max-w-4xl mx-auto mb-12">
                    <h3 className="text-2xl font-bold mb-6 text-center">Education</h3>
                    <div className="space-y-6">
                        {educationData.map((education, index) => (
                            <a
                                key={index}
                                href={education.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                            >
                                <Card className="reveal h-auto flex flex-col justify-between" style={{ transitionDelay: `${index * 100}ms` }}>
                                    <CardHeader>
                                        <CardTitle>{education.degree}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-lg font-medium">{education.institution}</p>
                                        <p className="text-gray-600">{education.period}</p>
                                    </CardContent>
                                </Card>
                            </a>
                        ))}
                    </div>
                </div>

                <div className="max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold mb-6 text-center">Certifications</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {certifications.map((certification, index) => (
                            <a
                                key={index}
                                href={certification.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                            >
                                <Card className="reveal h-auto flex flex-col justify-between" style={{ transitionDelay: `${(index + 2) * 100}ms` }}>
                                    <CardContent className="p-7">
                                        <h4 className="font-bold mb-1">{certification.title}</h4>
                                        <p className="text-sm text-gray-600">
                                            {certification.issuer} • {certification.date}
                                        </p>
                                        <p className="text-sm text-green-500 mt-2">Credential ID: {certification.credentialId}</p>
                                        <p className="text-sm text-blue-300 mt-2">Skills: {certification.skills.join(', ')}</p>
                                        <p className="text-sm text-blue-600 mt-2">View Certificate</p>
                                    </CardContent>
                                </Card>
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default EducationSection;
