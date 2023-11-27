import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href={"/"}>
        <h1>HOME PAGE</h1>
      </Link>

      <div>
        <Link href={"pages/quizzes"}>Quizzes</Link>
      </div>
      <div>
        <Link href={"pages/users"}>Users</Link>
      </div>
      <div>
        <Link href={"pages/stats"}>Statistics</Link>
      </div>
      <div>
        <Link href={"pages/docs"}>Documents</Link>
      </div>
    </main>
  );
}
