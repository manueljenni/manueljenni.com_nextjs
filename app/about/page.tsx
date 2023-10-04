import Image from "next/image";
import Link from "next/link";
import BoxThree from "../Components/BoxThree";
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
              Originally, I'm from Switzerland but for the last two years I've been{" "}
              <Link href={"/flights"} className="accentText">
                travelling the world
              </Link>{" "}
              as a digital nomad, mostly based in Bangkok.
            </p>
            <p>
              I'm a passionate developer, working on various projects, both my own and for
              clients.
            </p>
            <p>
              I'm also studying law at university, run my own content writing agency and
              build side projects in my free time.
            </p>
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
        <div className="space-y-2">
          <h3 id="hireme" className="text-xl font-medium">
            Full Stack Software Developer
          </h3>
          <p className="text-lg">
            I'm available for freelance projects -&nbsp;
            <a
              className="accentText-noUnderline"
              href="mailto:manuelnoahjenni@gmail.com?subject=Project">
              hire me!
            </a>
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <BoxThree
            top="Backend"
            main="Java (Spring), Node (NestJS)"
            bottom="with Postgres, Docker & Co."
          />
          <BoxThree top="Frontend" main="React, NextJS" bottom="with TypeScript" />
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="text-xl font-medium">Career</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <BoxThree
            top="Full Stack"
            main="Software Developer"
            bottom="Java, React, Node etc."
          />
          <Link
            href="https://www.mileways.com"
            target="_blank"
            className="pointer-important">
            <BoxThree
              top="Co-founder & Developer"
              main="Mileways"
              bottom="Flight tracking app for iOS"
            />
          </Link>

          {/*<BoxThree top="Studying" main="Law (LLB) ⚖️" bottom="in Switzerland" />
          <BoxThree
            top="ScriptySEO"
            main="Content Writing Agency ✍️"
            bottom="Founder & CEO"
  />*/}
        </div>
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
      <div className="space-y-4">
        <h3 className="text-xl font-medium">Projects</h3>
        <p className="text-lg">
          These are some projects I'm currently working on. Some are already full-fledged
          products, others are just ideas or prototypes.
        </p>
        <SideProjects />
      </div>
    </div>
  );
}
