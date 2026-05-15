import type { Metadata } from "next";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Smart Expense Tracker",
  description: "Quản lý chi tiêu thông minh với AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={cn(geistSans.variable, geistMono.variable)}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
