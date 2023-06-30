import LifeStatsSection from "./HomeSections/LifeStatsSection";
import RecentArticlesSection from "./HomeSections/RecentArticlesSection";
import WelcomeBoxesSection from "./HomeSections/WelcomeBoxesSection";
import WelcomeText from "./WelcomeText";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default async function page() {
  return (
    <div className="space-y-16">
      <WelcomeText />
      <WelcomeBoxesSection />
      <RecentArticlesSection />
      {/* @ts-expect-error Server Component */}
      <LifeStatsSection />
    </div>
  );
}
