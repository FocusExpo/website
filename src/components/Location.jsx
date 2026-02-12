
const imgImage2 = "/assets/imgImage2.png";
const imgLayer11 = "/assets/imgLayer11.svg";

export default function Location() {
    return (
        <div id="location" className="bg-[#1c3d42] flex flex-col gap-16 min-h-[800px] items-center py-24 px-4 sm:px-6 md:px-12 lg:px-24 relative w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 pointer-events-none">
                <img alt="" className="w-full h-full object-cover opacity-50" src={imgLayer11} />
            </div>

            {/* Header Content */}
            <div className="flex flex-col gap-4 items-center relative z-10 text-center">
                <p className="font-['Museo_Sans:700',sans-serif] text-[#3ea0ab] text-sm tracking-[3.5px] uppercase">
                    WHEN AND WHERE
                </p>
                <h2 className="font-['Transducer_Test:Medium',sans-serif] text-[#f2e7d1] text-4xl md:text-5xl tracking-[-1.2px]">
                    Save the Date
                </h2>
            </div>

            {/* Content Container */}
            <div className="flex flex-col lg:flex-row gap-8 items-center justify-center relative z-10 w-full max-w-7xl">

                {/* Info Card */}
                <div className="bg-[#2a5359] p-10 rounded-lg shadow-xl w-full max-w-md flex flex-col gap-8 shrink-0">

                    {/* When Section */}
                    <div className="flex flex-col gap-2">
                        <p className="font-['Museo_Sans:700',sans-serif] text-[#6bb5c1] text-sm tracking-[2.8px] uppercase">
                            When
                        </p>
                        <p className="font-['Museo_Sans:900',sans-serif] text-[#f2f2f1] text-4xl">
                            April 4, 2026
                        </p>
                        <p className="font-['Museo_Sans:500',sans-serif] text-[#e5e5e3] text-lg opacity-90">
                            A full day of immersion, workshops, and networking.
                        </p>
                    </div>

                    <div className="h-px bg-[#3ea0ab]/30 w-full"></div>

                    {/* Where Section */}
                    <div className="flex flex-col gap-2">
                        <p className="font-['Museo_Sans:700',sans-serif] text-[#f68d6f] text-sm tracking-[2.8px] uppercase">
                            Where
                        </p>
                        <p className="font-['Museo_Sans:900',sans-serif] text-[#f2f2f1] text-2xl">
                            Plano Event Center
                        </p>
                        <div className="font-['Museo_Sans:500',sans-serif] text-[#e5e5e3] text-lg opacity-90">
                            <p>2000 E Spring Creek Pkwy</p>
                            <p>Plano, TX 75074</p>
                        </div>
                    </div>

                    <a
                        href="https://maps.app.goo.gl/AnEWmrJLSTsJBq9G9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-2 border-[#3ea0ab] text-[#3ea0ab] hover:bg-[#3ea0ab] hover:text-[#1c3d42] transition-colors py-4 px-8 rounded flex items-center justify-center font-bold uppercase tracking-wider text-sm mt-4"
                    >
                        Get Directions
                    </a>
                </div>

                {/* Map Embed */}
                <div className="relative rounded-lg overflow-hidden border-4 border-[#e8eaed] w-full h-[400px] lg:h-[600px] lg:flex-1 shadow-2xl">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.0812319790944!2d-96.68709002392181!3d33.054328173549024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19959d6acdb5%3A0x9ed9e54ccb0374c8!2sPlano%20Event%20Center!5e0!3m2!1sen!2sus!4v1770678979543!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Plano Event Center Map"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
