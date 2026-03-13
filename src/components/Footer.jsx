import { Link } from 'react-router-dom';
import FocusLogo from './FocusLogo';
const imgLayer10 = "/assets/imgLayer10.svg";
const imgGroup3 = "/assets/imgGroup3.svg";
const imgGroup4 = "/assets/imgGroup4.svg";

export default function Footer() {
    return (
        <div data-lenis-prevent="true" className="bg-[#1c3d42] flex flex-col gap-12 items-center pb-12 pt-16 px-4 sm:px-6 md:px-12 lg:px-24 relative w-full overflow-hidden">
            {/* Background Texture */}
            <div className="absolute h-full w-full left-0 top-0 overflow-hidden pointer-events-none fade-in">
                <img alt="" className="block w-full h-full object-cover opacity-30" src={imgLayer10} />
            </div>

            <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

                {/* Brand Column */}
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                        <div className="w-56 h-auto">
                            <FocusLogo className="w-full h-full text-white" />
                        </div>
                    </div>
                    <p className="font-['Museo_Sans:500',sans-serif] text-[#e5e5e3] text-sm leading-relaxed max-w-xs">
                        Aligning direction through the lens of faith. A professional intersection of Islamic values, mental wellness, and personal growth for Muslim leaders.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="flex flex-col gap-4">
                    <h4 className="font-['Museo_Sans:900',sans-serif] text-[#6bb5c1] text-sm tracking-wider uppercase">
                        Quick Links
                    </h4>
                    <div className="flex flex-col gap-2">
                        <a href="#about" className="font-['Museo_Sans:500',sans-serif] text-[#f2f2f1]/80 hover:text-[#dd664e] text-sm transition-colors">About</a>
                        <a href="#speakers" className="font-['Museo_Sans:500',sans-serif] text-[#f2f2f1]/80 hover:text-[#dd664e] text-sm transition-colors">Speakers</a>
                        <a href="#agenda" className="font-['Museo_Sans:500',sans-serif] text-[#f2f2f1]/80 hover:text-[#dd664e] text-sm transition-colors">Agenda</a>
                        <a href="#location" className="font-['Museo_Sans:500',sans-serif] text-[#f2f2f1]/80 hover:text-[#dd664e] text-sm transition-colors">Location</a>
                        <a href="#register" className="font-['Museo_Sans:500',sans-serif] text-[#f2f2f1]/80 hover:text-[#dd664e] text-sm transition-colors">Register</a>
                    </div>
                </div>

                {/* Contact Column (Updated/Removed Subscribe) */}
                <div className="flex flex-col gap-4">
                    <h4 className="font-['Museo_Sans:900',sans-serif] text-[#6bb5c1] text-sm tracking-wider uppercase">
                        Contact Us
                    </h4>
                    <p className="font-['Museo_Sans:500',sans-serif] text-[#e5e5e3] text-sm">
                        focussocialmedia0@gmail.com
                    </p>
                    <div className="flex gap-4 mt-2">
                        {/* Facebook */}
                        <a href="https://facebook.com/getfocused2026" target="_blank" rel="noopener noreferrer" className="text-[#e5e5e3]/80 hover:text-[#dd664e] transition-colors" aria-label="Facebook">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
                        </a>
                        {/* Instagram */}
                        <a href="https://www.instagram.com/getfocused2026/" target="_blank" rel="noopener noreferrer" className="text-[#e5e5e3]/80 hover:text-[#dd664e] transition-colors" aria-label="Instagram">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 7C9.239 7 7 9.239 7 12c0 2.761 2.239 5 5 5s5-2.239 5-5c0-2.761-2.239-5-5-5zm0 8.166a3.166 3.166 0 100-6.332 3.166 3.166 0 000 6.332z M17.538 5.436a1.22 1.22 0 100 2.44 1.22 1.22 0 000-2.44z M11.998 2c-2.716 0-3.056.011-4.122.06-1.065.049-1.79.218-2.427.465a4.903 4.903 0 00-1.772 1.153 4.903 4.903 0 00-1.153 1.772c-.247.637-.416 1.362-.465 2.427C2.01 8.941 2 9.282 2 11.998s.011 3.057.06 4.123c.049 1.065.218 1.79.465 2.427a4.903 4.903 0 001.153 1.772 4.903 4.903 0 001.772 1.153c.637.247 1.362.416 2.427.465 1.066.049 1.405.06 4.122.06s3.056-.011 4.122-.06c1.065-.049 1.79-.218 2.427-.465a4.903 4.903 0 001.772-1.153 4.903 4.903 0 001.153-1.772c.247-.637.416-1.362.465-2.427.049-1.066.06-1.406.06-4.123s-.011-3.056-.06-4.122c-.049-1.065-.218-1.79-.465-2.427a4.903 4.903 0 00-1.153-1.772 4.903 4.903 0 00-1.772-1.153c-.637-.247-1.362-.416-2.427-.465C15.054 2.011 14.714 2 11.998 2zm0 1.802c2.67 0 2.986.01 4.04.058 1.05.048 1.62.224 2.001.372.505.197.865.431 1.243.809.378.378.613.738.809 1.243.148.381.324.951.372 2.001.048 1.054.058 1.37.058 4.04 0 2.67-.01 2.986-.058 4.04-.048 1.05-.224 1.62-.372 2.001-.197.505-.431.865-.809 1.243-.378.378-.738.613-1.243.809-.381.148-.951.324-2.001.372-1.054.048-1.37.058-4.04.058-2.67 0-2.986-.01-4.04-.058-1.05-.048-1.62-.224-2.001-.372-.505-.197-.865-.431-1.243-.809-.378-.378-.613-.738-.809-1.243-.148-.381-.324-.951-.372-2.001-.048-1.054-.058-1.37-.058-4.04 0-2.67.01-2.986.058-4.04.048-1.05.224-1.62.372-2.001.197-.505.431-.865.809-1.243.378-.378.738-.613 1.243-.809.381-.148.951-.324 2.001-.372 1.054-.048 1.37-.058 4.04-.058z" /></svg>
                        </a>
                        {/* LinkedIn */}
                        <a href="https://linkedin.com/company/getfocused2026" target="_blank" rel="noopener noreferrer" className="text-[#e5e5e3]/80 hover:text-[#dd664e] transition-colors" aria-label="LinkedIn">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                        </a>
                        {/* X (Twitter) */}
                        <a href="https://x.com/getfocused2026" target="_blank" rel="noopener noreferrer" className="text-[#e5e5e3]/80 hover:text-[#dd664e] transition-colors" aria-label="X (Twitter)">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                        </a>
                        {/* YouTube */}
                        <a href="https://youtube.com/@getfocused2026" target="_blank" rel="noopener noreferrer" className="text-[#e5e5e3]/80 hover:text-[#dd664e] transition-colors" aria-label="YouTube">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.083 0 12 0 12s0 3.917.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.917 24 12 24 12s0-3.917-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="w-full max-w-7xl relative z-10 border-t border-[#2a5359] pt-8 mt-4 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="font-['Museo_Sans:500',sans-serif] text-[#e5e5e3] text-sm text-center md:text-left">
                    © 2026 FOCUS EXPO. All rights reserved.
                </p>
                <div className="flex gap-4">
                    <Link to="/privacy-policy" className="font-['Museo_Sans:500',sans-serif] text-[#e5e5e3]/60 hover:text-[#dd664e] text-xs transition-colors">Privacy Policy</Link>
                    <Link to="/terms-of-service" className="font-['Museo_Sans:500',sans-serif] text-[#e5e5e3]/60 hover:text-[#dd664e] text-xs transition-colors">Terms of Service</Link>
                </div>
            </div>
        </div>
    );
}
