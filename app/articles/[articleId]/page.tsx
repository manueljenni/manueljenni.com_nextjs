import { Metadata } from "next";
import Link from "next/link";
import rehypeStringify from "rehype-stringify/lib";
import remarkParse from "remark-parse/lib";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import fetchData from "../../fetchData";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  var article = fetchData.getArticleByFileName(params.articleId + ".md");
  return {
    title: article.title,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      url: "https://manueljenni.com/articles/" + article.link,
      images: [
        {
          url: "https://manueljenni.com" + article.shareImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
  };
}

export default async function page(props: any) {
  var article = fetchData.getArticleByFileName(props.params.articleId + ".md");
  var html = await getMarkdownAsHtml(article.content);
  var tags = article.tags.split(",");

  return (
    <div>
      <div className="centerDiv text-center">
        <div className="mb-12 space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl font-medium">{article.title}</h1>
            <h2 className="text-2xl">{article.subtitle}</h2>
          </div>
          <div className="centerDiv">
            <div className="flex space-x-3 text-sm text-white">
              {tags.map((tag: string) => (
                <div className="rounded-lg bg-main py-1 px-2">
                  <p>{"#" + tag}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <article className="prose" dangerouslySetInnerHTML={{ __html: html }} />
      <Link href={"/articles"}>
        <p className="accentText mt-8">← All articles</p>
      </Link>
    </div>
  );
}

async function getMarkdownAsHtml(content: string) {
  return await (
    await unified()
      .use(remarkParse)
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeStringify, { allowDangerousHtml: true })
      .process(content)
  ).toString();

  // return await (await remark().use(remarkHtml).process(content)).toString();
}

export const generateStaticParams = async () => {
  var allArticles = await fetchData.fetchArticlesSummary();
  return allArticles.map((article: any) => ({
    articleId: article.link.toString(),
  }));
};
