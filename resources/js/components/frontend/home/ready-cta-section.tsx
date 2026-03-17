import { Link } from '@inertiajs/react';

export default function ReadyCtaSection() {
    return (
        <section className="py-16 md:py-20">
            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-6xl rounded-3xl bg-primary-500 px-8 py-16 text-center md:px-12">
                    <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                        Ready to Start Your Wellness <br /> Journey?
                    </h2>
                    <p className="mb-8 text-base text-white md:text-lg lg:text-xl">
                        Join thousands of practitioners and wellness seekers already <br /> transforming lives on our
                        platform.
                    </p>
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Link
                            href="#"
                            className="inline-block rounded-full bg-white px-8 py-3 text-base font-medium text-gray-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-gray-50"
                        >
                            Explore the services
                        </Link>
                        <Link
                            href="#"
                            className="inline-block rounded-full border-2 border-white px-8 py-3 text-base font-medium text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                        >
                            Get Started Now
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
