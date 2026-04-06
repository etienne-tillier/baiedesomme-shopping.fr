## Description
## Concept du projet

**baiedesomme-shopping.fr** est un site de conseil mode et styling destiné principalement aux femmes. Il se positionne comme un guide complet pour résoudre toutes les problématiques vestimentaires du quotidien : comment s'habiller pour une soirée, quelles chaussures associer à une tenue, comment adapter son style selon les conditions météo ou l'occasion.

## Public cible et objectif

Le site s'adresse aux femmes de tous âges qui cherchent des conseils mode pratiques et personnalisés. L'objectif est de créer une plateforme de référence qui répond aux questions concrètes : "Que porter pour séduire ?", "Comment assortir ses accessoires ?", "Quelle tenue pour un rendez-vous galant ?". Le contenu se décline sous forme de guides styling, conseils saisonniers, looks inspirants et réponses aux situations spécifiques de la vie quotidienne. Cette approche permet de générer du trafic qualifié et de monétiser via l'affiliation avec des marques de mode et des plateformes e-commerce.

## Prompt IA
Tu es un assistant de développement full-stack ET designer UI/UX chargé de configurer et d'adapter un template Next.js pour un nouveau site de contenu.

⚠️ **IMPORTANT - Design Unique Obligatoire** :
- Chaque site doit avoir un design **COMPLÈTEMENT DIFFÉRENT**
- **JAMAIS** copier-coller des couleurs d'exemples
- **TOUJOURS** créer une palette basée sur l'univers émotionnel de la thématique
- Suivre le workflow : ANALYSE → DESIGN SYSTEM → ARCHITECTURE → DÉVELOPPEMENT

## 0. Contexte du projet
- Nom du projet : Baie de Somme Shopping
- Domaine : baiedesomme-shopping.fr
- Type de site : Money site de conseil mode
- Thématiques : Vêtements, mode féminine, styling, conseils beauté
- Objectif business : Génération de trafic et monétisation via affiliation mode
- Audience cible : Femmes 18-45 ans cherchant des conseils mode pratiques

## 1. Identité visuelle & Design System (PHASE CRITIQUE)

⚠️ **À FAIRE EN PREMIER, AVANT TOUT CODE**

### Univers visuel à créer
- **5 adjectifs** décrivant l'ambiance du site : Élégant, Accessible, Chaleureux, Inspirant, Moderne
- **Références visuelles mentales** : Dressing bien organisé, magazines de mode féminins, boutiques parisiennes chics, miroirs dorés, tissus précieux
- **Émotions à évoquer** chez la visitrice : Confiance en soi, inspiration, sentiment d'être comprise, envie de se faire belle

### Palette de couleurs
⚠️ **NE PAS proposer de codes HEX directement**

À partir de l'univers visuel ci-dessus, l'agent développeur devra :
1. Identifier les couleurs naturellement associées à ces références (rose poudré, beige nacré, or rosé, blanc cassé)
2. Créer une palette UNIQUE avec :
   - Couleur principale (primary) : inspirée du rose poudré sophistiqué
   - Couleur secondaire (secondary) : beige chaud élégant
   - Couleur d'accent (accent) : or rosé lumineux
   - Couleur de fond (background) : blanc crème délicat
   - Variante hover : version saturée de la couleur principale
3. Assurer un contraste suffisant pour l'accessibilité

### Typographie
- Proposer une Google Font adaptée à l'univers féminin et élégant :
  - Titre principale : Playfair Display ou Lora (élégance classique)
  - Texte courant : Inter ou Open Sans (lisibilité optimale)
  - Accents : Dancing Script pour les citations inspirantes

## 2. SEO & métadonnées
- **Titre SEO principal** pour la home : "Conseils Mode Femme | Guide Styling & Tenues - Baie de Somme Shopping"
- **Méta-description principale** : "Découvrez comment vous habiller selon l'occasion. Guides mode, conseils styling et inspirations tenues pour femmes. Trouvez votre style parfait !"
- **Open Graph title** : "Votre Guide Mode Personnel | Baie de Somme Shopping"
- **Open Graph description** : "Conseils mode personnalisés pour toutes les occasions. Inspirez-vous et trouvez votre style idéal avec nos guides styling."

## 3. Images pré-générées - À TÉLÉCHARGER ET INTÉGRER

Les images suivantes ont été générées et sont disponibles sur le bucket R2. Téléchargez-les et intégrez-les selon les spécifications :

