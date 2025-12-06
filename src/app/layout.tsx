import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google"; // 1. Font dimatikan sementara agar tidak error
import "./globals.css"; // 2. Wajib ada agar Tailwind jalan

export const metadata: Metadata = {
  title: "Portofolio Rhegysa",
  description: "Portofolio Rhegysa, Mahasiswi Teknik Informatika",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Hapus variable font yang bikin error, sisakan antialiased */}
      <body className="antialiased bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}