import { Mic, Users, Zap, Calendar } from 'lucide-react';

const features = [
    {
        name: 'World-Class Speakers',
        description: 'Learn from the industry leaders who are shaping the future of digital design and development.',
        icon: Mic,
    },
    {
        name: 'Networking',
        description: 'Connect with thousands of peers, potential co-founders, and future collaborators.',
        icon: Users,
    },
    {
        name: 'Workshops',
        description: 'Deep dive into specific technologies and design systems with hands-on sessions.',
        icon: Zap,
    },
    {
        name: 'After Parties',
        description: 'Unwind and celebrate with exclusive events and entertainment throughout the conference.',
        icon: Calendar,
    },
];

export default function Features() {
    return (
        <div className="py-24 bg-zinc-900" id="features">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base text-purple-400 font-semibold tracking-wide uppercase">Why Attend</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                        A better way to build together
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
                        Experience three days of packed content, engagement, and fun.
                    </p>
                </div>

                <div className="mt-20">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-white">{feature.name}</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-400">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}
