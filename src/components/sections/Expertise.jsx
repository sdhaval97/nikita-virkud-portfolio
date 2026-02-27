import { Target, Zap, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const expertises = [
    {
        title: "Data Integration & Design",
        description: "Designing end-to-end data pipelines and integrating diverse data sources into unified platforms. Specializing in architecture that scales with IoT and big data needs.",
        icon: <Target className="w-8 h-8 text-brand-purple" />
    },
    {
        title: "Data Modeling on Cloud",
        description: "Creating robust data models utilizing Medallion Architecture across AWS and Azure. Optimizing data storage and transformation processes for performance and cost.",
        icon: <Zap className="w-8 h-8 text-brand-purple" />
    },
    {
        title: "Data Quality & Troubleshooting",
        description: "Proactive issue resolution and implementation of solution design strategies to manage data load stability, reducing pipeline failures and guaranteeing data fidelity.",
        icon: <ShieldCheck className="w-8 h-8 text-brand-purple" />
    }
];

export default function Expertise() {
    return (
        <section className="py-16 border-t border-brand-gray">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <h2 className="text-3xl font-bold mb-4">Core Expertise</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">Specialized areas where I add the most value to data engineering teams and products.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {expertises.map((exp, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        key={index}
                        className="flex flex-col items-center text-center p-8 rounded-3xl bg-gradient-to-b from-brand-gray/40 to-transparent border border-gray-800 hover:border-brand-purple/50 transition-all hover:shadow-2xl hover:-translate-y-1"
                    >
                        <div className="bg-brand-black p-4 rounded-2xl shadow-lg border border-gray-800 mb-6">
                            {exp.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-brand-white">{exp.title}</h3>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            {exp.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
