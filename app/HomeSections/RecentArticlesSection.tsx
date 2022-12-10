import React from "react";
import RecentArticles from "../RecentArticles";

export default function RecentArticlesSection() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-medium">Recent articles</h1>
      <RecentArticles />
    </div>
  );
}
