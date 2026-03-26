<?php

namespace App\Http\Controllers\Backend\User\UserDashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class MyLearningController extends Controller
{
    public function index(Request $request): Response
    {
        return Inertia::render('backend/User/UserDashboard/MyLearning/Index');
    }

    public function show(Request $request, string $course): Response
    {
        return Inertia::render('backend/User/UserDashboard/MyLearning/Index', [
            'course' => $course,
        ]);
    }

    public function lesson(Request $request, string $course): Response
    {

        $allLessonsCompleted = $request->boolean('show_completed');
        $payload = [
            'course' => $course,
            'allLessonsCompleted' => $allLessonsCompleted,
        ];
        if ($allLessonsCompleted) {
            $payload['courseData'] = $this->courseDetailsForReview($course);
        }

        return Inertia::render('backend/User/UserDashboard/MyLearning/CourseLesson', $payload);
    }

    public function submitReview(Request $request, string $course): RedirectResponse
    {
        // Authorization check - verify user is authenticated
        // TODO: Add course purchase verification when course enrollment system is implemented
        // Example: $request->user()->enrolledCourses()->where('slug', $course)->exists()
        if (! $request->user()) {
            return redirect()->route('user.my-learning')
                ->with('error', 'You must be logged in to submit a review.');
        }

        $request->validate([
            'overall_rating' => ['required', 'integer', 'min:1', 'max:5'],
            'content_quality' => ['required', 'integer', 'min:1', 'max:5'],
            'instructor_performance' => ['required', 'integer', 'min:1', 'max:5'],
            'value_for_money' => ['required', 'integer', 'min:1', 'max:5'],
            'recommend' => ['boolean'],
            'review' => ['required', 'string', 'min:20', 'max:1000'],
        ], [
            'review.required' => 'Your review is required.',
            'review.min' => 'Your review must be at least 20 characters.',
            'review.max' => 'Your review may not exceed 1000 characters.',
        ]);

        return redirect()->route('user.my-learning')
            ->with('success', 'Thank you for your review.');
    }

    private function courseDetailsForReview(string $course): array
    {
        $courses = [
            'nutrition-fundamentals' => [
                'title' => 'Nutrition Fundamentals',
                'instructor' => 'Michael Roberts',
                'image' => '/images/frontend/my-account/courses/herbal-medicine.jpg',
            ],
            'mindfulness-meditation-masterclass' => [
                'title' => 'Mindfulness Meditation Masterclass',
                'instructor' => 'Dr. Sarah Johnson',
                'image' => '/images/frontend/my-account/courses/mindfulness-foundations.jpg',
            ],
            'yoga-for-beginners' => [
                'title' => 'Yoga for Beginners',
                'instructor' => 'Emily Chen',
                'image' => '/images/frontend/my-account/courses/holistic-nutrition.jpg',
            ],
        ];

        return $courses[$course] ?? [
            'title' => str_replace('-', ' ', ucwords($course, '-')),
            'instructor' => '',
            'image' => '/assets/figma/user-dashboard/course-thumbnail.png',
        ];
    }
}
