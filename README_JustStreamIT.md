# JustStreamIt

Projet front-end réalisé dans le cadre du **Projet 6 OpenClassrooms**.

L’objectif est de développer l’interface utilisateur d’une application web de classement de films en utilisant **HTML**, **CSS** et **JavaScript vanilla**, en consommant les données d’une **API REST locale** : **OCMovies-API**.

---

## Objectifs du projet

L’application doit permettre de :

- afficher le **meilleur film** toutes catégories confondues ;
- afficher une section **Films les mieux notés** ;
- afficher **deux catégories fixes** ;
- afficher une section **Autres catégories** alimentée par la liste des genres de l’API ;
- ouvrir une **modale** contenant les détails complets d’un film ;
- proposer un affichage **responsive** pour mobile, tablette et ordinateur.

---

## Technologies utilisées

- HTML5
- CSS3
- JavaScript vanilla
- Fetch API
- API locale OCMovies-API

---

## Structure du projet

```text
Projet_6_JustStreamIt/
├── index.html
├── README.md
├── css/
│   ├── base.css
│   ├── composants.css
│   └── mise-en-page.css
└── js/
    ├── api-films.js
    ├── films.js
    ├── modale.js
    ├── script.js
    └── utilitaires.js
```

### Rôle des fichiers

- `index.html` : structure principale de la page
- `css/base.css` : styles généraux
- `css/mise-en-page.css` : organisation de la page et responsive
- `css/composants.css` : cartes, boutons, modale
- `js/api-films.js` : appels à l’API
- `js/films.js` : affichage des sections de films
- `js/modale.js` : gestion de la modale
- `js/utilitaires.js` : fonctions utilitaires
- `js/script.js` : point d’entrée du projet

---

## Prérequis

Pour faire fonctionner le projet, il faut :

- Python installé sur la machine ;
- l’API locale **OCMovies-API** téléchargée ;
- un navigateur web ;
- un éditeur de code comme **VS Code**.

---

## Lancer l’API locale

L’interface front-end consomme les données d’une API locale fournie pour le projet.

### Installation initiale de l’API

Depuis le dossier de l’API :

```bash
pip install -r requirements.txt
python manage.py create_db
python manage.py runserver
```

### Avec environnement virtuel (recommandé)

L’utilisation d’un environnement virtuel est recommandée pour isoler les dépendances Python du projet.

#### Windows

```bash
python -m venv env
.\env\Scripts\python.exe -m pip install -r requirements.txt
.\env\Scripts\python.exe manage.py create_db
.\env\Scripts\python.exe manage.py runserver
```

Sous Windows, utiliser directement `.\env\Scripts\python.exe` permet de lancer l’API avec le bon interpréteur Python de l’environnement virtuel.

#### macOS / Linux

```bash
python3 -m venv env
source env/bin/activate
pip install -r requirements.txt
python manage.py create_db
python manage.py runserver
```

### Lancements suivants

Si les dépendances et la base de données sont déjà en place :

```bash
python manage.py runserver
```

Ou, si un environnement virtuel est utilisé :

#### Windows

```bash
.\env\Scripts\python.exe manage.py runserver
```

#### macOS / Linux

```bash
source env/bin/activate
python manage.py runserver
```

### URL de base de l’API

```text
http://127.0.0.1:8000/api/v1/
```

### Endpoints testés

```text
http://127.0.0.1:8000/api/v1/titles/
http://127.0.0.1:8000/api/v1/titles/499549
http://127.0.0.1:8000/api/v1/genres/
```

### Données repérées pendant les tests

#### Liste des films

Endpoint :

```text
/api/v1/titles/
```

Champs repérés :

- `count`
- `next`
- `previous`
- `results[]`

Pour chaque film dans `results` :

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

Endpoint :

```text
/api/v1/titles/{id}
```

Champs repérés :

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

Endpoint :

```text
/api/v1/genres/
```

Champs repérés :

- `count`
- `next`
- `previous`
- `results[]`

Pour chaque genre dans `results` :

- `id`
- `name`

---

## Lancer le front-end

Le front-end ne nécessite pas d’environnement virtuel, car il utilise uniquement HTML, CSS et JavaScript côté navigateur.

### Méthode simple

Ouvrir le fichier `index.html` dans un navigateur.

### Méthode recommandée

Utiliser une extension comme **Live Server** dans VS Code pour lancer le projet localement.

---

## Fonctionnalités prévues

- affichage du meilleur film ;
- affichage des films les mieux notés ;
- affichage de deux catégories fixes ;
- affichage d’une catégorie dynamique dans la zone **Autres catégories** ;
- ouverture d’une modale de détail ;
- bouton **Voir plus / Voir moins** ;
- responsive mobile / tablette / desktop.

---

## Contraintes du projet

Le projet impose notamment :

- l’utilisation de **JavaScript vanilla** ;
- l’utilisation de **fetch** pour les requêtes API ;
- l’absence de framework JavaScript ;
- une structure HTML sémantique ;
- un affichage responsive ;
- aucune erreur JavaScript dans la console.

---

## État d’avancement

### Déjà réalisé

- lancement de l’API locale ;
- test manuel des endpoints principaux ;
- création de l’arborescence du projet ;
- mise en place du squelette HTML initial.

### À faire

- choix définitif des deux catégories fixes ;
- intégration du CSS ;
- récupération des données réelles depuis l’API ;
- affichage dynamique des sections ;
- implémentation de la modale ;
- gestion du bouton **Voir plus / Voir moins** ;
- finalisation du responsive.

---

## Choix de structure

J’ai choisi une structure claire et organisée par responsabilité, avec une séparation entre la structure HTML, les styles CSS généraux et spécifiques, ainsi que les scripts JavaScript dédiés à l’API, à l’affichage des films, à la modale et aux fonctions utilitaires, afin de faciliter la lecture, la maintenance et l’explication du projet.

---

## Auteur

Projet réalisé par Marion.L dans le cadre de la formation OpenClassrooms.