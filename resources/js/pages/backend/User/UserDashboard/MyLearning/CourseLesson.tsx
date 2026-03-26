import { Head, Form, Link, usePage } from '@inertiajs/react';
import { ArrowLeft, Check, Clock, FileText, HelpCircle, Lock, Star, Video } from 'lucide-react';
import { useEffect, useState } from 'react';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import InputError from '@/components/input-error';
import UserDashboardLayout from '@/layouts/user-dashboard-layout';

const REVIEW_MAX_LENGTH = 1000;
const REVIEW_MIN_LENGTH = 20;

const ratingLabels = [
    { name: 'overall_rating', title: 'Overall Rating', description: 'Your overall experience with the course' },
    { name: 'content_quality', title: 'Content Quality', description: 'Quality and relevance of the course material' },
    { name: 'instructor_performance', title: 'Instructor Performance', description: 'Teaching style and clarity of instruction' },
    { name: 'value_for_money', title: 'Value for Money', description: 'Whether the course met your expectations' },
];

type LessonStatus = 'completed' | 'current' | 'upcoming' | 'locked';
type LessonType = 'video' | 'reading' | 'quiz';

const defaultLessons = [
    { id: 1, title: 'Introduction to Mindfulness', duration: '15 min', type: 'video' as LessonType, status: 'completed' as LessonStatus },
    { id: 2, title: 'Basic Breathing Techniques', duration: '20 min', type: 'video' as LessonType, status: 'completed' as LessonStatus },
    { id: 3, title: 'Understanding Your Mind', duration: '10 min', type: 'reading' as LessonType, status: 'completed' as LessonStatus },
    { id: 4, title: 'Quiz: Mindfulness Basics', duration: '5 min', type: 'quiz' as LessonType, status: 'completed' as LessonStatus },
    { id: 5, title: 'Body Scan Meditation', duration: '25 min', type: 'video' as LessonType, status: 'completed' as LessonStatus },
    { id: 6, title: 'Advanced Breathing Techniques', duration: '30 min', type: 'video' as LessonType, status: 'current' as LessonStatus },
    { id: 7, title: 'Mindful Walking Practice', duration: '20 min', type: 'video' as LessonType, status: 'upcoming' as LessonStatus },
    { id: 8, title: 'Dealing with Distractions', duration: '18 min', type: 'video' as LessonType, status: 'upcoming' as LessonStatus },
    { id: 9, title: 'Mid-Course Assessment', duration: '15 min', type: 'quiz' as LessonType, status: 'upcoming' as LessonStatus },
    { id: 10, title: 'Advanced Meditation Techniques', duration: '35 min', type: 'video' as LessonType, status: 'locked' as LessonStatus },
    { id: 11, title: 'Creating a Daily Practice', duration: '20 min', type: 'reading' as LessonType, status: 'locked' as LessonStatus },
    { id: 12, title: 'Final Assessment', duration: '30 min', type: 'quiz' as LessonType, status: 'locked' as LessonStatus },
];

function buildLessons(allCompleted: boolean): typeof defaultLessons {
    if (!allCompleted) {
        return defaultLessons;
    }
    return defaultLessons.map((lesson) => ({
        ...lesson,
        status: 'completed' as LessonStatus,
    }));
}

function LessonTypeIcon({ type }: { type: LessonType }) {
    switch (type) {
        case 'video':
            return <Video className="size-4 text-figma-slate" />;
        case 'reading':
            return <FileText className="size-4 text-figma-slate" />;
        case 'quiz':
            return <HelpCircle className="size-4 text-figma-slate" />;
        default:
            return <Video className="size-4 text-figma-slate" />;
    }
}

type CourseData = { title: string; instructor: string; image: string };

function StarRating({ name, value, onChange }: { name: string; value: number; onChange: (v: number) => void }) {
    return (
        <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
                <button
                    key={star}
                    type="button"
                    aria-label={`${star} star${star > 1 ? 's' : ''}`}
                    onClick={() => onChange(star)}
                    className="focus:outline-none"
                >
                    <Star
                        className={`size-8 shrink-0 ${star <= value ? 'fill-figma-gold text-figma-gold' : 'text-figma-input-border'}`}
                    />
                </button>
            ))}
            <input type="hidden" name={name} value={value} readOnly />
        </div>
    );
}

