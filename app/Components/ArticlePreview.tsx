import Link from "next/link";

export default function ArticlePreview(props: any) {
  var article = props.article;
  return (
    <Link href={"/articles/" + article.link}>
      <div className="flex md:space-x-4" key={article.id}>
        <div className="hidden w-1/6 items-start md:flex">
          <div className="space-y-3 pr-8">
            <p className="text-lg">
              {article.publicationDate == null
                ? new Date().toLocaleDateString()
                : new Date(Date.parse(article.publicationDate)).toLocaleDateString()}
            </p>
            <p className="text-main">{article.category}</p>
          </div>
        </div>
        <div className="w-full space-y-2 md:w-5/6 lg:w-4/6">
          <h1 className="text-3xl font-medium">{article.title}</h1>
          <p className="text-xl">{article.summary}</p>
          <p className="accentText hover-right text-lg">
            Read more <span>→</span>
          </p>
        </div>
        <div className="hidden w-1/6 text-right lg:block">
          <p className="articleCategory text-lg uppercase">{article.category}</p>
        </div>
      </div>
    </Link>
  );
}
