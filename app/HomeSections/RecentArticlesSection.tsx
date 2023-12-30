import Link from "next/link";
import fetchData from "../fetchData";
import RecentArticles from "../RecentArticles";

export default function RecentArticlesSection() {
  var articles = fetchData.fetchArticlesSummary();
  return (
    <div className="space-y-8">
      <Link href={"/articles"}>
        <h1 className="text-3xl font-medium">Recent articles</h1>
      </Link>
      <RecentArticles articles={articles} maxSize={5} />
    </div>
  );
}
