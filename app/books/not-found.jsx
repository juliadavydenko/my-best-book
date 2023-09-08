import Link from "next/link";

export default function NotFound() {
  return (
    <main className="text-center">
      <h2 className="text-3xl">Oops.</h2>
      <p>Sorry, it seems like we could't find the book you were looking for.</p>
      <p>
        You can go back to all <Link href="/books">books</Link>
      </p>
    </main>
  );
}
