import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

export default function WelcomeText() {
  return (
    <div className="space-y-6 py-12 text-center">
      <h1 className="text-6xl font-semibold leading-tight">
        Hi, I'm <span className={styles.welcomeText}>Manuel</span>.
      </h1>
      <div className="space-y-2 text-xl">
        <p>A consultant, developer and aspiring attorney.</p>
        <p>
          Check out some of my&nbsp;
          <Link href="/articles">
            <span className="accentText">thoughts</span>
          </Link>
          ,&nbsp;
          <Link href="/projects">
            <span className="accentText">projects</span>
          </Link>
          &nbsp;and&nbsp;
          <Link href="/flights">
            <span className="accentText">travels</span>
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
