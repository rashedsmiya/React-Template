import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { CheckCircle2, Shield, Star } from 'lucide-react';

const fadeUp = (delay: number = 0) => ({
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay, ease: 'easeOut' as const },
    },
});

const badgeContainer = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15, delayChildren: 1.2 },
    },
};

const badgeItem = {
    hidden: { opacity: 0, y: 15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: 'easeOut' as const },
    },
};

export default function HeroSection() {
    const badges = [
        { icon: Shield, label: 'Secure Payments' },
        { icon: CheckCircle2, label: 'Verified Practitioners' },
        { icon: Star, label: 'Trusted Reviews' },
    ];

    return (
        <section className="relative flex h-[90vh] items-center justify-center overflow-hidden bg-slate-900">
            <motion.div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url(/assets/images/home/bg_hero.png)',
                }}
                initial={{ scale: 1.15, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.8, ease: 'easeOut' }}
            />

            <div className="absolute inset-0 bg-black/20" />

            <div className="relative z-10 mx-auto max-w-4xl px-4 py-20 text-center">
                <motion.h1
                    className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp(0.3)}
                >
                    The Meeting Point For <br className="hidden sm:block" />
                    Holistic Well-Being
                </motion.h1>

                <motion.p
                    className="mb-10 text-base text-white/90 md:text-lg"
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp(0.6)}
                >
                    One platform for holistic practitioners and wellness seekers. Consultations, courses,
                    <br className="hidden sm:block" />
                    products, and community - all in one place.
                </motion.p>

                <motion.div
                    className="mb-14"
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp(0.9)}
                >
                    <Link
                        href="#"
                        className="inline-block rounded-full bg-primary-500 px-10 py-4 text-base font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-primary-600 hover:shadow-2xl"
                    >
                        Start Your Journey
                    </Link>
                </motion.div>

                <motion.div
                    className="flex flex-wrap items-center justify-center gap-8 text-sm text-white md:gap-10"
                    initial="hidden"
                    animate="visible"
                    variants={badgeContainer}
                >
                    {badges.map(({ icon: Icon, label }) => (
                        <motion.div key={label} className="flex items-center gap-2" variants={badgeItem}>
                            <Icon className="h-4 w-4" strokeWidth={2} />
                            <span className="font-medium">{label}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
