import React from "react";
import { remark } from "remark";
import remarkHtml from "remark-html";
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import fetchData from "../../fetchData";
import Link from "next/link";

export default async function page(props: any) {
  var article = fetchData.getArticleByFileName(props.params.articleId + ".md");
  var html = await getMarkdownAsHtml(article.content);
  var tags = article.tags.split(",");

  return (
    <div>
      <div className="text-center centerDiv">
        <div className="space-y-6 mb-12">
          <div className="space-y-4">
            <h1 className="text-4xl font-medium">{article.title}</h1>
            <h2 className="text-2xl">{article.subtitle}</h2>
          </div>
          <div className="centerDiv">
            <div className="flex space-x-3 text-white text-sm">
              {tags.map((tag: string) => (
                <div className="py-1 px-2 bg-main rounded-lg">
                  <p>{"#" + tag}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <article className="prose" dangerouslySetInnerHTML={{ __html: html }} />
      <Link href={"/articles"}>
        <p className="my-12 accentText">← All articles</p>
      </Link>
    </div>
  );
}

async function getMarkdownAsHtml(content: string) {
  return await (await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(content)).toString();

  // return await (await remark().use(remarkHtml).process(content)).toString();
}

export const generateStaticParams = async () => {
  var allArticles = await fetchData.fetchArticlesSummary();
  return allArticles.map((article: any) => ({
    articleId: article.link.toString(),
  }));
};
