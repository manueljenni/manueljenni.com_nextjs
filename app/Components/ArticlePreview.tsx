import Link from "next/link";

export default function ArticlePreview(props: any) {
  var article = props.article;
  return (
    <Link href={"/articles/" + article.link}>
      <div className="flex md:space-x-4" key={article.id}>
        <div className="hidden w-1/6 items-start md:flex">
          <div className="space-y-4">
            <p className="text-lg">
              {article.publicationDate == null
                ? new Date().toLocaleDateString()
                : new Date(Date.parse(article.publicationDate)).toLocaleDateString("uk")}
            </p>
            <div>
              <span className="rounded-lg bg-main p-2 text-xs uppercase text-white">
                {article.category}
              </span>
            </div>
          </div>
        </div>
        <div className="w-full space-y-2 md:w-5/6">
          <h1 className="text-2xl font-medium">{article.title}</h1>
          <p className="text-lg">{article.summary}</p>
          <p className="accentText hover-right text-lg">
            Read more <span>→</span>
          </p>
        </div>
      </div>
    </Link>
  );
}
