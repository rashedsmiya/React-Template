import { Head, Link } from '@inertiajs/react';
import { BookOpen, Check, ChevronRight, Clock, Search } from 'lucide-react';

import UserDashboardLayout from '@/layouts/user-dashboard-layout';

const courseThumbnail = '/assets/figma/user-dashboard/course-thumbnail.png';
const imgMindfulness = '/images/frontend/my-account/courses/mindfulness-foundations.jpg';
const imgHolistic = '/images/frontend/my-account/courses/holistic-nutrition.jpg';
const imgHerbal = '/images/frontend/my-account/courses/herbal-medicine.jpg';

type CourseStatus = 'in_progress' | 'completed';

const statCards = [
    {
        label: 'Total Courses',
        value: '5',
        icon: BookOpen,
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-600',
    },
    {
        label: 'In Progress',
        value: '4',
        icon: Clock,
        iconBg: 'bg-orange-100',
        iconColor: 'text-orange-600',
    },
    {
        label: 'Completed',
        value: '1',
        icon: Check,
        iconBg: 'bg-green-100',
        iconColor: 'text-green-600',
    },
];

const courses = [
    {
        slug: 'mindfulness-meditation-masterclass',
        image: imgMindfulness,
        category: 'Meditation',
        title: 'Mindfulness Meditation Masterclass',
        instructor: 'Dr. Sarah Johnson',
        lessons: '5/12 lessons',
        progress: 45,
        hours: '8 hours',
        lastWatched: 'Last watched 2 hours ago',
        status: 'in_progress' as CourseStatus,
    },
    {
        slug: 'yoga-for-beginners',
        image: imgHolistic,
        category: 'Yoga',
        title: 'Yoga for Beginners',
        instructor: 'Emily Chen',
        lessons: '2/20 lessons',
        progress: 10,
        hours: '12 hours',
        lastWatched: 'Last watched 3 days ago',
        status: 'in_progress' as CourseStatus,
    },
    {
        slug: 'nutrition-fundamentals',
        image: imgHerbal,
        category: 'Nutrition',
        title: 'Nutrition Fundamentals',
        instructor: 'Michael Roberts',
        lessons: '10/10 lessons',
        progress: 100,
        hours: '6 hours',
        lastWatched: 'Last watched 1 week ago',
        status: 'completed' as CourseStatus,
    },
    {
        slug: 'stress-management-techniques',
        image: courseThumbnail,
        category: 'Mental Health',
        title: 'Stress Management Techniques',
        instructor: 'Dr. Sarah Johnson',
        lessons: '5/8 lessons',
        progress: 60,
        hours: '5 hours',
        lastWatched: 'Last watched 1 day ago',
        status: 'in_progress' as CourseStatus,
    },
    {
        slug: 'sleep-optimization-program',
        image: courseThumbnail,
        category: 'Wellness',
        title: 'Sleep Optimization Program',
        instructor: 'Emily Chen',
        lessons: '4/15 lessons',
        progress: 25,
        hours: '10 hours',
        lastWatched: 'Last watched 5 days ago',
        status: 'in_progress' as CourseStatus,
    },
    {
        slug: 'herbal-medicine-basics',
        image: courseThumbnail,
        category: 'Wellness',
        title: 'Herbal Medicine Basics',
        instructor: 'Michael Roberts',
        lessons: '3/10 lessons',
        progress: 30,
        hours: '4 hours',
        lastWatched: 'Last watched 4 days ago',
        status: 'in_progress' as CourseStatus,
    },
];

