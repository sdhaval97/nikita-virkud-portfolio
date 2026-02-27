import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const education = [
    {
        institution: "Birla Institute of Technology and Science, Pilani",
        degree: "Master of Technology - MTech, Data Science and Engineering",
        duration: "October 2021 - May 2024"
    },
    {
        institution: "KJ Somaiya College of Engineering, Vidyavihar",
        degree: "Bachelor of Technology, Electronics",
        duration: "2015 - 2019"
    },
    {
        institution: "K J Somaiya College of Science & Commerce Vidyanagar",
        degree: "HSC, High School/Secondary Diplomas and Certificates",
        duration: "2013 - 2015"
    },
    {
        institution: "Sri Ma Bal Niketan High School and Junior College",
        degree: "SSC, Schooling",
        duration: "2003 - 2013"
    }
];

export default function Education() {
    return (
        <section className="py-16 border-t border-brand-gray">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="flex items-center space-x-3 mb-12"
            >
                <GraduationCap className="text-brand-purple w-8 h-8" />
                <h2 className="text-3xl font-bold">Education</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {education.map((edu, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        key={index}
                        className="p-6 rounded-2xl bg-brand-gray/30 border border-gray-800 hover:border-brand-purple/30 transition-colors shadow-lg group"
                    >
                        <h3 className="font-bold text-lg text-brand-white group-hover:text-brand-purple transition-colors">{edu.institution}</h3>
                        <p className="text-gray-300 mt-2 text-sm">{edu.degree}</p>
                        <p className="text-gray-500 text-sm mt-4 font-medium">{edu.duration}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
