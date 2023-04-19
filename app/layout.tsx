import "mapbox-gl/dist/mapbox-gl.css";
import Footer from "./Footer";
import "./globals.css";
import Header from "./Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="body my-8 flex flex-col justify-between space-y-12 bg-neutral-50">
        <section className="m-0 space-y-12 p-0">
          <Header />
          {children}
        </section>
        <Footer />
      </body>
    </html>
  );
}
