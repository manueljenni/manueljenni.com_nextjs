import React from "react";
import styles from "./page.module.css";

export default function WelcomeText() {
  return (
    <div className="space-y-6 text-center">
      <h1 className="text-6xl font-semibold">
        Hi, I'm <span className={styles.welcomeText}>Manuel</span>.
      </h1>
      <p className="text-xl">
        A developer, content writer and aspiring attorney.
        <br />
        Check out some of my <span className="accentText">
          thoughts & projects
        </span> and <span className="accentText">travels</span>.
      </p>
    </div>
  );
}
