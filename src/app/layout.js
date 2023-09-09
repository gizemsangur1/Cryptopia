import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div style={{ position: "fixed", top: 0, width: "100%" }}>
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
