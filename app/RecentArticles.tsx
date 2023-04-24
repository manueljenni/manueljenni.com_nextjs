import ArticlePreview from "./Components/ArticlePreview";

export default function RecentArticles(props: any) {
  return (
    <div className="space-y-8">
      {props.articles.slice(0, props.maxSize).map((article: any) => {
        return (
          <div key={article.id}>
            <ArticlePreview article={article} />
          </div>
        );
      })}
    </div>
  );
}
