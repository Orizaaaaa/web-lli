import type { Metadata } from "next";
import "../app/css/globals.css";
import { inter } from "./utils/font";


export const metadata: Metadata = {
  title: "LLI Indonesia",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
