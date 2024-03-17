import UserLayout from "@/components/layouts/UserLayout";

export default function ServerLayout({ children }: { children: React.ReactNode }) {
    const userRole = 'admin'; // Get user role from JWT token

    return (
        <UserLayout userRole={userRole}>
            {children}
        </UserLayout >
    );
}
