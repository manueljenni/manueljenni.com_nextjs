import React from "react";
import ArticlePreview from "./Components/ArticlePreview";

export default function RecentArticles(props: any) {
  return (
    <div className="space-y-8">
      {props.articles.map((article: any) => {
        return <ArticlePreview article={article} />;
      })}
    </div>
  );
}
