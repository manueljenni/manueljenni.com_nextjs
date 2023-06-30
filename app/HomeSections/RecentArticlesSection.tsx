import fetchData from "../fetchData";
import RecentArticles from "../RecentArticles";

export default function RecentArticlesSection() {
  var articles = fetchData.fetchArticlesSummary();
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-medium">Recent articles</h1>
      <RecentArticles articles={articles} maxSize={5} />
    </div>
  );
}
