<?php

use App\Http\Controllers\Backend\User\UserDashboard\DashboardController;
use App\Http\Controllers\Backend\User\UserDashboard\MyLearningController;
use App\Http\Controllers\Backend\User\UserDashboard\UserRoleController;
use App\Http\Controllers\UserProfileController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified'])->prefix('user')->name('user.')->group(function () {
    // User Routes

    Route::get('/dashboard', [DashboardController::class, 'index']);
    Route::post('/role/switch', [UserRoleController::class, 'switch'])->name('role.switch');
    Route::get('/my-learning', [MyLearningController::class, 'index'])->name('my-learning');
    Route::get('/my-learning/courses/{course}', [MyLearningController::class, 'show'])->name('my-account.courses.show');
    Route::get('/my-learning/courses/{course}/lesson', [MyLearningController::class, 'lesson'])->name('my-learning.course.lesson');
    Route::post('/my-learning/courses/{course}/review', [MyLearningController::class, 'submitReview'])->name('my-learning.course.review.submit');
    // Profile Routes
    Route::get('/profile', [UserProfileController::class, 'edit'])->name('profile.edit');
    Route::post('/profile', [UserProfileController::class, 'update'])->name('profile.update');

});

// Dashboard route for backward compatibility with route('dashboard')
Route::middleware(['auth', 'verified'])->get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
