import React from "react";
import fs from 'fs';
import ArticlePreview from "./Components/ArticlePreview";

export default function RecentArticles(props: any) {
  return (
    <div className="space-y-8">
      {props.articles
        .slice(0, props.maxSize)
        .map((article: any) => {
          return <div key={article.id}><ArticlePreview article={article} /></div>;
        })}
    </div>
  );
}

/*

export async function getStaticProps() {
  var articles = '';

  const files = fs.readdirSync('/articles/md/');
  console.log(files);
  return {
    props: {
      articles,
    },
  }
}

*/