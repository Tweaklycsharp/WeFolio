# WeFolio - Portfolio Web Personnel

Un portfolio web simple, élégant et responsive, créé avec HTML, CSS et JavaScript vanilla.

## Fonctionnalités

- Design moderne et responsive
- Animations fluides et interactives
- Navigation sticky avec défilement fluide
- Sections pour présentation personnelle, projets et contact
- Cartes de projets animées
- Icônes sociales interactives
- Fond animé sur la page d'accueil
- Compatible avec tous les navigateurs modernes

## Structure du projet

```
WeFolio/
├── index.html          # Structure HTML principale
├── css/
│   └── style.css       # Styles et animations CSS
├── js/
│   └── main.js         # Fonctionnalités et animations JavaScript
└── README.md           # Documentation
```

## Comment personnaliser

### Informations personnelles

1. Ouvrez `index.html` et modifiez:
   - Votre nom (remplacez "Votre Nom" dans la section accueil)
   - Votre titre/profession (remplacez "Développeur Web & Designer")
   - Votre description personnelle
   - Votre adresse email (remplacez "votre.email@exemple.com")
   - Les liens vers vos réseaux sociaux

### Projets

Pour chaque projet dans la section "Mes Projets":

1. Modifiez le titre du projet
2. Ajoutez une description personnalisée
3. Mettez à jour les technologies utilisées (balises tech-tag)
4. Ajoutez les liens vers GitHub et/ou la démo

Pour ajouter un nouveau projet, dupliquez simplement un bloc de projet existant:

```html
<div class="project-card">
    <div class="project-content">
        <h3>Titre du Projet</h3>
        <p>Description du projet.</p>
        <div class="tech-stack">
            <span class="tech-tag">Technologie 1</span>
            <span class="tech-tag">Technologie 2</span>
        </div>
        <div class="project-links">
            <a href="#" class="project-link"><i class="fab fa-github"></i> GitHub</a>
            <a href="#" class="project-link"><i class="fas fa-external-link-alt"></i> Démo</a>
        </div>
    </div>
</div>
```

### Personnalisation des couleurs

Pour changer la palette de couleurs, modifiez les variables CSS au début du fichier `css/style.css`:

```css
:root {
    --primary-color: #6c63ff;     /* Couleur principale */
    --secondary-color: #4a45b1;   /* Couleur secondaire */
    --accent-color: #f0e7ff;      /* Couleur d'accent */
    --text-color: #333;           /* Couleur de texte principale */
    --light-text: #777;           /* Couleur de texte secondaire */
    --bg-color: #ffffff;          /* Couleur de fond principale */
    --light-bg: #f9f9f9;          /* Couleur de fond secondaire */
}
```

## Utilisation

1. Clonez ou téléchargez ce dépôt
2. Personnalisez les fichiers selon vos besoins
3. Hébergez les fichiers sur votre serveur web ou service d'hébergement préféré (GitHub Pages, Netlify, Vercel, etc.)

## Compatibilité

Ce portfolio est compatible avec tous les navigateurs web modernes:
- Chrome
- Firefox
- Safari
- Edge

## Licence

Libre d'utilisation pour vos projets personnels ou professionnels.

---

Créé avec ❤️ en 2025
