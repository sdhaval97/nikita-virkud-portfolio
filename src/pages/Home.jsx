import Experience from '../components/sections/Experience';
import TechStack from '../components/sections/TechStack';
import Expertise from '../components/sections/Expertise';
import NotableWork from '../components/sections/NotableWork';
import Education from '../components/sections/Education';

import profileImg from '../assets/nikita_virkud.jpg';

export default function Home() {
    return (
        <div className="space-y-24 animate-fade-in-up pb-20">

            {/* Hero Section */}
            <section className="text-center pt-24 pb-16">
                <div className="mb-8 flex justify-center">
                    <div className="relative">
                        <div className="absolute inset-0 bg-brand-purple/20 rounded-full blur-xl animate-pulse"></div>
                        <img
                            src={profileImg}
                            alt="Nikita Virkud"
                            className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-brand-purple/30 shadow-2xl hover:border-brand-purple/60 transition-colors"
                        />
                    </div>
                </div>
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
                    Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-purple to-[#b794f4]">Nikita Virkud</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    Data and Analytics Specialist with a passion for building scalable data engineering solutions on modern cloud platforms.
                </p>
                <div className="mt-10 max-w-4xl mx-auto">
                    <p className="text-md text-gray-400">
                        Holds an M.Tech in Data Science and Technology and currently works at FrieslandCampina as a Data and Analytics Specialist. Skilled in Data Integration and Design, Data Modeling on AWS/Azure Cloud Platforms with extensive experience in the field of Data Engineering.
                    </p>
                </div>
            </section>

            {/* Main Content Sections */}
            <div className="max-w-5xl mx-auto space-y-24">
                <Expertise />
                <Experience />
                <TechStack />
                <NotableWork />
                <Education />
            </div>

        </div>
    );
}
