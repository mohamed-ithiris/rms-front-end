import EmployeeRegistrationForm from "@/components/employeeRegistrationForm";
import Link from "next/link";

export default function RegisterPage() {
    return (
        <main>
            Register page
            <EmployeeRegistrationForm />
            <Link href={"/login"}>Login</Link>
        </main>
    );
}
