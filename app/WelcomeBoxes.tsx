import { faBriefcase, faNewspaper, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function WelcomeBoxes() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      <Link href={"/about"}>
        <div className="box hover">
          <div className="centerDiv h-10 rounded-t-lg bg-main">
            <p className="text-xl uppercase">About me</p>
          </div>
          <div className=" centerDiv rounded-b-lg ">
            <div className="space-y-4 p-8">
              <p className="text-xl ">
                Who am I?
                <br />
                Get to know me here.
              </p>
              <FontAwesomeIcon icon={faUser} className="text-2xl" />
            </div>
          </div>
        </div>
      </Link>
      <Link href="/articles">
        <div className="box hover">
          <div className="centerDiv h-10 rounded-t-lg bg-main">
            <p className="text-xl uppercase">Articles</p>
          </div>
          <div className="rounded-b-lg">
            <div className="space-y-4 p-8">
              <p className="text-xl">Writing is like exercising - just for the brain.</p>
              <FontAwesomeIcon icon={faNewspaper} className="text-2xl" />
            </div>
          </div>
        </div>
      </Link>
      <Link href="/about">
        <div className="box hover">
          <div className="centerDiv h-10 rounded-t-lg bg-main">
            <p className="text-xl uppercase">Hire me!</p>
          </div>
          <div className=" centerDiv rounded-b-lg">
            <div className="space-y-4 p-8">
              <p className="text-xl ">I'm a software developer and content writer.</p>
              <FontAwesomeIcon icon={faBriefcase} className="text-2xl" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
