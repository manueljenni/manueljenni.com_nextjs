import React from "react";

export default function page() {
  return (
    <div className="w-full py-24">
      <div className="centerDiv h-full">
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
              <div className="centerDiv rounded-lg p-4 ring-1 ring-neutral-300">
                <div className="space-y-2 text-center">
                  <p className="text-lg">Backend</p>
                  <p className="text-2xl font-medium">Java (Spring), NodeJS</p>
                  <p className="text-lg">with SQL, Docker & Co.</p>
                </div>
              </div>
              <div className="centerDiv rounded-lg p-4 ring-1 ring-neutral-300">
                <div className="space-y-2 text-center">
                  <p className="text-lg">Frontend</p>
                  <p className="text-2xl font-medium">React, NextJS</p>
                  <p className="text-lg">HTML, CSS, SASS, JS & TS</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Other Work</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="centerDiv rounded-lg p-4 ring-1 ring-neutral-300">
                <div className="space-y-2 text-center">
                  <p className="text-lg">Studying</p>
                  <p className="text-2xl font-medium">Law (LLB) ⚖️</p>
                  <p className="text-lg">in Switzerland</p>
                </div>
              </div>
              <div className="centerDiv rounded-lg p-4 ring-1 ring-neutral-300">
                <div className="space-y-2 text-center">
                  <p className="text-lg">ScriptySEO.com</p>
                  <p className="text-2xl font-medium">Content Writing Agency ✍️</p>
                  <p className="text-lg">Founder & CEO</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Hobbies</h3>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              <div className="centerDiv rounded-lg p-4 ring-1 ring-neutral-300">
                <div className="space-y-2 text-center">
                  <p className="text-2xl font-medium">Travel</p>
                  <p className="text-2xl font-medium">✈️</p>
                </div>
              </div>
              <div className="centerDiv rounded-lg p-4 ring-1 ring-neutral-300">
                <div className="space-y-2 text-center">
                  <p className="text-2xl font-medium">Photography</p>
                  <p className="text-2xl font-medium">📸</p>
                </div>
              </div>
              <div className="centerDiv rounded-lg p-4 ring-1 ring-neutral-300">
                <div className="space-y-2 text-center">
                  <p className="text-2xl font-medium">Piano & Music</p>
                  <p className="text-2xl font-medium">🎹</p>
                </div>
              </div>
              <div className="centerDiv rounded-lg p-4 ring-1 ring-neutral-300">
                <div className="space-y-2 text-center">
                  <p className="text-2xl font-medium">Food ;)</p>
                  <p className="text-2xl font-medium">🍜</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Side Projects</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg p-4 ring-1 ring-neutral-300">
                <div className="flex h-full flex-col justify-between space-y-3">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <p className="text-2xl font-medium">Freelancely</p>
                      <div className="flex space-x-3">
                        <p className="rounded bg-blue-200 py-1 px-2 text-sm uppercase">
                          Web
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-base font-medium">Bookkepping for freelancers</p>
                      <p className="text-base">
                        Keep track of your billable hours, invoices, payments
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 pt-2 text-xs uppercase">
                    <p className="rounded bg-blue-200 py-1 px-2 text-blue-800">NextJS</p>
                    <p className="rounded bg-green-200 py-1 px-2 text-green-800">
                      Spring Boot
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg p-4 ring-1 ring-neutral-300">
                <div className="flex h-full flex-col justify-between space-y-3">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <p className="text-2xl font-medium">MyNomadTravels</p>
                      <div className="flex space-x-3">
                        <p className="rounded bg-blue-200 py-1 px-2 text-sm uppercase">
                          Web
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-base font-medium">Travel planner</p>
                      <p className="text-base">
                        Track your upcoming trips, flights & hotel stays.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 pt-2 text-xs uppercase">
                    <p className="rounded bg-blue-200 py-1 px-2 text-blue-800">NextJS</p>
                    <p className="rounded bg-green-200 py-1 px-2 text-green-800">
                      Spring Boot
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
