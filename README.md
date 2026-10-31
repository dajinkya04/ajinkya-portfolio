# Ajinkya Deshmukh — AI Portfolio (Free Edition)

A complete React + Vite portfolio with a cinematic AI orb, local free voice/text guide, seven live project links, custom project cursors, scroll reveal motion, and contact links.

## Run locally

1. Install Node.js 20 or newer.
2. Extract this ZIP and open the project folder in VS Code.
3. Run `npm install`.
4. Run `npm run dev` and open the URL Vite prints.
5. To verify a production build, run `npm run build`.

## Add your REAL website screenshots locally

The project no longer calls external screenshot services. Each preview loads a local image from `public/projects/`, so it will not depend on a screenshot API.

Save a screenshot of each live site's homepage and use these exact filenames:

| Website | Local image filename |
|---|---|
| https://www.corrosionindia.com/ | `corrosionindia.webp` |
| https://agepindia.com/ | `agepindia.webp` |
| https://agepdesign.com/ | `agepdesign.webp` |
| https://agepcoatings.com/ | `agepcoatings.webp` |
| https://eac-international.com/ | `eac-international.webp` |
| https://axialgroup.in/ | `axialgroup.webp` |
| https://agepthailand.com/ | `agepthailand.webp` |

Put those files directly inside `public/projects/`. The `.webp` extension is just the expected filename: if your screenshot is PNG/JPG, convert it to WebP or update the matching `image` property in `src/main.jsx` to the correct extension. Recommended: capture full-page screenshots at a consistent desktop width; compress them to keep the portfolio fast.

Until a real screenshot is added, each project shows a locally bundled, project-specific placeholder with a clear reminder. These placeholders are not presented as actual live-site screenshots. Replacing them with the real image removes the reminder automatically.

The local screenshot preview is visual, not interactive. The “Visit live website” links open the real sites in a new tab. The same component has different accents, custom cursor styles, and preview presentation for each project.

## Free voice guide

The assistant uses predefined portfolio answers and browser speech features. It needs no API key, paid AI API, backend server, or `.env` file. Voice input depends on browser support and microphone permissions.

## Contact details

- Phone: 7756042517
- Email: ajinkyad725@gmail.com
- LinkedIn: https://www.linkedin.com/in/ajinkya-deshmukh-459228257
