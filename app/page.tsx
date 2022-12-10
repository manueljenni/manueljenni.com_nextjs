import React from "react";
import WelcomeText from "./WelcomeText";
import WelcomeBoxesSection from "./HomeSections/WelcomeBoxesSection";
import RecentArticlesSection from "./HomeSections/RecentArticlesSection";
import LifeStatsSection from "./HomeSections/LifeStatsSection";

export default function page() {
  return (
    <div className="w-full bg-slate-50 py-24">
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
