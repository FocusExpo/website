

export default function Agenda() {
    const agendaItems = [
        {
            time: "9:00 AM",
            color: "#52a0ad", // Teal
            bgColor: "bg-white",
            title: "Registration & Welcome Breakfast",
            description: <>Network with fellow attendees over <span className="text-[#e47159]">coffee</span> and light refreshments</>
        },
        {
            time: "10:00 AM",
            color: "#f68d6f", // Orange
            bgColor: "bg-[#f2e7d1]", // Beige
            title: "The Resilience Panel: Built Through the Storm",
            description: "Gain practical insight from leaders who navigated pivots and came back stronger."
        },
        {
            time: "11:00 AM",
            color: "#e47159", // Coral
            bgColor: "bg-white",
            title: "Q & A with The Resilience Panel",
            description: "Bring your questions and walk away with perspective, strategy, and confidence."
        },
        {
            time: "11:30 AM",
            color: "#52a0ad", // Teal
            bgColor: "bg-white",
            title: "The Alignment Interval",
            description: "A curated time to reset, network, and engage with on-site wellness experts."
        },
        {
            time: "12:00 PM",
            color: "#52a0ad", // Teal
            bgColor: "bg-white",
            prefix: "Workshop:",
            title: "Building the Right Connections for Your Next Chapter",
            speaker: "By Gernae Alexander (Author of Do the (Net)work)",
            description: "Learn the five keys to impactful networking and why most people miss them.",
            room: "Windhaven Room"
        },
        {
            time: "1:00 PM",
            color: "#f68d6f", // Orange
            bgColor: "bg-[#f2e7d1]", // Beige
            title: "The Healing Panel: Grounded in Faith, Guided by Clarity",
            description: "Gain practical insight on aligning your mindset with your spiritual foundation."
        },
        {
            time: "2:00 PM",
            color: "#e47159", // Coral
            bgColor: "bg-white",
            title: "Q & A with The Healing Panel",
            description: "Engage in an open dialogue bridging faith, mental health, and real-life challenges."
        },
        {
            time: "2:30 PM",
            color: "#52a0ad", // Teal
            bgColor: "bg-white",
            title: "The Alignment Social",
            description: <>A curated midday experience featuring lunch, <span className="text-[#e47159]">mocktails</span>, expert booths, and intimate workshop sessions.</>
        },
        {
            time: "3:00 PM",
            color: "#1c3d42", // Dark Slate/Teal
            bgColor: "bg-white",
            prefix: "Workshop:",
            title: "Personal Branding & How to Leverage it in your Career",
            speaker: "By Sara Bannat",
            description: "Turn your story, skills, and strengths into a brand that elevates your career trajectory.",
            room: "Windhaven Room"
        },
        {
            time: "4:00 PM",
            color: "#e47159", // Coral
            bgColor: "bg-white",
            prefix: "Workshop:",
            title: "Using Grounding Techniques to Regulate & Refocus",
            speaker: "By Madiha Ashraf",
            description: "Walk away with practical techniques to reset your nervous system and restore focus.",
            room: "Windhaven Room"
        },
        {
            time: "4:30 PM",
            color: "#52a0ad", // Teal
            bgColor: "bg-white",
            title: "The Comedy Show",
            description: "Comedy set featuring two comedians bringing laughter, perspective, and a lighthearted finish to the day."
        }
    ];

    const agendaItemComponents = agendaItems.map((item, index) => (
        <div
            key={index}
            className={`${item.bgColor} py-5 px-4 md:px-8 flex gap-4 md:gap-6 rounded-[24px] w-full shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-transparent hover:border-[#1c3d42]/10 transition-all duration-300 items-stretch overflow-hidden`}
        >
            <div className="flex-shrink-0 w-[90px] md:w-[130px] flex items-center justify-center">
                <div className="flex flex-col items-center">
                    {item.prefix && (
                        <p className="font-['Museo_Sans:500',sans-serif] text-[14px] md:text-[16px] text-[#1c3d42] mb-1">
                            {item.prefix}
                        </p>
                    )}
                    <p className="font-['Museo_Sans:700',sans-serif] text-[16px] md:text-[20px] text-center" style={{ color: item.color }}>
                        {item.time}
                    </p>
                </div>
            </div>
            <div className="w-[4px] rounded-full self-stretch flex-shrink-0" style={{ backgroundColor: item.color }} />
            <div className="flex flex-col gap-1 flex-grow justify-center py-2">
                <h3 className="font-['Museo_Sans:900',sans-serif] text-[#1c3d42] text-[18px] md:text-[22px] leading-tight">
                    {item.title}
                </h3>
                {item.speaker && (
                    <p className="font-['Museo_Sans:700',sans-serif] text-[15px] md:text-[18px] text-[#1c3d42]">
                        {item.speaker}
                    </p>
                )}
                <p className="font-['Museo_Sans:500',sans-serif] text-[#1c3d42] text-[15px] md:text-[17px] opacity-80 leading-relaxed mt-1">
                    {item.description}
                </p>
                {item.room && (
                    <p className="font-['Museo_Sans:500',sans-serif] text-[14px] md:text-[15px] opacity-60 text-[#1c3d42] mt-1">
                        {item.room}
                    </p>
                )}
            </div>
        </div>
    ));

    return (
        <div id="agenda" className="bg-[#faf7f2] flex flex-col gap-[48px] items-center pt-[96px] pb-24 relative shrink-0 w-full" data-name="6_Section_Agenda">
            <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 max-w-7xl flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
                <div className="h-[20px] relative shrink-0 w-full text-center" data-name="Container">
                    <p className="font-['Museo_Sans:700',sans-serif] leading-[20px] not-italic text-[#e47159] text-[14px] tracking-[3.5px] uppercase">
                        What To Expect
                    </p>
                </div>
                <div className="h-[48px] relative shrink-0 w-full text-center" data-name="Heading 2">
                    <p className="font-['Transducer_Test:Medium',sans-serif] leading-[48px] not-italic text-[#1c3d42] text-[48px] tracking-[-1.2px]">
                        Event Agenda
                    </p>
                </div>
            </div>
            <div className="container mx-auto px-4 sm:px-6 max-w-5xl relative shrink-0 w-full flex flex-col gap-4">
                {agendaItemComponents}
            </div>
        </div>
    );
}
