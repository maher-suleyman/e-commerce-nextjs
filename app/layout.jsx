import "./globals.css";
import { Rubik } from "next/font/google";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "E-Commerce",
  description:
    "E-Commerce marketplace is an e-commerce platform that enables third-party sellers to sell new or used products directly to consumers on a fixed-price online marketplace alongside E-Commerce's regular offerings.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Navbar />
        <main className="min-h-[83.65vh] max-w-7xl py-8 mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
