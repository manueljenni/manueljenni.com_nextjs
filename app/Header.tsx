import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="justify-between md:flex">
        <div className="header hidden md:block">
          <Link href="/">
            <p className="text-2xl font-medium">Manuel Jenni</p>
          </Link>
        </div>
        <div className="header flex justify-evenly space-x-8 text-lg">
          <Link href={"/"}>
            <p>Home</p>
          </Link>
          <Link href={"/about"}>
            <p>About</p>
          </Link>
          <Link href={"/articles"}>
            <p>Articles</p>
          </Link>
          <Link href={"/lifestats"}>
            <p>LifeStats</p>
          </Link>
        </div>
      </div>
    </header>
  );
}
