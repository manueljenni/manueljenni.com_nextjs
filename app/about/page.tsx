import React from "react";
import BoxThree from "../Components/BoxThree";
import BoxTwo from "../Components/BoxTwo";
import SideProjects from "../SideProjects";
import Utils from "../Utils";
import Link from "next/link";
import Image from "next/image";

export default function page() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <div className="flex md:space-x-16">
          <div className="space-y-4 text-lg md:w-2/3">
            <p className="text-3xl font-medium">About me</p>
            <p>Hi, I'm Manuel. :)</p>
            <p>I'm {Utils.getAge()} years and I'm currently living in London.</p>
            <p>
              Originally I'm from Switzerland, but for the last two years, I've been
              travelling the world as a digital nomad.
            </p>
            <p>
              I'm also a passionate software developer - currently I'm working as a&nbsp;
              <span className="accentText-noUnderline">consultant and developer </span>
              for Europe-based companies.
            </p>
            <p>
              I'm also studying law at university and running my own content writing
              agency.
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
        <h3 className="text-xl font-medium">Career</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <BoxThree
            top="SSD Consulting"
            main="Consultant & Developer"
            bottom="for various Europe-based clients"
          />
          <Link
            href="https://www.mileways.com"
            target="_blank"
            className="pointer-important">
            <BoxThree
              top="Flight tracking app"
              main="Mileways"
              bottom="Co-founder & Backend Developer"
            />
          </Link>
          <BoxThree top="Studying" main="Law (LLB) ⚖️" bottom="in Switzerland" />
          <BoxThree
            top="ScriptySEO"
            main="Content Writing Agency ✍️"
            bottom="Founder & CEO"
          />
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
            bottom="with SQL, Prisma, Docker & Co."
          />
          <BoxThree top="Frontend" main="React, NextJS" bottom="HTML & CSS, JS & TS" />
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="text-xl font-medium">Hobbies</h3>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <BoxTwo main="Travel" bottom="✈️" />
          <BoxTwo main="Photography" bottom="📸" />
          <BoxTwo main="Piano & Music" bottom="🎹" />
          <BoxTwo main="Food ;)" bottom="🍜" />
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="text-xl font-medium">Side Projects</h3>
        <p className="text-lg">
          These are some projects I'm currently working on. Some are already functioning
          prototypes, and others are just ideas.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <SideProjects />
        </div>
      </div>
    </div>
  );
}
