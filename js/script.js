/* global getBestMovie, getTopRatedMovies, getMoviesByGenre, getGenres, renderBestMovie, renderMoviesSection, renderSectionTitle, renderCategoryOptions */

const FIXED_GENRE_1 = "Action";
const FIXED_GENRE_2 = "Adventure";
const DEFAULT_OTHER_GENRE = "Comedy";

function getInitialOtherGenre(genres) {
  const fixedGenres = new Set([FIXED_GENRE_1, FIXED_GENRE_2]);

  const preferredGenre = genres.find((genre) => {
    return genre.name === DEFAULT_OTHER_GENRE && !fixedGenres.has(genre.name);
  });

  if (preferredGenre) {
    return preferredGenre.name;
  }

  const otherGenre = genres.find((genre) => {
    return !fixedGenres.has(genre.name);
  });

  if (!otherGenre) {
    return "";
  }

  return otherGenre.name;
}

function showPageError(message) {
  const main = document.querySelector("main");

  if (!main) {
    return;
  }

  const errorMessage = document.createElement("p");
  errorMessage.textContent = message;

  main.prepend(errorMessage);
}

async function loadOtherCategory(genre) {
  if (!genre) {
    return;
  }

  const otherMovies = await getMoviesByGenre(genre, 6);
  renderMoviesSection("autres-categories", otherMovies);
}

function initOtherCategorySelect() {
  const select = document.getElementById("select-categorie");

  if (!select) {
    return;
  }

  select.addEventListener("change", async (event) => {
    const selectedGenre = event.target.value;

    try {
      await loadOtherCategory(selectedGenre);
    } catch {
      showPageError("Impossible de charger cette catégorie.");
    }
  });
}

async function initPage() {
  try {
    const bestMovie = await getBestMovie();

    if (bestMovie) {
      renderBestMovie(bestMovie);
    }

    const excludedIds = bestMovie ? [bestMovie.id] : [];

    const [
      topRatedMovies,
      fixedGenreMovies1,
      fixedGenreMovies2,
      genres
    ] = await Promise.all([
      getTopRatedMovies(6, excludedIds),
      getMoviesByGenre(FIXED_GENRE_1, 6),
      getMoviesByGenre(FIXED_GENRE_2, 6),
      getGenres()
    ]);

    renderMoviesSection("films-mieux-notes", topRatedMovies);
    renderMoviesSection("categorie-1", fixedGenreMovies1);
    renderMoviesSection("categorie-2", fixedGenreMovies2);

    renderSectionTitle("categorie-1", FIXED_GENRE_1);
    renderSectionTitle("categorie-2", FIXED_GENRE_2);

    const initialOtherGenre = getInitialOtherGenre(genres);

    renderCategoryOptions(genres, initialOtherGenre);
    initOtherCategorySelect();
    await loadOtherCategory(initialOtherGenre);
  } catch {
    showPageError("Impossible de charger les données de l’application.");
  }
}

document.addEventListener("DOMContentLoaded", initPage);