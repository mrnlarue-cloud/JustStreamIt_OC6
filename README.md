# JustStreamIt

Projet front-end réalisé dans le cadre du **Projet 6 OpenClassrooms**.

L’objectif est de développer l’interface utilisateur d’une application web de classement de films en utilisant **HTML**, **CSS** et **JavaScript vanilla**, en consommant les données d’une **API REST locale** : **OCMovies-API**.

---

## Sommaire

- Présentation du projet
- Objectifs du projet
- Technologies utilisées
- Arborescence du projet
- Rôle des fichiers
- Fonctionnalités implémentées
- Contraintes respectées
- Prérequis
- API locale : OCMovies-API
- Installation et lancement de l’API locale
- Lancer le front-end
- Utilisation du site
- Responsive
- Validation et vérifications
- Dépannage
- Choix de structure
- Auteur

---

## Présentation du projet

JustStreamIt est une interface web permettant d’afficher dynamiquement un classement de films à partir d’une API REST locale.

Le site met en avant :
- un **meilleur film** ;
- une section **Films les mieux notés** ;
- **deux catégories fixes** ;
- une section **Autres catégories** avec sélection dynamique ;
- une **modale** détaillée pour chaque film ;
- un comportement **responsive** adapté au mobile, à la tablette et au desktop.

---

## Objectifs du projet

L’application permet de :

- afficher le **meilleur film** toutes catégories confondues ;
- afficher une section **Films les mieux notés** ;
- afficher **deux catégories fixes distinctes** ;
- afficher une section **Autres catégories** alimentée par la liste des genres de l’API ;
- ouvrir une **modale** contenant les détails complets d’un film ;
- proposer un affichage **responsive** pour mobile, tablette et ordinateur ;
- afficher **2 / 4 / 6 films visibles** selon la taille d’écran avec un bouton **Voir plus / Voir moins**.

---

## Technologies utilisées

- **HTML5**
- **CSS3**
- **JavaScript vanilla**
- **Fetch API**
- **API locale OCMovies-API**

---

## Arborescence du projet

```text
Projet_6_JustStreamIt/
├── css/
│   ├── base.css
│   ├── composants.css
│   └── mise-en-page.css
├── image_manquante/
│   ├── Affiche_film_manquante.png
│   └── logo_juststreamit.png
├── js/
│   ├── api-films.js
│   ├── films.js
│   ├── modale.js
│   ├── script.js
│   └── utilitaires.js
├── node_modules/
├── .prettierrc
├── eslint.config.mjs
├── index.html
├── package-lock.json
├── package.json
└── README_JustStreamIT.md
```

---

## Rôle des fichiers

### Front-end

- `index.html` : structure principale de la page
- `css/base.css` : styles de base, règles globales, variables et éléments communs
- `css/mise-en-page.css` : header, sections, espacements, grilles, responsive et mise en page générale
- `css/composants.css` : styles de la modale
- `image_manquante/Affiche_film_manquante.png` : image de secours utilisée si une affiche renvoyée par l’API est indisponible
- `image_manquante/logo_juststreamit.png` : logo utilisé dans le header
- `js/utilitaires.js` : fonctions utilitaires pour les requêtes API
- `js/api-films.js` : récupération des données depuis l’API
- `js/films.js` : affichage dynamique des sections et gestion de l’affichage 2 / 4 / 6 avec Voir plus / Voir moins
- `js/modale.js` : ouverture, fermeture et remplissage de la modale
- `js/script.js` : point d’entrée du projet au chargement de la page

### Fichiers outils

- `package.json` et `package-lock.json` : dépendances Node locales utilisées pour les outils du projet
- `.prettierrc` : configuration Prettier
- `eslint.config.mjs` : configuration ESLint

---

## Fonctionnalités implémentées

- affichage dynamique du **meilleur film**
- affichage dynamique des **films les mieux notés**
- affichage dynamique de **deux catégories fixes distinctes**
- affichage dynamique d’une catégorie dans la zone **Autres catégories**
- mise à jour de la section **Autres catégories** lors du changement dans le menu déroulant
- ouverture d’une **modale** au clic sur le bouton du meilleur film
- ouverture d’une **modale** au clic sur l’image d’un film
- affichage des informations détaillées d’un film :
  - image
  - titre
  - genres
  - date de sortie
  - classification
  - score IMDb
  - réalisateur
  - acteurs
  - durée
  - pays
  - box-office
  - résumé
- fermeture de la modale :
  - avec le bouton de fermeture
  - avec la touche `Escape`
  - avec clic hors de la fenêtre
