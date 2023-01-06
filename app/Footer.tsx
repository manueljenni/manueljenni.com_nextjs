import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div className="flex justify-between items-center w-full">
        <p className="text-base">This website is currently under development.</p>
        <div className="flex space-x-8 justify-end text-base text-main">
          <Link href={"https://www.instagram.com/manuelnoahjenni/"} target="_blank">
            <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
