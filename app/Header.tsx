import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="body">
      <div className="flex justify-between">
        <div>
          <p className="text-2xl font-medium">Manuel Jenni</p>
        </div>
        <div className="flex space-x-8 justify-end text-lg">
          <Link href={"/"}><p>Home</p></Link>
          <Link href={"/about"}><p>About</p></Link>
          <Link href={"/articles"}><p>Articles</p></Link>
          <Link href={"/lifestats"}><p>LifeStats</p></Link>
        </div>
      </div>
    </header>
  );
}
