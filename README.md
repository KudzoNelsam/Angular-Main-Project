# 🚀 Angular + TailwindCSS Setup

Ce projet est une configuration simple d'Angular avec **Tailwind CSS** en mode CLI, avec une automatisation via `concurrently`.

---

## ✅ Prérequis

- Node.js >= 16
- Angular CLI (`npm install -g @angular/cli`)
- npm

---

## 📦 Installation

Clone le projet, puis exécute :

```bash
npm run setup
```

Cette commande :
- Installe toutes les dépendances (node_modules)
- Installe concurrently (si ce n’est pas déjà fait)
- Lance Angular (ng serve) et Tailwind CLI en mode watch

# 🧰 Scripts disponibles
```json
"scripts": {
  "start": "concurrently \"ng serve\" \"npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch\"",
  "setup": "npm install && npm install concurrently --save-dev && npm run start"
}
```
| Script  | Description                                                   |
| ------- | ------------------------------------------------------------- |
| `setup` | Installe tout et démarre le projet (Angular + Tailwind Watch) |
| `start` | Lance `ng serve` + Tailwind CLI (`--watch`)                   |


# 📎 Liens utiles

    🌐 Tailwind CSS : https://tailwindcss.com/docs/installation

    🌐 Concurrently : https://www.npmjs.com/package/concurrently

    🌐 Angular CLI : https://angular.io/cli
