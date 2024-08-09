import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
// import { store } from "../Redux/store.ts";
// import { Provider } from "react-redux";


export const metadata: Metadata = {
  title: "WedLock",
  description: "This is metromonial website",
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
        {/* <Provider store={store}> */}
        <div>
        <div className=" overflow-x-hidden">
         <Navbar />
        {children}
         <Footer/>
        </div>
        </div>
        {/* </Provider> */}
        </body>
    </html>
  );
}
