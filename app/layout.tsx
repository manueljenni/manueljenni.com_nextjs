import "mapbox-gl/dist/mapbox-gl.css";
import { Metadata } from "next";
import Footer from "./Footer";
import "./globals.css";
import Header from "./Header";

export const metadata: Metadata = {
  title: "Manuel Jenni",
  viewport: "width=device-width, initial-scale=1",
  description: "Manuel Jenni",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="body my-8 flex flex-col justify-between space-y-12 bg-neutral-50 dark:bg-dark dark:text-white">
        <section className="m-0 space-y-12 p-0">
          <Header />
          {children}
        </section>
        <Footer />
      </body>
    </html>
  );
}
