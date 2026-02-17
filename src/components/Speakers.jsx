
import { useRef, useState } from 'react';



import speakersData from '../data/speakers.json';

export default function Speakers() {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollRef = useRef(null);
    const speakers = speakersData;

    const handleScroll = () => {
        if (scrollRef.current) {
            const scrollLeft = scrollRef.current.scrollLeft;
            const itemWidth = scrollRef.current.offsetWidth; // This might need adjustment for card width vs container
            // For closer estimation in variable width scrolling, we might just track scroll progress
            const index = Math.round(scrollLeft / (window.innerWidth * 0.85)); // approx card width
            setActiveIndex(index);
        }
    };

    return (
        <div id="speakers" className="bg-[#f2e7d1] flex flex-col gap-16 items-center py-24 w-full overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 flex flex-col gap-4 items-center w-full">
                <p className="font-['Museo_Sans:700',sans-serif] text-[#52a0ad] text-sm tracking-[3.5px] uppercase text-center">
                    Learn From The Best
                </p>
                <h2 className="font-['Transducer_Test:Medium',sans-serif] text-[#1c3d42] text-4xl md:text-5xl tracking-[-1.2px] text-center">
                    Featured Speakers
                </h2>
            </div>

            {/* Desktop Grid */}
            <div className="hidden md:grid container mx-auto px-4 grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-7xl">
                {speakers.map((speaker, index) => (
                    <div key={index} className="flex flex-col group">
                        <div className="relative overflow-hidden rounded-lg border-2 border-[#3ea0ab] aspect-[3/4] mb-4 bg-[#1c3d42]/5">
                            <img
                                src={speaker.image}
                                alt={`${speaker.name} - ${speaker.description}`}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <h3 className="font-['Space_Grotesk:Bold',sans-serif] font-bold text-[#1c3d42] text-xl mb-1">
                            {speaker.name}
                        </h3>
                        <p className="font-['Inter:Regular',sans-serif] text-[#1c3d42]/80 text-sm">
                            {speaker.description}
                        </p>
                    </div>
                ))}
            </div>

            {/* Mobile Carousel */}
            <div className="md:hidden w-full relative">
                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 pb-8 scrollbar-hide"
                    style={{ scrollBehavior: 'smooth' }}
                >
                    {speakers.map((speaker, index) => (
                        <div key={index} className="snap-center shrink-0 w-[260px] flex flex-col group">
                            <div className="relative overflow-hidden rounded-lg border-2 border-[#3ea0ab] aspect-[3/4] mb-4 bg-[#1c3d42]/5">
                                <img
                                    src={speaker.image}
                                    alt={`${speaker.name} - ${speaker.description}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="font-['Space_Grotesk:Bold',sans-serif] font-bold text-[#1c3d42] text-lg mb-1">
                                {speaker.name}
                            </h3>
                            <p className="font-['Inter:Regular',sans-serif] text-[#1c3d42]/80 text-xs">
                                {speaker.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    );
}