- responsive :
  - **mobile** : 2 films visibles
  - **tablette** : 4 films visibles
  - **desktop** : 6 films visibles
- bouton **Voir plus / Voir moins**
- image de secours locale si une affiche renvoyée par l’API est indisponible

---

## Contraintes respectées

Le projet respecte les contraintes suivantes :

- utilisation de **JavaScript vanilla uniquement**
- utilisation de **fetch** pour les requêtes API
- **aucun framework JavaScript**
- structure **HTML sémantique**
- affichage **responsive**
- séparation claire entre structure, styles et logique JavaScript
- chargement initial des données au **DOMContentLoaded**

---

## Prérequis

Pour faire fonctionner le projet, il faut :

- **Python** installé sur la machine
- l’API locale **OCMovies-API**
- un navigateur web
- un éditeur de code comme **VS Code**

### Vérifier Python

#### Windows

Ouvrir PowerShell ou l’invite de commandes :

```bash
python --version
```

Si cela ne fonctionne pas :

```bash
py --version
```

#### macOS / Linux

Ouvrir le terminal :

```bash
python3 --version
```

---

## API locale : OCMovies-API

Le front-end utilise une API locale fournie pour le projet : **OCMovies-API**.

### URL de base

```text
http://127.0.0.1:8000/api/v1/
```

### Endpoints principaux utilisés

```text
/api/v1/titles/
/api/v1/titles/{id}
/api/v1/genres/
```

### Données principales exploitées

#### Liste des films

- `id`
- `url`
- `title`
- `year`
- `imdb_score`
- `votes`
- `image_url`
- `directors`
- `actors`
- `writers`
- `genres`

#### Détail d’un film

- `id`
- `title`
- `original_title`
- `year`
- `date_published`
- `duration`
- `description`
- `long_description`
- `imdb_score`
- `image_url`
- `actors`
- `directors`
- `writers`
- `genres`
- `countries`
- `languages`
- `rated`
- `company`
- `usa_gross_income`
- `worldwide_gross_income`

#### Liste des genres

- `count`
- `next`
- `previous`
- `results[]`
- `id`
- `name`

---

## Installation et lancement de l’API locale

L’interface front-end consomme les données d’une API locale fournie pour le projet.

### 1. Récupérer l’API

Placer le dossier de l’API locale à côté du dossier front-end, ou dans un emplacement facile à retrouver.

Exemple d’organisation :

```text
Mes_projets/
├── Projet_6_JustStreamIt/
└── Projet_6_OCMovies-API/
```

### 2. Aller dans le dossier de l’API

Exemple :

```bash
cd Projet_6_OCMovies-API
```

---

## Installation de l’API avec environnement virtuel recommandé

L’utilisation d’un environnement virtuel est recommandée pour éviter de mélanger les dépendances Python du projet avec celles d’autres projets.

### Windows

#### Créer l’environnement virtuel

```bash
python -m venv env
```

#### Installer les dépendances

```bash
.\env\Scripts\python.exe -m pip install -r requirements.txt
```

#### Créer la base de données

```bash
.\env\Scripts\python.exe manage.py create_db
```

#### Lancer le serveur

```bash
.\env\Scripts\python.exe manage.py runserver
```

Sous Windows, utiliser directement `.\env\Scripts\python.exe` permet de lancer l’API avec le bon interpréteur Python de l’environnement virtuel.

### macOS / Linux

#### Créer l’environnement virtuel

```bash
python3 -m venv env
```

#### Activer l’environnement

```bash
source env/bin/activate
```

#### Installer les dépendances

```bash
pip install -r requirements.txt
```

#### Créer la base de données

```bash
python manage.py create_db
```

#### Lancer le serveur

```bash
python manage.py runserver
```

---

## Installation de l’API sans environnement virtuel

Cette méthode fonctionne aussi, mais elle est moins propre si plusieurs projets Python sont installés sur la même machine.

### Windows

```bash
pip install -r requirements.txt
python manage.py create_db
python manage.py runserver
```

Si `python` ne fonctionne pas :

```bash
py -m pip install -r requirements.txt
py manage.py create_db
py manage.py runserver
```

### macOS / Linux

```bash
pip3 install -r requirements.txt
python3 manage.py create_db
python3 manage.py runserver
```

---

## Lancements suivants de l’API

Une fois l’installation faite et la base créée, il n’est plus nécessaire de refaire `create_db` à chaque fois.

### Windows avec environnement virtuel

