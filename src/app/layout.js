import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import First from "./home/page";
import ChooseUs from "./chooseus/page";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div style={{ position: "fixed", top: 0, width: "100%" }}>
          <Navbar />
        </div>
        <div className="main">
          <First id="first" />
          <ChooseUs className="chooseus" />
        </div>
        
      </body>
    </html>
  );
}
