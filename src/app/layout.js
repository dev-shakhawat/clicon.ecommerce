import Authcheck from "@/components/common/Authcheck";
import Footer from "@/components/common/footer/Footer";
import Header from "@/components/common/header/Header";
import TopAdvertize from "@/components/customeUI/TopAdvertize";
import StoreProvider from "@/lib/StoreProvider";
import { Public_Sans } from "next/font/google";
import "./globals.css";

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
          <Authcheck>
          <Header />
          {children}

          </Authcheck>
          <Footer/>
        </StoreProvider>
      </body>
    </html>
  );
}
