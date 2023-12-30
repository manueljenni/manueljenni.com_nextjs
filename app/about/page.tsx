import Image from "next/image";
import Link from "next/link";
import BoxTwo from "../Components/BoxTwo";
import SideProjects from "../SideProjects";

export default function page() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <div className="flex md:space-x-16">
          <div className="space-y-4 text-lg md:w-2/3">
            <p className="text-3xl font-medium">About me</p>
            <p>Hi, I'm Manuel. :)</p>
            <p>
              I grew up in Switzerland, but right now I'm living in Bangkok.
              <br />I travel a lot - check out some of my trips{" "}
              <Link href="/travels" className="accentText">
                here.
              </Link>
            </p>
            <p>
              I love working on startups. Right now I spend most of my time working on{" "}
              <Link
                href="https://www.mileways.com"
                target={"_blank"}
                className="accentText">
                Mileways
              </Link>
              , a flight tracking app for iOS.
            </p>
            <p>I also work for other startups and on other projects. Interested?</p>
            <a
              className="accentText"
              href="mailto:manuelnoahjenni@gmail.com?subject=Project">
              Contact me here.
            </a>
          </div>
          <div className="hidden md:block">
            <Image
              src={"/img/profile-ai.jpg"}
              alt="Profile"
              width={300}
              height={300}
              className="rounded-full"></Image>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="text-xl font-medium">Projects</h3>
        <p className="text-lg">
          These are some projects I'm currently working on. Some are already full-fledged
          products, others are just ideas or prototypes.
        </p>
        <SideProjects />
      </div>
      <div className="space-y-4">
        <h3 className="text-xl font-medium">Hobbies</h3>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <BoxTwo main="Travel" bottom="✈️" />
          <BoxTwo main="Photography" bottom="📸" />
          <BoxTwo main="Piano" bottom="🎹" />
          <BoxTwo main="Food ;)" bottom="🍜" />
        </div>
      </div>
    </div>
  );
}
