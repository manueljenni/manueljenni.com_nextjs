import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";
import 'mapbox-gl/dist/mapbox-gl.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-neutral-50 body space-y-12 my-8 flex flex-col justify-between">
        <section className="m-0 p-0 space-y-12">
          <Header />
          {children}
        </section>
        <Footer />
      </body>
    </html>
  );
}
