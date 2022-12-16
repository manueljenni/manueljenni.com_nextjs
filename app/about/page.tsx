import React from "react";
import BoxThree from "../Components/BoxThree";
import BoxTwo from "../Components/BoxTwo";
import SideProjects from "../SideProjects";

export default function page() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <p className="text-3xl font-medium">About me</p>
        <div className="space-y-4 text-lg">
          <p>Hi, I'm Manuel. :)</p>
          <p>
            I'm 20 years old, originally from Switzerland and now travelling the world
            as a digital nomad.
          </p>
          <p>
            Other than a travel addict, I'm also a passionate software developer.
            Currently, my main project is Mileways, an amazing flight tracking app.
          </p>
          <p>
            I'm also studying law at university, and running my own content writing
            agency.
          </p>
        </div>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-medium">Full Stack Software Developer</h3>
          <p className="text-lg">
            I'm available for freelance projects -{" "}
            <span className="accentText">hire me!</span>
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <BoxThree top="Backend" main="Java (Spring), NodeJS" bottom="with SQL, Docker & Co." />
          <BoxThree top="Frontend" main="React, NextJS" bottom="HTML, CSS, SASS, JS & TS" />
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="text-xl font-medium">Other Work</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <BoxThree top="Studying" main="Law (LLB) ⚖️" bottom="in Switzerland" />
          <BoxThree top="ScriptySEO.com" main="Content Writing Agency ✍️" bottom="Founder & CEO" />
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SideProjects />
        </div>
      </div>
    </div>
  );
}
