import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faNewspaper, faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function WelcomeBoxes() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Link href={"/about"}>
        <div className="box hover">
          <div className="h-10 bg-main rounded-t-lg centerDiv">
            <p className="text-xl uppercase">About me</p>
          </div>
          <div className="h-36 bg-white rounded-b-lg centerDiv">
            <div className="p-8 space-y-4">
              <p className="text-xl text-neutral-800">Who am I?<br />Get to know me here.</p>
              <FontAwesomeIcon icon={faUser} className="text-2xl" />
            </div>
          </div>
        </div>
      </Link>
      <Link href="/articles">
        <div className="box hover">
          <div className="h-10 bg-main rounded-t-lg centerDiv">
            <p className="text-xl uppercase">Articles</p>
          </div>
          <div className="h-36 bg-white rounded-b-lg centerDiv">
            <div className="p-8 space-y-4">
              <p className="text-xl text-neutral-800">Writing is like exercising - just for the brain.</p>
              <FontAwesomeIcon icon={faNewspaper} className="text-2xl" />
            </div>
          </div>
        </div>
      </Link>
      <div className="box hover">
        <div className="h-10 bg-main rounded-t-lg centerDiv">
          <p className="text-xl uppercase">Hire me!</p>
        </div>
        <div className="h-36 bg-white rounded-b-lg centerDiv">
          <div className="p-8 space-y-4">
            <p className="text-xl text-neutral-800">I'm a software developer and<br />content writer.</p>
            <FontAwesomeIcon icon={faBriefcase} className="text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
