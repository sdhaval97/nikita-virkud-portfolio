import { Code2, Server, Database, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';

const techCategories = [
    {
        title: "Cloud Platforms",
        icon: <Cloud className="w-6 h-6 text-brand-purple" />,
        skills: ["AWS", "Azure", "Amazon S3", "Azure CI/CD", "Azure Event Grid", "Azure Functions", "Azure DevOps"]
    },
    {
        title: "Data Engineering",
        icon: <Database className="w-6 h-6 text-brand-purple" />,
        skills: ["Data Integration", "Data Modeling", "Databricks", "Azure Data Factory", "Delta External Tables", "DBT", "ETL", "Informatica", "Pentaho ETL"]
    },
    {
        title: "Languages & Scripting",
        icon: <Code2 className="w-6 h-6 text-brand-purple" />,
        skills: ["Python", "SQL", "Bash Scripting", "Web Scraping"]
    },
    {
        title: "Tools & Orchestration",
        icon: <Server className="w-6 h-6 text-brand-purple" />,
        skills: ["Airflow", "Power Automate", "Databricks Workflows", "IoT Architectures"]
    }
];

export default function TechStack() {
    return (
        <section className="py-16 border-t border-brand-gray">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="flex items-center space-x-3 mb-12 flex-col text-center justify-center"
            >
                <h2 className="text-3xl font-bold">Tech Stack</h2>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Tools and technologies I use to build robust and scalable data solutions.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {techCategories.map((category, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        key={index}
                        className="bg-brand-gray/30 rounded-2xl p-6 border border-gray-800 hover:border-brand-purple/50 transition-all hover:-translate-y-1 shadow-xl"
                    >
                        <div className="bg-brand-black w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-md border border-gray-800">
                            {category.icon}
                        </div>
                        <h3 className="font-bold text-lg mb-4 text-brand-white">{category.title}</h3>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, i) => (
                                <span key={i} className="bg-brand-black text-gray-300 text-xs px-3 py-1.5 rounded-lg border border-gray-800">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
