import React from "react";

export default function WelcomeBoxes() {
  return (
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
  );
}
