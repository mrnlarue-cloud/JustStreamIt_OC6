const FALLBACK_IMAGE_URL = "https://picsum.photos/300/450?grayscale";

// Sections concernées par le bouton Voir plus / Voir moins
const TOGGLE_SECTION_IDS = [
  "films-mieux-notes",
  "categorie-1",
  "categorie-2",
  "autres-categories"
];

// Cette fonction prépare l'image d'un film
// Elle met l'URL, le texte alternatif, l'id du film
// et une image de secours si l'affiche ne charge pas
function setMovieImage(imageElement, movie) {
  imageElement.src = movie.image_url || FALLBACK_IMAGE_URL;
  imageElement.alt = `Affiche du film ${movie.title}`;
  imageElement.dataset.movieId = movie.id;

  imageElement.onerror = function () {
    imageElement.onerror = null;
    imageElement.src = FALLBACK_IMAGE_URL;
  };
}

// Cette fonction récupère les éléments utiles d'une section
// - la section elle-même
// - la liste des films
// - le bouton Voir plus / Voir moins
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

// Cette fonction décide combien de films doivent être visibles
// selon la largeur de l'écran
function getVisibleMoviesCount() {
  if (window.innerWidth >= 1024) {
    return 6;
  }

  if (window.innerWidth >= 768) {
    return 4;
  }

  return 2;
}

// Cette fonction crée une carte de film
// Pour l'instant, une carte contient :
// - l'image
// - le titre
function createMovieCard(movie) {
  const article = document.createElement("article");
  article.dataset.movieId = movie.id;

  const image = document.createElement("img");
  setMovieImage(image, movie);

  const title = document.createElement("h3");
  title.textContent = movie.title;

  article.appendChild(image);
  article.appendChild(title);

  return article;
}

// Cette fonction met à jour l'affichage d'une section
// Elle décide quels films sont visibles ou masqués
// et met à jour le texte du bouton
function updateSectionToggle(sectionId) {
  const elements = getSectionElements(sectionId);

  if (!elements || !elements.moviesList || !elements.toggleButton) {
    return;
  }

  const cards = Array.from(elements.moviesList.querySelectorAll("article"));
  const visibleMoviesCount = getVisibleMoviesCount();
  const isExpanded = elements.section.dataset.expanded === "true";
  const hasHiddenMovies = cards.length > visibleMoviesCount;

  cards.forEach((card, index) => {
    if (hasHiddenMovies && !isExpanded && index >= visibleMoviesCount) {
      card.hidden = true;
      return;
    }

    card.hidden = false;
  });

  // S'il n'y a pas plus de films que la limite visible,
  // on cache complètement le bouton
  if (!hasHiddenMovies) {
    elements.toggleButton.hidden = true;
    elements.toggleButton.setAttribute("aria-expanded", "false");
    elements.toggleButton.textContent = "Voir plus";
    return;
  }

  // Sinon on affiche le bouton et on adapte son texte
  elements.toggleButton.hidden = false;
  elements.toggleButton.setAttribute("aria-expanded", String(isExpanded));
  elements.toggleButton.textContent = isExpanded ? "Voir moins" : "Voir plus";
}

// Cette fonction branche une seule fois l'événement click
// sur le bouton d'une section
function setupSectionToggle(sectionId) {
  const elements = getSectionElements(sectionId);

  if (!elements || !elements.toggleButton) {
    return;
  }

  // On évite d'ajouter plusieurs fois le même écouteur
  if (elements.toggleButton.dataset.toggleReady === "true") {
    return;
  }

  elements.toggleButton.dataset.toggleReady = "true";

  elements.toggleButton.addEventListener("click", () => {
    const isExpanded = elements.section.dataset.expanded === "true";
    elements.section.dataset.expanded = String(!isExpanded);
    updateSectionToggle(sectionId);
  });
}

// Cette fonction met à jour toutes les sections concernées
// Elle servira notamment quand on redimensionne la fenêtre
function updateAllSectionsToggle() {
  TOGGLE_SECTION_IDS.forEach((sectionId) => {
    updateSectionToggle(sectionId);
  });
}

// Cette fonction remplit la zone "Meilleur film"
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
    setMovieImage(image, movie);
  }

  if (title) {
    title.textContent = movie.title;
  }

  if (summary) {
    summary.textContent =
      movie.long_description ||
      movie.description ||
      "Résumé non disponible.";
  }

  if (detailsButton) {
    detailsButton.dataset.movieId = movie.id;
  }
}

// Cette fonction affiche les films d'une section
// Elle vide l'ancien contenu, recrée les cartes,
// remet la section en mode replié,
// puis met à jour le bouton Voir plus / Voir moins
function renderMoviesSection(sectionId, movies) {
  const elements = getSectionElements(sectionId);

  if (!elements || !elements.moviesList) {
    return;
  }

  elements.moviesList.innerHTML = "";
  elements.section.dataset.expanded = "false";

  movies.forEach((movie) => {
    const card = createMovieCard(movie);
    elements.moviesList.appendChild(card);
  });

  setupSectionToggle(sectionId);
  updateSectionToggle(sectionId);
}

// Cette fonction remplace le titre d'une section
// Exemple : "Catégorie 1" devient "Action"
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

// Cette fonction remplit le select de la zone "Autres catégories"
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

// À chaque redimensionnement de la fenêtre,
// on recalcule le nombre de films à afficher
window.addEventListener("resize", updateAllSectionsToggle);