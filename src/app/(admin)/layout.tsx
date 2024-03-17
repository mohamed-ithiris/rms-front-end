import AdminLayout from "@/components/layouts/AdminLayout";

export default function Admin({ children }: { children: React.ReactNode }) {
    const userRole = 'admin'; // Get user role from JWT token

    return (
        <AdminLayout userRole={userRole}>
            {children}
        </AdminLayout>
    );
}
