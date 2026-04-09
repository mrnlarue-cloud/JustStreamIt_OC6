// Catégories fixes du projet
const FIXED_GENRE_1 = "Action";
const FIXED_GENRE_2 = "Adventure";

// Choisit une catégorie initiale pour la zone "Autres"
function getInitialOtherGenre(genres) {
  const fixedGenres = new Set([FIXED_GENRE_1, FIXED_GENRE_2]);

  const otherGenre = genres.find((genre) => {
    return !fixedGenres.has(genre.name);
  });

  if (!otherGenre) {
    return "";
  }

  return otherGenre.name;
}

// Affiche un message d’erreur simple sur la page
function showPageError(message) {
  const main = document.querySelector("main");

  if (!main) {
    return;
  }

  const errorMessage = document.createElement("p");
  errorMessage.textContent = message;

  main.prepend(errorMessage);
}

// Charge toutes les données du jour 3
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

    if (initialOtherGenre) {
      const otherGenreMovies = await getMoviesByGenre(initialOtherGenre, 6);
      renderMoviesSection("autres-categories", otherGenreMovies);
    }
  } catch (error) {
    showPageError("Impossible de charger les données de l’application.");
  }
}

// Lance le chargement au démarrage de la page
document.addEventListener("DOMContentLoaded", initPage);