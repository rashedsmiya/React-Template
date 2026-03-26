import * as React from 'react';
import { type ReactNode } from 'react';

import { Toaster } from "@/components/ui/sonner"
import { UserSidebar } from '@/layouts/partials/user/sidebar';

interface UserDashboardLayoutProps {
    children: ReactNode;
}

export default function UserDashboardLayout({ children }: UserDashboardLayoutProps) {

    return (
        <div className="flex min-h-screen bg-background">
            <UserSidebar />
            <div className="flex-1 flex flex-col">
                <main className="flex-1 p-6">
                    {children}
                </main>
            </div>
            <Toaster position="top-right" richColors />
        </div>
    );
}
