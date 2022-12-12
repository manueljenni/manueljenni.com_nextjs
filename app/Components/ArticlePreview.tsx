import React from "react";

export default function ArticlePreview(props: any) {
  var article = props.article;
  return (
    <div className="flex">
      <div className="flex w-1/4 items-start">
        <div className="space-y-3 pr-8">
          <p className="text-lg">
            {article.publicationDate == null ? "12 Dec 2022" : article.publicationDate}
          </p>
          <p className="text-main">{article.category}</p>
        </div>
      </div>
      <div className="w-2/4 space-y-2">
        <h1 className="text-3xl font-medium">{article.title}</h1>
        <p className="text-xl">{article.summary}</p>
        <p className="accentText text-lg">Read more →</p>
      </div>
      <div className="w-1/4 text-right">
        <p className="text-xl uppercase">{article.category}</p>
      </div>
    </div>
  );
}
