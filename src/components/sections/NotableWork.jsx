import { Award, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const certifications = [
    "Using Databases with Python",
    "Cloud Modernization: Cloud Data Warehouse & Cloud Data Lake",
    "Capstone: Retrieving, Processing, and Visualizing Data with Python",
    "Microsoft Certified Azure Data Fundamentals",
    "AI For Everyone"
];

export default function NotableWork() {
    return (
        <section className="py-16 border-t border-brand-gray">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="flex items-center space-x-3 mb-12"
            >
                <Award className="text-brand-purple w-8 h-8" />
                <h2 className="text-3xl font-bold">Certifications & Notable Work</h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-brand-gray/30 rounded-3xl p-8 border border-gray-800 shadow-xl relative overflow-hidden"
            >
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 p-16 opacity-5 pointer-events-none">
                    <BookOpen className="w-64 h-64 text-brand-white transform rotate-12" />
                </div>

                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {certifications.map((cert, index) => (
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                            key={index}
                            className="flex items-start space-x-3 p-4 rounded-xl hover:bg-brand-black/50 transition-colors"
                        >
                            <div className="w-2 h-2 rounded-full bg-brand-purple mt-2 shrink-0 shadow-[0_0_8px_rgba(128,90,213,0.8)]" />
                            <p className="text-gray-200 font-medium leading-relaxed">{cert}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
