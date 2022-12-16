import React from "react";
import Link from "next/link";

export default function ArticlePreview(props: any) {
  var article = props.article;
  return (
    <Link href={"/articles/" + article.id}>
      <div className="flex space-x-4" key={article.id}>
        <div className="flex w-1/6 items-start">
          <div className="space-y-3 pr-8">
            <p className="text-lg">
              {article.publicationDate == null ? "12 Dec 2022" : article.publicationDate}
            </p>
            <p className="text-main">{article.category}</p>
          </div>
        </div>
        <div className="w-5/6 lg:w-4/6 space-y-2">
          <h1 className="text-3xl font-medium">{article.title}</h1>
          <p className="text-xl">{article.summary}</p>
          <p className="accentText text-lg hover-right">Read more <span>→</span></p>
        </div>
        <div className="hidden lg:visible w-1/6 text-right">
          <p className="text-lg uppercase articleCategory">{article.category}</p>
        </div>
      </div>
    </Link>
  );
}
