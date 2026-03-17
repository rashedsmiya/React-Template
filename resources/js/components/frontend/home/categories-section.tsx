import { Link } from '@inertiajs/react';

import FadeInSection from './fade-in-section';

const categories = [
    {
        name: 'Mindfulness',
        image: '/assets/images/home/Frame (1).svg',
        emoji: '🧘',
    },
    {
        name: 'Personal Growth',
        image: '/assets/images/home/Frame (2).svg',
        emoji: '🌱',
    },
    {
        name: 'Dowsing',
        image: '/assets/images/home/Frame (3).svg',
        emoji: '🖐️',
    },
    {
        name: 'Herbalism',
        image: '/assets/images/home/Frame (4).svg',
        emoji: '🌿',
    },
    {
        name: 'Crystal Therapy',
        image: '/assets/images/home/Frame (5).svg',
        emoji: '💎',
    },
    {
        name: 'Tarot',
        image: '/assets/images/home/Frame.svg',
        emoji: '🃏',
    },
];

export default function CategoriesSection() {
    return (
        <FadeInSection>
            <section className="bg-cream py-16 md:py-20">
                <div className="container mx-auto px-4">
                    <FadeInSection delay={60}>
                        <h2 className="mb-12 text-3xl font-bold text-figma-heading-alt md:text-4xl lg:text-5xl">
                            Categories
                        </h2>
                    </FadeInSection>
                    
                    <div className="mb-12 grid grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-8">
                        {categories.map(({ name, image, emoji }, index) => (
                            <FadeInSection key={name} delay={index * 80 + 100}>
                                <Link
                                    href="#"
                                    className="group flex flex-col items-center rounded-xl bg-white p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:p-8"
                                >
                                    <div className="mb-4 flex h-[200px] w-[200px] shrink-0 items-center justify-center">
                                        <img
                                            src={image}
                                            alt={name}
                                            className="h-[200px] w-[200px] object-contain"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.style.display = 'none';
                                                target.nextElementSibling?.classList.remove('hidden');
                                            }}
                                        />
                                        <span className="hidden text-4xl">{emoji}</span>
                                    </div>
                                    <span className="text-base font-semibold text-figma-heading-alt sm:text-lg">
                                        {name}
                                    </span>
                                </Link>
                            </FadeInSection>
                        ))}
                    </div>

                    <FadeInSection delay={550}>
                        <div className="flex justify-center">
                            <Link
                                href="#"
                                className="inline-block rounded-xl bg-primary-500 px-8 py-3.5 text-sm font-medium uppercase tracking-wide text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-600 hover:shadow-lg"
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
