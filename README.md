# JustStreamIt

Projet front-end réalisé dans le cadre du **Projet 6 OpenClassrooms**.

L’objectif est de développer l’interface utilisateur d’une application web de classement de films en utilisant **HTML**, **CSS** et **JavaScript vanilla**, en consommant les données d’une **API REST locale** : **OCMovies-API**.

---

## Présentation

JustStreamIt est une interface web qui affiche dynamiquement un classement de films à partir d’une API locale.

Le site permet de :
- afficher un **meilleur film**
- afficher les **films les mieux notés**
- afficher **deux catégories fixes**
- afficher une catégorie choisie dans **Autres catégories**
- ouvrir une **modale** avec les détails complets d’un film
- proposer un affichage **responsive** sur mobile, tablette et desktop

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
├── index.html
└── README.md
```

---

## Rôle des fichiers

- `index.html` : structure principale de la page
- `css/base.css` : styles de base
- `css/mise-en-page.css` : header, sections, espacements, grilles et responsive
- `css/composants.css` : styles de la modale
- `image_manquante/Affiche_film_manquante.png` : image de secours pour les affiches manquantes
- `image_manquante/logo_juststreamit.png` : logo du site
- `js/utilitaires.js` : fonctions utilitaires pour les requêtes API
- `js/api-films.js` : récupération des données depuis l’API
- `js/films.js` : affichage des sections et gestion du bouton Voir plus / Voir moins
- `js/modale.js` : ouverture, fermeture et remplissage de la modale
- `js/script.js` : point d’entrée du projet

---

## Fonctionnalités

- affichage dynamique du **meilleur film**
- affichage dynamique des **films les mieux notés**
- affichage dynamique de **deux catégories fixes distinctes**
- affichage dynamique de la zone **Autres catégories**
- ouverture d’une **modale** au clic sur le bouton du meilleur film
- ouverture d’une **modale** au clic sur l’image d’un film
- affichage détaillé d’un film :
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

## Prérequis

Pour faire fonctionner le projet, il faut :

- **Python** installé sur la machine
- l’API locale **OCMovies-API**
- un navigateur web
- un éditeur de code comme **VS Code**

### Vérifier Python

#### Windows

```bash
python --version
```

Si cela ne fonctionne pas :

```bash
py --version
```

#### macOS / Linux

```bash
python3 --version
```

---

## API locale : OCMovies-API

Le front-end utilise une API locale fournie pour le projet.

### URL de base

```text
http://127.0.0.1:8000/api/v1/
```

### Endpoints utilisés

```text
/api/v1/titles/
/api/v1/titles/{id}
/api/v1/genres/
```

### Données principales récupérées

#### Liste des films

- `id`
- `url`
- `title`
- `year`
- `imdb_score`
- `image_url`
- `directors`
- `actors`
- `genres`

#### Détail d’un film

- `title`
- `image_url`
- `genres`
- `date_published`
- `rated`
- `imdb_score`
- `directors`
- `actors`
- `duration`
- `countries`
- `worldwide_gross_income`
- `long_description`

#### Liste des genres

- `id`
- `name`

---

## Installation et lancement de l’API locale

### 1. Aller dans le dossier de l’API

Exemple :

```bash
cd Projet_6_OCMovies-API
```

### 2. Installation recommandée avec environnement virtuel

#### Windows

Créer l’environnement virtuel :

```bash
python -m venv env
```

Installer les dépendances :

```bash
.\env\Scripts\python.exe -m pip install -r requirements.txt
```

Créer la base de données :

```bash
.\env\Scripts\python.exe manage.py create_db
```

Lancer le serveur :

```bash
.\env\Scripts\python.exe manage.py runserver
```

#### macOS / Linux

Créer l’environnement virtuel :

```bash
python3 -m venv env
```

Activer l’environnement :

```bash
source env/bin/activate
```

Installer les dépendances :

```bash
pip install -r requirements.txt
```

Créer la base de données :

```bash
python manage.py create_db
```

Lancer le serveur :

```bash
python manage.py runserver
```

### 3. Installation sans environnement virtuel

#### Windows

```bash
pip install -r requirements.txt
python manage.py create_db
python manage.py runserver
```

ou

```bash
py -m pip install -r requirements.txt
py manage.py create_db
py manage.py runserver
```

#### macOS / Linux

```bash
pip3 install -r requirements.txt
python3 manage.py create_db
python3 manage.py runserver
```

### 4. Lancements suivants de l’API

Une fois l’installation faite et la base créée, il n’est plus nécessaire de refaire `create_db`.

#### Windows avec environnement virtuel

```bash
.\env\Scripts\python.exe manage.py runserver
```

#### Windows sans environnement virtuel

```bash
python manage.py runserver
```

ou

```bash
py manage.py runserver
```

#### macOS / Linux avec environnement virtuel

```bash
source env/bin/activate
python manage.py runserver
```

#### macOS / Linux sans environnement virtuel

```bash
python3 manage.py runserver
```

### 5. Vérifier que l’API fonctionne

Quand le serveur est lancé, tester les URLs suivantes dans le navigateur :

```text
http://127.0.0.1:8000/api/v1/titles/
http://127.0.0.1:8000/api/v1/titles/499549
http://127.0.0.1:8000/api/v1/genres/
```

Si tout fonctionne, le navigateur doit afficher du JSON.

---

## Lancer le front-end

### Méthode simple

Ouvrir le fichier `index.html` dans un navigateur.

### Méthode recommandée

Utiliser une extension comme **Live Server** dans VS Code.

### Ordre conseillé

1. lancer l’API locale
2. ouvrir le dossier du front-end dans VS Code
3. ouvrir `index.html`
4. lancer **Live Server**

---

## Utilisation du site

Quand l’API et le front-end sont lancés :

1. la page charge automatiquement les données au démarrage
2. la zone **Meilleur film** affiche le film ayant la meilleure note IMDb
3. la zone **Films les mieux notés** affiche les autres meilleurs films
4. les deux catégories fixes affichent leurs propres films
5. la zone **Autres catégories** permet de choisir une catégorie dans un menu déroulant
6. un clic sur le bouton **Détails** du meilleur film ouvre la modale
7. un clic sur l’image d’un film ouvre également la modale
8. le bouton **Voir plus / Voir moins** adapte l’affichage selon la taille d’écran

---

## Responsive

Le site s’adapte à trois tailles principales :

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

- structure HTML valide
- CSS valide
- chargement des données depuis l’API locale
- fonctionnement du bouton **Détails**
- fonctionnement de la modale
- fonctionnement du menu **Autres catégories**
- fonctionnement du bouton **Voir plus / Voir moins**
- vérification du responsive mobile / tablette / desktop

---

## Dépannage

### L’API ne se lance pas

Vérifier :

- que l’on est bien dans le dossier de l’API
- que Python est installé
- que les dépendances ont bien été installées
- que la base a bien été créée avec `create_db`

### Le front-end s’ouvre mais rien ne s’affiche

Vérifier :

- que l’API locale est bien en cours d’exécution
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

- que l’API retourne bien les détails du film
- qu’il n’y a pas d’erreur dans la console du navigateur
- que les fichiers JavaScript sont bien chargés dans cet ordre :
  1. `utilitaires.js`
  2. `api-films.js`
  3. `films.js`
  4. `modale.js`
  5. `script.js`

---

## Choix de structure

J’ai choisi une structure claire et organisée par responsabilité, avec une séparation entre :

- le **HTML** pour la structure sémantique de la page
- le **CSS** pour la mise en page, le responsive et la modale
- le **JavaScript** pour les appels à l’API, l’injection des données dans le DOM et la gestion des interactions

Ce découpage facilite la lecture, la maintenance et l’explication du projet en soutenance.

---

## Auteur

Projet réalisé par **Marion.LARUE** dans le cadre de ma formation **OpenClassrooms**.