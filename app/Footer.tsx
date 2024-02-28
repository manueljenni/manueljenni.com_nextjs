import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="flex w-full items-center justify-between">
        <p className="text-base">© 2024U Manuel Jenni</p>
        <div className="flex justify-end space-x-8 text-base text-main">
          <Link href={"https://www.instagram.com/_manuelnoah_/"} target="_blank">
            <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
