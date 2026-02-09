
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const pillars = [
    {
        letter: "F",
        title: "Faith",
        description: "The bedrock of our identity. Aligning our professional pursuits with our spiritual north star.",
        color: "#52a0ad"
    },
    {
        letter: "O",
        title: "Opportunity",
        description: "Unlocking new horizons. Connecting with mentors and markets that value your unique perspective.",
        color: "#f68d6f"
    },
    {
        letter: "C",
        title: "Career",
        description: "Precision in execution. Workshops and insights to elevate your professional trajectory.",
        color: "#e47159"
    },
    {
        letter: "U",
        title: "Unity",
        description: "Strength in numbers. Building a cohesive network of like-minded, high-achieving professionals.",
        color: "#3d7a85"
    },
    {
        letter: "S",
        title: "Strength",
        description: "Mental and financial resilience. Strategies to sustain growth without compromising wellbeing.",
        color: "#1c3d42"
    }
];

export default function Pillars() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % pillars.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + pillars.length) % pillars.length);
    };

    // Auto-advance carousel
    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div id="pillars" className="bg-[#faf7f2] flex flex-col items-center justify-center py-20 relative w-full overflow-hidden">
            <div className="container mx-auto px-4 flex flex-col gap-8 items-center w-full">
                <div className="text-center max-w-2xl">
                    <p className="font-['Museo_Sans:700',sans-serif] text-[#6bb5c1] text-sm tracking-[3.5px] uppercase mb-4">
                        What focus stands for
                    </p>
                    <h2 className="font-['Transducer_Test:Medium',sans-serif] text-[#1c3d42] text-4xl md:text-5xl tracking-[-1.2px]">
                        The Five Pillars
                    </h2>
                </div>

                <div className="relative w-full max-w-xl mx-auto mt-8">
                    {/* Carousel Container */}
                    <div className="overflow-hidden rounded-xl shadow-lg bg-white relative">
                        <div
                            className="flex transition-transform duration-500 ease-in-out h-[400px]"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {pillars.map((pillar, index) => (
                                <div key={index} className="w-full flex-shrink-0 flex flex-col items-center justify-center p-8 md:p-12 text-center" style={{ borderTop: `8px solid ${pillar.color}` }}>
                                    <div
                                        className="font-['Museo_Sans:900',sans-serif] text-[120px] leading-none mb-4"
                                        style={{ color: pillar.color }}
                                    >
                                        {pillar.letter}
                                    </div>
                                    <h3 className="font-['Museo_Sans:900',sans-serif] text-[#1c3d42] text-3xl mb-4">
                                        {pillar.title}
                                    </h3>
                                    <p className="font-['Museo_Sans:500',sans-serif] text-[#1c3d42] text-lg leading-relaxed max-w-md">
                                        {pillar.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all text-[#1c3d42]"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft size={32} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all text-[#1c3d42]"
                        aria-label="Next slide"
                    >
                        <ChevronRight size={32} />
                    </button>

                    {/* Indicators */}
                    <div className="flex justify-center gap-3 mt-8">
                        {pillars.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-8 bg-[#1c3d42]' : 'w-3 bg-[#1c3d42]/30'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
