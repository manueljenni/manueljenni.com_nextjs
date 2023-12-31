import Link from "next/link";
import styles from "./page.module.css";

export default function WelcomeText() {
  return (
    <div className="space-y-6 py-12 text-center">
      <h1 className="text-6xl font-semibold leading-tight">
        Hi, I'm <span className={styles.welcomeText}>Manuel</span>.
      </h1>
      <div className="space-y-2 text-xl">
        <p>I build software & travel the world. :-)</p>
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
