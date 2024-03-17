import RegisterForm from "@/components/RegisterForm";
import Link from "next/link";

export default function RegisterPage() {
    return (
        <main>
            <RegisterForm />
            Register page
            <Link href={"/login"}>Login</Link>
        </main>
    );
}