```bash
.\env\Scripts\python.exe manage.py runserver
```

### Windows sans environnement virtuel

```bash
python manage.py runserver
```

ou

```bash
py manage.py runserver
```

### macOS / Linux avec environnement virtuel

```bash
source env/bin/activate
python manage.py runserver
```

### macOS / Linux sans environnement virtuel

```bash
python3 manage.py runserver
```

---

## Vérifier que l’API fonctionne

Quand le serveur est lancé, tester les URLs suivantes dans le navigateur :

```text
http://127.0.0.1:8000/api/v1/titles/
http://127.0.0.1:8000/api/v1/titles/499549
http://127.0.0.1:8000/api/v1/genres/
```

Si tout fonctionne, le navigateur doit afficher du JSON.

---

## Lancer le front-end

Le front-end utilise uniquement HTML, CSS et JavaScript côté navigateur.

### Méthode simple

Ouvrir le fichier `index.html` dans un navigateur.

### Méthode recommandée

Utiliser une extension comme **Live Server** dans VS Code pour lancer le projet localement.

### Procédure conseillée

1. ouvrir le dossier `Projet_6_JustStreamIt` dans VS Code ;
2. ouvrir `index.html` ;
3. lancer **Live Server** ;
4. vérifier que l’API locale tourne déjà dans un autre terminal.

---

## Utilisation du site

Quand l’API et le front-end sont lancés :

1. la page charge automatiquement les données au démarrage ;
2. la zone **Meilleur film** affiche le film ayant la meilleure note IMDb ;
3. la zone **Films les mieux notés** affiche les autres meilleurs films ;
4. les deux catégories fixes affichent leurs propres films ;
5. la zone **Autres catégories** permet de choisir une catégorie dans un menu déroulant ;
6. un clic sur le bouton **Détails** du meilleur film ouvre la modale ;
7. un clic sur l’image d’un film ouvre également la modale ;
8. le bouton **Voir plus / Voir moins** adapte l’affichage selon la taille d’écran.

---

## Responsive

Le site a été conçu pour s’adapter à trois tailles principales :

- **mobile**
- **tablette**
- **ordinateur**

Le nombre de films visibles par défaut varie selon la largeur de l’écran :

- **2 films visibles** sur mobile
- **4 films visibles** sur tablette
- **6 films visibles** sur desktop

Les films masqués peuvent être affichés avec le bouton **Voir plus**, puis repliés avec **Voir moins**.

---

## Validation et vérifications

Avant le rendu, les points suivants ont été vérifiés :

- structure HTML valide ;
- CSS valide ;
- chargement des données depuis l’API locale ;
- fonctionnement du bouton **Détails** ;
- fonctionnement de la modale ;
- fonctionnement du menu **Autres catégories** ;
- fonctionnement du bouton **Voir plus / Voir moins** ;
- vérification du responsive mobile / tablette / desktop.

---

## Dépannage

### L’API ne se lance pas

Vérifier :

- que l’on est bien dans le dossier de l’API ;
- que Python est installé ;
- que les dépendances ont bien été installées ;
- que la base a bien été créée avec `create_db`.

### Le front-end s’ouvre mais rien ne s’affiche

Vérifier :

- que l’API locale est bien en cours d’exécution ;
- que l’URL de base dans `js/utilitaires.js` pointe bien vers :

```text
http://127.0.0.1:8000/api/v1
```

### Certaines affiches ne s’affichent pas

Certaines URLs d’images renvoyées par l’API peuvent être indisponibles.

Une image de secours locale est utilisée dans le projet :

```text
image_manquante/Affiche_film_manquante.png
```

### La modale ne s’ouvre pas

Vérifier :

- que l’API retourne bien les détails du film ;
- qu’il n’y a pas d’erreur dans la console du navigateur ;
- que les fichiers JavaScript sont bien chargés dans cet ordre :
  1. `utilitaires.js`
  2. `api-films.js`
  3. `films.js`
  4. `modale.js`
  5. `script.js`

---

## Choix de structure

J’ai choisi une structure claire et organisée par responsabilité, avec une séparation entre :

- le **HTML** pour la structure sémantique de la page ;
- le **CSS** pour la mise en page, le responsive et la modale ;
- le **JavaScript** pour les appels à l’API, l’injection des données dans le DOM et la gestion des interactions.

Ce découpage facilite la lecture, la maintenance et l’explication du projet en soutenance.

---

## Auteur

Projet réalisé par **Marion.L** dans le cadre de la formation **OpenClassrooms**.
