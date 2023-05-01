import fs from "fs";
import fetchData from "../fetchData";
import RecentArticles from "../RecentArticles";

export default async function RecentArticlesSection(props: any) {
  var articles = await fetchData.fetchArticlesSummary();

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-medium">Recent articles</h1>
      <RecentArticles articles={articles} maxSize={5} />
    </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync("/articles/md/");
  var articles = files.map((file) => {
    return {
      id: 1,
      title: "Kuala Lumpur: First Impression",
      subtitle: "Some intial thoughts after arriving in KL",
      link: file,
      summary:
        "I just arrived in Kuala Lumpur, Malaysia. Here's my first impression of the city.",
      category: "featured",
      publicationDate: null,
      image: "kuala-lumpur-merdeka118.jpg",
    };
  });

  return {
    props: {
      articles,
    },
  };
}
