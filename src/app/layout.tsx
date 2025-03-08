import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Motion Educare School | Best CBSE School with Hostel Facility",
  description:
    "Motion Educare School provides high-quality education from Playgroup to Class XII, including preparation for Sainik School and Navodaya exams. Admissions open!",
  keywords:
    "Motion Educare School, CBSE School, Best School with Hostel, Sainik School Preparation, Navodaya Exam Coaching best school, quality education, top school, student success, academic excellence, interactive learning, mentoring, student-centered approach, motion, notion educare, motion school",
  robots: "index, follow",
  icons: "/images/logo.jpeg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
