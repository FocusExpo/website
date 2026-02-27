import React from 'react';
import LogoLoop from './LogoLoop';
import sponsorsData from '../data/sponsors.json';

export default function Sponsors() {
    const images = sponsorsData.map(sponsor => ({
        src: sponsor.image,
        alt: sponsor.name,
        href: sponsor.url
    }));

    return (
        <div id="sponsors" data-lenis-prevent="true" className="bg-[#f2e7d1] flex flex-col items-center py-12 relative shrink-0 w-full overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 max-w-7xl flex flex-col gap-[16px] items-center text-center mb-12">
                <h2 className="font-['Transducer_Test:Medium',sans-serif] text-[#1c3d42] text-[48px] tracking-[-1.2px]">
                    Sponsored By
                </h2>
            </div>
            <div style={{ height: '120px', width: '100%', position: 'relative', overflow: 'hidden' }}>
                <LogoLoop
                    logos={images}
                    speed={50}
                    direction="left"
                    logoHeight={70}
                    gap={60}
                    hoverSpeed={0}
                    scaleOnHover={false}
                    fadeOut
                    fadeOutColor="#f2e7d1"
                    ariaLabel="Our Sponsors"
                />
            </div>
        </div>
    );
}
