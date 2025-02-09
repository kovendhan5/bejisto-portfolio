import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import type { ReactNode } from "react";

const playfair = Playfair_Display({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bejisto Joseph - Full Stack Developer",
  description: "Professional portfolio of Bejisto Joseph, showcasing full stack development expertise",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <div className={playfair.className}>
          {/* Apply the Playfair_Display font to specific elements or sections */}
          {children}
        </div>
      </body>
    </html>
  );
}