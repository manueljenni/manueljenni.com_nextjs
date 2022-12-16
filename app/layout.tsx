import "./globals.css";
import Header from "./Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-neutral-50 body space-y-12 my-8">
        <Header />
        {children}
      </body>
    </html>
  );
}
