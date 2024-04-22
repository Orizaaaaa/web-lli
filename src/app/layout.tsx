import type { Metadata } from "next";
import "../css/globals.css";
import { ReduxProvider } from "@/redux/provider";


export const metadata: Metadata = {
  title: "LLI Indonesia",
  description: "Generated by create next app",
};

import { Inter } from "next/font/google";

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReduxProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          <div className=" dark:bg-boxdark-2 dark:text-bodydark">
            {children}
          </div>
        </body>
      </html>
    </ReduxProvider>
  );
}