function LessonRow({ lesson }: { lesson: (typeof defaultLessons)[0] }) {
    const isLocked = lesson.status === 'locked';
    const isCurrent = lesson.status === 'current';
    const isCompleted = lesson.status === 'completed';

    return (
        <div
            className={`flex gap-3 border-b border-gray-100 py-4 ${isCurrent ? 'bg-figma-cream' : ''}`}
        >
            <div
                className={`flex size-8 shrink-0 items-center justify-center rounded-full ${isCompleted ? 'bg-green-100' : isCurrent ? 'bg-figma-gold' : 'bg-gray-100'}`}
            >
                {isCompleted ? (
                    <Check className="size-4 text-green-600" />
                ) : isLocked ? (
                    <Lock className="size-4 text-gray-400" />
                ) : (
                    <span
                        className={`font-epilogue text-xs font-medium ${isCurrent ? 'text-white' : 'text-gray-500'}`}
                    >
                        {lesson.id}
                    </span>
                )}
            </div>
            <div className="min-w-0 flex-1">
                <p
                    className={`font-epilogue text-sm font-medium ${isCurrent ? 'text-figma-gold' : 'text-figma-heading-alt'}`}
                >
                    {lesson.title}
                </p>
                <div className="mt-1 flex items-center gap-2">
                    <LessonTypeIcon type={lesson.type} />
                    <span className="font-epilogue text-xs text-[#6a7282]">{lesson.duration}</span>
                </div>
            </div>
        </div>
    );
}

interface Props {
    course: string;
    allLessonsCompleted?: boolean;
    courseData?: CourseData | null;
}

type PageProps = { errors?: { review?: string } };

