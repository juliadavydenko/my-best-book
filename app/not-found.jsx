import Link from "next/link";

export default function NotFound() {
  return (
    <main className="text-center">
      <h2 className="text-3xl">Something happened.</h2>
      <p>The page you were looking for is not found</p>
      <p>
        Go back to the <Link href="/">Main Page</Link>
      </p>
    </main>
  );
}
