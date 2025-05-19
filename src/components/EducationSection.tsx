import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const EducationSection = () => {
    const educationData = [
        {
            degree: "B.Tech in C.S & Engineering",
            institution: "GLA University, Mathura",
            period: "Expected July 2027",
            url: "https://www.gla.ac.in/"
        },
        {
            degree: "Senior Secondary (PCM + CS)",
            institution: "St. Mary's Convent School, Gajraula",
            period: "12th Grade: 70% | 10th Grade: 86%",
            url: "https://www.stmarysgajraula.org/"
        }
    ];

    const certifications = [
        {
            title: "Goldman Sachs – Software Engineering Job Simulation",
            date: "Feb 2025",
            issuer: "Goldman Sachs",
            url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/MBA4MnZTNFEoJZGnk/NPdeQ43o8P9HJmJzg_MBA4MnZTNFEoJZGnk_3p85ZZGCqAbKh2cMP_1739215728377_completion_certificate.pdf"
        },
        {
            title: "AWS APAC – Solutions Architecture Simulation",
            date: "Feb 2025",
            issuer: "AWS",
            url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_3p85ZZGCqAbKh2cMP_1740070224303_completion_certificate.pdf"
        },
        {
            title: "Deloitte Australia – Data Analytics Job Simulation",
            date: "Mar 2025",
            issuer: "Deloitte",
            url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_3p85ZZGCqAbKh2cMP_1743186596450_completion_certificate.pdf"
        },
        {
            title: "Tata Group – ESG Job Simulation",
            date: "Apr 2025",
            issuer: "Tata Group",
            url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/N8Muuhk6XsXgMTeu2_ifobHAoMjQs9s6bKS_3p85ZZGCqAbKh2cMP_1743878722241_completion_certificate.pdf"
        },
        {
            title: "JPMorgan Chase - Investment Banking Job Simulation",
            date: "Apr 2025",
            issuer: "JPMorgan Chase",
            url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ZtgA28qyexifyEdHE/YD2kY95RQxQtXxFTS_ZtgA28qyexifyEdHE_3p85ZZGCqAbKh2cMP_1744039941924_completion_certificate.pdf"
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
                                <Card className="reveal" style={{ transitionDelay: `${index * 100}ms` }}>
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
                                <Card className="reveal" style={{ transitionDelay: `${(index + 2) * 100}ms` }}>
                                    <CardContent className="p-6">
                                        <h4 className="font-bold mb-1">{certification.title}</h4>
                                        <p className="text-sm text-gray-600">
                                            {certification.issuer} • {certification.date}
                                        </p>
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
