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
  title: "Klasifikasiku",
  description: `Klasifikasiku adalah sebuah platform berbasis web yang dirancang untuk membantu pengguna melakukan klasifikasi data secara cepat dan akurat. Website ini secara khusus difokuskan untuk menentukan status "Laku" atau "Tidak Laku" berdasarkan data yang diunggah oleh pengguna. Dengan menggunakan algoritma canggih seperti Decision Tree C4.5 dan KNN, Klasifikasiku memberikan hasil klasifikasi yang informatif disertai dengan metrik evaluasi seperti akurasi, presisi, recall, dan F1-score.Website ini juga menyediakan fitur unggah file Excel untuk mempermudah proses analisis data, serta opsi unduhan hasil klasifikasi yang dapat digunakan lebih lanjut oleh pengguna. Cocok digunakan oleh pelaku bisnis untuk menganalisis performa produk atau siapa saja yang membutuhkan solusi klasifikasi berbasis data.`,
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
        {children}
      </body>
    </html>
  );
}
