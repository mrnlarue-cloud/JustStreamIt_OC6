// Récupère les éléments utiles d’une section
function getSectionElements(sectionId) {
  const section = document.getElementById(sectionId);

  if (!section) {
    return null;
  }

  const moviesList = section.querySelector(".liste-films");
  const toggleButton = section.querySelector('button[type="button"]');

  return {
    section,
    moviesList,
    toggleButton
  };
}

// Crée une carte film
function createMovieCard(movie) {
  const article = document.createElement("article");
  article.dataset.movieId = movie.id;

  const image = document.createElement("img");
  image.src = movie.image_url;
  image.alt = `Affiche du film ${movie.title}`;
  image.dataset.movieId = movie.id;

  const title = document.createElement("h3");
  title.textContent = movie.title;

  article.appendChild(image);
  article.appendChild(title);

  return article;
}

// Affiche le meilleur film
function renderBestMovie(movie) {
  const section = document.getElementById("meilleur-film");

  if (!section || !movie) {
    return;
  }

  const image = section.querySelector("img");
  const title = section.querySelector("h3");
  const summary = section.querySelector("p");
  const detailsButton = section.querySelector('button[type="button"]');

  if (image) {
    image.src = movie.image_url;
    image.alt = `Affiche du film ${movie.title}`;
    image.dataset.movieId = movie.id;
  }

  if (title) {
    title.textContent = movie.title;
  }

  if (summary) {
    summary.textContent = movie.long_description || movie.description || "Résumé non disponible.";
  }

  if (detailsButton) {
    detailsButton.dataset.movieId = movie.id;
  }
}

// Affiche une section de films
function renderMoviesSection(sectionId, movies) {
  const elements = getSectionElements(sectionId);

  if (!elements || !elements.moviesList) {
    return;
  }

  elements.moviesList.innerHTML = "";

  movies.forEach((movie) => {
    const card = createMovieCard(movie);
    elements.moviesList.appendChild(card);
  });
}

// Met à jour le titre d’une catégorie
function renderSectionTitle(sectionId, titleText) {
  const section = document.getElementById(sectionId);

  if (!section) {
    return;
  }

  const title = section.querySelector("h2");

  if (title) {
    title.textContent = titleText;
  }
}

// Remplit la liste des catégories
function renderCategoryOptions(genres, selectedGenre = "") {
  const select = document.getElementById("select-categorie");

  if (!select) {
    return;
  }

  select.innerHTML = "";

  genres.forEach((genre) => {
    const option = document.createElement("option");
    option.value = genre.name;
    option.textContent = genre.name;

    if (genre.name === selectedGenre) {
      option.selected = true;
    }

    select.appendChild(option);
  });
}