/* =========================================================
   MESHWI FOOD HUB — SITE BEHAVIOUR
   Reads data from config.js and menu-data.js only.
   ========================================================= */
(function () {
  "use strict";

  /* ---------- Small icon set (line icons, no external icon library needed) ---------- */
  const ICONS = {
    flame: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2c1 3-2 4-2 7a4 4 0 0 0 8 0c0-1.5-1-2.5-1-2.5.7 2-1 3-1 3 .5-3-2-4-2-6 0 0-2.5 2-2 5-2-1-2-3.5 0-6.5Z"/><path d="M8 15a4 4 0 0 0 8 0"/></svg>',
    plate: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/></svg>',
    wrap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 8c4-4 12-4 16 0"/><path d="M6 8v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"/><path d="M9 12h6"/></svg>',
    burger: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 10h16"/><path d="M4 14h16"/><path d="M3 10c0-3 4-5 9-5s9 2 9 5"/><path d="M3 14c0 3 4 5 9 5s9-2 9-5"/></svg>',
    glass: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 3h12l-1.5 15a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2L6 3Z"/><path d="M7 8h10"/></svg>',
    leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 20C4 10 12 4 20 4c0 8-6 16-16 16Z"/><path d="M4 20c4-6 8-9 13-12"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z"/><circle cx="12" cy="9" r="2.5"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2C10.5 21 3 13.5 3 6a2 2 0 0 1 2-2Z"/></svg>',
    utensils: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 3v7a2 2 0 0 0 4 0V3"/><path d="M8 10v11"/><path d="M17 3c-1.7 0-3 2-3 5s1.3 5 3 5v8"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 6 9 17l-5-5"/></svg>',
    star: '★',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    menuIcon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    chevron: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 18l6-6-6-6"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>',
    copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.1.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.5-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.4.1-.2 0-.4 0-.5 0-.1-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 2-1.4.2-.6.2-1.1.1-1.2 0-.1-.2-.2-.5-.3Z"/><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M14 9h3V6h-3a3 3 0 0 0-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9a1 1 0 0 1 1-1Z"/></svg>',
    map: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z"/><path d="M9 4v14M15 6v14"/></svg>'
  };

  const CATEGORY_ICON = {
    "Mandi": "plate",
    "Shawarma": "wrap",
    "BBQ & Grills": "flame",
    "Burgers & Rolls": "burger",
    "Juices & Mojitos": "glass",
    "Shakes & Beverages": "glass"
  };

  function placeholderPhoto({ icon = "utensils", tone = "brown", label = "Placeholder photo — add licensed Meshwi Food Hub photography" }) {
    return `<div class="placeholder-photo" data-tone="${tone}" role="img" aria-label="${label}">
      <div class="placeholder-photo__icon">${ICONS[icon] || ICONS.utensils}</div>
      <span class="placeholder-photo__label">${label}</span>
    </div>`;
  }
  window.MESHWI_ICONS = ICONS;
  window.meshwiPlaceholder = placeholderPhoto;

  /* ---------- Populate config-driven fields (data-config attributes) ---------- */
  function hydrateConfig() {
    if (typeof MESHWI_CONFIG === "undefined") return;
    const c = MESHWI_CONFIG;
    document.querySelectorAll("[data-config]").forEach((el) => {
      const key = el.getAttribute("data-config");
      const val = key.split(".").reduce((o, k) => (o ? o[k] : undefined), c);
      if (val !== undefined) el.textContent = val;
    });
    document.querySelectorAll("[data-config-href]").forEach((el) => {
      const key = el.getAttribute("data-config-href");
      const val = key.split(".").reduce((o, k) => (o ? o[k] : undefined), c);
      if (val !== undefined) {
        if (el.tagName.toLowerCase() === "iframe") {
          el.setAttribute("src", val);
        } else {
          el.setAttribute("href", val);
        }
      }
    });
    document.querySelectorAll("[data-year]").forEach((el) => { el.textContent = c.legalYear; });
  }

  /* ---------- Header scroll state + active nav link ---------- */
  function initHeader() {
    const header = document.querySelector(".site-header");
    if (!header) return;
    const onScroll = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- Mobile menu ---------- */
  function initMobileMenu() {
    const openBtn = document.querySelector("[data-menu-open]");
    const closeBtn = document.querySelector("[data-menu-close]");
    const panel = document.querySelector(".mobile-menu");
    if (!openBtn || !panel) return;
    const links = panel.querySelectorAll("a");

    function open() {
      panel.classList.add("is-open");
      document.body.style.overflow = "hidden";
      openBtn.setAttribute("aria-expanded", "true");
      closeBtn && closeBtn.focus();
    }
    function close() {
      panel.classList.remove("is-open");
      document.body.style.overflow = "";
      openBtn.setAttribute("aria-expanded", "false");
      openBtn.focus();
    }
    openBtn.addEventListener("click", open);
    closeBtn && closeBtn.addEventListener("click", close);
    panel.querySelector(".mobile-menu__backdrop") &&
      panel.querySelector(".mobile-menu__backdrop").addEventListener("click", close);
    links.forEach((l) => l.addEventListener("click", close));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && panel.classList.contains("is-open")) close();
    });
  }

  /* ---------- Open / Closed indicator (Asia/Kolkata) ---------- */
  function initOpenIndicator() {
    const els = document.querySelectorAll("[data-open-indicator]");
    if (!els.length || typeof MESHWI_CONFIG === "undefined") return;
    const { open24, close24, timezone, displayText } = MESHWI_CONFIG.hours;

    function nowInTZ() {
      const fmt = new Intl.DateTimeFormat("en-GB", {
        timeZone: timezone, hour: "2-digit", minute: "2-digit", hour12: false
      });
      const parts = fmt.formatToParts(new Date());
      const h = parts.find((p) => p.type === "hour").value;
      const m = parts.find((p) => p.type === "minute").value;
      return `${h}:${m}`;
    }

    const cur = nowInTZ();
    const isOpen = cur >= open24 && cur < close24;
    els.forEach((el) => {
      el.classList.add(isOpen ? "is-open" : "is-closed");
      el.innerHTML = `<span class="dot"></span> ${isOpen ? "Open now" : "Closed now"} · ${displayText}`;
    });
  }

  /* ---------- Copy address ---------- */
  function initCopyAddress() {
    document.querySelectorAll("[data-copy-address]").forEach((btn) => {
      btn.addEventListener("click", async () => {
        const text = MESHWI_CONFIG.address.full;
        try {
          await navigator.clipboard.writeText(text);
          const original = btn.textContent;
          btn.textContent = "Address copied";
          setTimeout(() => { btn.textContent = original; }, 2000);
        } catch (e) {
          window.prompt("Copy this address:", text);
        }
      });
    });
  }

  /* ---------- WhatsApp order link ---------- */
  function initOrderLinks() {
    document.querySelectorAll("[data-whatsapp-order]").forEach((el) => {
      const msg = encodeURIComponent(MESHWI_CONFIG.ordering.whatsappOrderMessage);
      el.setAttribute("href", `${MESHWI_CONFIG.whatsapp.baseLink}?text=${msg}`);
    });
  }

  /* =========================================================
     MENU RENDERING (home preview + full menu page)
     ========================================================= */
  function dishCardHTML(item) {
    const badges = [];
    if (!item.available) badges.push(`<span class="badge badge-out">Currently unavailable</span>`);
    if (item.bestseller) badges.push(`<span class="badge badge-best">Bestseller</span>`);
    if (item.spiceLevel > 0) badges.push(`<span class="badge badge-spice">${"🌶".repeat(item.spiceLevel)} Spicy</span>`);
    if (item.dietary === "veg") badges.push(`<span class="badge badge-veg">Veg</span>`);

    const icon = CATEGORY_ICON[item.category] || "utensils";
    const mediaHTML = (item.image && !item.image.startsWith("placeholder-"))
      ? `<img src="assets/${item.image}" alt="${item.name}" loading="lazy" class="dish-card__image">`
      : placeholderPhoto({ icon, label: `Placeholder — ${item.name} photo pending` });
    return `
    <article class="dish-card" data-category="${item.category}">
      <div class="dish-card__media">
        <div class="dish-card__badges">${badges.join("")}</div>
        ${mediaHTML}
      </div>
      <div class="dish-card__body">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <div class="dish-card__footer">
          <span class="menu-row__price">${item.price ? "₹" + item.price : "Price on request"}</span>
          <a class="btn btn-ghost" href="menu.html#${item.id}">View menu</a>
        </div>
      </div>
    </article>`;
  }

  function menuRowHTML(item) {
    const icon = CATEGORY_ICON[item.category] || "utensils";
    const tags = [];
    if (item.bestseller) tags.push(`<span class="badge badge-best">Bestseller</span>`);
    if (!item.available) tags.push(`<span class="badge badge-out">Unavailable</span>`);
    if (item.spiceLevel > 0) tags.push(`<span class="badge badge-spice">Spice ${item.spiceLevel}/3</span>`);
    if (item.dietary === "veg") tags.push(`<span class="badge badge-veg">Veg</span>`);
    const mediaHTML = (item.image && !item.image.startsWith("placeholder-"))
      ? `<img src="assets/${item.image}" alt="${item.name}" loading="lazy" class="menu-row__image">`
      : placeholderPhoto({ icon, label: item.name });
    return `
    <div class="menu-row" id="${item.id}" data-category="${item.category}" data-name="${item.name.toLowerCase()}">
      <div class="menu-row__media">${mediaHTML}</div>
      <div class="menu-row__body">
        <div class="menu-row__top">
          <h4>${item.name}</h4>
          <span class="menu-row__price">${item.price ? "₹" + item.price : "Ask us"}</span>
        </div>
        <p>${item.description}</p>
        <div class="menu-row__tags">${tags.join("")}</div>
      </div>
    </div>`;
  }

  function renderHomeMenuPreview() {
    const mount = document.querySelector("[data-menu-preview]");
    if (!mount || typeof MESHWI_MENU === "undefined") return;

    const tabsMount = document.querySelector("[data-menu-preview-tabs]");
    let activeCat = MESHWI_MENU_CATEGORIES[0];

    function paint() {
      const items = MESHWI_MENU.filter((i) => i.category === activeCat).slice(0, 4);
      mount.innerHTML = items.map(menuRowHTML).join("") || `<p class="menu-empty">No items yet in this category.</p>`;
    }

    if (tabsMount) {
      tabsMount.innerHTML = MESHWI_MENU_CATEGORIES.map(
        (cat, i) => `<button class="menu-tab${i === 0 ? " is-active" : ""}" data-cat="${cat}">${cat}</button>`
      ).join("");
      tabsMount.addEventListener("click", (e) => {
        const btn = e.target.closest(".menu-tab");
        if (!btn) return;
        activeCat = btn.dataset.cat;
        tabsMount.querySelectorAll(".menu-tab").forEach((b) => b.classList.toggle("is-active", b === btn));
        paint();
      });
    }
    paint();
  }

  function renderFullMenu() {
    const mount = document.querySelector("[data-full-menu]");
    if (!mount || typeof MESHWI_MENU === "undefined") return;

    const tabsMount = document.querySelector("[data-full-menu-tabs]");
    const searchInput = document.querySelector("[data-menu-search]");
    let activeCat = "All";
    let query = "";

    function paint() {
      const items = MESHWI_MENU.filter((i) => {
        const matchesCat = activeCat === "All" || i.category === activeCat;
        const matchesQuery = !query || i.name.toLowerCase().includes(query) || i.description.toLowerCase().includes(query);
        return matchesCat && matchesQuery;
      });
      mount.innerHTML = items.map(menuRowHTML).join("") ||
        `<p class="menu-empty">No dishes match your search. Try another term or category.</p>`;
    }

    if (tabsMount) {
      const cats = ["All", ...MESHWI_MENU_CATEGORIES];
      tabsMount.innerHTML = cats.map(
        (cat, i) => `<button class="menu-tab${i === 0 ? " is-active" : ""}" data-cat="${cat}">${cat}</button>`
      ).join("");
      tabsMount.addEventListener("click", (e) => {
        const btn = e.target.closest(".menu-tab");
        if (!btn) return;
        activeCat = btn.dataset.cat;
        tabsMount.querySelectorAll(".menu-tab").forEach((b) => b.classList.toggle("is-active", b === btn));
        paint();
      });
    }
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        query = e.target.value.trim().toLowerCase();
        paint();
      });
    }
    paint();
  }

  function renderSpecialityCards() {
    const mount = document.querySelector("[data-speciality-cards]");
    if (!mount || typeof MESHWI_MENU === "undefined") return;
    const featuredIds = [
      "mandi-normal-alfaham", "bbq-peri-alfaham", "bbq-meshwi-chicken",
      "shawarma-special-chicken", "shawarma-cheese", "bbq-alfaham-combo"
    ];
    const items = featuredIds.map((id) => MESHWI_MENU.find((m) => m.id === id)).filter(Boolean);
    mount.innerHTML = items.map(dishCardHTML).join("");
  }

  /* =========================================================
     GALLERY + LIGHTBOX
     ========================================================= */
  const GALLERY_ITEMS = [
    { cat: "Mandi", icon: "plate", label: "Signature Mandi platter", ar: "4/5", image: "mandi.png" },
    { cat: "Grills", icon: "flame", label: "Flame-grilled Alfaham", ar: "1/1", image: "peri-peri-alfaham.png" },
    { cat: "Food", icon: "wrap", label: "Fresh chicken shawarma", ar: "4/5", image: "shawarma.png" },
    { cat: "Ambience", icon: "utensils", label: "Cozy Restaurant Interior", ar: "3/4", image: "interior-dining.jpg" },
    { cat: "Mandi", icon: "plate", label: "Authentic Alfaham and Rice Platter", ar: "3/4", image: "alfaham-rice.jpg" },
    { cat: "Grills", icon: "flame", label: "BBQ chicken grilling", ar: "4/5", image: "bbq-chicken.png" },
    { cat: "Food", icon: "glass", label: "Fresh mojito", ar: "3/4", image: "mojito.png" },
    { cat: "Ambience", icon: "utensils", label: "Restaurant entrance at dusk", ar: "4/5", image: "exterior-sunset.png" },
    { cat: "Mandi", icon: "plate", label: "Mandi rice close-up", ar: "4/5", image: "mandi.png" },
    { cat: "Ambience", icon: "utensils", label: "Glowing sign at night", ar: "3/4", image: "sign-night.png" },
    { cat: "Food", icon: "burger", label: "Zinger burger", ar: "1/1", image: "burger.png" },
    { cat: "Ambience", icon: "utensils", label: "Meshwi Food Hub exterior at night", ar: "3/4", image: "exterior-night.jpg" }
  ];

  function renderGallery() {
    const mount = document.querySelector("[data-gallery]");
    if (!mount) return;
    mount.innerHTML = GALLERY_ITEMS.map((g, i) => {
      const mediaHTML = g.image 
        ? `<img src="assets/${g.image}" alt="${g.label}" loading="lazy" class="gallery-image" style="aspect-ratio:${g.ar}; width:100%; height:100%; object-fit:cover; display:block;">`
        : `<div class="placeholder-photo" style="--ar:${g.ar}; aspect-ratio:${g.ar};" data-tone="${i % 2 ? "charcoal" : "brown"}">
            <div class="placeholder-photo__icon">${ICONS[g.icon]}</div>
            <span class="placeholder-photo__label">${g.label}</span>
          </div>`;
      return `
      <div class="gallery-item" data-cat="${g.cat}">
        <button type="button" data-lightbox-index="${i}" aria-label="View larger image: ${g.label}">
          ${mediaHTML}
        </button>
      </div>`;
    }).join("");

    const filterMount = document.querySelector("[data-gallery-filters]");
    if (filterMount) {
      const cats = ["All", "Food", "Ambience", "Grills", "Mandi", "Moments"];
      filterMount.innerHTML = cats.map((c, i) => `<button class="menu-tab${i === 0 ? " is-active" : ""}" data-filter="${c}">${c}</button>`).join("");
      filterMount.addEventListener("click", (e) => {
        const btn = e.target.closest(".menu-tab");
        if (!btn) return;
        filterMount.querySelectorAll(".menu-tab").forEach((b) => b.classList.toggle("is-active", b === btn));
        const filter = btn.dataset.filter;
        mount.querySelectorAll(".gallery-item").forEach((item) => {
          item.classList.toggle("is-hidden", filter !== "All" && item.dataset.cat !== filter);
        });
      });
    }

    initLightbox();
  }

  function initLightbox() {
    const lb = document.querySelector("[data-lightbox]");
    if (!lb) return;
    const frame = lb.querySelector("[data-lightbox-frame]");
    const caption = lb.querySelector("[data-lightbox-caption]");
    let current = 0;

    function paint() {
      const g = GALLERY_ITEMS[current];
      const mediaHTML = g.image 
        ? `<img src="assets/${g.image}" alt="${g.label}" class="lightbox-image" style="width:100%; height:100%; object-fit:contain; display:block;">`
        : `<div class="placeholder-photo" data-tone="${current % 2 ? "charcoal" : "brown"}" style="aspect-ratio:4/3;">
            <div class="placeholder-photo__icon">${ICONS[g.icon]}</div>
            <span class="placeholder-photo__label">${g.label}</span>
          </div>`;
      frame.innerHTML = mediaHTML;
      caption.textContent = `${g.label} · ${g.cat}`;
    }
    function open(i) { current = i; paint(); lb.classList.add("is-open"); document.body.style.overflow = "hidden"; lb.querySelector(".lightbox__close").focus(); }
    function close() { lb.classList.remove("is-open"); document.body.style.overflow = ""; }
    function next() { current = (current + 1) % GALLERY_ITEMS.length; paint(); }
    function prev() { current = (current - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length; paint(); }

    document.addEventListener("click", (e) => {
      const trigger = e.target.closest("[data-lightbox-index]");
      if (trigger) open(Number(trigger.dataset.lightboxIndex));
    });
    lb.querySelector(".lightbox__close").addEventListener("click", close);
    lb.querySelector(".lightbox__backdrop").addEventListener("click", close);
    lb.querySelector(".lightbox__next").addEventListener("click", next);
    lb.querySelector(".lightbox__prev").addEventListener("click", prev);
    document.addEventListener("keydown", (e) => {
      if (!lb.classList.contains("is-open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    });

    // basic swipe
    let touchX = null;
    frame && frame.addEventListener("touchstart", (e) => { touchX = e.touches[0].clientX; }, { passive: true });
    frame && frame.addEventListener("touchend", (e) => {
      if (touchX === null) return;
      const dx = e.changedTouches[0].clientX - touchX;
      if (dx > 40) prev();
      if (dx < -40) next();
      touchX = null;
    }, { passive: true });
  }

  /* =========================================================
     INSTAGRAM PREVIEW (curated, editable list)
     ========================================================= */
  function renderInstagram() {
    const mount = document.querySelector("[data-instagram]");
    if (!mount) return;
    const tiles = GALLERY_ITEMS.slice(0, 6);
    mount.innerHTML = tiles.map((g) => `
      <div class="insta-tile">
        <a href="${MESHWI_CONFIG.social.instagram}" target="_blank" rel="noopener noreferrer" aria-label="View on Instagram">
          <div class="placeholder-photo" data-tone="brown" style="aspect-ratio:1/1;">
            <div class="placeholder-photo__icon">${ICONS[g.icon]}</div>
          </div>
        </a>
      </div>`).join("");
  }

  /* =========================================================
     RESERVATION FORM
     ========================================================= */
  function initReservationForm() {
    const form = document.querySelector("[data-reservation-form]");
    if (!form) return;
    const status = form.querySelector("[data-form-status]");
    const dateInput = form.querySelector("#res-date");
    if (dateInput) {
      const today = new Date().toISOString().split("T")[0];
      dateInput.setAttribute("min", today);
    }

    function setError(field, message) {
      const wrap = field.closest(".field");
      wrap.classList.toggle("has-error", Boolean(message));
      const err = wrap.querySelector(".field-error");
      if (err) err.textContent = message || "";
    }

    function validate(data) {
      let valid = true;
      const nameField = form.querySelector("#res-name");
      if (!data.name.trim()) { setError(nameField, "Please enter your name."); valid = false; }
      else setError(nameField, "");

      const mobileField = form.querySelector("#res-mobile");
      const mobileClean = data.mobile.replace(/\D/g, "");
      if (!/^[6-9]\d{9}$/.test(mobileClean)) { setError(mobileField, "Enter a valid 10-digit Indian mobile number."); valid = false; }
      else setError(mobileField, "");

      const dateField = form.querySelector("#res-date");
      if (!data.date) { setError(dateField, "Please choose a date."); valid = false; }
      else setError(dateField, "");

      const timeField = form.querySelector("#res-time");
      if (!data.time) { setError(timeField, "Please choose a time."); valid = false; }
      else setError(timeField, "");

      const guestsField = form.querySelector("#res-guests");
      if (!data.guests || Number(data.guests) < 1) { setError(guestsField, "Please enter number of guests."); valid = false; }
      else setError(guestsField, "");

      return valid;
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const data = Object.fromEntries(fd.entries());

      if (!validate(data)) {
        status.className = "form-status is-error";
        status.textContent = "Please fix the highlighted fields and try again.";
        return;
      }

      status.className = "form-status is-loading";
      status.textContent = "Sending your reservation request…";
      const submitBtn = form.querySelector("[type=submit]");
      submitBtn.disabled = true;

      // No backend available — hand off to WhatsApp with a prefilled, readable message.
      setTimeout(() => {
        try {
          const msg = MESHWI_CONFIG.reservation.whatsappMessageTemplate(data);
          const url = `${MESHWI_CONFIG.whatsapp.baseLink}?text=${msg}`;
          window.open(url, "_blank", "noopener,noreferrer");
          status.className = "form-status is-success";
          status.textContent = "Thank you! Your reservation request has been received. Our team will contact you to confirm availability.";
          form.reset();
        } catch (err) {
          status.className = "form-status is-error";
          status.textContent = "Something went wrong sending your request. Please call us directly to reserve.";
        } finally {
          submitBtn.disabled = false;
        }
      }, 600);
    });
  }

  /* ---------- Newsletter (front-end only demo, explicit consent required) ---------- */
  function initNewsletter() {
    const form = document.querySelector("[data-newsletter-form]");
    if (!form) return;
    const status = form.querySelector("[data-newsletter-status]");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const consent = form.querySelector("input[type=checkbox]");
      if (!consent.checked) {
        status.textContent = "Please confirm you'd like to receive updates before subscribing.";
        status.style.color = "#a8281c";
        return;
      }
      status.textContent = "Thanks for subscribing — we'll keep you posted on new dishes and offers.";
      status.style.color = "#2f6b3a";
      form.reset();
    });
  }

  /* ---------- Announcement close behavior ---------- */
  function initAnnouncement() {
    document.querySelectorAll(".announcement").forEach((bar) => {
      const closeBtn = bar.querySelector(".announcement__close");
      if (closeBtn) {
        closeBtn.addEventListener("click", () => {
          bar.style.display = "none";
        });
      }
    });
  }

  /* ---------- Init ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    hydrateConfig();
    initHeader();
    initMobileMenu();
    initOpenIndicator();
    initCopyAddress();
    initOrderLinks();
    renderHomeMenuPreview();
    renderFullMenu();
    renderSpecialityCards();
    renderGallery();
    renderInstagram();
    initReservationForm();
    initNewsletter();
    initAnnouncement();
  });
})();
