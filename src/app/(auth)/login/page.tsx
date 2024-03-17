import LoginForm from "@/components/LoginForm";
import Link from "next/link";

export default function LoginPage() {
    return (
        <main>
            <LoginForm />
            Login page
            <Link href={"/register"}>Register</Link>
        </main>
    );
}
