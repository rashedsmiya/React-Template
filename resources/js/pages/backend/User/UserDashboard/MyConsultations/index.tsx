import { Head } from '@inertiajs/react';
import UserDashboardLayout from '@/layouts/user-dashboard-layout';
import React, { useEffect, useMemo, useState } from 'react';
export default function MyConsultationsPage() {
    const dateOptions = useMemo(
        () => [
            'Feb 12, 2026',
            'Feb 13, 2026',
            'Feb 14, 2026',
            'Feb 15, 2026',
            'Feb 16, 2026',
            'Feb 17, 2026',
            'Feb 18, 2026',
            'Feb 19, 2026',
        ],
        [],
    );

    const timeOptions = useMemo(
        () => [
            '9:00 AM',
            '10:00 AM',
            '11:00 AM',
            '12:00 AM',
            '1:00 PM',
            '2:00 PM',
            '3:00 PM',
            '4:00 PM',
        ],
        [],
    );

    const [isRescheduleOpen, setIsRescheduleOpen] = useState(false);
    const [rescheduleFor, setRescheduleFor] = useState<{
        title: string;
        withName: string;
        when: string;
    } | null>(null);
    const [preferredDate, setPreferredDate] = useState<string | null>(null);
    const [preferredTime, setPreferredTime] = useState<string | null>(null);
    const [reason, setReason] = useState('');

    const closeReschedule = () => {
        setIsRescheduleOpen(false);
    };

    const openReschedule = (payload: { title: string; withName: string; when: string }) => {
        setRescheduleFor(payload);
        setPreferredDate(null);
        setPreferredTime(null);
        setReason('');
        setIsRescheduleOpen(true);
    };

    const canSendRequest =
        Boolean(preferredDate) && Boolean(preferredTime) && reason.trim().length > 0;

    useEffect(() => {
        if (!isRescheduleOpen) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeReschedule();
        };

        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, [isRescheduleOpen]);

    return (
        <UserDashboardLayout>
            <Head title="My Consultations" />
            <>
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                <div>
                    <h1 className="serif text-3xl text-gray-900 tracking-tight">
                    My Consultations
                    </h1>
                    <p className="text-sm text-gray-500 mt-1">
                    Manage your upcoming and past consultation sessions
                    </p>
                </div>
                <div className="flex items-center gap-2 mt-1">
                    <button className="relative w-9 h-9 rounded-full flex items-center justify-center btn-outline">
                    <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        />
                    </svg>
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white" />
                    </button>
                    <button className="w-9 h-9 rounded-full flex items-center justify-center btn-outline">
                    <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                    </svg>
                    </button>
                    <div className="w-9 h-9 rounded-full avatar flex items-center justify-center text-xs font-bold text-white">
                    SB
                    </div>
                </div>
                </div>
                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                <div className="bg-white rounded-2xl p-4 card shadow-sm">
                    <div className="flex items-center gap-2 mb-1">
                    <svg
                        className="w-4 h-4 text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <circle cx={12} cy={12} r={10} strokeWidth={2} />
                        <path strokeLinecap="round" strokeWidth={2} d="M12 6v6l4 2" />
                    </svg>
                    <span className="text-2xl font-bold text-gray-900">3</span>
                    </div>
                    <p className="text-xs text-gray-500 font-medium">Upcoming</p>
                </div>
                <div className="bg-white rounded-2xl p-4 card shadow-sm">
                    <div className="flex items-center gap-2 mb-1">
                    <svg
                        className="w-4 h-4 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    <span className="text-2xl font-bold text-gray-900">2</span>
                    </div>
                    <p className="text-xs text-gray-500 font-medium">Completed</p>
                </div>
                <div className="bg-white rounded-2xl p-4 card shadow-sm">
                    <div className="flex items-center gap-2 mb-1">
                    <svg
                        className="w-4 h-4 text-red-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    <span className="text-2xl font-bold text-gray-900">1</span>
                    </div>
                    <p className="text-xs text-gray-500 font-medium">Cancelled</p>
                </div>
                </div>
                {/* Tabs */}
                <div className="flex gap-2 mb-5">
                <button className="tab-active px-4 py-1.5 rounded-full text-sm font-medium">
                    All
                </button>
                <button className="tab-inactive px-4 py-1.5 rounded-full text-sm font-medium">
                    Upcoming
                </button>
                <button className="tab-inactive px-4 py-1.5 rounded-full text-sm font-medium">
                    Completed
                </button>
                <button className="tab-inactive px-4 py-1.5 rounded-full text-sm font-medium">
                    Cancelled
                </button>
                </div>
                {/* Cards */}
                <div className="flex flex-col gap-4">
                {/* Card 1: Nutrition Consultation */}
                <div className="bg-white rounded-2xl p-5 card shadow-sm">
                    <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3 flex-1 min-w-0">
                        <div className="w-10 h-10 rounded-full avatar flex-shrink-0 flex items-center justify-center text-white font-semibold text-sm">
                        SJ
                        </div>
                        <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                            <h2 className="font-semibold text-gray-900 text-[15px]">
                            Nutrition Consultation
                            </h2>
                            <span className="badge-upcoming text-xs px-2 py-0.5 rounded-full font-medium">
                            Upcoming
                            </span>
                        </div>
                        <p className="text-sm text-gray-500">Dr. Sarah Johnson</p>
                        <p className="text-xs text-gray-400">Nutritionist</p>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-xs text-gray-500">
                            <span className="flex items-center gap-1">
                            <svg
                                className="w-3.5 h-3.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <rect
                                x={3}
                                y={4}
                                width={18}
                                height={18}
                                rx={2}
                                strokeWidth={2}
                                />
                                <path strokeWidth={2} d="M16 2v4M8 2v4M3 10h18" />
                            </svg>
                            Tomorrow
                            </span>
                            <span className="flex items-center gap-1">
                            <svg
                                className="w-3.5 h-3.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <circle cx={12} cy={12} r={10} strokeWidth={2} />
                                <path
                                strokeLinecap="round"
                                strokeWidth={2}
                                d="M12 6v6l4 2"
                                />
                            </svg>
                            2:00 PM (60 min)
                            </span>
                            <span className="flex items-center gap-1">
                            <svg
                                className="w-3.5 h-3.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 10l4.553-2.069A1 1 0 0121 8.82V15.18a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"
                                />
                            </svg>
                            Video Call
                            </span>
                            <span className="font-medium text-gray-700">$150</span>
                        </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1.5 flex-shrink-0">
                        <button className="btn-primary flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold">
                        <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 10l4.553-2.069A1 1 0 0121 8.82V15.18a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"
                            />
                        </svg>
                        Join Meeting
                        </button>
                        <button
                            type="button"
                            onClick={() =>
                                openReschedule({
                                    title: 'Nutrition Consultation',
                                    withName: 'Dr. Sarah Johnson',
                                    when: 'Tomorrow at 2:00 PM',
                                })
                            }
                            className="btn-outline flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium"
                        >
                        <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <rect
                            x={3}
                            y={4}
                            width={18}
                            height={18}
                            rx={2}
                            strokeWidth={2}
                            />
                            <path strokeWidth={2} d="M16 2v4M8 2v4M3 10h18" />
                        </svg>
                        Reschedule
                        </button>
                        <button className="btn-outline flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium">
                        <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                            />
                        </svg>
                        Message
                        </button>
                        <button className="btn-danger flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium">
                        <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        Cancel
                        </button>
                    </div>
                    </div>
                    <div className="note-blue rounded-xl px-3.5 py-2.5 mt-3 text-xs flex items-start gap-2">
                    <svg
                        className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <circle cx={12} cy={12} r={10} strokeWidth={2} />
                        <path strokeLinecap="round" strokeWidth={2} d="M12 8v4m0 4h.01" />
                    </svg>
                    Please prepare a list of your current medications and any dietary
                    restrictions.
                    </div>
                </div>
                {/* Card 2: Mental Wellness */}
                <div className="bg-white rounded-2xl p-5 card shadow-sm">
                    <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3 flex-1 min-w-0">
                        <div
                        className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-white font-semibold text-sm"
                        style={{ background: "linear-gradient(135deg,#a8c5da,#7da8c0)" }}
                        >
                        MR
                        </div>
                        <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                            <h2 className="font-semibold text-gray-900 text-[15px]">
                            Mental Wellness Check-in
                            </h2>
                            <span className="badge-upcoming text-xs px-2 py-0.5 rounded-full font-medium">
                            Upcoming
                            </span>
                        </div>
                        <p className="text-sm text-gray-500">Michael Roberts</p>
                        <p className="text-xs text-gray-400">Mental Health Coach</p>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-xs text-gray-500">
                            <span className="flex items-center gap-1">
                            <svg
                                className="w-3.5 h-3.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <rect
                                x={3}
                                y={4}
                                width={18}
                                height={18}
                                rx={2}
                                strokeWidth={2}
                                />
                                <path strokeWidth={2} d="M16 2v4M8 2v4M3 10h18" />
                            </svg>
                            Feb 5, 2026
                            </span>
                            <span className="flex items-center gap-1">
                            <svg
                                className="w-3.5 h-3.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <circle cx={12} cy={12} r={10} strokeWidth={2} />
                                <path
                                strokeLinecap="round"
                                strokeWidth={2}
                                d="M12 6v6l4 2"
                                />
                            </svg>
                            10:00 AM (30 min)
                            </span>
                            <span className="flex items-center gap-1">
                            <svg
                                className="w-3.5 h-3.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 10l4.553-2.069A1 1 0 0121 8.82V15.18a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"
                                />
                            </svg>
                            Video Call
                            </span>
                            <span className="font-medium text-gray-700">$100</span>
                        </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1.5 flex-shrink-0">
                        <button className="btn-primary flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold">
                        <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 10l4.553-2.069A1 1 0 0121 8.82V15.18a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"
                            />
                        </svg>
                        Join Meeting
                        </button>
                        <button
                            type="button"
                            onClick={() =>
                                openReschedule({
                                    title: 'Mental Wellness Check-in',
                                    withName: 'Michael Roberts',
                                    when: 'Feb 5, 2026 at 10:00 AM',
                                })
                            }
                            className="btn-outline flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium"
                        >
                        <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <rect
                            x={3}
                            y={4}
                            width={18}
                            height={18}
                            rx={2}
                            strokeWidth={2}
                            />
                            <path strokeWidth={2} d="M16 2v4M8 2v4M3 10h18" />
                        </svg>
                        Reschedule
                        </button>
                        <button className="btn-outline flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium">
                        <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                            />
                        </svg>
                        Message
                        </button>
                        <button className="btn-danger flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium">
                        <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        Cancel
                        </button>
                    </div>
                    </div>
                </div>
                {/* Card 3: Yoga Assessment (Reschedule Pending) */}
                <div className="bg-white rounded-2xl p-5 card shadow-sm">
                    <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3 flex-1 min-w-0">
                        <div
                        className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-white font-semibold text-sm"
                        style={{ background: "linear-gradient(135deg,#c8b8d8,#a898b8)" }}
                        >
                        EC
                        </div>
                        <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                            <h2 className="font-semibold text-gray-900 text-[15px]">
                            Yoga Assessment
                            </h2>
                            <span className="badge-upcoming text-xs px-2 py-0.5 rounded-full font-medium">
                            Upcoming
                            </span>
                            <span className="badge-reschedule text-xs px-2 py-0.5 rounded-full font-medium">
                            Reschedule Pending
                            </span>
                        </div>
                        <p className="text-sm text-gray-500">Emily Chen</p>
                        <p className="text-xs text-gray-400">Yoga Instructor</p>
                        {/* Reschedule Note */}
                        <div className="note-yellow rounded-xl px-3.5 py-2.5 mt-3 text-xs">
                            <div className="flex items-center gap-1.5 font-semibold text-amber-700 mb-1">
                            <svg
                                className="w-3.5 h-3.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <circle cx={12} cy={12} r={10} strokeWidth={2} />
                                <path
                                strokeLinecap="round"
                                strokeWidth={2}
                                d="M12 8v4m0 4h.01"
                                />
                            </svg>
                            Reschedule Request Pending
                            </div>
                            <p className="text-amber-800">
                            You've requested to reschedule this consultation to{" "}
                            <strong>Feb 10, 2026 at 2:00 PM</strong>
                            </p>
                            <p className="text-amber-700 mt-0.5">
                            Reason: I have a work commitment on Feb 8th. Would Feb 10th
                            work for you?
                            </p>
                            <p className="text-amber-600 mt-0.5 italic">
                            Waiting for Emily Chen to approve your request.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-xs text-gray-500">
                            <span className="flex items-center gap-1">
                            <svg
                                className="w-3.5 h-3.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <rect
                                x={3}
                                y={4}
                                width={18}
                                height={18}
                                rx={2}
                                strokeWidth={2}
                                />
                                <path strokeWidth={2} d="M16 2v4M8 2v4M3 10h18" />
                            </svg>
                            Feb 8, 2026
                            </span>
                            <span className="flex items-center gap-1">
                            <svg
                                className="w-3.5 h-3.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <circle cx={12} cy={12} r={10} strokeWidth={2} />
                                <path
                                strokeLinecap="round"
                                strokeWidth={2}
                                d="M12 6v6l4 2"
                                />
                            </svg>
                            3:00 PM (45 min)
                            </span>
                            <span className="flex items-center gap-1">
                            <svg
                                className="w-3.5 h-3.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                            123 Wellness Center, Downtown
                            </span>
                            <span className="font-medium text-gray-700">$80</span>
                        </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1.5 flex-shrink-0">
                        <button
                            type="button"
                            onClick={() =>
                                openReschedule({
                                    title: 'Yoga Assessment',
                                    withName: 'Emily Chen',
                                    when: 'Feb 8, 2026 at 3:00 PM',
                                })
                            }
                            className="btn-outline flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium"
                        >
                        <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <rect
                            x={3}
                            y={4}
                            width={18}
                            height={18}
                            rx={2}
                            strokeWidth={2}
                            />
                            <path strokeWidth={2} d="M16 2v4M8 2v4M3 10h18" />
                        </svg>
                        Reschedule
                        </button>
                        <button className="btn-outline flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium">
                        <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                            />
                        </svg>
                        Message
                        </button>
                        <button className="btn-danger flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium">
                        <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        Cancel
                        </button>
                    </div>
                    </div>
                </div>
                {/* Card 4: Initial Health Assessment (Completed) */}
                <div className="bg-white rounded-2xl p-5 card shadow-sm">
                    <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3 flex-1 min-w-0">
                        <div className="w-10 h-10 rounded-full avatar flex-shrink-0 flex items-center justify-center text-white font-semibold text-sm">
                        SJ
                        </div>
                        <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                            <h2 className="font-semibold text-gray-900 text-[15px]">
                            Initial Health Assessment
                            </h2>
                            <span className="badge-completed text-xs px-2 py-0.5 rounded-full font-medium">
                            ✓ Completed
                            </span>
                        </div>
                        <p className="text-sm text-gray-500">Dr. Sarah Johnson</p>
                        <p className="text-xs text-gray-400">Nutritionist</p>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-xs text-gray-500">
                            <span className="flex items-center gap-1">
                            <svg
                                className="w-3.5 h-3.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <rect
                                x={3}
                                y={4}
                                width={18}
                                height={18}
                                rx={2}
                                strokeWidth={2}
                                />
                                <path strokeWidth={2} d="M16 2v4M8 2v4M3 10h18" />
                            </svg>
                            Jan 25, 2026
                            </span>
                            <span className="flex items-center gap-1">
                            <svg
                                className="w-3.5 h-3.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <circle cx={12} cy={12} r={10} strokeWidth={2} />
                                <path
                                strokeLinecap="round"
                                strokeWidth={2}
                                d="M12 6v6l4 2"
                                />
                            </svg>
                            11:00 AM (60 min)
                            </span>
                            <span className="flex items-center gap-1">
                            <svg
                                className="w-3.5 h-3.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 10l4.553-2.069A1 1 0 0121 8.82V15.18a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"
                                />
                            </svg>
                            Video Call
                            </span>
                            <span className="font-medium text-gray-700">$150</span>
                        </div>
                        <div className="note-green rounded-xl px-3.5 py-2.5 mt-3 text-xs flex items-start gap-2">
                            <svg
                            className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                            </svg>
                            Great session! Follow-up recommended in 2 weeks.
                        </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1.5 flex-shrink-0">
                        <button className="btn-outline flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium">
                        <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <rect
                            x={3}
                            y={4}
                            width={18}
                            height={18}
                            rx={2}
                            strokeWidth={2}
                            />
                            <path strokeWidth={2} d="M16 2v4M8 2v4M3 10h18" />
                        </svg>
                        Book Again
                        </button>
                        <button className="btn-outline flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium">
                        <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                            />
                        </svg>
                        Message
                        </button>
                        <button className="btn-outline flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium">
                        <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                            />
                        </svg>
                        Review
                        </button>
                    </div>
                    </div>
                </div>
                {/* Card 5: Stress Management (Completed) */}
                <div className="bg-white rounded-2xl p-5 card shadow-sm">
                    <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3 flex-1 min-w-0">
                        <div
                        className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-white font-semibold text-sm"
                        style={{ background: "linear-gradient(135deg,#a8c5da,#7da8c0)" }}
                        >
                        MR
                        </div>
                        <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                            <h2 className="font-semibold text-gray-900 text-[15px]">
                            Stress Management Session
                            </h2>
                            <span className="badge-completed text-xs px-2 py-0.5 rounded-full font-medium">
                            ✓ Completed
                            </span>
                        </div>
                        <p className="text-sm text-gray-500">Michael Roberts</p>
                        <p className="text-xs text-gray-400">Mental Health Coach</p>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-xs text-gray-500">
                            <span className="flex items-center gap-1">
                            <svg
                                className="w-3.5 h-3.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <rect
                                x={3}
                                y={4}
                                width={18}
                                height={18}
                                rx={2}
                                strokeWidth={2}
                                />
                                <path strokeWidth={2} d="M16 2v4M8 2v4M3 10h18" />
                            </svg>
                            Jan 20, 2026
                            </span>
                            <span className="flex items-center gap-1">
                            <svg
                                className="w-3.5 h-3.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <circle cx={12} cy={12} r={10} strokeWidth={2} />
                                <path
                                strokeLinecap="round"
                                strokeWidth={2}
                                d="M12 6v6l4 2"
                                />
                            </svg>
                            2:30 PM (30 min)
                            </span>
                            <span className="flex items-center gap-1">
                            <svg
                                className="w-3.5 h-3.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 10l4.553-2.069A1 1 0 0121 8.82V15.18a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"
                                />
                            </svg>
                            Video Call
                            </span>
                            <span className="font-medium text-gray-700">$100</span>
                        </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1.5 flex-shrink-0">
                        <button className="btn-outline flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium">
                        <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <rect
                            x={3}
                            y={4}
                            width={18}
                            height={18}
                            rx={2}
                            strokeWidth={2}
                            />
                            <path strokeWidth={2} d="M16 2v4M8 2v4M3 10h18" />
                        </svg>
                        Book Again
                        </button>
                        <button className="btn-outline flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium">
                        <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                            />
                        </svg>
                        Message
                        </button>
                        <button className="btn-outline flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium">
                        <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                            />
                        </svg>
                        Review
                        </button>
                    </div>
                    </div>
                </div>
                {/* Card 6: Meditation Workshop (Cancelled) */}
                <div className="bg-white rounded-2xl p-5 card shadow-sm opacity-80">
                    <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3 flex-1 min-w-0">
                        <div
                        className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-white font-semibold text-sm"
                        style={{ background: "linear-gradient(135deg,#c8b8d8,#a898b8)" }}
                        >
                        EC
                        </div>
                        <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                            <h2 className="font-semibold text-gray-900 text-[15px]">
                            Meditation Workshop
                            </h2>
                            <span className="badge-cancelled text-xs px-2 py-0.5 rounded-full font-medium">
                            ✕ Cancelled
                            </span>
                        </div>
                        <p className="text-sm text-gray-500">Emily Chen</p>
                        <p className="text-xs text-gray-400">Yoga Instructor</p>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-xs text-gray-500">
                            <span className="flex items-center gap-1">
                            <svg
                                className="w-3.5 h-3.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <rect
                                x={3}
                                y={4}
                                width={18}
                                height={18}
                                rx={2}
                                strokeWidth={2}
                                />
                                <path strokeWidth={2} d="M16 2v4M8 2v4M3 10h18" />
                            </svg>
                            Jan 15, 2026
                            </span>
                            <span className="flex items-center gap-1">
                            <svg
                                className="w-3.5 h-3.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <circle cx={12} cy={12} r={10} strokeWidth={2} />
                                <path
                                strokeLinecap="round"
                                strokeWidth={2}
                                d="M12 6v6l4 2"
                                />
                            </svg>
                            9:00 AM (90 min)
                            </span>
                            <span className="flex items-center gap-1">
                            <svg
                                className="w-3.5 h-3.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                            123 Wellness Center, Downtown
                            </span>
                            <span className="font-medium text-gray-700">$120</span>
                        </div>
                        <div className="note-red rounded-xl px-3.5 py-2.5 mt-3 text-xs flex items-start gap-2">
                            <svg
                            className="w-3.5 h-3.5 mt-0.5 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            >
                            <circle cx={12} cy={12} r={10} strokeWidth={2} />
                            <path
                                strokeLinecap="round"
                                strokeWidth={2}
                                d="M12 8v4m0 4h.01"
                            />
                            </svg>
                            Cancelled due to scheduling conflict. Refund processed.
                        </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1.5 flex-shrink-0">
                        <button className="btn-outline flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium">
                        <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <rect
                            x={3}
                            y={4}
                            width={18}
                            height={18}
                            rx={2}
                            strokeWidth={2}
                            />
                            <path strokeWidth={2} d="M16 2v4M8 2v4M3 10h18" />
                        </svg>
                        Book Again
                        </button>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            {isRescheduleOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <button
                        type="button"
                        aria-label="Close reschedule modal"
                        className="absolute inset-0 bg-black/40"
                        onClick={closeReschedule}
                    />
                    <div className="relative w-[92vw] max-w-[760px] bg-white rounded-2xl shadow-xl border border-gray-100">
                        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                            <h3 className="text-[15px] font-semibold text-gray-900">
                                Request to Reschedule
                            </h3>
                            <button
                                type="button"
                                onClick={closeReschedule}
                                className="w-9 h-9 rounded-full btn-outline flex items-center justify-center"
                                aria-label="Close"
                            >
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>

                        <div className="px-6 py-5">
                            <div className="rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-sm text-gray-700">
                                <div className="text-xs text-gray-500 mb-1">
                                    Current Appointment:
                                </div>
                                <div className="font-semibold text-gray-900">
                                    {rescheduleFor?.title ?? 'Consultation'}
                                </div>
                                <div className="text-gray-600">
                                    with {rescheduleFor?.withName ?? '—'}
                                </div>
                                <div className="text-gray-500 text-xs">
                                    {rescheduleFor?.when ?? ''}
                                </div>
                            </div>

                            <div className="note-blue rounded-xl px-4 py-3 mt-4 text-xs flex items-start gap-2">
                                <svg
                                    className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-blue-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <circle cx={12} cy={12} r={10} strokeWidth={2} />
                                    <path
                                        strokeLinecap="round"
                                        strokeWidth={2}
                                        d="M12 8v4m0 4h.01"
                                    />
                                </svg>
                                <div className="text-blue-800">
                                    Your reschedule request will be sent to{' '}
                                    <span className="font-semibold">
                                        {rescheduleFor?.withName ?? 'the provider'}
                                    </span>{' '}
                                    for approval. You'll be notified once they respond.
                                </div>
                            </div>

                            <div className="mt-5">
                                <label className="text-xs font-semibold text-gray-700">
                                    Preferred New Date <span className="text-red-500">*</span>
                                </label>
                                <div className="mt-2 grid grid-cols-4 gap-2">
                                    {dateOptions.map((d) => {
                                        const active = preferredDate === d;
                                        return (
                                            <button
                                                key={d}
                                                type="button"
                                                onClick={() => setPreferredDate(d)}
                                                className={[
                                                    'rounded-xl px-3 py-2 text-xs font-medium border',
                                                    active
                                                        ? 'bg-amber-300 border-amber-300 text-gray-900'
                                                        : 'bg-white border-gray-200 text-gray-700 hover:border-gray-300',
                                                ].join(' ')}
                                            >
                                                {d}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="mt-5">
                                <label className="text-xs font-semibold text-gray-700">
                                    Preferred New Time <span className="text-red-500">*</span>
                                </label>
                                <div className="mt-2 flex flex-wrap gap-2">
                                    {timeOptions.map((t) => {
                                        const active = preferredTime === t;
                                        return (
                                            <button
                                                key={t}
                                                type="button"
                                                onClick={() => setPreferredTime(t)}
                                                className={[
                                                    'rounded-xl px-3 py-2 text-xs font-medium border',
                                                    active
                                                        ? 'bg-amber-300 border-amber-300 text-gray-900'
                                                        : 'bg-white border-gray-200 text-gray-700 hover:border-gray-300',
                                                ].join(' ')}
                                            >
                                                {t}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="mt-5">
                                <label className="text-xs font-semibold text-gray-700">
                                    Reason for Rescheduling{' '}
                                    <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    value={reason}
                                    onChange={(e) => setReason(e.target.value)}
                                    className="mt-2 w-full min-h-[120px] rounded-xl border border-gray-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-amber-200 focus:border-amber-300"
                                    placeholder="e.g., I have a prior commitment on the scheduled date. Would it be possible to reschedule?"
                                />
                                <div className="text-[11px] text-gray-400 mt-1">
                                    This helps the operator understand your situation and respond accordingly.
                                </div>
                            </div>
                        </div>

                        <div className="px-6 pb-5">
                            <div className="flex items-center justify-between gap-3">
                                <button
                                    type="button"
                                    onClick={closeReschedule}
                                    className="btn-outline px-5 py-2 rounded-xl text-sm font-medium"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    disabled={!canSendRequest}
                                    className={[
                                        'px-5 py-2 rounded-xl text-sm font-semibold',
                                        canSendRequest
                                            ? 'btn-primary'
                                            : 'bg-amber-200 text-amber-700 cursor-not-allowed',
                                    ].join(' ')}
                                    onClick={() => {
                                        // UI-only for now (wire to backend later if needed)
                                        closeReschedule();
                                    }}
                                >
                                    Send Request
                                </button>
                            </div>
                            <div className="text-center text-[11px] text-gray-400 mt-3">
                                {preferredDate && preferredTime
                                    ? `Requesting: ${preferredDate} at ${preferredTime}`
                                    : 'Select a date and time to preview your request.'}
                            </div>
                        </div>
                    </div>
                </div>
            )}
            </>

        </UserDashboardLayout>
    );
}
