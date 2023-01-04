import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

export default function WelcomeText() {
  return (
    <div className="space-y-6 text-center py-12">
      <h1 className="text-6xl font-semibold leading-tight">
        Hi, I'm <span className={styles.welcomeText}>Manuel</span>.
      </h1>
      <div className="text-xl space-y-2">
        <p>A consultant, developer and aspiring attorney.</p>
        <p>
          Check out some of my <span className="accentText">thoughts & projects</span> and{" "}
          <Link href="/flights"><span className="accentText">travels</span></Link>.
        </p>
      </div>
    </div>
  );
}
