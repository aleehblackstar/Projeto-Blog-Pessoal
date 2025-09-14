import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Meu Blog Pessoal",
  description: "Um blog simples feito com Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <header className="bg-gray-800 text-white p-4">
          <nav className="container mx-auto flex justify-between">
            <Link href="/" className="text-xl font-bold">
              Meu Blog Pessoal
            </Link>

            <div className="space-x-4">
              <Link href="/">Home</Link>

              <Link href="/about">Sobre</Link>
            </div>
          </nav>
        </header>
        
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
