import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import MaxWidth from "@/components/shared/max-width";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Weather Forcast",
  description:
    "Search using locations to find see information on their weather conditions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const date = new Date().getFullYear();
  return (
    <html lang="en">
      <body className={`${montserrat.className}  bg-primary antialiased`}>
        <MaxWidth>{children}</MaxWidth>
        <p className=" text-[12px] mt-[100px] text-center text-white">
          © Copyright {date}: Divine Onyekachukwu
        </p>
      </body> 
    </html>
  );
}
