import FadeInSection from './fade-in-section';

const stats = [
    { value: '100+', label: 'Practitioners' },
    { value: '500+', label: 'Sessions' },
];

export default function TestimonialSection() {
    return (
        <FadeInSection>
            <section className="bg-cream py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <FadeInSection delay={80}>
                        <div className="mx-auto max-w-3xl text-center">
                            {/* Quote icon */}
                            <div className="mb-8 flex justify-center">
                                <svg
                                    className="h-14 w-14 text-primary-500"
                                    viewBox="0 0 48 48"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12 34C12 34 8 30 8 22C8 14 13 8 20 8V12C16 12 13 16 13 22H20V34H12ZM28 34C28 34 24 30 24 22C24 14 29 8 36 8V12C32 12 29 16 29 22H36V34H28Z" />
                                </svg>
                            </div>

                            {/* Quote */}
                            <blockquote className="mb-8 text-xl font-medium leading-relaxed text-figma-heading-alt md:text-2xl">
                                "I've found incredible support for my personal growth. The quality of the professionals is excellent."
                            </blockquote>

                            {/* Author */}
                            <p className="mb-12 text-base font-semibold text-primary-500">
                                Olivia R., user
                            </p>

                            {/* Stats */}
                            <div className="flex items-center justify-center gap-16">
                                {stats.map(({ value, label }) => (
                                    <div key={label} className="text-center">
                                        <p className="text-4xl font-bold text-figma-heading-alt md:text-5xl">{value}</p>
                                        <p className="mt-1 text-base text-gray-500">{label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeInSection>
                </div>
            </section>
        </FadeInSection>
    );
}
