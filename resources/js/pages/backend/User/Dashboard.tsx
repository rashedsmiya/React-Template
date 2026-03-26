import { Head, Link, useForm, usePage } from '@inertiajs/react';
import {
    Bell,
    BookOpen,
    ChevronRight,
    Clock,
    Package,
    Play,
    RefreshCw,
    Users,
} from 'lucide-react';

import UserDashboardLayout from '@/layouts/user-dashboard-layout';
import { type SharedData } from '@/types';

// TODO: Replace with actual image when available
const figmaImages = {
    courseThumbnail: '/assets/images/default_avatar.jpg',
};

const statCards = [
    {
        label: 'Enrolled Courses',
        value: '5',
        sub: '2 completed',
        subColor: 'text-green-600',
        icon: BookOpen,
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-600',
    },
    {
        label: 'Upcoming Sessions',
        value: '3',
        sub: 'Next: Tomorrow',
        subColor: 'text-figma-slate',
        icon: Users,
        iconBg: 'bg-purple-100',
        iconColor: 'text-purple-600',
    },
    {
        label: 'Products Owned',
        value: '8',
        sub: null,
        subColor: '',
        icon: Package,
        iconBg: 'bg-orange-100',
        iconColor: 'text-orange-600',
    },
    {
        label: 'Learning Time',
        value: '24h',
        sub: 'This month',
        subColor: 'text-figma-slate',
        icon: Clock,
        iconBg: 'bg-figma-cream',
        iconColor: 'text-figma-gold',
    },
];

const continueWatching = [
    {
        title: 'Mindfulness Meditation Masterclass',
        author: 'Dr. Sarah Johnson',
        progress: 45,
        next: 'Lesson 5: Advanced Breathing Techniques',
    },
    {
        title: 'Yoga for Beginners',
        author: 'Emily Chen',
        progress: 10,
        next: 'Lesson 2: Sun Salutations',
    },
];

const upcomingConsultations = [
    {
        title: 'Nutrition Consultation',
        with: 'Dr. Sarah Johnson',
        when: 'Tomorrow',
        time: '2:00 PM',
        duration: '60 min',
    },
    {
        title: 'Career Coaching',
        with: 'Michael Brown',
        when: 'Mar 16',
        time: '10:00 AM',
        duration: '45 min',
    },
];

