import { Briefcase, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const experiences = [
    {
        company: "FrieslandCampina",
        role: "Data and Analytics Specialist",
        duration: "January 2025 - Present",
        location: "Amersfoort, Utrecht, Netherlands",
        highlights: []
    },
    {
        company: "Capgemini",
        role: "Senior Consultant",
        duration: "July 2024 - December 2024",
        location: "Utrecht, Netherlands",
        highlights: [
            "Designed a Data Engineering Architecture for an IoT use case, enabling a near-real-time live dashboard for monitoring environmental conditions and occupancy details.",
            "Explored the use of DBT for data processing requirements and implemented a proof-of-concept using Databricks."
        ]
    },
    {
        company: "Capgemini",
        role: "Consultant",
        duration: "September 2022 - July 2024",
        location: "Utrecht, Netherlands",
        highlights: [
            "Developed a configuration-driven Data Engineering Framework for Databricks Workflow Jobs using Azure CI/CD Pipelines in Medallion Architecture.",
            "Implemented automated copying and registration of incoming files to the platform using Azure Event Grid and Azure Functions.",
            "Led a large-scale migration to the new framework, and trained 30+ data engineers across 10 domains to ensure a smooth transition.",
            "Created a Generic Codebase to interact with repositories and Azure DevOps REST API for data transformation and storage.",
            "Collaborated in solution design, focusing on cost-reduction strategies and stabilizing end-to-end data products, which resulted in enhanced platform adoption and performance."
        ]
    },
    {
        company: "Capgemini",
        role: "Associate Consultant",
        duration: "September 2021 - August 2022",
        location: "India",
        highlights: [
            "Built data pipelines in Azure Data Factory to extract, transform, and load (ETL) data into Delta External Tables on Azure Storage, utilizing Databricks Notebooks for transformation processes.",
            "Collaborated closely with Product Owners to gather requirements and design pipelines that deliver data for descriptive analysis, ensuring alignment with business needs.",
            "Utilized SQL to debug and analyze data, improving data quality and reducing pipeline failures through proactive troubleshooting and optimization.",
            "Designed and implemented a Solution Design strategy to address pipeline bottlenecks, effectively managing data load pauses during deployments to ensure smooth operations."
        ]
    },
    {
        company: "Capgemini",
        role: "Sr. Analyst",
        duration: "September 2020 - August 2021",
        location: "Mumbai, Maharashtra, India",
        highlights: [
            "Developed Python scripts for different web-scraping use cases and deployed scrapers as Airflow Jobs.",
            "Integrated AWS S3 bucket to read source data and AWS Redshift to store data for Reporting needs.",
            "Implemented Custom Approval Flow using Power Automate to replace the in-build MicroStrategy Deployment process."
        ]
    },
    {
        company: "Capgemini",
        role: "Analyst",
        duration: "September 2019 - August 2020",
        location: "Mumbai, Maharashtra, India",
        highlights: [
            "Started with a 3-month training program, eventually working for a FMCG client in the Netherlands.",
            "Developed multiple Automations using Bash Scripting – Informatica Object Purging, Informatica Services Monitoring Bot, and Informatica PowerCenter to review Tool Licenses.",
            "Provide level 1 support for failures in Informatica, Airflow, and Pentaho ETL Tools, resolving more than 50 Incident tickets."
        ]
    },
    {
        company: "Reliance Communications",
        role: "Intern",
        duration: "June 2018 - July 2018",
        location: "Mumbai Area, India",
        highlights: [
            "Worked at National Network Operations Centre - NNOC.",
            "Performed level one troubleshooting of the RCom network.",
            "Worked on Softwares like Putty and SecureCRT.",
            "Attended a 3-day training conducted under GCX India Enterprise Learning and Development Program."
        ]
    }
];

export default function Experience() {
    const [expandedIndex, setExpandedIndex] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const toggleExpand = (index) => {
        if (isMobile) {
            setExpandedIndex(expandedIndex === index ? null : index);
        }
    };

    return (
        <section className="py-16 border-t border-brand-gray" id="experience">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="flex items-center space-x-3 mb-12"
            >
                <Briefcase className="text-brand-purple w-8 h-8" />
                <h2 className="text-3xl font-bold">Work Experience</h2>
            </motion.div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-brand-gray before:to-transparent">
                {experiences.map((exp, index) => {
                    // For side alternation on desktop:
                    // index 0 -> left side (-50 x offset)
                    // index 1 -> right side (50 x offset)
                    const xOffset = index % 2 === 0 ? -50 : 50;
                    const isExpanded = !isMobile || expandedIndex === index;

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: isMobile ? 0 : xOffset, y: isMobile ? 30 : 0 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                        >
                            {/* Timeline icon */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-800 bg-brand-black shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm text-brand-purple z-10">
                                <div className="bg-brand-purple/50 w-3 h-3 rounded-full" />
                            </div>

                            {/* Timeline content */}
                            <div
                                className={`w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-brand-gray/30 border border-gray-800 hover:border-brand-purple/50 transition-colors shadow-lg ${isMobile ? 'cursor-pointer' : ''}`}
                                onClick={() => toggleExpand(index)}
                            >
                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                                    <div className="flex justify-between items-start w-full">
                                        <div>
                                            <h3 className="font-bold text-xl text-brand-white">{exp.role}</h3>
                                            <div className="text-brand-purple font-medium text-sm mt-1 sm:hidden">{exp.duration}</div>
                                        </div>
                                        {isMobile && (
                                            <motion.div
                                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="ml-4 mt-1 shrink-0"
                                            >
                                                <ChevronDown className="w-5 h-5 text-gray-500" />
                                            </motion.div>
                                        )}
                                    </div>
                                    <time className="hidden sm:block text-sm text-brand-purple font-medium whitespace-nowrap ml-4 mt-1">{exp.duration}</time>
                                </div>
                                <div className="mb-4">
                                    <span className="font-semibold text-gray-300">{exp.company}</span>
                                    <span className="text-gray-500 text-sm ml-2">| {exp.location}</span>
                                </div>

                                <AnimatePresence initial={false}>
                                    {isExpanded && (
                                        <motion.div
                                            initial={isMobile ? { height: 0, opacity: 0 } : false}
                                            animate={isMobile ? { height: 'auto', opacity: 1 } : false}
                                            exit={isMobile ? { height: 0, opacity: 0 } : false}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            {exp.highlights.length > 0 && (
                                                <ul className="space-y-2 text-gray-400 text-sm ml-4 list-disc marker:text-brand-purple/50 pt-2">
                                                    {exp.highlights.map((highlight, i) => (
                                                        <li key={i} className="leading-relaxed pl-1">{highlight}</li>
                                                    ))}
                                                </ul>
                                            )}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
