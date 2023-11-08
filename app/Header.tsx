import Link from "next/link";
import { DarkModeButton } from "./Components/DarkModeButton";

export default function Header() {
  return (
    <div>
      <div className="justify-between md:flex">
        <div className="header hidden md:block">
          <Link href="/">
            <p className="text-2xl font-medium">Manuel Jenni</p>
          </Link>
        </div>
        <div className="header flex items-center justify-evenly space-x-8 text-lg">
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
          <DarkModeButton />
        </div>
      </div>
    </div>
  );
}
