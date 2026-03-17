import { Link } from '@inertiajs/react';
import { UserPlus, LayoutDashboard, TrendingUp } from 'lucide-react';

import FadeInSection from './fade-in-section';

const steps = [
    {
        title: 'Register and create your profile',
        description:
            'Sign up for free, build your professional profile, and list your services: consulting, courses, or physical and digital products.',
        icon: UserPlus,
    },
    {
        title: 'Manage your business',
        description:
            'Use the dashboard to manage bookings, calendars, customer messages, and your sales. All in one place, hassle-free.',
        icon: LayoutDashboard,
    },
    {
        title: 'Earn and grow',
        description:
            'Receive payments securely. Keep 90% of every sale. We only take a 10% commission, and no fixed costs.',
        icon: TrendingUp,
    },
];

export default function BringPracticeOnlineSection() {
    return (
        <FadeInSection>
            <section className="bg-slate-900 py-16 md:py-20">
                <div className="container mx-auto px-4">
                    <FadeInSection delay={80}>
                        <div className="mb-12 text-center">
                            <div className="mb-4 inline-flex rounded-full border border-primary-300 bg-primary-100 px-4 py-2.5 text-sm font-medium text-primary-500">
                                For Holistic practitioners.
                            </div>  
                            <h2 className="mb-4 text-3xl font-bold leading-tight text-black md:text-4xl lg:text-5xl">
                                Bring Your Practice Online In
                                <br />
                                3 Simple Steps
                            </h2>
                            <p className="mx-auto max-w-xl text-base text-gray-400">
                                Your trusted partner in holistic wellness with everything you need in one place.
                            </p>
                        </div>
                    </FadeInSection>

                    <div className="mb-12 grid gap-6 sm:grid-cols-3">
                        {steps.map((step, index) => (
                            <FadeInSection key={step.title} delay={index * 100 + 120}>
                                <div className="flex flex-col rounded-3xl border border-gray-200/10 bg-cream p-8 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">
                                    <div className="mb-5 flex justify-center">
                                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-500">
                                            <step.icon className="h-7 w-7" strokeWidth={2} />
                                        </div>
                                    </div>
                                    <h3 className="mb-3 text-left text-lg font-bold text-figma-heading-alt">
                                        {step.title}
                                    </h3>
                                    <p className="text-left text-sm leading-relaxed text-gray-600">
                                        {step.description}
                                    </p>
                                </div>
                            </FadeInSection>
                        ))}
                    </div>

                    <FadeInSection delay={400}>
                        <div className="flex justify-center">
                            <Link
                                href="#"
                                className="inline-block rounded-full bg-primary-500 px-8 py-3.5 text-sm font-medium uppercase tracking-wide text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-600 hover:shadow-lg"
                            >
                                Start as Practitioners - It&apos;s Free
                            </Link>
                        </div>
                    </FadeInSection>
                </div>
            </section>
        </FadeInSection>
    );
}
