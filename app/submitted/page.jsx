import Link from "next/link";

export default function Submitted() {
  return (
    <main className="text-center">
      <h2 className="text-3xl"> Form Submitted</h2>

      <p>
        Continue Shopping at <Link href="/">Main Page</Link>
      </p>
    </main>
  );
}
