import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Award } from 'lucide-react';
import { useState } from 'react';

const EducationSection = () => {
    const educationData = [
        {
            degree: 'Senior Secondary (PCM + CS)',
            institution: "St. Mary's Convent School, Gajraula",
            period: '12th Grade (2023): 70% | 10th Grade (2021): 86%',
            url: 'https://www.stmarysgajraula.org/',
        },
        {
            degree: 'B.Tech in C.S & Engineering',
            institution: 'GLA University, Mathura',
            period: 'Expected July 2027',
            url: 'https://www.gla.ac.in/',
        },
    ];

    const certifications = [
        {
            title: 'Meta',
            key: 'meta',
            certificate: [
                {
                    title: 'Meta Front-End Developer Specialization',
                    date: 'Jul 2025',
                    issuer: 'Meta',
                    credentialId: '7VWKM6F16EJD',
                    url: 'https://www.coursera.org/account/accomplishments/specialization/7VWKM6F16EJD',
                    skills: [],
                },
                {
                    title: 'Introduction to Front-End Development',
                    date: 'Jul 2025',
                    issuer: 'Meta',
                    credentialId: 'LAY704S41B8I',
                    url: 'https://www.coursera.org/account/accomplishments/verify/LAY704S41B8I',
                    skills: ['HTML', 'CSS', 'Microsoft Visual Studio Code'],
                },
                {
                    title: 'Programming with JavaScript',
                    date: 'Jul 2025',
                    issuer: 'Meta',
                    credentialId: 'J4VQ05NBYRCS',
                    url: 'https://www.coursera.org/account/accomplishments/verify/J4VQ05NBYRCS',
                    skills: ['JavaScript'],
                },
                {
                    title: 'Version Control',
                    date: 'Jul 2025',
                    issuer: 'Meta',
                    credentialId: 'RSNLFP46RPZL',
                    url: 'https://www.coursera.org/account/accomplishments/verify/RSNLFP46RPZL',
                    skills: [],
                },
                {
                    title: 'HTML and CSS in Depth',
                    date: 'Jul 2025',
                    issuer: 'Meta',
                    credentialId: 'GJSNRF6NFQGS',
                    url: 'https://www.coursera.org/account/accomplishments/verify/GJSNRF6NFQGS',
                    skills: ['HTML', 'CSS'],
                },
                {
                    title: 'React Basics',
                    date: 'Jul 2025',
                    issuer: 'Meta',
                    credentialId: '3VDZ0AOMA2HB',
                    url: 'https://www.coursera.org/account/accomplishments/verify/3VDZ0AOMA2HB',
                    skills: ['React.js'],
                },
                {
                    title: 'Advanced React',
                    date: 'Jul 2025',
                    issuer: 'Meta',
                    credentialId: 'CZS8XG2W1SKZ',
                    url: 'https://www.coursera.org/account/accomplishments/verify/CZS8XG2W1SKZ',
                    skills: ['React.js'],
                },
                {
                    title: 'Principles of UX/UI Design',
                    date: 'Jul 2025',
                    issuer: 'Meta',
                    credentialId: 'ESUF7B0L0A7M',
                    url: 'https://www.coursera.org/account/accomplishments/verify/ESUF7B0L0A7M',
                    skills: [],
                },
                {
                    title: 'Front-End Developer Capstone',
                    date: 'Jul 2025',
                    issuer: 'Meta',
                    credentialId: 'P6IYIYX4XPSM',
                    url: 'https://www.coursera.org/account/accomplishments/verify/P6IYIYX4XPSM',
                    skills: [],
                },
                {
                    title: 'Coding Interview Preparation',
                    date: 'Jul 2025',
                    issuer: 'Meta',
                    credentialId: 'G3Y1L991512G',
                    url: 'https://www.coursera.org/account/accomplishments/verify/G3Y1L991512G',
                    skills: [],
                }
            ]
        },
        {
            title: 'Coursera',
            key: 'course',
            certificate: [
                {
                    title: 'Meta Front-End Developer Certificate',
                    date: 'Jul 2025',
                    issuer: 'Coursera',
                    credentialId: '',
                    url: 'https://www.credly.com/badges/de3f15da-9cb5-4435-9590-4ec30ca10c55/linked_in_profile',
                    skills: [],
                }
            ]
        },
        {
            title: 'Google',
            key: 'google',
            certificate: [
                {
                    title: 'Digital Transformation with Google Cloud',
                    date: 'Mar 2025',
                    issuer: 'Google',
                    credentialId: '14493933',
                    url: 'https://partner.cloudskillsboost.google/public_profiles/1d18146a-9ef3-4f50-b581-4b495ed8a4b1/badges/14493933?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share',
                    skills: [],
                },
                {
                    title: 'Exploring Data Transformation with Google Cloud',
                    date: 'Jul 2025',
                    issuer: 'Google',
                    credentialId: '17027435',
                    url: 'https://partner.cloudskillsboost.google/public_profiles/1d18146a-9ef3-4f50-b581-4b495ed8a4b1/badges/17027435?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share',
                    skills: [],
                },
                {
                    title: 'Infrastructure and Application Modernization with Google Cloud',
                    date: 'Jul 2025',
                    issuer: 'Google',
                    credentialId: '17027590',
                    url: 'https://partner.cloudskillsboost.google/public_profiles/1d18146a-9ef3-4f50-b581-4b495ed8a4b1/badges/17027590?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share',
                    skills: [],
                },
                {
                    title: 'Innovating with Google Cloud Artificial Intelligence',
                    date: 'Jul 2025',
                    issuer: 'Google',
                    credentialId: '17027540',
                    url: 'https://partner.cloudskillsboost.google/public_profiles/1d18146a-9ef3-4f50-b581-4b495ed8a4b1/badges/17027540?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share',
                    skills: [],
                },
                {
                    title: 'Prompt Design in Vertex AI & ML - Introductory',
                    date: 'Jul 2025',
                    issuer: 'Google',
                    credentialId: '17030738',
                    url: 'https://partner.cloudskillsboost.google/public_profiles/1d18146a-9ef3-4f50-b581-4b495ed8a4b1/badges/17005861',
                    skills: ['Artificial Intelligence (AI)', 'Google Gemini', 'Gemini APIs', 'Generative AI', 'Prompt Engineering'],
                },
                {
                    title: 'Scaling with Google Cloud Operations',
                    date: 'Jul 2025',
                    issuer: 'Google',
                    credentialId: '17030757',
                    url: 'https://partner.cloudskillsboost.google/public_profiles/1d18146a-9ef3-4f50-b581-4b495ed8a4b1/badges/17030757?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share',
                    skills: [],
                },
                {
                    title: 'Trust and Security with Google Cloud',
                    date: 'Jul 2025',
                    issuer: 'Google',
                    credentialId: '17030738',
                    url: 'https://partner.cloudskillsboost.google/public_profiles/1d18146a-9ef3-4f50-b581-4b495ed8a4b1/badges/17030738?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share',
                    skills: [],
                }
            ]
        },
        {
            title: 'Job Simulations',
            key: 'jobs',
            certificate: [
                {
                    title: 'Goldman Sachs – Software Engineering Job Simulation',
                    date: 'Feb 2025',
                    issuer: 'Goldman Sachs',
                    credentialId: 'kFwcgzqGYpT6m9QeK',
                    url: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/MBA4MnZTNFEoJZGnk/NPdeQ43o8P9HJmJzg_MBA4MnZTNFEoJZGnk_3p85ZZGCqAbKh2cMP_1739215728377_completion_certificate.pdf',
                    skills: ['Cryptography basics', 'Password best-practice', 'Password cracking'],
                },
                {
                    title: 'AWS APAC – Solutions Architecture Simulation',
                    date: 'Feb 2025',
                    issuer: 'AWS',
                    credentialId: 'GWZMxhLZygLRmuqzQ',
                    url: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_3p85ZZGCqAbKh2cMP_1740070224303_completion_certificate.pdf',
                    skills: ['Architectural Drawings', 'Amazon Web Services (AWS)', 'Technical Support'],
                },
                {
                    title: 'Deloitte Australia – Data Analytics Job Simulation',
                    date: 'Mar 2025',
                    issuer: 'Deloitte',
                    credentialId: 'xq9dmwyadwywp7fJd',
                    url: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_3p85ZZGCqAbKh2cMP_1743186596450_completion_certificate.pdf',
                    skills: ['Data Analysis', 'Data Modeling', 'Spreadsheets', 'Tableau'],
                },
                {
                    title: 'Tata Group – ESG Job Simulation',
                    date: 'Apr 2025',
                    issuer: 'Tata Group',
                    credentialId: 'LEKgjxrengsarQw4g',
                    url: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/N8Muuhk6XsXgMTeu2_ifobHAoMjQs9s6bKS_3p85ZZGCqAbKh2cMP_1743878722241_completion_certificate.pdf',
                    skills: ['Research Skills', 'Critical Thinking', 'Business Development', 'Sustainability'],
                },
                {
                    title: 'JPMorgan Chase – Investment Banking Job Simulation',
                    date: 'Apr 2025',
                    issuer: 'JPMorgan Chase',
                    credentialId: 'dJ7K6i4YsxLZZ7WtQ',
                    url: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ZtgA28qyexifyEdHE/YD2kY95RQxQtXxFTS_ZtgA28qyexifyEdHE_3p85ZZGCqAbKh2cMP_1744039941924_completion_certificate.pdf',
                    skills: ['Client Communication', 'Company Analysis', 'M&A Screening'],
                },
                {
                    title: 'JPMorgan Chase & Co. – Quantitative Research Job Simulation',
                    date: 'May 2025',
                    issuer: 'JPMorgan Chase',
                    credentialId: 'N4Z8Se2kzsKgxpfbz',
                    url: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Sj7temL583QAYpHXD/bWqaecPDbYAwSDqJy_Sj7temL583QAYpHXD_3p85ZZGCqAbKh2cMP_1748516765112_completion_certificate.pdf',
                    skills: ['Python', 'Derivatives', 'Dynamic Programming', 'Statistics'],
                },
                {
                    title: 'Deloitte Australia – Cyber Job Simulation',
                    date: 'Jul 2025',
                    issuer: 'Deloitte',
                    credentialId: 'XAdmreingysGgZpWf',
                    url: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/E9pA6qsdbeyEkp3ti_9PBTqmSxAf6zZTseP_3p85ZZGCqAbKh2cMP_1751795503655_completion_certificate.pdf',
                    skills: ['Log Inspection', 'Web Application Security', 'Web Security'],
                },
                {
                    title: 'Deloitte Australia – Technology Job Simulation',
                    date: 'Jul 2025',
                    issuer: 'Deloitte',
                    credentialId: 'qKpbvakdsYDb4WNQt',
                    url: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_3p85ZZGCqAbKh2cMP_1751793829961_completion_certificate.pdf',
                    skills: ['Data Structures', 'Programming', 'Python', 'Software Development'],
                },
            ]
        },
        {
            title: 'Infosys SpringBoard',
            key: 'infosys',
            certificate: [
                {
                    title: 'Generative AI',
                    date: 'Jul 2025',
                    issuer: 'Infosys Springboard',
                    credentialId: '',
                    url: '',
                    skills: [],
                }
            ]
        },
        {
            title: 'NPTEL',
            key: 'nptel',
            certificate: [
                {
                    title: 'Software Engineering',
                    date: 'Jul 2024',
                    issuer: 'NPTEL',
                    credentialId: 'NPTEL24CS119S1064300117',
                    url: 'https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/106/noc24-cs119/Course/NPTEL24CS119S106430011704133411.pdf',
                    skills: ['Software Development', 'Software', 'SDLC'],
                },
                {
                    title: 'Introduction to Environmental Engineering and Science',
                    date: 'Jan 2025',
                    issuer: 'NPTEL',
                    credentialId: 'NPTEL25GE17S951801270',
                    url: 'https://internalapp.nptel.ac.in/NOC/NOC25/SEM1/Ecertificates/127/noc25-ge17/Course/NPTEL25GE17S95180127004553033.pdf',
                    skills: ['Environmental Awareness', 'Environmental Management Systems', 'Environmental Impact Assessment'],
                }
            ]
        }
    ];

    const [activeGroupKey, setActiveGroupKey] = useState('meta');
    const activeGroup = certifications.find((group) => group.key === activeGroupKey);

    return (
        <section id="education" className="section-padding bg-blue-50 py-16 dark:bg-gray-800" >
            <div className="container mx-auto px-4">
                <h2 className="dark:text-white text-3xl font-bold text-center mb-12 text-gray-800">
                    🎓 Education & Certifications
                </h2>

                {/* ──────────────── Education Section ──────────────── */}
                <div className="max-w-8xl mx-auto mb-16">
                    <h3 className="dark:text-blue-400 text-2xl font-semibold mb-6 flex items-center gap-2 text-blue-800">
                        <GraduationCap className="h-6 w-6" /> Education
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {educationData.map((edu, index) => (
                            <a
                                key={index}
                                href={edu.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                            >
                                <Card className="dark:bg-blue-100 hover:shadow-xl border border-blue-300 transition-transform transform hover:-translate-y-1">
                                    <CardHeader>
                                        <CardTitle className="text-xl">{edu.degree}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-base font-medium text-gray-700">{edu.institution}</p>
                                        <p className="text-sm text-gray-500">{edu.period}</p>
                                    </CardContent>
                                </Card>
                            </a>
                        ))}
                    </div>
                </div>
                <div className="max-w-8xl mx-auto mb-16">
                    {/* ──────────────── Certifications Section ──────────────── */}
                    <div className="max-w-8xl mx-auto">
                        <h3 className="dark:text-blue-400 text-2xl font-semibold mb-6 flex items-center gap-2 text-blue-800">
                            <Award className="h-6 w-6" /> Certifications
                        </h3>

                        {/* Filters */}
                        <div className="max-w-2xl mx-auto flex flex-wrap gap-3 mb-6">
                            {certifications.map((group) => (
                                <button
                                    key={group.key}
                                    onClick={() => setActiveGroupKey(group.key)}
                                    className={`dark:bg-blue-100 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-semibold border transition ${activeGroupKey === group.key
                                        ? 'bg-blue-600 dark:bg-blue-600 dark:text-white text-white border-blue-600'
                                        : 'dark:bg-blue-100 bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
                                        }`}
                                >
                                    {group.title}
                                </button>
                            ))}
                        </div>

                        {/* Active Group */}
                        {activeGroup && (
                            <div className="mb-12">
                                <h3 className="dark:text-gray-300 text-2xl font-semibold text-gray-700 mb-6 border-b border-gray-300 pb-2">
                                    {activeGroup.title}
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {activeGroup.certificate.map((cert, index) => (
                                        <a
                                            key={index}
                                            href={cert.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block"
                                        >
                                            <Card className="dark:bg-blue-100 hover:shadow-xl border border-blue-200 transition-transform transform hover:-translate-y-1">
                                                <CardContent className="p-6">
                                                    <h4 className="font-semibold text-lg text-gray-800">{cert.title}</h4>
                                                    <p className="text-sm text-gray-600">
                                                        {cert.issuer} • {cert.date}
                                                    </p>
                                                    <p className="text-xs text-green-600 mt-1">
                                                        Credential ID: {cert.credentialId || '—'}
                                                    </p>
                                                    <p className="text-sm text-blue-700 mt-2">
                                                        {cert.skills?.join(', ') || '—'}
                                                    </p>
                                                    <p className="text-sm text-blue-500 mt-2 underline">
                                                        View Certificate
                                                    </p>
                                                </CardContent>
                                            </Card>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section >
    );
};

export default EducationSection;
