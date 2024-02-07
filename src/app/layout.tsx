"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      console.log(pathname)
      if (pathname == "/login") router.push("/login");
      if (pathname == "/signup") router.push("/signup");
      else router.push("/login");
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Speedy Assessment</title>
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
