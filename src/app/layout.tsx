import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aysha Fidha P | Game Developer & Systems Engineer",
  description: "Aysha Fidha P is a game developer and systems engineer specializing in C# game engines, graphics rendering pipelines, real-time optimization, and gameplay systems.",
  keywords: [
    "Aysha Fidha P",
    "Game Developer",
    "Systems Engineer",
    "C#",
    "C++",
    "Game Engine",
    "Graphics Programming",
    "Model Engineering College",
    "OpenSAGE",
    "Double Dummy Solver",
    "kido"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} dark scroll-smooth`}>
      <body className="antialiased font-sans bg-[#030303]">
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}

