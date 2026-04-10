/* global setMovieImage, getMovieDetails */

function joinMovieValues(values) {
  if (!Array.isArray(values) || values.length === 0) {
    return "Non renseigné";
  }

  return values.join(", ");
}

function formatMovieDuration(duration) {
  if (!duration) {
    return "Non renseigné";
  }

  return `${duration} min`;
}

function formatMovieIncome(amount) {
  if (!amount) {
    return "Non renseigné";
  }

  return new Intl.NumberFormat("fr-FR").format(amount);
}

function getModalElements() {
  const modal = document.getElementById("modale-film");

  if (!modal) {
    return null;
  }

  const content = modal.querySelector(".contenu-modale");
  const closeButton = content.querySelector("button");
  const image = content.querySelector("img");
  const title = content.querySelector("h2");
  const paragraphs = content.querySelectorAll("p");

  return {
    modal,
    content,
    closeButton,
    image,
    title,
    paragraphs
  };
}

function fillMovieModal(movie) {
  const elements = getModalElements();

  if (!elements || !movie) {
    return;
  }

  const { image, title, paragraphs } = elements;

  if (image) {
    setMovieImage(image, movie);
  }

  if (title) {
    title.textContent = movie.title || "Titre non disponible";
  }

  if (paragraphs[0]) {
    paragraphs[0].innerHTML = `<strong>Genres :</strong> ${joinMovieValues(movie.genres)}`;
  }

  if (paragraphs[1]) {
    paragraphs[1].innerHTML = `<strong>Date de sortie :</strong> ${movie.date_published || "Non renseigné"}`;
  }

  if (paragraphs[2]) {
    paragraphs[2].innerHTML = `<strong>Classification :</strong> ${movie.rated || "Non renseigné"}`;
  }

  if (paragraphs[3]) {
    paragraphs[3].innerHTML = `<strong>Score IMDb :</strong> ${movie.imdb_score || "Non renseigné"}`;
  }

  if (paragraphs[4]) {
    paragraphs[4].innerHTML = `<strong>Réalisateur :</strong> ${joinMovieValues(movie.directors)}`;
  }

  if (paragraphs[5]) {
    paragraphs[5].innerHTML = `<strong>Acteurs :</strong> ${joinMovieValues(movie.actors)}`;
  }

  if (paragraphs[6]) {
    paragraphs[6].innerHTML = `<strong>Durée :</strong> ${formatMovieDuration(movie.duration)}`;
  }

  if (paragraphs[7]) {
    paragraphs[7].innerHTML = `<strong>Pays :</strong> ${joinMovieValues(movie.countries)}`;
  }

  if (paragraphs[8]) {
    paragraphs[8].innerHTML = `<strong>Box-office :</strong> ${formatMovieIncome(movie.worldwide_gross_income)}`;
  }

  if (paragraphs[9]) {
    paragraphs[9].innerHTML = `<strong>Résumé :</strong> ${movie.long_description || movie.description || "Résumé non disponible."}`;
  }
}

function openMovieModal() {
  const elements = getModalElements();

  if (!elements) {
    return;
  }

  elements.modal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeMovieModal() {
  const elements = getModalElements();

  if (!elements) {
    return;
  }

  elements.modal.hidden = true;
  document.body.style.overflow = "";
}

function getMovieIdFromClick(target) {
  const bestMovieButton = target.closest("#meilleur-film button[data-movie-id]");

  if (bestMovieButton) {
    return bestMovieButton.dataset.movieId;
  }

  const movieImage = target.closest(".liste-films img[data-movie-id]");

  if (movieImage) {
    return movieImage.dataset.movieId;
  }

  return null;
}

async function handleMovieClick(event) {
  const movieId = getMovieIdFromClick(event.target);

  if (!movieId) {
    return;
  }

  try {
    const movie = await getMovieDetails(movieId);
    fillMovieModal(movie);
    openMovieModal();
  } catch (error) {
    console.error("Impossible de charger le détail du film.", error);
  }
}

function handleModalCloseClick(event) {
  const elements = getModalElements();

  if (!elements) {
    return;
  }

  const clickedCloseButton = event.target === elements.closeButton;
  const clickedOverlay = event.target === elements.modal;

  if (clickedCloseButton || clickedOverlay) {
    closeMovieModal();
  }
}

function handleEscapeKey(event) {
  if (event.key !== "Escape") {
    return;
  }

  const elements = getModalElements();

  if (!elements || elements.modal.hidden) {
    return;
  }

  closeMovieModal();
}

function initModal() {
  document.addEventListener("click", handleMovieClick);
  document.addEventListener("click", handleModalCloseClick);
  document.addEventListener("keydown", handleEscapeKey);
}

initModal();