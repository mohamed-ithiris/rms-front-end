import Link from "next/link";

export default function Home() {
  return (
    <main>
      main page
      <Link href={"/users"}>Users</Link>
    </main>
  );
}
