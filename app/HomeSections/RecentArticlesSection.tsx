import React from "react";
import RecentArticles from "../RecentArticles";
import fetchData from "../fetchData";

export default async function RecentArticlesSection(props: any) {
  var articles = await fetchData.fetchArticlesSummary();
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-medium">Recent articles</h1>
      <RecentArticles articles={articles} maxSize={5} />
    </div>
  );
}
