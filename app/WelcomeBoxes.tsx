import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function WelcomeBoxes() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <Link href={"/about"}>
        <div className="box hover">
          <div className="centerDiv h-10 rounded-t-lg bg-main">
            <p className="uppercase">About me</p>
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
      <Link href="https://www.mileways.com" target={"_blank"}>
        <div className="box hover">
          <div className="centerDiv h-10 rounded-t-lg bg-main">
            <p className="uppercase">Mileways</p>
          </div>
          <div className="centerDiv rounded-b-lg">
            <div className="space-y-4 p-8">
              <p className="text-lg">
                Everything you need to know about your flights and your friends' flights.
              </p>
              <p className="text-sm">
                Mileways is the flight tracking app that I'm developing.
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
