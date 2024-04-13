
import { Inter } from "next/font/google";
import "./globals.css";
import 'remixicon/fonts/remixicon.css'
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Onisoriginals",
  description: "Online shoe company for selling trendy fashion's shoes in low costs"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
