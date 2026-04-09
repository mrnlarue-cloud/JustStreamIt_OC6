// Récupère le détail complet d’un film
async function getMovieDetails(movieId) {
  const url = buildApiUrl(`/titles/${movieId}`);
  return fetchJson(url);
}

// Construit une URL pour la liste des films
function buildTitlesUrl({ page = 1, genre = "", sortBy = "-imdb_score" } = {}) {
  const url = new URL(buildApiUrl("/titles/"));

  url.searchParams.set("page", page);
  url.searchParams.set("sort_by", sortBy);

  if (genre) {
    url.searchParams.set("genre", genre);
  }

  return url.toString();
}

// Récupère une page de films triés
async function getTitlesPage(options = {}) {
  const url = buildTitlesUrl(options);
  return fetchJson(url);
}

// Récupère les meilleurs films avec filtre possible
async function getTopMovies({ genre = "", limit = 6, excludeIds = [] } = {}) {
  const movies = [];
  const excludedIds = new Set(excludeIds.map(String));

  let page = 1;
  let hasNextPage = true;

  while (movies.length < limit && hasNextPage) {
    const data = await getTitlesPage({ page, genre });

    const filteredMovies = data.results.filter((movie) => {
      return !excludedIds.has(String(movie.id));
    });

    movies.push(...filteredMovies);
    hasNextPage = Boolean(data.next);
    page += 1;
  }

  return movies.slice(0, limit);
}

// Récupère le meilleur film global
async function getBestMovie() {
  const movies = await getTopMovies({ limit: 1 });
  const bestMovie = movies[0];

  if (!bestMovie) {
    return null;
  }

  return getMovieDetails(bestMovie.id);
}

// Récupère les meilleurs films hors film vedette
async function getTopRatedMovies(limit = 6, excludeIds = []) {
  return getTopMovies({
    limit,
    excludeIds
  });
}

// Récupère les meilleurs films d’une catégorie
async function getMoviesByGenre(genre, limit = 6, excludeIds = []) {
  return getTopMovies({
    genre,
    limit,
    excludeIds
  });
}

// Récupère la liste complète des genres
async function getGenres() {
  const genres = [];

  let page = 1;
  let hasNextPage = true;

  while (hasNextPage) {
    const url = buildApiUrl(`/genres/?page=${page}`);
    const data = await fetchJson(url);

    genres.push(...data.results);
    hasNextPage = Boolean(data.next);
    page += 1;
  }

  return genres;
}