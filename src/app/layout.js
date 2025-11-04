import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Koulen } from 'next/font/google';

const koulen = Koulen({
  subsets: ['latin'], 
  weight: '400', // Koulen typically only has one weight
  display: 'swap',
  variable: '--font-koulen', // Assign a CSS variable for global use
});
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Kinshuk Saini",
  description: "This is a Personal Portfolio Website of ME (Kinshuk Saini)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${koulen.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
