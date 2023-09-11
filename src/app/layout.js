import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import First from "./home/page";
import ChooseUs from "./chooseus/page";
import Join from "./join/page";
import Footer from "@/components/footer/Footer";
import Market from "./market/page";

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
          <Market className="market"/>
          <ChooseUs className="chooseus" />
          <Join className="join"/>
          <Footer/>
        </div>
        
      </body>
    </html>
  );
}
