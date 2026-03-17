import { Link } from '@inertiajs/react';

import FadeInSection from './fade-in-section';

const operators = [
    {
        name: 'Laura Bianchi',
        role: 'Yoga Instructor',
        avatar: '/assets/images/home/operator-avatar.webp',
    },
    {
        name: 'Laura Bianchi',
        role: 'Yoga Instructor',
        avatar: '/assets/images/home/operator-avatar.webp',
    },
    {
        name: 'Laura Bianchi',
        role: 'Yoga Instructor',
        avatar: '/assets/images/home/operator-avatar.webp',
    },
    {
        name: 'Laura Bianchi',
        role: 'Yoga Instructor',
        avatar: '/assets/images/home/operator-avatar.webp',
    },
];

export default function MeetOperatorsSection() {
    return (
        <FadeInSection>
            <section className="bg-white py-16 md:py-20">
                <div className="container mx-auto px-4">
                    <FadeInSection delay={80}>
                        <h2 className="mb-12 text-center text-3xl font-bold text-figma-heading-alt md:text-4xl lg:text-5xl">Meet our Operators</h2>
                    </FadeInSection>

                    <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {operators.map(({ name, role, avatar }, index) => (
                            <FadeInSection key={name + index} delay={index * 100 + 120}>
                                <div className="rounded-3xl border-2 border-primary-500 bg-white p-6 text-center shadow-sm transition-transform duration-500 hover:-translate-y-1 hover:shadow-2xl">
                                    <div className="mb-4 flex justify-center">
                                        <div className="h-20 w-20 overflow-hidden rounded-full bg-gray-200">
                                            <img src={avatar} alt={name} className="h-full w-full object-cover" />
                                        </div>
                                    </div>
                                    <h3 className="mb-1 text-lg font-bold text-slate-900">{name}</h3>
                                    <p className="mb-2 text-base text-primary-500">{role}</p>
                                    <Link href="#" className="text-sm font-bold text-primary-600 transition-colors duration-300 hover:text-primary-700">
                                        Visit Profile
                                    </Link>
                                </div>
                            </FadeInSection>
                        ))}
                    </div>

                    <FadeInSection delay={500}>
                        <div className="text-center">
                            <Link
                                href="#"
                                className="inline-block rounded-full bg-primary-500 px-8 py-3 text-base font-medium text-white shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:bg-primary-600"
                            >
                                View all practitioners
                            </Link>
                        </div>
                    </FadeInSection>
                </div>
            </section>
        </FadeInSection>
    );
}
