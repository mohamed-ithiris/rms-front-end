// AdminLayout.tsx
"use client";

import React, { ReactNode } from 'react';
import AdminHeader from './AdminHeader';
import AdminFooter from './AdminFooter';
import { useRouter } from 'next/navigation';

interface AdminLayoutProps {
    children: ReactNode;
    userRole: string;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children, userRole }) => {

    const router = useRouter();

    // Redirect to login page if user is not authenticated
    if (!userRole) {
        router.push('/login');
        return null;
    }

    // Redirect to restricted access page if user is not admin
    if (userRole !== 'admin') {
        router.push('/');
        return null;
    }

    return (
        <div>
            <AdminHeader />
            {children}
            <AdminFooter />
        </div>
    );
};

export default AdminLayout;
