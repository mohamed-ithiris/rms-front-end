import Link from "next/link";

export default function LoginPage() {
    return (
        <main>
            Login page
            <Link href={"/register"}>Register</Link>
        </main>
    );
}
