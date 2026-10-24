# Ascending Together · Team Building Retreats

Lead-generation page for **The Missing P** retreat program, led by Usman Gulzari.

**Live page:** https://themissingp-training.github.io/Retreats/

## How to change the page yourself

Everything you see on the page (text, numbers, photos, videos, logos, links) lives in **one file: `content.js`**.

1. Open `content.js` on github.com and click the **pencil (Edit)** icon.
2. Change only the text **inside the quotes** `"like this"`. Keep the quotes, commas and brackets as they are.
3. Click **Commit changes**. The live page updates in 1–2 minutes.

### Common edits

| What you want to change | Where in `content.js` |
|---|---|
| Calendly link | `settings → calendlyUrl` |
| Jotform form | `settings → jotformId` (the number at the end of your form link) |
| Headline and subtitle | `hero` |
| Big numbers (500+, 15+ …) | `proof` |
| Client logos | `logos` |
| Videos | `videos`, `films`, `videoTestimonials` |
| Past retreat cards | `portfolio`, `morePortfolio` |
| Testimonials | `testimonials`, `screenshots` |
| Activities | `agenda` |
| Form options (team size, budget …) | `form` |

### Adding a new photo, logo or video

1. Open the right folder: `assets/img`, `assets/logos` or `assets/video`.
2. Click **Add file → Upload files**, drop the file in, then **Commit changes**.
3. In `content.js`, type the file's path, e.g. `"assets/img/new-photo.jpg"`.

Keep photos under about 500 KB and videos under about 15 MB so the page loads fast on mobile.

### If something breaks

Open the repo's **commits** list (the clock icon), open the last commit, and use **Revert**, or copy the previous version of `content.js` back.

## Files

- `index.html` – page design (no need to edit)
- `app.js` – page engine (no need to edit)
- `content.js` – **all the content, edit this one**
- `assets/` – photos, logos and videos
