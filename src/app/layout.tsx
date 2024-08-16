import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import ClientProvider from "./ClientProvider";
import { Toaster, toast } from "sonner";

export const metadata: Metadata = {
  title: "WedLock",
  description: "This is a matrimonial website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <ClientProvider>
          <Toaster  position="top-right" richColors />
          <div className="overflow-x-hidden">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ClientProvider>
      </body>
    </html>
  );
}