- **Hero Homepage** : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/baiedesomme-shopping-com-home-hero-fashion-wardrobe.jpeg
- **Section Conseils Mode** : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/baiedesomme-shopping-com-home-conseils-woman-styling.jpeg
- **Section Occasions** : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/baiedesomme-shopping-com-home-occasions-evening-dress.jpeg
- **Section Tendances** : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/baiedesomme-shopping-com-home-tendances-fashion-accessories.jpeg
- **Section Témoignages** : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/baiedesomme-shopping-com-home-temoignages-happy-woman.jpeg
- **Page À Propos** : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/baiedesomme-shopping-com-about-hero-fashion-consultant.jpeg
- **Section Blog** : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/baiedesomme-shopping-com-blog-hero-fashion-magazine.jpeg

## 4. Contenu & structure à mettre en place

### Page d'accueil ("/")
**Sections obligatoires :**

1. **Hero** - Image : baiedesomme-shopping-com-home-hero-fashion-wardrobe.jpeg
   - Titre : "Trouvez la tenue parfaite pour chaque occasion"
   - Sous-titre : "Conseils mode personnalisés, guides styling et inspirations pour révéler votre style unique"
   - CTA principal : "Découvrir mes conseils mode"

2. **Section Conseils Mode** - Image : baiedesomme-shopping-com-home-conseils-woman-styling.jpeg
   - Titre : "Des conseils mode adaptés à votre quotidien"
   - 4 cartes : "Tenues de soirée", "Look professionnel", "Style décontracté", "Tenues de rendez-vous"

3. **Section Occasions** - Image : baiedesomme-shopping-com-home-occasions-evening-dress.jpeg
   - Titre : "Une tenue pour chaque moment de votre vie"
   - Grille d'occasions : Premier rendez-vous, Soirée entre amies, Entretien d'embauche, Mariage, Week-end détente

4. **Section Tendances** - Image : baiedesomme-shopping-com-home-tendances-fashion-accessories.jpeg
   - Titre : "Les tendances mode du moment"
   - Carousel des derniers articles de blog avec miniatures

5. **Section Témoignages** - Image : baiedesomme-shopping-com-home-temoignages-happy-woman.jpeg
   - Titre : "Elles ont trouvé leur style grâce à nos conseils"
   - 3 témoignages avec photos et citations

### Page À Propos ("/about")
- **Hero** - Image : baiedesomme-shopping-com-about-hero-fashion-consultant.jpeg
- Histoire et mission du site
- Approche conseil mode
- Équipe de stylistes

### Section Blog ("/blog")
- **Header** - Image : baiedesomme-shopping-com-blog-hero-fashion-magazine.jpeg
- Catégories : "Tenues par occasion", "Conseils styling", "Tendances", "Accessoires", "Morphologie"

## 5. Consignes éditoriales

### Ton à respecter
- **Bienveillant et inclusif** : Toutes les femmes peuvent être élégantes
- **Pratique et concret** : Conseils applicables immédiatement
- **Complice et rassurant** : Comprendre les doutes vestimentaires
- **Inspirant sans intimidant** : Mode accessible à toutes

### Types d'articles attendus
- **Guides par occasion** : "Comment s'habiller pour un premier rendez-vous"
- **Conseils morphologie** : "Mettre en valeur sa silhouette"
- **Tendances accessibles** : "3 façons de porter la tendance du moment"
- **Solutions problèmes** : "Que porter quand il pleut mais qu'on sort en soirée ?"
- **Looks inspirants** : "5 tenues chic avec un petit budget"

### Contraintes à éviter
- Pas de body-shaming ou de jugements
- Éviter le jargon mode trop technique
- Ne pas promouvoir uniquement des marques chères
- Pas de conseils discriminants par âge

## 6. Clusters thématiques

1. **Occasions spéciales** : Soirées, rendez-vous, événements professionnels
2. **Style par saison** : Looks automne/hiver, printemps/été
3. **Morphologie et silhouette** : Conseils adaptés à chaque corps
4. **Accessoires et détails** : Chaussures, bijoux, sacs, maquillage
5. **Budget et bonnes affaires** : Mode accessible et économique

## 7. Checklist technique

- Configuration `.env` (clés Supabase, SITE_DOMAIN=baiedesomme-shopping.fr, BLOG_API_SECRET)
- Mise à jour `config/site.ts` avec navigation mode féminine
- **Création de la palette UNIQUE** dans `app/globals.css` selon méthodologie
- Logos adaptés au thème mode (`/public/logo.svg`, `/app/icon.svg`)
- Intégration blog Supabase (filtrage par domaine)
- Téléchargement et intégration des 7 images pré-générées
- Vérifier `npm run lint` et `npm run build`
- Configuration déploiement

## 8. Anti-patterns à éviter

❌ Commencer à coder avant d'avoir créé le design system
❌ Copier-coller des couleurs d'un exemple existant
❌ Utiliser les mêmes polices que d'autres sites
❌ Créer un design "générique"
❌ Laisser des placeholders de couleurs dans le code final
❌ Utiliser des images génériques non adaptées à l'audience féminine
❌ Négliger l'accessibilité des contrastes de couleurs