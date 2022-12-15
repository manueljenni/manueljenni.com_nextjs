import React from "react";
import WelcomeText from "./WelcomeText";
import WelcomeBoxesSection from "./HomeSections/WelcomeBoxesSection";
import RecentArticlesSection from "./HomeSections/RecentArticlesSection";
import LifeStatsSection from "./HomeSections/LifeStatsSection";
import fetchData from "./fetchData";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default async function page() {
  return (
    <div className="body">
      <div className="space-y-16">
        <WelcomeText />
        <WelcomeBoxesSection />
        {/* @ts-expect-error Server Component */}
        <RecentArticlesSection />
        {/* @ts-expect-error Server Component */}
        <LifeStatsSection />
      </div>
    </div>
  );
}
