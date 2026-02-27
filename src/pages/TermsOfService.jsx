import React from 'react';
import CardNav from '../components/CardNav';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const imgVector = "/assets/Focus_Logo_Wmark_Teal_Wide.svg";

export default function TermsOfService() {
    const navItems = [
        {
            label: "Event Info",
            bgColor: "#1c3d42",
            textColor: "#f2e7d1",
            links: [
                { label: "About", href: "/#about" },
                { label: "Speakers", href: "/#speakers" },
                { label: "Agenda", href: "/#agenda" }
            ]
        },
        {
            label: "Logistics",
            bgColor: "#3ea0ab",
            textColor: "#fff",
            links: [
                { label: "Location", href: "/#location" },
                { label: "FAQ", href: "/#faq" }
            ]
        },
        {
            label: "Connect",
            bgColor: "#f2e7d1",
            textColor: "#1c3d42",
            links: [
                { label: "Register", href: "https://luma.com/getfocused2026" },
                { label: "Contact", href: "mailto:focussocialmedia0@gmail.com" }
            ]
        }
    ];

    return (
        <div className="bg-[#f2f2f1] min-h-screen flex flex-col font-['Museo_Sans:500',sans-serif]">
            <SEO
                title="Terms of Service"
                description="Terms of Service for FOCUS Expo. Understand the rules and guidelines for using our services."
            />
            <CardNav
                logo={imgVector}
                items={navItems}
                baseColor="#ffffff"
                menuColor="#1c3d42"
                buttonBgColor="#1c3d42"
                buttonTextColor="#ffffff"
            />

            <main className="flex-grow pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
                <h1 className="text-4xl md:text-5xl font-bold text-[#1c3d42] mb-8 font-['Museo_Sans:900',sans-serif]">Terms of Service</h1>

                <div className="space-y-6 text-[#1c3d42]/80 leading-relaxed">
                    <p className="text-sm text-[#1c3d42]/60">Last Updated: February 15, 2026</p>

                    <section>
                        <h2 className="text-2xl font-bold text-[#1c3d42] mb-3">1. Acceptance of Terms</h2>
                        <p>
                            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
                            In addition, when using this websites particular services, you shall be subject to any posted guidelines or rules applicable to such services.
                            Any participation in this service will constitute acceptance of this agreement. If you do not agree to abide by the above, please do not use this service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#1c3d42] mb-3">2. Description of Service</h2>
                        <p>
                            FOCUS EXPO provides users with access to a collection of resources, including event registration, information, and communication tools.
                            You understand and agree that the Service is provided "AS-IS" and that FOCUS EXPO assumes no responsibility for the timeliness, deletion, mis-delivery or failure to store any user communications or personalization settings.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#1c3d42] mb-3">3. User Conduct</h2>
                        <p>
                            You agree to use the website only for lawful purposes. You are prohibited from posting on or transmitting through the website any material that follows:
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, sexually explicit, profane, hateful, racially, ethnically, or otherwise objectionable.</li>
                            <li>Encourages conduct that would constitute a criminal offense, give rise to civil liability, or otherwise violate any law.</li>
                            <li>Contains a virus or other harmful component.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#1c3d42] mb-3">4. Intellectual Property</h2>
                        <p>
                            The Site and its original content, features, and functionality are owned by FOCUS EXPO and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#1c3d42] mb-3">5. Events and Cancellations</h2>
                        <p>
                            FOCUS EXPO reserves the right to cancel or reschedule events. If an event is cancelled, we will make reasonable efforts to notify registered attendees.
                            Specific refund policies will be outlined during the registration process for each event.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#1c3d42] mb-3">6. Limitation of Liability</h2>
                        <p>
                            In no event shall FOCUS EXPO, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#1c3d42] mb-3">7. Governing Law</h2>
                        <p>
                            These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#1c3d42] mb-3">8. Changes to This Agreement</h2>
                        <p>
                            We reserve the right, at our sole discretion, to modify or replace these Terms at any time.
                            What constitutes a material change will be determined at our sole discretion.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#1c3d42] mb-3">9. Contact Us</h2>
                        <p>
                            If you have any questions about these Terms, you may email us at focussocialmedia0@gmail.com.
                        </p>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}
