import { Raleway } from "next/font/google";
import "./globals.css";
import "./styles/colors.css";
import "./styles/anims.css";
import '@/components/layout/layout.css'
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const raleway = Raleway({
  subsets: ["latin", "cyrillic"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${raleway.className}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" type="image/svg+xml" />
        <link rel='image/svg+xml' href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="w-screen overflow-x-hidden">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
