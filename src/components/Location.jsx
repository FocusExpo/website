
const imgImage2 = "/assets/imgImage2.png";
const imgLayer11 = "/assets/imgLayer11.svg";

export default function Location() {
    return (
        <div className="bg-[#1c3d42] content-stretch flex flex-col gap-[64px] h-[900px] items-start pt-[96px] px-[313px] relative shrink-0 w-full" data-name="7_Section_Map" data-node-id="4:590">
            <div className="absolute h-[588px] left-0 top-[0.5px] w-[1920px]" data-name="Layer_10" data-node-id="7:103">
                <img alt="" className="block max-w-none size-full" src={imgLayer11} />
            </div>
            <div className="content-stretch flex flex-col gap-[16px] h-[84px] items-center relative shrink-0 w-full" data-name="Container" data-node-id="17:20">
                <div className="content-stretch flex items-center justify-center px-[429px] relative shrink-0 w-full" data-name="Container" data-node-id="17:21">
                    <p className="font-['Museo_Sans:700',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#3ea0ab] text-[14px] text-center tracking-[3.5px] uppercase" data-node-id="17:22">
                        WHEN AND WHERE
                    </p>
                </div>
                <div className="content-stretch flex items-center justify-center px-[342px] relative shrink-0 w-full" data-name="Heading 2" data-node-id="17:23">
                    <p className="font-['Transducer_Test:Medium',sans-serif] leading-[48px] not-italic relative shrink-0 text-[#f2e7d1] text-[48px] text-center tracking-[-1.2px]" data-node-id="17:24">
                        Save the Date
                    </p>
                </div>
            </div>
            <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-[1280px]" data-node-id="16:16">
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container" data-node-id="4:593">
                    <div className="bg-[#2a5359] h-[284px] relative rounded-[6px] shrink-0 w-[414.667px]" data-name="Container" data-node-id="4:601">
                        <div className="absolute h-[20px] left-[40px] top-[40px] w-[408px]" data-name="Container" data-node-id="4:602">
                            <p className="absolute font-['Museo_Sans:700',sans-serif] leading-[20px] left-0 not-italic text-[#f68d6f] text-[14px] top-0 tracking-[2.8px] uppercase" data-node-id="4:603">
                                Where
                            </p>
                        </div>
                        <div className="absolute h-[32px] left-[40px] top-[76px] w-[408px]" data-name="Container" data-node-id="4:604">
                            <p className="absolute font-['Museo_Sans:900',sans-serif] leading-[32px] left-0 not-italic text-[#f2f2f1] text-[24px] top-[-1px]" data-node-id="4:605">
                                Allen Convention Center
                            </p>
                        </div>
                        <div className="absolute font-['Museo_Sans:500',sans-serif] h-[56px] leading-[28px] left-[40px] not-italic opacity-90 text-[#e5e5e3] text-[18px] top-[116px] w-[408px]" data-name="Paragraph" data-node-id="4:606">
                            <p className="absolute left-0 top-0" data-node-id="4:607">
                                777 Watters Creek Blvd
                            </p>
                            <p className="absolute left-0 top-[28px]" data-node-id="4:608">
                                Allen, TX 75013
                            </p>
                        </div>
                        <div className="absolute border-2 border-[#3ea0ab] border-solid content-stretch flex h-[54px] items-center justify-center left-[40.5px] px-[43px] py-[17px] rounded-[4px] top-[193.5px]" data-name="Button" data-node-id="6:63">
                            <p className="font-['Transducer_Test:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3ea0ab] text-[14px] text-center tracking-[1px] uppercase" data-node-id="6:64">
                                Learn More
                            </p>
                        </div>
                    </div>
                    <div className="bg-[#2a5359] content-stretch flex flex-col gap-[16px] items-start p-[40px] relative rounded-[6px] shrink-0 w-full" data-name="Container" data-node-id="4:594">
                        <div className="h-[20px] relative shrink-0 w-full" data-name="Container" data-node-id="4:595">
                            <p className="absolute font-['Museo_Sans:700',sans-serif] leading-[20px] left-0 not-italic text-[#6bb5c1] text-[14px] top-0 tracking-[2.8px] uppercase" data-node-id="4:596">
                                When
                            </p>
                        </div>
                        <div className="h-[40px] relative shrink-0 w-full" data-name="Container" data-node-id="4:597">
                            <p className="absolute font-['Museo_Sans:900',sans-serif] leading-[40px] left-0 not-italic text-[#f2f2f1] text-[36px] top-0" data-node-id="4:598">
                                April 4, 2026
                            </p>
                        </div>
                        <div className="h-[56px] opacity-90 relative shrink-0 w-full" data-name="Paragraph" data-node-id="4:599">
                            <p className="absolute font-['Museo_Sans:500',sans-serif] leading-[28px] left-0 not-italic text-[#e5e5e3] text-[18px] top-0 w-[342px] whitespace-pre-wrap" data-node-id="4:600">
                                A full day of immersion, workshops, and networking.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="border-8 border-[#e8eaed] border-solid flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] self-stretch" data-name="image 2" data-node-id="16:18">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
                        <img alt="" className="absolute h-full left-[0.05%] max-w-none top-0 w-[121.44%]" src={imgImage2} />
                    </div>
                </div>
            </div>
        </div>
    );
}
