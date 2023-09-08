import Link from "next/link";
import Image from "next/image";
import Logo from "./book-logo.png";

export default function Navbar() {
  return (
    <nav>
      <Image
        src={Logo}
        alt="My Best Book logo"
        width={70}
        placeholder="blur"
        quality={100}
      />
      <h1>My Best Book</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/checkout">Checkout</Link>
    </nav>
  );
}
