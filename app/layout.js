import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aldi Meirano || Portofolio",
  description:
    "Aldi Meirano created a portfolio using NEXT.JS for the first time ",
  OpenGraph: {
    title: "Aldi Meirano || Portofolio",
    description:
      "Aldi Meirano created a portfolio using NEXT.JS for the first time ",
    Image: [{ url: "/images/gunung.jpg" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
