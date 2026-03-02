import { motion } from 'framer-motion';

const defaultImage = "/assets/droplet charity section/droplet-charity.jpeg";

export default function JointCharity() {
    return (
        <div data-lenis-prevent="true" className="bg-[#1c3d42] flex flex-col items-center py-20 px-6 sm:px-12 lg:px-24 relative w-full overflow-hidden border-t border-[#3ea0ab]/20">
            <div className="max-w-7xl mx-auto w-full flex flex-col gap-16">

                {/* Header */}
                <div className="text-center md:text-left flex flex-col gap-4">
                    <h2 className="text-[#f2e7d1] text-4xl sm:text-5xl font-['Museo_Sans:900',sans-serif] tracking-wide uppercase">
                        Droplet & Focus Joint Charity
                    </h2>
                    <div className="w-24 h-1 bg-[#dd664e] mx-auto md:mx-0"></div>
                </div>

                {/* 2-Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Column: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-[#3ea0ab]/30"
                    >
                        <img
                            src={defaultImage}
                            alt="Droplet & Focus Joint Charity"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    {/* Right Column: Copy */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col gap-6 text-[#e5e5e3] text-lg leading-relaxed font-['Inter',sans-serif]"
                    >
                        <p className="text-xl text-[#3ea0ab] font-semibold">
                            This Ramadan, we’re honored to launch our joint campaign with Droplets of Mercy.
                        </p>
                        <p>
                            This is a zakat-eligible initiative dedicated to supporting emergency relief, mental health services, and essential care programs in heavily impacted regions.
                        </p>

                        <div className="my-2 border-l-4 border-[#dd664e] pl-6 py-2">
                            <p className="font-semibold italic">We are not simply raising funds.</p>
                            <p className="font-semibold italic">We are restoring dignity.</p>
                            <p className="font-semibold italic">We are rebuilding stability.</p>
                            <p className="font-semibold italic">We are renewing hope for families navigating crisis.</p>
                        </div>

                        <p>
                            In moments like these, charity is more than generosity. It is responsibility. It is solidarity. It is faith translated into action.
                        </p>
                        <p>
                            Your support and amplification can help us reach the communities depending on this effort, InshAllah.
                        </p>
                        <p className="font-bold text-[#f2e7d1]">
                            Give what you can. Share if you cannot.<br />
                            Every action matters.
                        </p>
                    </motion.div>
                </div>

                {/* Donate Button at Bottom */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex justify-center mt-8"
                >
                    <a
                        href="https://fundraise.dropletsofmercyusa.org/emergency-care-initiatives-in-partnership-with-focus-expo-2026"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#dd664e] hover:bg-[#c55842] text-white px-12 py-4 rounded-md font-bold text-xl uppercase tracking-wider transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 inline-flex items-center gap-2"
                    >
                        Donate
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </motion.div>

            </div>
        </div>
    );
}
