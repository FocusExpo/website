import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <span className="text-white font-bold text-xl tracking-wider">FOCUS</span>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
                            <a href="#speakers" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Speakers</a>
                            <a href="#schedule" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Schedule</a>
                            <a href="#venue" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Venue</a>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <button className="bg-white text-black px-4 py-2 rounded-full font-medium text-sm hover:bg-gray-200 transition-colors">
                            Get Tickets
                        </button>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90">
                        <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
                        <a href="#speakers" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Speakers</a>
                        <a href="#schedule" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Schedule</a>
                        <a href="#venue" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Venue</a>
                        <button className="w-full mt-4 bg-white text-black px-4 py-2 rounded-full font-medium text-sm hover:bg-gray-200 transition-colors">
                            Get Tickets
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
