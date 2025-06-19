import { Public_Sans } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/lib/StoreProvider";
import TopAdvertize from "@/components/customeUI/TopAdvertize";
import Header from "@/components/common/header/Header";
import Footer from "@/components/common/footer/Footer";

const publicSance = Public_Sans({
  variable: "--font-Public_Sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Clicon",
  description: "Clicon is a online eCommerce store like Daraz ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${publicSance.variable}  antialiased`}>
        <TopAdvertize />
        <StoreProvider>
          <Header />
          {children}
          <Footer/>
        </StoreProvider>
      </body>
    </html>
  );
}
