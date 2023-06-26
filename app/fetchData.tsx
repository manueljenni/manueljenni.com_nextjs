import fs from "fs";
import matter from "gray-matter";

// Bypass corporate proxy
// process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";

var baseUrl = "https://web-api-nest.herokuapp.com/api";

function fetchArticlesSummary() {
  const files = fs.readdirSync(process.cwd() + "/app/articles/md");
  return files
    .filter((file) => file.includes(".md"))
    .map((file) => getMetaObjOfFile(file))
    .sort((a: any, b: any) => {
      return b.id - a.id;
    });
}

function getArticleByFileName(fileName: string) {
  return getMetaObjOfFile(fileName);
}

function getMetaObjOfFile(fileName: string) {
  const file = fs.readFileSync(process.cwd() + `/app/articles/md/${fileName}`, "utf-8");
  const { data, content } = matter(file);
  return {
    id: data.id,
    title: data.title,
    subtitle: data.subtitle,
    link: fileName.replaceAll(".md", ""),
    summary: data.summary,
    category: data.category,
    publicationDate: data.publicationDate,
    tags: data.tags,
    content: content,
    shareImage: data.shareImage,
  };
}

async function getArticleById(id: number) {
  const response = await fetch(baseUrl + "/articles/getArticleById?id=" + id);
  const json = await response.json();
  return json;
}

async function fetchLifeStats() {
  const response = await fetch(baseUrl + "/stats/statsByYear", {
    next: { revalidate: 60 },
  });
  const json = await response.json();
  return json;
}

async function getUpcomingFlights() {
  const response = await fetch(baseUrl + "/flights/allFlights/upcoming", {
    next: { revalidate: 60 },
  });
  var json = await response.json();
  return json.sort((a: any, b: any) => {
    return a.departure.date - b.departure.date;
  });
}

async function getPastFlights() {
  const response = await fetch(baseUrl + "/flights/allFlights/past", {
    next: { revalidate: 60 },
  });
  var json = await response.json();
  return json.sort((a: any, b: any) => {
    return a.departure.date - b.departure.date;
  });
}

async function getAllLocations() {
  const response = await fetch(baseUrl + "/airport", {
    next: { revalidate: 60000 },
  });
  return await response.json();
}

async function fetchAllUpcomingRoutes() {
  const response = await fetch(baseUrl + "/routes/upcoming", {
    next: { revalidate: 60000 },
  });
  return await response.json();
}

async function fetchAllPastRoutes() {
  const response = await fetch(baseUrl + "/routes/past", {
    next: { revalidate: 60000 },
  });
  return await response.json();
}

async function fetchNomadList() {
  const response = await fetch("https://nomadlist.com/@manueljenni.json");
  return await response.json();
}

export default {
  fetchArticlesSummary,
  fetchLifeStats,
  getUpcomingFlights,
  getPastFlights,
  getArticleById,
  getArticleByFileName,
  getAllLocations,
  fetchAllUpcomingRoutes,
  fetchAllPastRoutes,
  fetchNomadList,
};
