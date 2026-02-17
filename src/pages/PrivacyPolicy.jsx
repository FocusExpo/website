
import React from 'react';
import CardNav from '../components/CardNav';
import Footer from '../components/Footer';

const imgVector = "/assets/Focus_Logo_Wmark_Teal_Wide.svg";

export default function PrivacyPolicy() {
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
                { label: "Register", href: "https://luma.com/64o45o5x" },
                { label: "Contact", href: "mailto:focussocialmedia0@gmail.com" }
            ]
        }
    ];

    return (
        <div className="bg-[#f2f2f1] min-h-screen flex flex-col font-['Museo_Sans:500',sans-serif]">
            <CardNav
                logo={imgVector}
                items={navItems}
                baseColor="#ffffff"
                menuColor="#1c3d42"
                buttonBgColor="#1c3d42"
                buttonTextColor="#ffffff"
            />

            <main className="flex-grow pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
                <h1 className="text-4xl md:text-5xl font-bold text-[#1c3d42] mb-8 font-['Museo_Sans:900',sans-serif]">Privacy Policy</h1>

                <div className="space-y-6 text-[#1c3d42]/80 leading-relaxed">
                    <p className="text-sm text-[#1c3d42]/60">Last Updated: February 15, 2026</p>

                    <section>
                        <h2 className="text-2xl font-bold text-[#1c3d42] mb-3">1. Introduction</h2>
                        <p>
                            Welcome to FOCUS EXPO. We are committed to protecting your personal information and your right to privacy.
                            If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information,
                            please contact us at focussocialmedia0@gmail.com.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#1c3d42] mb-3">2. Information We Collect</h2>
                        <p>
                            We collect personal information that you voluntarily provide to us when you register for the event,
                            express an interest in obtaining information about us or our products and services, when you participate in activities on the website,
                            or otherwise when you contact us.
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Names</li>
                            <li>Email addresses</li>
                            <li>Phone numbers</li>
                            <li>Job titles</li>
                            <li>Company names</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#1c3d42] mb-3">3. How We Use Your Information</h2>
                        <p>
                            We use personal information collected via our website for a variety of business purposes described below.
                            We process your personal information for these purposes in reliance on our legitimate business interests,
                            in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>To facilitate account creation and logon process.</li>
                            <li>To send administrative information to you.</li>
                            <li>To fulfill and manage your orders.</li>
                            <li>To post testimonials.</li>
                            <li>To deliver and facilitate delivery of services to the user.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#1c3d42] mb-3">4. Sharing Your Information</h2>
                        <p>
                            We may process or share your data that we hold based on the following legal basis:
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li><strong>Consent:</strong> We may process your data if you have given us specific consent to use your personal information for a specific purpose.</li>
                            <li><strong>Legitimate Interests:</strong> We may process your data when it is reasonably necessary to achieve our legitimate business interests.</li>
                            <li><strong>Performance of a Contract:</strong> Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract.</li>
                            <li><strong>Legal Obligations:</strong> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#1c3d42] mb-3">5. Security of Your Information</h2>
                        <p>
                            We use administrative, technical, and physical security measures to help protect your personal information.
                            However, please also remember that we cannot guarantee that the internet itself is 100% secure.
                            Although we will do our best to protect your personal information, transmission of personal information to and from our website is at your own risk.
                            You should only access the services within a secure environment.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#1c3d42] mb-3">6. Contact Us</h2>
                        <p>
                            If you have questions or comments about this policy, you may email us at focussocialmedia0@gmail.com.
                        </p>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}
