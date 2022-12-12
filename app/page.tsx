import React from "react";
import WelcomeText from "./WelcomeText";
import WelcomeBoxesSection from "./HomeSections/WelcomeBoxesSection";
import RecentArticlesSection from "./HomeSections/RecentArticlesSection";
import LifeStatsSection from "./HomeSections/LifeStatsSection";
import fetchData from "./fetchData";

export default async function page() {
  return (
    <div className="w-full py-24">
      <div className="centerDiv h-full">
        <div className="space-y-16 w-2/3">
          <WelcomeText />
          <WelcomeBoxesSection />
          <RecentArticlesSection />
          <LifeStatsSection />
        </div>
      </div>
    </div>
  );
}
