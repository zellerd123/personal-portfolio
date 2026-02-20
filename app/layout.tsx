import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Doug Zeller - Software Engineer",
  description: "Portfolio of Doug Zeller - Software Engineer I at Vituity specializing in full-stack development, NLP, and Gen AI",
  keywords: ["Doug Zeller", "Software Engineer", "Vituity", "Full-stack Developer", "React", "Python", "TypeScript"],
  authors: [{ name: "Doug Zeller" }],
  openGraph: {
    title: "Doug Zeller - Software Engineer",
    description: "Software Engineer portfolio showcasing projects in full-stack development and AI/ML",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