export default function MyLearningPage() {
    return (
        <UserDashboardLayout>
            <Head title="My Learning" />

            <div className="flex flex-col gap-8">
                {/* Page title + subtitle - Figma 3144-13550 */}
                <div className="flex flex-col gap-2">
                    <h1 className="font-epilogue text-2xl font-semibold leading-9 text-figma-heading-alt">
                        My Learning
                    </h1>
                    <p className="font-epilogue text-base leading-6 text-figma-slate">
                        Track your progress and continue your courses
                    </p>
                </div>

                {/* Summary cards: Total Courses, In Progress, Completed */}
                <div className="grid gap-4 sm:grid-cols-3">
                    {statCards.map((card) => {
                        const Icon = card.icon;
                        return (
                            <div
                                key={card.label}
                                className="flex items-center gap-3 rounded-[14px] border border-figma-input-border bg-white p-4"
                            >
                                <div
                                    className={`flex size-9 shrink-0 items-center justify-center rounded-[10px] ${card.iconBg} ${card.iconColor}`}
                                >
                                    <Icon className="size-5" />
                                </div>
                                <div>
                                    <p className="font-epilogue text-2xl font-bold leading-8 text-figma-heading-alt">
                                        {card.value}
                                    </p>
                                    <p className="font-epilogue text-sm font-normal text-figma-slate">
                                        {card.label}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Search bar + Filter buttons */}
                <div className="flex flex-col gap-4 rounded-[14px] border border-figma-input-border bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-figma-slate" />
                        <input
                            type="search"
                            placeholder="Search courses..."
                            className="h-9 w-full rounded-lg border border-transparent bg-[#f3f3f5] pl-10 pr-3 font-epilogue text-sm text-figma-slate placeholder:text-[#717182] focus:border-figma-gold focus:outline-none focus:ring-1 focus:ring-figma-gold"
                        />
                    </div>
                    <div className="flex gap-2">
                        <button
                            type="button"
                            className="rounded-lg bg-figma-gold px-4 py-2 font-epilogue text-sm font-medium text-white hover:bg-figma-gold-dark"
                        >
                            All
                        </button>
                        <button
                            type="button"
                            className="rounded-lg border border-figma-input-border bg-white px-4 py-2 font-epilogue text-sm font-medium text-figma-heading-alt hover:bg-figma-stone"
                        >
                            In Progress
                        </button>
                        <button
                            type="button"
                            className="rounded-lg border border-figma-input-border bg-white px-4 py-2 font-epilogue text-sm font-medium text-figma-heading-alt hover:bg-figma-stone"
                        >
                            Completed
                        </button>
                    </div>
                </div>

                {/* Course grid - 3 columns, Figma card structure */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {courses.map((course) => (
                        <div
                            key={course.slug}
                            className="flex flex-col overflow-hidden rounded-[14px] border border-figma-input-border bg-white shadow-sm"
                        >
                            <Link
                                href={route('user.my-account.courses.show', course.slug)}
                                className="relative block h-48 overflow-hidden"
                            >
                                <img
                                    src={course.image}
                                    alt=""
                                    className="size-full object-cover"
                                />
                                {course.status === 'completed' && (
                                    <span className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-green-500 px-2.5 py-1 font-epilogue text-xs font-medium text-white">
                                        <Check className="size-3" />
                                        Completed
                                    </span>
                                )}
                            </Link>
                            <div className="flex flex-1 flex-col gap-3 p-4">
                                <span className="inline-flex w-fit rounded-full bg-figma-input-bg px-2 py-1 font-epilogue text-xs font-medium text-figma-slate">
                                    {course.category}
                                </span>
                                <Link
                                    href={route('user.my-account.courses.show', course.slug)}
                                    className="font-epilogue text-base font-semibold leading-6 text-figma-heading-alt hover:underline"
                                >
                                    {course.title}
                                </Link>
                                <p className="font-epilogue text-sm text-figma-slate">
                                    by {course.instructor}
                                </p>
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center justify-between">
                                        <span className="font-epilogue text-xs text-figma-slate">
                                            {course.lessons}
                                        </span>
                                        <span className="font-epilogue text-xs text-figma-slate">
                                            {course.progress}%
                                        </span>
                                    </div>
                                    <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                                        <div
                                            className={`h-full rounded-full ${course.status === 'completed' ? 'bg-green-500' : 'bg-figma-gold'}`}
                                            style={{ width: `${course.progress}%` }}
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between text-xs text-[#6a7282]">
                                    <span className="flex items-center gap-1.5">
                                        <Clock className="size-3" />
                                        {course.hours}
                                    </span>
                                    <span>{course.lastWatched}</span>
                                </div>
                                <Link
                                    href={
                                        course.status === 'completed'
                                            ? `${route('user.my-learning.course.lesson', course.slug)}?show_completed=1`
                                            : route('user.my-learning.course.lesson', course.slug)
                                    }
                                    className={`mt-auto flex h-9 w-full items-center justify-center rounded-lg font-epilogue text-sm font-medium ${course.status === 'completed' ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-figma-gold text-white hover:bg-figma-gold-dark'}`}
                                >
                                    {course.status === 'completed'
                                        ? 'Review Course'
                                        : 'Continue Learning'}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-center gap-2 pt-4">
                    <Link
                        href="#"
                        className="flex size-9 items-center justify-center rounded-lg bg-figma-gold font-epilogue text-sm font-medium text-black"
                    >
                        1
                    </Link>
                    <Link
                        href="#"
                        className="flex size-9 items-center justify-center rounded-lg border border-figma-input-border bg-white font-epilogue text-sm font-medium text-figma-heading-alt hover:bg-figma-stone"
                    >
                        2
                    </Link>
                    <Link
                        href="#"
                        className="flex size-9 items-center justify-center rounded-lg border border-figma-input-border bg-white font-epilogue text-sm font-medium text-figma-heading-alt hover:bg-figma-stone"
                    >
                        3
                    </Link>
                    <span className="px-2 font-epilogue text-sm text-figma-slate">...</span>
                    <Link
                        href="#"
                        className="flex size-9 items-center justify-center rounded-lg border border-figma-input-border bg-white font-epilogue text-sm font-medium text-figma-heading-alt hover:bg-figma-stone"
                    >
                        <ChevronRight className="size-5" />
                    </Link>
                </div>
            </div>
        </UserDashboardLayout>
    );
}
