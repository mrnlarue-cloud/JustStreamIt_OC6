// URL de base de l’API locale
const API_BASE_URL = "http://127.0.0.1:8000/api/v1";

// Fait une requête et renvoie le JSON
async function fetchJson(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Erreur API : ${response.status} ${response.statusText}`);
  }

  return response.json();
}

// Construit une URL complète de l’API
function buildApiUrl(path) {
  return `${API_BASE_URL}${path}`;
}