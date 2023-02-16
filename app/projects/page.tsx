import React from "react";
import SideProjects from "../SideProjects";

export default function page() {
  return (
    <div className="space-y-8">
      <div className="space-y-4 text-lg">
        <p className="text-3xl font-medium">Side Projects</p>
        <p>
          I love to try new things, and I'm always looking for new projects to work on.
          Here are some of my ideas, prototypes and stuff that I'm building.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SideProjects />
      </div>
    </div>
  );
}
