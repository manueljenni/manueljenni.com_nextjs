// Bypass corporate proxy
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
var baseUrl = "https://damp-atoll-27311.herokuapp.com/api";
//var baseUrl = "http://localhost:8080/api/";

async function fetchArticlesSummary() {
  const response = await fetch(baseUrl + "/articles/getAllArticlesSummary");
  const json = await response.json();
  return json;
}

async function getArticleById(id: number) {
  const response = await fetch(baseUrl + "/articles/getArticleById?id=" + id);
  const json = await response.json();
  return json;
}

async function fetchLifeStats() {
  const response = await fetch(baseUrl + "/flights/getStats", {
    next: { revalidate: 60 },
  });
  const json = await response.json();
  return json;
}

async function getUpcomingFlights() {
  const response = await fetch(baseUrl + "/flights/getAllUpcomingFlights", {
    next: { revalidate: 60 },
  });
  var json = await response.json();
  return json.sort((a: any, b: any) => {
    return a.departure.date - b.departure.date;
  });
}

export default {
  fetchArticlesSummary,
  fetchLifeStats,
  getUpcomingFlights,
  getArticleById,
};
