import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Waroe-NX",
  description: "Full-stack web app for online store.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="p-4 bg-gray-800 text-white">
          <h1 className="text-2xl font-bold">Food Stall</h1>
          <input
            type="text"
            placeholder="Search menu items"
            className="mt-2 p-2 w-full rounded-md"
          />
        </header>
        <main className="p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
