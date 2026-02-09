
const imgImageWithFallback = "/assets/imgImageWithFallback.png";
const imgImageWithFallback1 = "/assets/imgImageWithFallback1.png";
const imgImageWithFallback2 = "/assets/imgImageWithFallback2.png";
const imgImageWithFallback3 = "/assets/imgImageWithFallback3.png";

const speakers = [
    {
        name: "Guest Speaker",
        role: "Clinical Psychologist & Wellness Expert",
        image: imgImageWithFallback
    },
    {
        name: "Guest Speaker",
        role: "CEO, Crescent Capital Partners",
        image: imgImageWithFallback1
    },
    {
        name: "Guest Speaker",
        role: "Executive Coach & Author",
        image: imgImageWithFallback2
    },
    {
        name: "Guest Speaker",
        role: "Venture Capitalist & Mentor",
        image: imgImageWithFallback3
    }
];

export default function Speakers() {
    return (
        <div id="speakers" className="bg-[#f2e7d1] flex flex-col gap-16 items-center py-24 w-full">
            <div className="container mx-auto px-4 flex flex-col gap-4 items-center w-full">
                <p className="font-['Museo_Sans:700',sans-serif] text-[#52a0ad] text-sm tracking-[3.5px] uppercase text-center">
                    Learn From The Best
                </p>
                <h2 className="font-['Transducer_Test:Medium',sans-serif] text-[#1c3d42] text-4xl md:text-5xl tracking-[-1.2px] text-center">
                    Featured Speakers
                </h2>
            </div>

            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl">
                {speakers.map((speaker, index) => (
                    <div key={index} className="flex flex-col group">
                        <div className="relative overflow-hidden rounded-lg border-2 border-[#3ea0ab] aspect-[3/4] mb-4 bg-[#1c3d42]/5">
                            <img
                                src={speaker.image}
                                alt={`${speaker.name} - ${speaker.role}`}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <h3 className="font-['Space_Grotesk:Bold',sans-serif] font-bold text-[#1c3d42] text-xl mb-1">
                            {speaker.name}
                        </h3>
                        <p className="font-['Inter:Regular',sans-serif] text-[#1c3d42]/80 text-sm">
                            {speaker.role}
                        </p>
                    </div>
                ))}
            </div>

            <button className="border-2 border-[#3ea0ab] px-8 py-4 rounded-[4px] cursor-pointer hover:bg-[#3ea0ab]/10 transition-colors w-full max-w-xs group">
                <p className="font-['Transducer_Test:Bold',sans-serif] text-[#3ea0ab] text-sm tracking-[1px] uppercase group-hover:tracking-[2px] transition-all duration-300">
                    VIEW FULL SPEAKER LINEUP
                </p>
            </button>
        </div>
    );
}
