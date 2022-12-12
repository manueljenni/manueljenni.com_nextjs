async function fetchArticlesSummary() {
  const response = await fetch(
    "https://damp-atoll-27311.herokuapp.com/api/articles/getAllArticlesSummary"
  );
  const articles = await response.json();
  return articles;
}

export default { fetchArticlesSummary };
