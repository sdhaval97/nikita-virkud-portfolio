import { Mail, Linkedin } from 'lucide-react';

export default function Contact() {
    return (
        <div className="max-w-2xl mx-auto py-12">
            <h1 className="text-4xl font-bold mb-8 text-center text-brand-purple">Get in Touch</h1>

            <div className="bg-brand-gray rounded-2xl p-8 border border-gray-800 shadow-xl">
                <div className="space-y-8">

                    <a href="mailto:nvnvirkud@gmail.com" className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-800 transition-colors group">
                        <div className="bg-brand-purple/10 p-4 rounded-full group-hover:bg-brand-purple/20 transition-colors">
                            <Mail className="text-brand-purple w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400 mb-1">Email Me</p>
                            <p className="text-lg font-medium">nvnvirkud@gmail.com</p>
                        </div>
                    </a>

                    <a href="https://www.linkedin.com/in/nikita-virkud" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-800 transition-colors group">
                        <div className="bg-[#0077b5]/10 p-4 rounded-full group-hover:bg-[#0077b5]/20 transition-colors">
                            <Linkedin className="text-[#0077b5] w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400 mb-1">Connect on LinkedIn</p>
                            <p className="text-lg font-medium">linkedin.com/in/nikita-virkud</p>
                        </div>
                    </a>

                </div>

                <div className="mt-12 pt-8 border-t border-gray-800 text-center">
                    <p className="text-gray-400">
                        Open for 1:1 coaching and discussions on data engineering.
                    </p>
                </div>
            </div>
        </div>
    );
}
