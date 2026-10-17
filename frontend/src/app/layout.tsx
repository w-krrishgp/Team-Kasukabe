import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smart Farm Intelligence Platform | Agritech Innovation",
  description: "From crop diagnosis to resource intelligence, financial empowerment, and fair market access for modern farmers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-[#fbfbfa] text-[#1c241f] font-sans">
        {children}
      </body>
    </html>
  );
}
