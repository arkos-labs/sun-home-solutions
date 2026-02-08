# Notes — 2026-02-08

## Contexte
- Site: https://sun-home-solutions.vercel.app
- Cible: particuliers (B2C). Exclure pro/B2B.

## SEO & contenu
- Texte hero + pages réorientés « maison / foyer / particuliers ».
- Meta description mise à jour (CTR).
- Mots-clés meta ajustés B2C.
- Schema.org FAQ ajouté sur la home.
- robots.txt + sitemap.xml en place.
- Page /zones ajoutée (liens internes vers régions/départements).

## Pages GEO
- Pages dynamiques: /france, /regions/:regionSlug, /departements/:deptSlug.
- Données générées dans src/data/geo (nation/regions/departements).

## Prerender SEO (Vite)
- Objectif: HTML avec H1/H2/liens pour audits SEO.
- Plugin: vite-plugin-prerender@^1.0.8 (CJS).
- Import dans vite.config.ts via createRequire (ESM compat).
- Routes incluent toutes pages + régions + départements.
- Build local OK: prerender génère toutes les routes.

## Actions restantes
- Commit & push vite.config.ts + package.json.
- Redeploy Vercel.
- Refaire audit SEO après déploiement.

