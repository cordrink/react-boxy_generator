# Boxy generator

[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![JavaScript](https://shields.io/badge/JavaScript-F7DF1E?logo=JavaScript&logoColor=000&style=flat-square)](https://developer.mozilla.org/fr/docs/Web/JavaScript)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?logo=vite&logoColor=white)](https://vite.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4.2-38bdf8?logo=tailwind-css&style=flat)](https://tailwindcss.com)
[![Redux](https://img.shields.io/badge/-Redux-black?style=flat-square&logo=redux)](https://redux.js.org)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)
[![Live Demo](https://img.shields.io/badge/Demo-voir%20l'application-00C853?style=for-the-badge&logo=vercel&logoColor=white)](https://react-boxy-generator.vercel.app/)

**Description courte mais percutante** 

Application de generation de code CSS pour les styles box-shadow donnant la possibilite de styliser selon le besoin

## ✨ Fonctionnalités principales

- Ajout de pluisieurs effets d'ombre
- Suppression d'une ombre
- Modification de la couleur, disposition verticale/horizontal, le flou et la porte de l'ombre
- Modification de la Box (Les arrondis, la hauteur, la largeur et la couleur de fond)
- Generer le code CSS pour le box-shadow

## 🚀 Demo en ligne

🔗 **https://react-boxy-generator.vercel.app/**

## 📸 Captures d'écran
Quelques vues de l'application :

- **Interface de gestion de shadow** :
  ![Page d'accueil](docs/screenshots/2026-03-21%2014_09_53-.png)

- **Interface gestion de la box** :
  ![Gestion de panier](docs/screenshots/2026-03-21%2014_10_27-.png)

- **Interface de visualisation de code genere pour l'effet de box-shadow** :
  ![Visualisation de code](docs/screenshots/2026-03-21%2014_10_46-.png)


## 🛠️ Technologies utilisées

| Catégorie        | Technologie       | Version |
|------------------|-------------------|---------|
| Framework        | React             | 19.2    |
| Build tool       | Vite              | 8.0     |
| Langage          | JavaScript        | —       |
| Styling          | Tailwind CSS      | 4.2     |
| State management | Redux Toolkit     | 2.11    |
| Qualité code     | ESLint + Prettier | —       |
| Déploiement      | Vercel            | —       |

## 📂 Structure du projet

```text
├── 📁 docs
│   └── 📁 screenshots
└── 📁 src
    ├── 📁 assets
    ├── 📁 components
    │   ├── 📄 Footer.jsx
    │   └── 📄 Header.jsx
    ├── 📁 features
    │   ├── 📄 boxProperties.js
    │   └── 📄 shadows.js
    ├── 📁 layouts
    │   ├── 📁 BoxPannel
    │   │   ├── 📄 BoxColorPicker.jsx
    │   │   ├── 📄 BoxPanel.jsx
    │   │   └── 📄 BoxRange.jsx
    │   ├── 📁 ShadowList
    │   │   ├── 📄 Shadow.jsx
    │   │   ├── 📄 ShadowCheckbox.jsx
    │   │   ├── 📄 ShadowColorPicker.jsx
    │   │   ├── 📄 ShadowList.jsx
    │   │   └── 📄 ShadowRange.jsx
    │   ├── 📁 Visualization
    │   │   ├── 📁 Modal
    │   │   │   ├── 📄 ModalBtn.jsx
    │   │   │   └── 📄 ModalResult.jsx
    │   │   └── 📄 Visualization.jsx
    │   └── 📄 LeftContainer.jsx
    ├── 📁 utils
    │   └── 📄 getBoxShadowValue.js
    ├── 📄 App.jsx
    ├── 🎨 index.css
    ├── 📄 main.jsx
    └── 📄 store.js
```

## 🚀 Installation & Lancement rapide

```bash
# 1. Cloner le dépôt
git clone https://github.com/cordrink/react-boxy_generator.git
cd react-boxy_generator

# 2. Installer les dépendances
npm install

# 3. Démarrer le serveur de développement
npm run dev

# → l'application est accessible sur :
# http://localhost:5173
```

## 🔧 Contribution
Les contributions sont les bienvenues !
Pour des modifications importantes, ouvre d'abord une issue pour discuter de ce que tu veux changer.

1. Fork le projet
2. Crée ta branche (`git checkout -b feature/ma-super-fonction`)
3. Commit tes changements (`git commit -m 'feat: ajoute la dark mode toggle`)
4. Push (`git push origin feature/ma-super-fonction`)
5. Ouvre un Pull Request

# ❤️ Remerciements & Inspirations
- [Vercel](https://vercel.com/) – déploiement ultra-rapide

Projet créé avec ❤️ par [@cordrink](https://github.com/cordrink)
N’hésite pas à mettre une ⭐ si le projet t’a plu ou t’a aidé !