export default function UserDashboard() {
    const { auth, userRole } = usePage<SharedData & { userRole?: number }>().props;
    const userName = auth.user?.name ?? 'User';
    const roleValue = userRole ?? 2; // Default to USER (2) if not set
    const isAdmin = roleValue === 1; // 1 = ADMIN
    const { post, processing } = useForm({});

    const handleRoleSwitch = () => {
        post(route('user.role.switch'));
    };

    const switchButtonLabel = isAdmin ? 'Switch to User' : 'Switch to Admin';

    // Get user initials from name
    const userInitials = userName
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);

    return (
        <UserDashboardLayout>
            <Head title="Dashboard" />

            <div className="flex flex-col gap-8">
                {/* Header: Welcome + actions */}
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="font-epilogue text-2xl font-medium leading-9 text-figma-heading-alt">
                            Welcome back, {userName}!
                        </h1>
                        <p className="font-epilogue text-base leading-6 text-figma-slate">
                            Continue your wellness journey
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            onClick={handleRoleSwitch}
                            disabled={processing}
                            className="inline-flex items-center gap-2 rounded-lg border border-figma-gold bg-transparent px-3.5 py-2 font-epilogue text-sm font-medium text-figma-gold transition-colors hover:bg-figma-cream disabled:opacity-60"
                        >
                            <RefreshCw className="size-4 shrink-0 text-primary-500" />
                            {switchButtonLabel}
                        </button>
                        <button
                            type="button"
                            className="relative flex size-9 items-center justify-center rounded-full text-figma-slate hover:bg-figma-stone"
                            aria-label="Notifications"
                        >
                            <Bell className="size-5" />
                            <span className="absolute right-1 top-1 size-2 rounded-full bg-red-500" />
                        </button>
                        <div className="flex size-10 items-center justify-center rounded-full bg-linear-to-b from-figma-gold to-figma-gold-dark font-epilogue text-xs font-bold text-white">
                            {userInitials}
                        </div>
                    </div>
                </div>

                {/* Stat cards - 4 cols */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {statCards.map((card) => {
                        const Icon = card.icon;
                        return (
                            <div
                                key={card.label}
                                className="flex flex-col gap-6 rounded-[14px] border border-figma-input-border bg-white p-6 shadow-sm"
                            >
                                <div className="flex h-9 items-center justify-between">
                                    <div
                                        className={`flex size-9 items-center justify-center rounded-[10px] ${card.iconBg} ${card.iconColor}`}
                                    >
                                        <Icon className="size-5" />
                                    </div>
                                </div>
                                <p className="font-epilogue text-3xl font-semibold leading-none text-figma-heading-alt">
                                    {card.value}
                                </p>
                                <p className="text-sm leading-5 text-figma-slate">{card.label}</p>
                                {card.sub && (
                                    <p
                                        className={`text-xs leading-4 ${card.subColor || 'text-figma-slate'}`}
                                    >
                                        {card.sub}
                                    </p>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Continue Watching */}
                <div className="flex flex-col gap-5 rounded-[14px] border border-figma-input-border bg-white p-6 shadow-sm">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <h2 className="font-epilogue text-xl font-semibold leading-7 text-figma-heading-alt">
                            Continue Watching
                        </h2>
                        <Link
                            href="#"
                            className="inline-flex items-center gap-1 font-epilogue text-sm font-medium text-figma-gold hover:underline"
                        >
                            View All
                            <ChevronRight className="size-4" />
                        </Link>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                        {continueWatching.map((item) => (
                            <div
                                key={item.title}
                                className="flex gap-4 rounded-[10px] bg-figma-stone p-4"
                            >
                                <div className="relative size-[128px] shrink-0 overflow-hidden rounded-[10px] bg-gray-200">
                                    <img
                                        src={figmaImages.courseThumbnail}
                                        alt=""
                                        className="size-full object-cover"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                                        <div className="flex size-10 items-center justify-center rounded-full bg-white/90">
                                            <Play className="size-5 fill-figma-heading-alt text-figma-heading-alt" />
                                        </div>
                                    </div>
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="font-epilogue text-sm font-medium text-figma-heading-alt">
                                        {item.title}
                                    </p>
                                    <p className="text-xs leading-4 text-figma-slate">
                                        {item.author}
                                    </p>
                                    <div className="mt-2">
                                        <p className="text-xs text-figma-slate">
                                            {item.progress}% complete
                                        </p>
                                        <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-gray-200">
                                            <div
                                                className="h-full rounded-full bg-figma-gold"
                                                style={{ width: `${item.progress}%` }}
                                            />
                                        </div>
                                    </div>
                                    <p className="mt-2 text-xs text-figma-slate">
                                        Next: {item.next}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Upcoming Consultations */}
                <div className="flex flex-col gap-5 rounded-[14px] border border-figma-input-border bg-white p-6 shadow-sm">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <h2 className="font-epilogue text-xl font-semibold leading-7 text-figma-heading-alt">
                            Upcoming Consultations
                        </h2>
                        <Link
                            href="#"
                            className="inline-flex items-center gap-1 font-epilogue text-sm font-medium text-figma-gold hover:underline"
                        >
                            View All
                            <ChevronRight className="size-4" />
                        </Link>
                    </div>
                    <div className="flex flex-col gap-3">
                        {upcomingConsultations.map((item) => (
                            <div
                                key={item.title}
                                className="flex flex-wrap items-center gap-3 rounded-[10px] bg-figma-stone p-3 sm:flex-nowrap"
                            >
                                <div className="flex size-8 shrink-0 items-center justify-center rounded-[10px] bg-purple-100 text-purple-600">
                                    <Users className="size-4" />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="font-epilogue text-sm font-medium text-figma-heading-alt">
                                        {item.title}
                                    </p>
                                    <p className="text-xs text-figma-slate">
                                        with {item.with}
                                    </p>
                                    <p className="mt-0.5 text-xs text-figma-slate">
                                        {item.when} • {item.time} • {item.duration}
                                    </p>
                                </div>
                                <Link
                                    href="#"
                                    className="shrink-0 rounded-lg border border-figma-input-border bg-figma-warm-white px-3 py-1.5 font-epilogue text-xs font-medium text-figma-heading hover:bg-figma-stone"
                                >
                                    View Details
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </UserDashboardLayout>
    );
}
