# Meshwi Food Hub — Website

A premium, responsive website for Meshwi Food Hub (Kanjirappally). Built with plain HTML, CSS and JavaScript — **no build step or server required**. Open `index.html` in a browser, or upload the whole folder to any static web host (Netlify, Vercel, GitHub Pages, cPanel, etc.).

## ⚠️ Before you publish — please confirm with the owner

- [ ] Opening hours (`js/config.js` → `hours`)
- [ ] Menu items, categories and **prices** (`js/menu-data.js`) — all prices are currently blank
- [ ] Google rating & review count (`js/config.js` → `reviews`)
- [ ] Whether reservations, outdoor seating, kids' menu and parking are currently offered (currently marked "please call to confirm" in the FAQ and Ambience section)
- [ ] The verified Google Maps place / embed link (`js/config.js` → `maps`)
- [ ] Correct Swiggy listing link, and whether a verified Zomato link should be added
- [ ] Real photography to replace placeholder images (see below)
- [ ] Final Privacy Policy and Terms text, reviewed by a professional

## File structure

```
/index.html            Homepage (hero, specialities, menu preview, reviews, ordering, location, reservation, FAQ)
/menu.html              Full searchable/filterable menu
/gallery.html           Filterable photo gallery with lightbox
/about.html             About / our story
/contact.html           Contact & location
/privacy-policy.html    Privacy policy placeholder
/css/style.css          All styling (design tokens at the top)
/js/config.js           ⭐ Business info: phone, address, hours, links, ratings
/js/menu-data.js        ⭐ All menu items, categories, prices, availability
/js/main.js             Site behaviour (nav, filters, forms, lightbox, open/closed status)
/robots.txt, /sitemap.xml   SEO files
```

## How to make common edits

### Change the phone number, hours, or social links
Edit **`js/config.js`** only — every page pulls from this one file. For example, to update hours:

```js
hours: {
  displayText: "Daily, 12:00 PM – 11:00 PM",
  open24: "12:00",
  close24: "23:00",
  ...
}
```

### Add, edit, or remove a menu item
Edit **`js/menu-data.js`**. Each dish is one object:

```js
{ id: "mandi-rice", name: "Mandi Rice", description: "...", category: "Mandi",
  price: 220, image: "placeholder-mandi-3", bestseller: false, spiceLevel: 0,
  dietary: "veg", available: true }
```

- Set `price` to a number (e.g. `220`) once confirmed — it will automatically display as `₹220`.
- Set `available: false` to show "Currently unavailable" instead of removing the item.
- `category` must exactly match one of the entries in `MESHWI_MENU_CATEGORIES` at the bottom of the file (or add a new category there too).

### Update ratings / review count
Edit `reviews` in `js/config.js`. The site always shows `countLabel` (e.g. "300+ Google Reviews") rather than an exact number, since counts change often.

### Replace placeholder photography
All photos are currently elegant labelled placeholders (a warm gradient with a line icon and a caption like "Placeholder — Mandi photo pending"), because no licensed Meshwi Food Hub photography was supplied. Once you have permission-cleared photos:

1. Add image files into a new `/assets/` folder (JPG/WebP, compressed, ideally under 300KB each).
2. In `js/main.js`, replace calls to `meshwiPlaceholder({...})` with a real `<img>` tag, e.g.:
   ```html
   <img src="assets/mandi-1.webp" alt="Signature Mandi platter at Meshwi Food Hub" loading="lazy">
   ```
3. Do this for: hero background (`index.html` `.hero`), About/Story sections, Speciality cards, Gallery items (`GALLERY_ITEMS` array in `main.js`), and Instagram preview tiles.

### Reservation form behaviour
There is no backend. Submitting the form validates the fields, then opens WhatsApp with a pre-filled message to the restaurant's number. To connect a real backend/CRM later, edit the `initReservationForm()` function in `js/main.js`.

### Add Google Analytics / Tag Manager / Meta Pixel
Insert the relevant snippet just before `</head>` in each HTML file **only after** your cookie/consent approach and Privacy Policy are finalized. Suggested event hooks are already in place via the `data-*` attributes on call, WhatsApp, directions, menu and order buttons — you can bind analytics events to clicks on `[data-config-href="phone.link"]`, `[data-whatsapp-order]`, `[data-config-href="maps.directionsUrl"]`, etc.

## Design system quick reference

- Colours, fonts, spacing tokens: top of `css/style.css` (`:root` block)
- Headings font: Cormorant Garamond · Body font: Poppins (loaded from Google Fonts)
- The gold diamond/lattice pattern is the site's signature Arabian motif — used in the hero overlay, page headers, and placeholder photo backgrounds

## Accessibility & performance notes

- Skip-to-content link, visible focus states, and `prefers-reduced-motion` support are built in.
- Menu, gallery, and FAQ are keyboard accessible; the lightbox supports arrow keys, Escape, and swipe gestures.
- No blocking animation libraries are used — motion is done in plain CSS for a lighter footprint.
- Replace placeholder images with **compressed WebP/AVIF** files and keep hero images under ~200KB for good mobile performance.
