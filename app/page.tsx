import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>HOME PAGE</h1>
      <div>
        <Link href={"/quizzes"}>Quizzes</Link>
      </div>
      <div>
        <Link href={"/users"}>Users</Link>
      </div>
      <div>
        <Link href={"/stats"}>Statistics</Link>
      </div>
      <div>
        <Link href={"/docs"}>Documents</Link>
      </div>
    </main>
  );
}
