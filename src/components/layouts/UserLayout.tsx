// UserLayout.tsx
import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface UserLayoutProps {
    children: ReactNode;
}

const UserLayout: React.FC<UserLayoutProps> = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default UserLayout;
