import Link from "next/link";

export default function UserPage() {
    return (
        <main>
            User page
            <Link href={"/order"}>Order</Link>
            <Link href={"/login"}>Login</Link>
        </main>
    );
}
