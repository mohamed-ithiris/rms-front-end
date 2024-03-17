import UserLayout from "@/components/layouts/UserLayout";

export default function ServerLayout({ children}: { children: React.ReactNode }) {
    return (
        <UserLayout>
            {children}
        </UserLayout>
    );
}
