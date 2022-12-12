import "./globals.css";
import Header from "./Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-slate-50">
        <Header />
        {children}
      </body>
    </html>
  );
}
