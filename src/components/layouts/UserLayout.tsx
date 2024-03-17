// UserLayout.tsx
"use client";

import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useRouter } from 'next/navigation';

type UserLayoutProps = {
    children: ReactNode;
    userRole: string;
}

const UserLayout: React.FC<UserLayoutProps> = ({ children, userRole }) => {
    const router = useRouter();

    // Redirect to login page if user is not authenticated
    if (!userRole) {
        router.push('/login');
        return null;
    }

    // Redirect to restricted access page if user is not admin
    if (userRole !== 'server') {
        router.push('/');
        return null;
    }

    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default UserLayout;
