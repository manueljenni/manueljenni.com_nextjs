import fs from 'fs';
import matter from 'gray-matter';

// Bypass corporate proxy
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
var baseUrl = "https://damp-atoll-27311.herokuapp.com/api";
//var baseUrl = "http://localhost:8080/api/";

function fetchArticlesSummary() {
  const files = fs.readdirSync(process.cwd() + "\\app\\articles\\md");
  return files.map(file => getMetaObjOfFile(file));
}

function getArticleByFileName(fileName: string) {
  return getMetaObjOfFile(fileName);
}

function getMetaObjOfFile(fileName: string) {
  const file = fs.readFileSync(process.cwd() + `\\app\\articles\\md\\${fileName}`, 'utf-8');
  const { data, content } = matter(file);
  return {
    "id": data.id,
    "title": data.title,
    "subtitle": data.subtitle,
    "link": fileName.replaceAll(".md", ""),
    "summary": data.summary,
    "category": data.category,
    "publicationDate": null,
    "tags": data.tags,
    "content": content
  }
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
  getArticleByFileName
};
