# Camp Friends 🏕️

A one-page marketing site for **Camp Friends** — plug-and-play camp infrastructure for
neighborhood parents. Invite the kids, pick the fun, and Camp Friends handles payments,
allowances, waivers, sign-ups, and a week of ready-to-go activities.

Built as a static site (plain HTML/CSS/JS) so it can be hosted free on **GitHub Pages**.

## Structure

```
camp-friends/
├─ index.html              # the whole page
├─ assets/
│  ├─ css/style.css
│  ├─ js/main.js
│  ├─ favicon.svg
│  ├─ img/                 # web-optimized photos + video poster
│  └─ video/day1.mp4       # web-optimized clip from day one
├─ media-raw/              # original full-res photos/video (NOT published — see .gitignore)
└─ README.md
```

All photos and the video are real shots from the first day of camp, resized and compressed
for the web. The original full-resolution files live in `media-raw/` and are excluded from
git via `.gitignore`.

## Preview locally

Open `index.html` in a browser, or run a tiny local server from this folder:

```bash
python -m http.server 8080
# then visit http://localhost:8080
```

## Publish on GitHub Pages

1. Create a new repository on GitHub (e.g. `camp-friends`).
2. From this folder:
   ```bash
   git init
   git add .
   git commit -m "Camp Friends landing page"
   git branch -M main
   git remote add origin https://github.com/<your-username>/camp-friends.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
   pick **main / (root)**, Save.
4. Your site goes live at `https://<your-username>.github.io/camp-friends/` in a minute or two.

## Things to update before going live

- **Contact email:** in `assets/js/main.js`, change `CONTACT_EMAIL` to the camp organizer's
  real address. The "Get early access" form opens the visitor's email app pre-filled to that
  address (no backend needed).
- **Photo consent:** the photos show identifiable neighborhood kids. Confirm the families are
  OK with their kids appearing on a public site before publishing.
