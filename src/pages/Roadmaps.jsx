import { ArrowRight } from 'lucide-react';

const roadmaps = [
    {
        title: "Data Analyst Roadmap",
        description: "Your structured path to becoming a successful Data Analyst.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
        points: [
            "Master Excel, SQL, and BI tools",
            "Learn statistical analysis and data visualization",
            "Build a portfolio that lands interviews"
        ],
        link: "#"
    },
    {
        title: "Data Engineer Roadmap",
        description: "The complete guide to building scalable data pipelines.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
        points: [
            "Learn Python, SQL, and cloud platforms",
            "Master ETL processes and data warehousing",
            "Understand distributed computing"
        ],
        link: "#"
    }
];

export default function Roadmaps() {
    return (
        <div className="pt-8 pb-8 min-h-[calc(100vh-80px)] px-4 md:px-8 flex flex-col items-center">
            <div className="max-w-6xl w-full mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Roadmaps</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {roadmaps.map((roadmap, index) => (
                        <div
                            key={index}
                            className="group bg-brand-black/50 border border-brand-gray hover:border-brand-purple rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] flex flex-col h-full max-h-[500px]"
                        >
                            {/* Image Section */}
                            <div className="h-40 sm:h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-brand-black/40 group-hover:bg-brand-black/10 transition-colors duration-500 z-10"></div>
                                <img
                                    src={roadmap.image}
                                    alt={roadmap.title}
                                    className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                />
                            </div>

                            {/* Content Section */}
                            <div className="p-6 md:p-8 flex flex-col flex-grow relative z-20 -mt-6 bg-brand-black/80 backdrop-blur-xl border-t border-brand-gray/50 rounded-t-3xl">
                                <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-brand-purple transition-colors duration-300">
                                    {roadmap.title}
                                </h3>
                                <p className="text-gray-400 mb-4 text-sm hidden sm:block">{roadmap.description}</p>

                                <ul className="space-y-2 mb-6 flex-grow">
                                    {roadmap.points.map((point, i) => (
                                        <li key={i} className="flex items-start text-gray-300">
                                            <span className="text-brand-purple mr-3 mt-1 font-bold text-lg leading-none">•</span>
                                            <span className="leading-tight">{point}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href={roadmap.link}
                                    className="inline-flex items-center justify-center w-full py-3.5 px-4 bg-transparent text-brand-purple hover:bg-brand-purple hover:text-white rounded-xl font-semibold transition-all duration-300 border border-brand-purple hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] mt-auto"
                                >
                                    Check it out!
                                    <ArrowRight size={20} className="ml-2 transform group-hover:translate-x-1.5 transition-transform duration-300" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
