import "./globals.css";
import { Playfair_Display } from "next/font/google";

// components
import Navbar from "./components/Navbar";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata = {
  title: "My Best Book",
  description: "Personalized children's books. A beautiful, unique gift.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={playfair.className}>
        {" "}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
