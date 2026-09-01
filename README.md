# The Melbourne Foundation — Website

Website for [The Melbourne Foundation](https://www.melbournefoundation.org/), a
volunteer-run charity that has provided fully-funded private secondary school
scholarships to financially disadvantaged Victorian students since 2006.

## Branches

| Branch | What it is | Stack |
| --- | --- | --- |
| **`main`** | The current rebuild — a fast, hand-written static site in a rich navy-and-gold scheme, with the Foundation's own wording restored verbatim. | HTML + CSS + a little vanilla JS. No build step. |
| **`enhanced-ui`** | An aesthetically-optimised rebuild using public UI libraries (ReactBits, Skiper UI, UIverse) and Framer Motion — aurora/particle backgrounds, animated text, tilt/spotlight cards, scroll reveals. | React + Vite + Tailwind CSS. |

## Pages

Home · About · Our Scholars · Selection Process · Donate

## Running the `main` (static) site

No build required — check out `main`, then open `index.html` in a browser, or
serve the folder:

```bash
npx serve .
```

## Running the `enhanced-ui` (React) site

```bash
npm install
npm run dev      # local dev server with hot reload
npm run build    # production build into dist/
npm run preview  # preview the production build
```

The build output in `dist/` is a static bundle that can be dropped onto any host
(Netlify, Vercel, Cloudflare Pages, GitHub Pages). Routing uses hash URLs
(`/#/about`), so no server rewrite rules are required.

## Notes before go-live

- **Verify the bank details** on the Donate page against the Foundation's own
  records. They were scraped from the current WordPress site, which shows signs
  of compromise (a backdoor admin script was found on one page).
- **Replace the image placeholders** with real, consented photography.

---

Built with [Claude Code](https://claude.com/claude-code).
