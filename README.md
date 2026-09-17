# Local Service Provider Website — Setup SOP

Welcome! This is your done-for-you website for a local service business
(cleaning, landscaping, handyman, salon, detailing, etc.). No coding
experience needed — you're just replacing placeholder text and photos.

You own this site outright. Host it free, forever, on GitHub Pages.
No monthly fees, no subscriptions, nothing forced on you later.

---

## What's in this download

- `index.html` — the site itself (all your text lives here)
- `style.css` — all your colors and fonts (change once, updates everywhere)
- `script.js` — don't touch this one, it just runs small site behavior
- `assets/` — folder for your logo and photos
- `SOP.md` — this guide

---

## Step 1: Get your free GitHub account (5 min)

1. Go to github.com and click "Sign Up" (it's free).
2. Verify your email.

## Step 2: Create your website repository

1. Once logged in, click the "+" icon top-right → "New repository."
2. Name it exactly: `yourusername.github.io` (replace "yourusername"
   with your actual GitHub username — this exact naming is what makes
   GitHub host it for free).
3. Set it to Public. Click "Create repository."

## Step 3: Upload your files

1. On your new repository page, click "Add file" → "Upload files."
2. Drag in `index.html`, `style.css`, `script.js`, and the `assets` folder.
3. Scroll down, click "Commit changes."
4. Within a few minutes, your site is live at:
   `https://yourusername.github.io`

## Step 4: Customize your colors (2 min)

This site does NOT have to look like everyone else's. The whole
look changes from just 3 color codes. Here's how:

1. Open `style.css` in GitHub (click the file, then the pencil/edit icon).
2. At the very top, you'll see a section labeled `:root { ... }` with
   three color lines:
   - `--color-primary` — your main brand color (buttons, header, links)
   - `--color-primary-dark` — a darker version of that (used on hover)
   - `--color-accent` — a small highlight color (used sparingly, for pops)
3. Pick ONE palette below that fits your business, and paste its three
   codes over the three color lines. Or mix and match, or use your
   own — any hex color picker online will give you codes in this format.
4. Click "Commit changes" — your whole site updates instantly.

### Palette cheat sheet — pick your vibe

**🧼 Fresh & Clean** (cleaning, organizing, home services)
- `--color-primary: #2b7de9;`
- `--color-primary-dark: #1a5bb8;`
- `--color-accent: #a8e6cf;`

**🌿 Earthy & Grounded** (landscaping, lawn care, outdoor work)
- `--color-primary: #1f6f54;`
- `--color-primary-dark: #144d3a;`
- `--color-accent: #e8a33d;`
*(this is the palette the template ships with)*

**🔧 Bold & Dependable** (handyman, contracting, repair)
- `--color-primary: #1e3a5f;`
- `--color-primary-dark: #12233a;`
- `--color-accent: #f4a261;`

**💅 Soft & Upscale** (salon, spa, beauty, wellness)
- `--color-primary: #b5657f;`
- `--color-primary-dark: #8c4761;`
- `--color-accent: #f2d0a4;`

**🚗 Sleek & Modern** (detailing, auto services, tech-adjacent)
- `--color-primary: #1a1a1a;`
- `--color-primary-dark: #000000;`
- `--color-accent: #e63946;`

**🏛️ Classic & Professional** (general services, consulting-adjacent)
- `--color-primary: #14213d;`
- `--color-primary-dark: #0a0f1f;`
- `--color-accent: #d4af37;`

Want your exact brand colors instead? Any free hex color picker
online lets you click a color and get its 6-digit code — just make
sure your `--color-primary-dark` is a darker shade of the same color
family, so buttons still look good on hover.

## Step 5: Edit your text and info

Open `index.html` the same way (click file → pencil icon). Every spot
you need to change is marked with `<!-- EDIT ME -->` right above it.
Replace things like:

- Business name (appears in a few places — use your browser's
  Find/Replace, Ctrl+F or Cmd+F, to catch them all)
- Phone number and email
- Service names and descriptions
- Your story in the About section
- Hours and service area
- Customer reviews

Don't delete the `<!-- -->` comment lines or the HTML tags around
text (the `<h1>`, `<p>`, `<li>` parts) — just change the words
between them.

## Step 6: Add your photos

1. Take or gather photos: your team/you at work, finished jobs,
   your logo if you have one.
2. In GitHub, go into the `assets` folder, click "Add file" →
   "Upload files," and upload your photos there.
3. Back in `index.html`, find the `<img src="assets/...">` lines and
   change the filename to match what you uploaded
   (e.g. `assets/my-photo.jpg`).

## Step 7: Make your contact form actually work

Right now the form on the site won't send anywhere on its own —
this is a static site with no server behind it. Pick ONE of these
free options:

**Option A — Formspree (easiest, recommended)**
1. Go to formspree.io and make a free account.
2. Create a new form, copy the form endpoint URL it gives you
   (looks like `https://formspree.io/f/abc123`).
3. In `index.html`, find the line:
   `<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" ...>`
4. Replace `YOUR_FORM_ID` with your real endpoint. Done — form
   submissions now land in your email.

**Option B — Airtable form (if you want it feeding a database)**
1. Create a free Airtable base with the fields you want to capture
   (Name, Email, Phone, Message).
2. Use Airtable's "Share form" feature to get an embeddable form link.
3. Replace the `<form>...</form>` block in `index.html` with an
   `<iframe>` pointing to your Airtable form link (Airtable gives you
   the exact embed code to copy).

## Step 8: Get your own domain name (recommended)

Right now your site lives at `https://yourusername.github.io` — that's
free forever, but it's a GitHub address, not your business name.
Most businesses want their own domain, like `yourbusiness.com`.

**Important:** As long as you named your repository
`yourusername.github.io` using YOUR OWN GitHub username (Step 2),
your URL only ever shows YOUR name — nothing about where this
template came from appears anywhere on your live site. A custom
domain in this step is about looking more professional, not fixing
a problem.

### Where to buy a cheap domain

A `.com` domain typically runs $10-15/year. A few low-cost, no-markup
options:
- **Cloudflare Registrar** — sells domains at their true wholesale
  cost, no markup, no upsells
- **Porkbun** — consistently cheap, simple interface
- **Namecheap** — very common, frequent first-year discounts

*(Check with AE9 Labs for a current referral/discount link before
you buy — one may be available.)*

### How to connect it to your site

1. Buy your domain from any registrar above.
2. In your GitHub repository, go to Settings → Pages.
3. Under "Custom domain," type your domain (e.g. `yourbusiness.com`)
   and save. GitHub will show you the exact DNS records to add.
4. Go to your domain registrar's DNS settings and add those records
   (usually a few "A" records and/or a "CNAME" record — GitHub's
   page tells you exactly what to enter).
5. DNS changes can take anywhere from a few minutes to 24 hours to
   go live. Once it does, your site loads at your own domain instead
   of the github.io address.

Your site stays free to host either way — the domain itself is a
small yearly cost to your registrar, not to GitHub, and not a
recurring fee to AE9 Labs.

---

## You're done

Your site is live, it's yours, and there's no monthly bill for it.
Update it anytime by editing the files in GitHub the same way you
did in Step 4-6.

Questions or found a bug in the template itself? Reach out through
the support link included with your purchase.
