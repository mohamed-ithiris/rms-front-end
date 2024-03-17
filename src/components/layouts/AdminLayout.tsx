// AdminLayout.tsx
import React, { ReactNode } from 'react';
import AdminHeader from './AdminHeader';
import AdminFooter from './AdminFooter';

interface AdminLayoutProps {
    children: ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
    return (
        <div>
            <AdminHeader />
            {children}
            <AdminFooter />
        </div>
    );
};

export default AdminLayout;
