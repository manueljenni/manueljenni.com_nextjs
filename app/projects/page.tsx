import SideProjects from "../SideProjects";

export default function page() {
  return (
    <div className="space-y-8">
      <div className="space-y-4 text-lg">
        <p className="text-3xl font-medium">Projects</p>
        <p>
          I love to try new things and create solutions that make our lives easier. Here
          are some of my ideas, prototypes and things that I'm building.
        </p>
      </div>
      <SideProjects />
    </div>
  );
}
