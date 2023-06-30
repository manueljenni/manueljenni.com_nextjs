import fs from "fs";
import matter from "gray-matter";
import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import fetchData from "../../fetchData";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  var article = fetchData.getArticleByFileName(params.articleId + ".mdx");
  let images: any[] = [];
  if (article.shareImage !== undefined) {
    images = [
      {
        url: "https://manueljenni.com" + article.shareImage,
        width: 1200,
        height: 630,
        alt: article.title,
      },
    ];
  }
  return {
    title: article.title,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      url: "https://manueljenni.com/articles/" + article.link,
      images: images,
    },
  };
}

export default async function page(props: any) {
  const article = fs.readFileSync(
    process.cwd() + `/app/articles/md/${props.params.articleId}.mdx`,
    "utf-8"
  );
  const { data, content } = matter(article);
  const meta = {
    id: data.id,
    title: data.title,
    subtitle: data.subtitle,
    link: props.params.articleId,
    summary: data.summary,
    category: data.category,
    publicationDate: data.publicationDate,
    tags: data.tags.split(","),
    content: "",
    shareImage: data.shareImage,
  };
  return (
    <div>
      <div className="centerDiv text-center">
        <div className="mb-12 space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl font-medium">{meta.title}</h1>
            <h2 className="text-2xl">{meta.subtitle}</h2>
          </div>
          <div className="centerDiv">
            <div className="flex space-x-3 text-sm text-white">
              {meta.tags.map((tag: string) => (
                <div className="rounded-lg bg-main px-2 py-1" id={tag}>
                  <p>{"#" + tag}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="prose">
        {/* @ts-expect-error Server Component */}
        <MDXRemote source={content} />
      </div>
      <Link href={"/articles"}>
        <p className="accentText mt-8">← All articles</p>
      </Link>
    </div>
  );
}

export const generateStaticParams = async () => {
  const files = fs.readdirSync(process.cwd() + "/app/articles/md");
  return files.map((file) => {
    if (!file.includes(".md")) return;
    const fileRead = fs.readFileSync(process.cwd() + `/app/articles/md/${file}`, "utf-8");
    const { data, content } = matter(fileRead);
    return {
      articleId: data.link,
    };
  });
};
