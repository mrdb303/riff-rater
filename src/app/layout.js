import { Inter } from "next/font/google";
import { Theme } from '@radix-ui/themes';
import TopMenu from "@/app/components/TopMenu";
import Header from "@/app/components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Album Reviews",
  description: "Album reviews you can trust",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <>
        
          <Header/>
          <TopMenu/>
          <div id="wrapper">
        {children}
        </div>
        </>
      </body>
    </html>
  );
}
