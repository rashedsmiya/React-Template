<?php

namespace App\Http\Controllers\Backend\User\UserDashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class UserRoleController extends Controller
{
    /**
     * Switch user role between USER and ADMIN.
     *
     * This endpoint is restricted - only users with 'role.switch' ability can use it.
     * Add this ability to users via a gate/policy in production.
     */
    public function switch(): RedirectResponse
    {
        $user = Auth::user();

        if (! $user) {
            return redirect()->back();
        }

        // Authorization check - only allow role switching if explicitly permitted
        // Remove or customize this gate check for production
        if (Gate::denies('role.switch', $user)) {
            return redirect()->back()->with('error', 'You are not authorized to switch roles.');
        }

        // Toggle between USER and ADMIN roles
        if ($user->role === \App\Enums\UserRole::ADMIN) {
            $newRole = \App\Enums\UserRole::USER;
        } else {
            $newRole = \App\Enums\UserRole::ADMIN;
        }

        $user->update(['role' => $newRole->value]);
        $user->refresh();

        return redirect()->back()->with('success', 'Role switched to '.$newRole->label());
    }
}