export default function CourseLessonPage({ course, allLessonsCompleted = false, courseData }: Props) {
    const { errors } = (usePage().props as PageProps) ?? {};
    const [reviewModalOpen, setReviewModalOpen] = useState(false);
    const [overallRating, setOverallRating] = useState(0);
    const [contentQuality, setContentQuality] = useState(0);
    const [instructorPerformance, setInstructorPerformance] = useState(0);
    const [valueForMoney, setValueForMoney] = useState(0);
    const [recommend, setRecommend] = useState(false);
    const [reviewText, setReviewText] = useState('');

    useEffect(() => {
        if (errors?.review) {
            setReviewModalOpen(true);
        }
    }, [errors?.review]);

    const lessons = buildLessons(allLessonsCompleted);
    const courseTitle = courseData?.title ?? 'Mindfulness Meditation Masterclass';
    const instructor = courseData?.instructor ?? 'Dr. Sarah Johnson';
    const totalLessons = lessons.length;
    const completedCount = allLessonsCompleted ? totalLessons : 5;
    const progressPercent = allLessonsCompleted ? 100 : 45;
    const currentLesson = lessons.find((l) => l.status === 'current') ?? lessons[lessons.length - 1];
    const modalCourseImage = courseData?.image ?? '/assets/figma/user-dashboard/course-thumbnail.png';

    const getRating = (name: string) => {
        switch (name) {
            case 'overall_rating': return overallRating;
            case 'content_quality': return contentQuality;
            case 'instructor_performance': return instructorPerformance;
            case 'value_for_money': return valueForMoney;
            default: return 0;
        }
    };
    const setRating = (name: string) => (v: number) => {
        switch (name) {
            case 'overall_rating': setOverallRating(v); break;
            case 'content_quality': setContentQuality(v); break;
            case 'instructor_performance': setInstructorPerformance(v); break;
            case 'value_for_money': setValueForMoney(v); break;
        }
    };

    return (
        <UserDashboardLayout>
            <Head title={courseTitle} />

            {/* Header: Back + Title/Instructor + Progress */}
            <div className="border-b border-gray-200 bg-white px-4 py-6 md:px-6">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-4">
                        <Link
                            href={route('user.my-learning')}
                            className="inline-flex h-8 items-center gap-2 rounded-lg bg-[#f3f3f3] pl-2.5 pr-3 font-epilogue text-sm font-medium text-figma-heading hover:bg-gray-200"
                        >
                            <ArrowLeft className="size-4" />
                            Back to My Learning
                        </Link>
                        <div>
                            <h1 className="font-epilogue text-base font-semibold leading-6 text-figma-heading-alt">
                                {courseTitle}
                            </h1>
                            <p className="font-epilogue text-sm text-figma-slate">{instructor}</p>
                        </div>
                    </div>
                    <div className="flex shrink-0 flex-col gap-1 text-right">
                        <p className="font-epilogue text-sm text-figma-slate">
                            {completedCount} of {totalLessons} lessons
                        </p>
                        <div className="flex items-center gap-2">
                            <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-200">
                                <div
                                    className="h-full rounded-full bg-figma-gold"
                                    style={{ width: `${progressPercent}%` }}
                                />
                            </div>
                            <span className="w-8 font-epilogue text-sm font-medium text-figma-heading-alt">
                                {progressPercent}%
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main: Video + Current lesson (left) | Course Content (right) */}
            <div className="flex flex-col gap-6 p-4 lg:flex-row lg:gap-8 lg:p-8">
                {/* Left: Video player + lesson info + Mark as Complete */}
                <div className="flex flex-1 flex-col gap-6">
                    <div className="overflow-hidden rounded-[14px] border border-figma-input-border bg-white">
                        <div className="flex aspect-video items-center justify-center bg-[#101828]">
                            <div className="flex flex-col items-center gap-3 text-white/90">
                                <div className="flex size-16 items-center justify-center rounded-full bg-white/20">
                                    <Video className="size-8" />
                                </div>
                                <p className="font-epilogue text-sm">Video player would appear here</p>
                                <p className="font-epilogue text-xs text-white/50">
                                    https://example.com/video6.mp4
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 p-6">
                            <div>
                                <h2 className="font-epilogue text-2xl font-bold leading-8 text-figma-heading-alt">
                                    {currentLesson.title}
                                </h2>
                                <div className="mt-2 flex items-center gap-4 font-epilogue text-sm text-figma-slate">
                                    <span className="flex items-center gap-1.5">
                                        <Video className="size-4" />
                                        Video
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <Clock className="size-4" />
                                        {currentLesson.duration}
                                    </span>
                                </div>
                            </div>
                            {allLessonsCompleted ? (
                                <button
                                    type="button"
                                    onClick={() => setReviewModalOpen(true)}
                                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-green-500 py-3 font-epilogue text-sm font-medium text-white hover:bg-green-600"
                                >
                                    Review Course
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-figma-gold py-3 font-epilogue text-sm font-medium text-black hover:bg-figma-gold-dark"
                                >
                                    <Check className="size-4" />
                                    Mark as Complete
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Right: Course Content list */}
                <div className="w-full shrink-0 rounded-[14px] border border-gray-200 bg-white lg:w-[380px]">
                    <div className="border-b border-gray-200 px-4 py-4">
                        <h3 className="font-epilogue text-base font-semibold leading-6 text-figma-heading-alt">
                            Course Content
                        </h3>
                        <p className="font-epilogue text-sm text-figma-slate">
                            {completedCount}/{totalLessons} lessons completed
                        </p>
                    </div>
                    <div className="max-h-[600px] pl-4 overflow-y-auto">
                        {lessons.map((lesson) => (
                            <LessonRow key={lesson.id} lesson={lesson} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Review modal: Rate This Course (Figma 3144-25085) */}
            <Dialog open={reviewModalOpen} onOpenChange={setReviewModalOpen}>
                <DialogContent
                    className="max-h-[90dvh] w-full max-w-[700px] overflow-y-auto rounded-3xl border-0 p-0 sm:max-w-[700px]"
                    onPointerDownOutside={() => setReviewModalOpen(false)}
                    onEscapeKeyDown={() => setReviewModalOpen(false)}
                >
                    <Form
                        action={route('user.my-learning.course.review.submit', course)}
                        method="post"
                        disableWhileProcessing
                        className="flex flex-col"
                    >
                        <DialogHeader className="border-b border-figma-input-border px-6 py-4 text-left">
                            <DialogTitle className="font-epilogue text-xl font-semibold text-figma-heading-alt">
                                Rate This Course
                            </DialogTitle>
                            <DialogDescription className="font-epilogue text-sm text-figma-slate">
                                Share your learning experience
                            </DialogDescription>
                        </DialogHeader>

                        <div className="flex flex-col gap-6 px-6 py-5">
                            <div className="flex gap-4 rounded-2xl border border-figma-input-border bg-figma-stone/30 p-4">
                                <img
                                    src={modalCourseImage}
                                    alt=""
                                    className="size-20 shrink-0 rounded-xl object-cover"
                                />
                                <div className="min-w-0">
                                    <p className="font-epilogue font-medium text-figma-heading-alt">
                                        {courseTitle}
                                    </p>
                                    <p className="font-epilogue text-sm text-figma-slate">
                                        by {instructor || 'Instructor'}
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4">
                                {ratingLabels.map(({ name, title, description }) => (
                                    <div
                                        key={name}
                                        className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"
                                    >
                                        <div>
                                            <p className="font-epilogue text-sm font-medium text-figma-heading-alt">
                                                {title}
                                            </p>
                                            <p className="font-epilogue text-xs text-figma-slate">
                                                {description}
                                            </p>
                                        </div>
                                        <StarRating
                                            name={name}
                                            value={getRating(name)}
                                            onChange={setRating(name)}
                                        />
                                    </div>
                                ))}
                            </div>

                            <input type="hidden" name="recommend" value={recommend ? '1' : '0'} />
                            <label className="flex cursor-pointer items-start gap-3">
                                <input
                                    type="checkbox"
                                    checked={recommend}
                                    onChange={(e) => setRecommend(e.target.checked)}
                                    className="mt-1 size-4 rounded border-figma-input-border text-figma-gold focus:ring-figma-gold"
                                />
                                <span className="font-epilogue text-sm text-figma-heading-alt">
                                    I would recommend this course to others
                                </span>
                            </label>
                            <p className="font-epilogue text-xs text-figma-slate">
                                Help others make informed decisions
                            </p>

                            <div className="flex flex-col gap-2">
                                <label
                                    htmlFor="review"
                                    className="font-epilogue text-sm font-medium text-figma-heading-alt"
                                >
                                    Your Review (Required, min 20 characters)
                                </label>
                                <textarea
                                    id="review"
                                    name="review"
                                    required
                                    minLength={REVIEW_MIN_LENGTH}
                                    maxLength={REVIEW_MAX_LENGTH}
                                    value={reviewText}
                                    onChange={(e) => setReviewText(e.target.value)}
                                    placeholder="Share what you liked, what could be improved, and how this course helped you..."
                                    className="min-h-28 w-full resize-y rounded-xl border border-figma-input-border bg-white px-4 py-3 font-epilogue text-sm text-figma-heading-alt placeholder:text-figma-placeholder focus:border-figma-gold focus:outline-none focus:ring-1 focus:ring-figma-gold"
                                />
                                <p className="font-epilogue text-xs text-figma-slate">
                                    {reviewText.length} / {REVIEW_MAX_LENGTH} characters
                                </p>
                                <InputError message={errors?.review} />
                            </div>

                            <div className="rounded-xl border border-figma-input-border bg-figma-stone/20 px-4 py-3">
                                <p className="mb-2 font-epilogue text-sm font-medium text-figma-heading-alt">
                                    Review Guidelines
                                </p>
                                <ul className="list-inside list-disc space-y-1 font-epilogue text-xs text-figma-slate">
                                    <li>Be respectful and constructive</li>
                                    <li>Focus on the course content and experience</li>
                                    <li>Avoid personal attacks or inappropriate language</li>
                                    <li>Your review helps other learners make decisions</li>
                                </ul>
                            </div>
                        </div>

                        <DialogFooter className="flex flex-row gap-3 border-t border-figma-input-border px-6 py-4">
                            <button
                                type="button"
                                onClick={() => setReviewModalOpen(false)}
                                className="rounded-lg border border-figma-input-border bg-white px-4 py-2 font-epilogue text-sm font-medium text-figma-heading-alt hover:bg-figma-stone/30"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="rounded-lg bg-figma-gold px-4 py-2 font-epilogue text-sm font-medium text-black hover:bg-figma-gold-dark"
                            >
                                Submit Review
                            </button>
                        </DialogFooter>
                    </Form>
                </DialogContent>
            </Dialog>
        </UserDashboardLayout>
    );
}
