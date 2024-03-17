import Link from "next/link";

export default function OrderPage() {
    return (
        <main>
            Order page
            <Link href={"/users"}>users</Link>
        </main>
    );
}
