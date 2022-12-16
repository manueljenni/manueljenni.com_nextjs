// Bypass corporate proxy
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

async function fetchArticlesSummary() {
  const response = await fetch(
    "https://damp-atoll-27311.herokuapp.com/api/articles/getAllArticlesSummary"
  );
  const json = await response.json();
  return json;
}

async function getArticleById(id: number) {
  const response = await fetch(
    "https://damp-atoll-27311.herokuapp.com/api/articles/getArticleById?id=" + id
  );
  const json = await response.json();
  return json;
}

async function fetchLifeStats() {
  const response = await fetch(
    "https://damp-atoll-27311.herokuapp.com/api/flights/getStats",
    { next: { revalidate: 60 } }
  );
  const json = await response.json();
  return json;
}

async function getUpcomingFlights() {
  const response = await fetch(
    "https://damp-atoll-27311.herokuapp.com/api/flights/getAllUpcomingFlights",
    { next: { revalidate: 60 } }
  );
  var json = await response.json();
  json = json.sort((a: any, b: any) => {
    return a.departure.date - b.departure.date;
  });
  return json;
}

export default { fetchArticlesSummary, fetchLifeStats, getUpcomingFlights, getArticleById };
