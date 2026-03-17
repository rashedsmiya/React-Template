import { Head } from '@inertiajs/react';


import HeroSection from '@/components/frontend/home/hero-section';
import FrontendLayout from '@/layouts/frontend-layout';
import HowItWorksSection from '@/components/frontend/home/how-it-works-section';
import BringPracticeOnlineSection from '@/components/frontend/home/bring-practice-online-section';
import CategoriesSection from '@/components/frontend/home/categories-section';

export default function Home() {
    return (
        <FrontendLayout>
            <Head title="Home Page" />

            <HeroSection />
            <HowItWorksSection />
            <BringPracticeOnlineSection />
            <CategoriesSection />
             
            {/* <PractitionerCtaSection /> */}
        </FrontendLayout>
    );
}