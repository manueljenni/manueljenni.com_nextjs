import React from "react";
import styles from "./page.module.css";

export default function page() {
  return (
    <div className="w-full bg-slate-50 py-24">
      <div className="centerDiv h-full">
        <div className="space-y-16">
          <div className="space-y-6 text-center">
            <h1 className="text-6xl font-semibold">
              Hi, I'm <span className={styles.welcomeText}>Manuel</span>.
            </h1>
            <p className="text-xl">
              A developer, content writer and aspiring attorney.
              <br />
              Check out some of my <span className="text-main">
                thoughts & projects
              </span>{" "}
              and <span className="text-main">travels</span>.
            </p>
          </div>
          <div className="w-screen">
            <div className="centerDiv">
              <div className="w-3/4 space-y-8">
                <p className="text-3xl font-medium">What do I do?</p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="box">
                    <div className="centerDiv h-10 rounded-t-lg bg-main text-lg font-medium">
                      <p>ABOUT ME</p>
                    </div>
                    <div className="p-4">
                      <p>
                        Who am I?
                        <br />
                        Get to know me here!
                      </p>
                    </div>
                  </div>
                  <div className="box">
                    <div className="centerDiv h-10 rounded-t-lg bg-main text-lg font-medium">
                      <p>ARTICLES</p>
                    </div>
                    <div className="p-4">
                      <p>Writing is like exercising - just for the brain.</p>
                    </div>
                  </div>
                  <div className="box">
                    <div className="centerDiv h-10 rounded-t-lg bg-main text-lg font-medium">
                      <p>HIRE ME!</p>
                    </div>
                    <div className="p-4">
                      <p>I'm a software developer and content writer.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-screen">
            <div className="centerDiv">
              <div className="w-3/4 space-y-8">
                <p className="text-3xl font-medium">Recent articles</p>
                <div className="space-y-8">
                  <div className="flex">
                    <div className="flex w-1/4 items-start">
                      <div className="space-y-3 pr-8">
                        <p className="text-lg">22 Dec 2022</p>
                        <p className="text-main">#travel #sanfrancisco #trip</p>
                      </div>
                    </div>
                    <div className="w-3/4 space-y-2">
                      <h1 className="text-3xl font-medium">
                        This is the title of a very interesting article
                      </h1>
                      <p className="text-lg">
                        This is the text of a very interesting article. This is the text
                        of a very interesting article. This is the text of a very
                        interesting article.
                      </p>
                      <p className="accentText text-lg">Read more →</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex w-1/4 items-start">
                      <div className="space-y-3 pr-8">
                        <p className="text-lg">22 Dec 2022</p>
                        <p className="text-main">#travel #sanfrancisco #trip</p>
                      </div>
                    </div>
                    <div className="w-3/4 space-y-2">
                      <h1 className="text-3xl font-medium">
                        This is the title of a very interesting article
                      </h1>
                      <p className="text-lg">
                        This is the text of a very interesting article. This is the text
                        of a very interesting article. This is the text of a very
                        interesting article.
                      </p>
                      <p className="accentText text-lg">Read more →</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex w-1/4 items-start">
                      <div className="space-y-3 pr-8">
                        <p className="text-lg">22 Dec 2022</p>
                        <p className="text-main">#travel #sanfrancisco #trip</p>
                      </div>
                    </div>
                    <div className="w-3/4 space-y-2">
                      <h1 className="text-3xl font-medium">
                        This is the title of a very interesting article
                      </h1>
                      <p className="text-lg">
                        This is the text of a very interesting article. This is the text
                        of a very interesting article. This is the text of a very
                        interesting article.
                      </p>
                      <p className="accentText text-lg">Read more →</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex w-1/4 items-start">
                      <div className="space-y-3 pr-8">
                        <p className="text-lg">22 Dec 2022</p>
                        <p className="text-main">#travel #sanfrancisco #trip</p>
                      </div>
                    </div>
                    <div className="w-3/4 space-y-2">
                      <h1 className="text-3xl font-medium">
                        This is the title of a very interesting article
                      </h1>
                      <p className="text-lg">
                        This is the text of a very interesting article. This is the text
                        of a very interesting article. This is the text of a very
                        interesting article.
                      </p>
                      <p className="accentText text-lg">Read more →</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-screen">
            <div className="centerDiv">
              <div className="w-3/4 space-y-6">
                <p className="text-3xl font-medium">LifeStats</p>
                <div className="space-y-8">
                  <div className="space-y-6">
                    <p className="text-xl font-medium">Travel</p>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="centerDiv rounded-lg p-4 ring-1 ring-neutral-300">
                        <div className="space-y-1 text-center">
                          <p className="text-lg">Next upcoming flight to</p>
                          <p className="text-2xl font-medium">Abu Dhabi, UAE</p>
                          <p className="text-lg">in 12 days</p>
                        </div>
                      </div>
                      <div className="centerDiv rounded-lg p-4 ring-1 ring-neutral-300">
                        <div className="space-y-1 text-center">
                          <p className="text-lg">This year</p>
                          <p className="text-2xl font-medium">22 flights</p>
                          <p className="text-lg">taken</p>
                        </div>
                      </div>
                      <div className="centerDiv rounded-lg p-4 ring-1 ring-neutral-300">
                        <div className="space-y-1 text-center">
                          <p className="text-lg">This year</p>
                          <p className="text-2xl font-medium">23'340 km</p>
                          <p className="text-lg">flown (22 h)</p>
                        </div>
                      </div>
                      <div className="centerDiv rounded-lg p-4 ring-1 ring-neutral-300">
                        <div className="space-y-1 text-center">
                          <p className="text-lg">In 2022</p>
                          <p className="text-2xl font-medium">49 flights</p>
                          <p className="text-lg">taken</p>
                        </div>
                      </div>
                      <div className="centerDiv rounded-lg p-4 ring-1 ring-neutral-300">
                        <div className="space-y-1 text-center">
                          <p className="text-lg">In 2022</p>
                          <p className="text-2xl font-medium">179'234 km</p>
                          <p className="text-lg">flown (189 h)</p>
                        </div>
                      </div>
                      <div className="centerDiv rounded-lg p-4 ring-1 ring-neutral-300">
                        <div className="space-y-1 text-center">
                          <p className="text-lg">In 2022, spent</p>
                          <p className="text-2xl font-medium">234 days</p>
                          <p className="text-lg">abroad (64.1%)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <p className="text-xl font-medium">Travel</p>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="centerDiv rounded-lg p-4 ring-1 ring-neutral-300">
                        <div className="space-y-1 text-center">
                          <p className="text-lg">Next upcoming flight to</p>
                          <p className="text-2xl font-medium">Abu Dhabi, UAE</p>
                          <p className="text-lg">in 12 days</p>
                        </div>
                      </div>
                      <div className="centerDiv rounded-lg p-4 ring-1 ring-neutral-300">
                        <div className="space-y-1 text-center">
                          <p className="text-lg">This year</p>
                          <p className="text-2xl font-medium">22 flights</p>
                          <p className="text-lg">taken</p>
                        </div>
                      </div>
                      <div className="centerDiv rounded-lg p-4 ring-1 ring-neutral-300">
                        <div className="space-y-1 text-center">
                          <p className="text-lg">This year</p>
                          <p className="text-2xl font-medium">23'340 km</p>
                          <p className="text-lg">flown (22 h)</p>
                        </div>
                      </div>
                      <div className="centerDiv rounded-lg p-4 ring-1 ring-neutral-300">
                        <div className="space-y-1 text-center">
                          <p className="text-lg">In 2022</p>
                          <p className="text-2xl font-medium">49 flights</p>
                          <p className="text-lg">taken</p>
                        </div>
                      </div>
                      <div className="centerDiv rounded-lg p-4 ring-1 ring-neutral-300">
                        <div className="space-y-1 text-center">
                          <p className="text-lg">In 2022</p>
                          <p className="text-2xl font-medium">179'234 km</p>
                          <p className="text-lg">flown (189 h)</p>
                        </div>
                      </div>
                      <div className="centerDiv rounded-lg p-4 ring-1 ring-neutral-300">
                        <div className="space-y-1 text-center">
                          <p className="text-lg">In 2022, spent</p>
                          <p className="text-2xl font-medium">234 days</p>
                          <p className="text-lg">abroad (64.1%)</p>
                        </div>
                      </div>
                    </div>
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
