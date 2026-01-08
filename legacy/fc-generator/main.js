import html2canvas from "html2canvas";
import "./style.css";

/* === BACKGROUND IMAGES === */
const backgroundImages = {
  abstract: [
    "images/abstract/0add8ef1-86d6-47da-a9cd-4328f5f2d9ce.png",
    "images/abstract/0b1a281f-f326-4884-bc3d-c6760f85ab3b.png",
    "images/abstract/12a891dc-434a-40e7-957a-aa814e29b412.png",
    "images/abstract/2e6f255b-0159-4d79-a135-bd24e5d21e21.png",
    "images/abstract/2fcd9579-fdc6-43ec-80b2-f0ec24039fd1.png",
    "images/abstract/58361d2e-439d-4279-bdd1-1ce89e08d83a.png",
    "images/abstract/6ac75c58-be99-4db4-b793-461ce5d6ed98.png",
    "images/abstract/71d42ece-e5cc-4641-80de-c4c39787fbcd.png",
    "images/abstract/742b61b2-150e-4f3b-95d4-8eb377e049c8.png",
    "images/abstract/8caab1e6-ba31-4851-8a53-0ff8985a0538.png",
    "images/abstract/91102ceb-b506-4eb8-ade8-4e99a5815171.png",
    "images/abstract/916d265e-6740-4346-8545-40535bfcd868.png",
    "images/abstract/92fa6495-58b8-463a-91e4-5b02dfd79780.png",
    "images/abstract/9e58f243-d6e2-4dbc-93a4-21051b7a128c.png",
    "images/abstract/a0f8c6c6-b473-4d39-beab-94a31f796c33.png",
    "images/abstract/a3ff2975-9447-4fa7-951b-5960b30c283c.png",
    "images/abstract/af282d09-b4b2-4885-8825-8f9f39805d06.png",
    "images/abstract/b216d570-a621-475c-ae32-69576161ae4e.png",
    "images/abstract/ba44882f-30ab-4584-a220-626dcaddefa8.png",
    "images/abstract/bbab8a2e-a57a-44f3-bd88-9cb47d4c9d38.png",
    "images/abstract/c6c4330f-8d90-49aa-80a9-aa46f95405e5.png",
    "images/abstract/cb25f6a9-630c-4af4-8bfa-69561ec949a2.png",
    "images/abstract/cbbf7cba-d57f-499e-8484-c4925db8a0f6.png",
    "images/abstract/cf93013a-f09f-4f39-b2b9-915396edbc0c.png",
    "images/abstract/da62e6c1-10a1-49eb-8f8e-37ee1c312e50.png",
    "images/abstract/f17ebf2f-b773-41c8-ab5e-b73d4f394e09.png",
    "images/abstract/f8ba6798-2282-43b2-a878-9081b9035860.png",
  ],
  figure: [
    "images/figure/08746618-c660-47d1-b737-b808d676247d.png",
    "images/figure/255550cc-a5f6-43ab-ab38-32c2c9e08671.png",
    "images/figure/2e55f5e4-431e-4f72-bd2a-c24b9b229250.png",
    "images/figure/3318e1a2-c28b-47ea-97e7-cd87d5cb2b84.png",
    "images/figure/379767b6-51ba-4aa3-b9a4-95ff1176125c.png",
    "images/figure/3fe95287-b3e2-4ec3-84a2-5777e3ca7c07.png",
    "images/figure/4dee5672-9451-482d-bc7e-942bc2e87ccc.png",
    "images/figure/4fb4700a-048e-4205-935f-95b93ce00ce8.png",
    "images/figure/66a0d12d-6645-4796-853b-64544e0175fd.png",
    "images/figure/6b38ac4e-0366-4847-915c-0e44ed65c8aa.png",
    "images/figure/7017aa9d-f757-47da-be98-8d16a6a2ccbb.png",
    "images/figure/8350f35a-7ab3-4e88-a053-1033638dd08c.png",
    "images/figure/852baa3b-e238-4734-9371-aaba73e13f9b.png",
    "images/figure/89b10d38-1c97-45c7-b07c-718bd7cb80f0.png",
    "images/figure/a6b54e9c-0adb-40d6-92b7-73cc9d37cd1d.png",
    "images/figure/b196a1ef-f42e-4624-aa64-376ceb2b1d40.png",
    "images/figure/b3229094-9b3b-4a4c-99f0-79f3131daf5c.png",
    "images/figure/b8bd7e23-de48-4a15-9db8-6bd1867bc8b1.png",
    "images/figure/cd47ebd8-0a5b-4d05-b6a6-d2db36b6253e.png",
    "images/figure/cd8cfa77-ea17-4305-a886-d529a94e8a90.png",
    "images/figure/d479e3d3-8af3-49fe-9ff9-9036b0e61434.png",
    "images/figure/d780af54-4c70-4591-a25f-37951fbed169.png",
    "images/figure/d848105b-a8f9-47ec-8bdb-5331c0d2035e.png",
    "images/figure/f20bf92a-365d-4e0b-b65d-511426116c64.png",
    "images/figure/f3c98c55-d15b-4f34-88f3-c50b2c4621f9.png",
  ],
  material: [
    "images/material/0f081d1e-814b-4819-bf8d-b9e513fdceee.png",
    "images/material/10e2cdb8-8ada-4728-b6d9-d451d8b9a584.png",
    "images/material/2922a210-03ce-423e-80b6-b54bf278469e.png",
    "images/material/4f93c356-7269-429a-a89d-76671cf7aa3c.png",
    "images/material/546201a6-03a0-4de3-bf1f-5f62298fe7f4.png",
    "images/material/6d18c4bb-2811-49a0-b74a-caddf8196cab.png",
    "images/material/70abc79e-3d83-4a53-9af3-e4fd21a9ac99.png",
    "images/material/74b4dcbc-f4a6-471c-b3cc-14194e377168.png",
    "images/material/89d5c1fe-dc53-4e0a-865b-6cd51f1a5870.png",
    "images/material/91080d71-0bbb-4054-8fab-4c84f3f79142.png",
    "images/material/9f587f7c-fb75-4489-b415-bf50222f23e1.png",
    "images/material/9f772bbf-07e2-43f6-a39b-ed86963d3ffe.png",
    "images/material/a3230637-4402-4c2a-a7c0-d024687a2736.png",
    "images/material/af5acef5-3473-4768-91be-77ebe0813294.png",
    "images/material/c11196e4-e228-477b-bcaf-1a6e56bd361b.png",
    "images/material/c52732f8-d2f0-4753-b04f-69c231526627.png",
    "images/material/d58f26a0-e23a-438a-b078-d906242dab2b.png",
    "images/material/d9f07609-b325-43b0-9472-deefbbfc84ac.png",
    "images/material/faeb1b15-8d79-4aee-880b-51642079574c.png",
  ],
};

/* === FONT OPTIONS === */
const fontArray = [
  { name: "Playfair Display", value: "'Playfair Display', serif" },
  { name: "Cormorant Garamond", value: "'Cormorant Garamond', serif" },
  { name: "Bodoni Moda", value: "'Bodoni Moda', serif" },

  { name: "Bebas Neue", value: "'Bebas Neue', sans-serif" },

  { name: "Space Grotesk", value: "'Space Grotesk', sans-serif" },
  { name: "Oswald", value: "'Oswald', sans-serif" },
  { name: "Anton", value: "'Anton', sans-serif" },
  { name: "Archivo Black", value: "'Archivo Black', sans-serif" },
  { name: "Abril Fatface", value: "'Abril Fatface', serif" },
  { name: "Righteous", value: "'Righteous', sans-serif" },

  { name: "Teko", value: "'Teko', sans-serif" },
  { name: "Fjalla One", value: "'Fjalla One', sans-serif" },
  { name: "Montserrat", value: "'Montserrat', sans-serif" },
  { name: "Raleway", value: "'Raleway', sans-serif" },
  { name: "Outfit", value: "'Outfit', sans-serif" },
  { name: "Work Sans", value: "'Work Sans', sans-serif" },
  { name: "Josefin Sans", value: "'Josefin Sans', sans-serif" },
  { name: "Libre Franklin", value: "'Libre Franklin', sans-serif" },
  { name: "Poppins", value: "'Poppins', sans-serif" },
  { name: "Questrial", value: "'Questrial', sans-serif" },
  { name: "Karla", value: "'Karla', sans-serif" },
  { name: "Barlow", value: "'Barlow', sans-serif" },
  { name: "DM Sans", value: "'DM Sans', sans-serif" },
  { name: "Rubik", value: "'Rubik', sans-serif" },
  { name: "Inter", value: "'Inter', sans-serif" },
  { name: "Lato", value: "'Lato', sans-serif" },
  { name: "Roboto", value: "'Roboto', sans-serif" },
  { name: "Source Sans Pro", value: "'Source Sans Pro', sans-serif" },
  { name: "Nunito Sans", value: "'Nunito Sans', sans-serif" },
];
const fontArrayConsiese = fontArray.map((font) => font.name);

const fontOptions = {
  header: fontArray,
  body: fontArray,
  misc: fontArray,
};

// Track loaded fonts
// const loadedFonts = new Set(fontArrayConsiese);

const loadedFonts = new Set([]);
fontArrayConsiese.forEach((fontName) => {
  loadGoogleFont(fontName);
});

function loadGoogleFont(fontName) {
  if (loadedFonts.has(fontName)) return;
  loadedFonts.add(fontName);
  const link = document.createElement("link");
  link.href = `https://fonts.googleapis.com/css2?family=${fontName.replace(/ /g, "+")}:wght@400;500;600;700&display=swap`;
  link.rel = "stylesheet";
  document.head.appendChild(link);
  setTimeout(function () {
    updatePreview();
  }, 500);
}

/* === STATE === */
const state = {
  format: "story",
  layout: "left",
  color: "crimson",
  blur: 32,
  fontScaleHeader: -2,
  fontScaleBody: 2,
  fontScaleMisc: 4,
  fontHeader: "'Cormorant Garamond', serif",
  fontBody: "'Space Grotesk', sans-serif",
  fontMisc: "'Questrial', sans-serif",
  image: backgroundImages.abstract[0],
  logo: "fclogo/3.png",
  header: "Dress|Code",
  body: "Obowiązuje strój fetyszowy: latex, skóra, vinyl, bielizna, uprząż. Zakazane: jeansy, t-shirty, odzież codzienna.",
  highlight: "latex",
  date: "",
  cta: "Brak Wyjatkow",
};

/*
loadGoogleFont(state.fontHeader);
loadGoogleFont(state.fontBody);
loadGoogleFont(state.fontMisc);
*/

/* === COLOR DEFINITIONS === */
const colors = {
  crimson: {
    accent: "#DC143C",
    accent15: "rgba(220,20,60,0.15)",
    accent25: "rgba(220,20,60,0.25)",
    accent30: "rgba(220,20,60,0.30)",
    accent40: "rgba(220,20,60,0.40)",
    accent50: "rgba(220,20,60,0.50)",
    glow: "rgba(220,20,60,0.2)",
  },
  magenta: {
    accent: "#FF0080",
    accent15: "rgba(255,0,128,0.15)",
    accent25: "rgba(255,0,128,0.25)",
    accent30: "rgba(255,0,128,0.30)",
    accent40: "rgba(255,0,128,0.40)",
    accent50: "rgba(255,0,128,0.50)",
    glow: "rgba(255,0,128,0.2)",
  },
  blue: {
    accent: "#61e5ff",
    accent15: "rgba(0,102,255,0.15)",
    accent25: "rgba(0,102,255,0.25)",
    accent30: "rgba(0,102,255,0.30)",
    accent40: "rgba(0,102,255,0.40)",
    accent50: "rgba(0,102,255,0.50)",
    glow: "rgba(0,102,255,0.2)",
  },
  gold: {
    accent: "#FFD700",
    accent15: "rgba(255,215,0,0.12)",
    accent25: "rgba(255,215,0,0.20)",
    accent30: "rgba(255,215,0,0.25)",
    accent40: "rgba(255,215,0,0.35)",
    accent50: "rgba(255,215,0,0.45)",
    glow: "rgba(255,215,0,0.15)",
  },
  mono: {
    accent: "#FFFFFF",
    accent15: "rgba(255,255,255,0.08)",
    accent25: "rgba(255,255,255,0.15)",
    accent30: "rgba(255,255,255,0.20)",
    accent40: "rgba(255,255,255,0.30)",
    accent50: "rgba(255,255,255,0.40)",
    glow: "rgba(255,255,255,0.1)",
  },
};

/* === PRESETS === */
const presets = {
  dresscode: {
    header: "Dress|Code",
    body: "Obowiązuje strój fetyszowy: latex, skóra, vinyl, bielizna, uprząż. Zakazane: jeansy, t-shirty, odzież codzienna.",
    highlight: "latex",
    date: "",
    cta: "Brak Wyjątków",
  },
  event: {
    header: "Event|Name",
    body: "Opis wydarzenia. Wpisz tutaj szczegóły dotyczące imprezy i jej charakteru.",
    highlight: "wydarzenia",
    date: "15.01.2025 | 22:00",
    cta: "Tickets In Bio",
  },
  hiring: {
    header: "Hiring",
    body: "Szukamy osób do naszego zespołu. Wymagana dyspozycyjność w weekendy i doświadczenie w branży eventowej.",
    highlight: "zespołu",
    date: "",
    cta: "kontakt@fetishchateau.com",
  },
  announcement: {
    header: "Wazna|Informacja",
    body: "Treść ogłoszenia. Wpisz tutaj ważne informacje dla gości.",
    highlight: "Ważna",
    date: "",
    cta: "Więcej Informacji Wkrótce",
  },
  clear: {
    header: "",
    body: "",
    highlight: "",
    date: "",
    cta: "",
  },
};

/* === DOM ELEMENTS === */
const previewPoster = document.getElementById("previewPoster");
const previewContainer = document.getElementById("previewContainer");
const exportPoster = document.getElementById("exportPoster");
const downloadBtn = document.getElementById("downloadBtn");

/* === BLUR HELPER FOR EXPORT === */
function createBlurredBackground(
  imageSrc,
  width,
  height,
  blurAmount = 8,
  layout = "left",
  format = "story",
  actualPanelElement = null,
) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";

    img.onload = () => {
      // Calculate glass panel dimensions based on layout
      let panelWidth, panelHeight, panelX, panelY;

      // For split layout, use actual rendered dimensions if available
      if (layout === "split" && actualPanelElement) {
        const rect = actualPanelElement.getBoundingClientRect();
        panelWidth = width; // Always full width
        panelHeight = Math.max(rect.height, height * 0.5); // Use actual height or minimum 50%
        panelX = 0;

        if (format === "feed") {
          panelHeight = height; // Full height for feed
          panelY = 0;
        } else {
          // For story, align to bottom
          panelY = height - panelHeight;
        }
      } else if (layout === "splitTop" && actualPanelElement) {
        const rect = actualPanelElement.getBoundingClientRect();
        panelWidth = width; // Always full width
        panelHeight = Math.max(rect.height, height * 0.5); // Use actual height or minimum 50%
        panelX = 0;

        if (format === "feed") {
          panelHeight = height; // Full height for feed
          panelY = 0;
        } else {
          // For story, align to top
          panelY = 0;
        }
      } else if (layout === "left") {
        panelWidth = width * 0.75; // 75% width
        panelHeight = height;
        panelX = 0;
        panelY = 0;
      } else if (layout === "right") {
        panelWidth = width * 0.75; // 75% width
        panelHeight = height;
        panelX = width * 0.25; // Start from 25% (right side)
        panelY = 0;
      } else if (layout === "center") {
        panelWidth = width * 0.85; // 85% width (88% for feed)
        if (format === "feed") {
          panelWidth = width * 0.88;
        }
        panelHeight = height * 0.6; // min-height 60% (70% for feed)
        if (format === "feed") {
          panelHeight = height * 0.7;
        }
        panelX = (width - panelWidth) / 2;
        panelY = (height - panelHeight) / 2;
      } else if (layout === "split") {
        // Fallback if no element provided
        if (format === "feed") {
          panelWidth = width; // 100% width
          panelHeight = height; // Full height
          panelX = 0;
          panelY = 0;
        } else {
          panelWidth = width; // 100% width
          panelHeight = height * 0.5; // min-height 50%
          panelX = 0;
          panelY = height - panelHeight; // bottom aligned
        }
      } else if (layout === "splitTop") {
        // Fallback if no element provided
        if (format === "feed") {
          panelWidth = width; // 100% width
          panelHeight = height; // Full height
          panelX = 0;
          panelY = 0;
        } else {
          panelWidth = width; // 100% width
          panelHeight = height * 0.5; // min-height 50%
          panelX = 0;
          panelY = 0; // top aligned
        }
      } else {
        // Default/none - use full canvas
        panelWidth = width;
        panelHeight = height;
        panelX = 0;
        panelY = 0;
      }

      // Ensure minimum dimensions to prevent zero-size canvas
      panelWidth = Math.max(panelWidth, 1);
      panelHeight = Math.max(panelHeight, 1);

      // Create canvas matching panel size
      const canvas = document.createElement("canvas");
      canvas.width = panelWidth;
      canvas.height = panelHeight;
      const ctx = canvas.getContext("2d");

      // Apply blur filter
      ctx.filter = `blur(${blurAmount}px)`;

      // Scale image to cover the entire poster
      const scale = Math.max(width / img.width, height / img.height) * 1.1;
      const scaledWidth = img.width * scale;
      const scaledHeight = img.height * scale;

      // Center the scaled image on the full poster
      const imgOffsetX = (width - scaledWidth) / 2;
      const imgOffsetY = (height - scaledHeight) / 2;

      // Calculate the position to draw the image so that the panel area shows the correct portion
      // We need to shift the image on our canvas by the negative of the panel position
      const drawX = imgOffsetX - panelX;
      const drawY = imgOffsetY - panelY;

      // Draw the full scaled image, positioned so the panel area is visible
      ctx.drawImage(
        img,
        drawX,
        drawY, // Position on canvas
        scaledWidth,
        scaledHeight, // Size
      );

      resolve(canvas.toDataURL("image/png"));
    };

    img.onerror = () => {
      // If blur fails, return original image
      resolve(imageSrc);
    };

    img.src = imageSrc;
  });
}

/* === RENDER POSTER === */
function renderPoster(container, isExport = false) {
  const c = colors[state.color];
  const scale = isExport
    ? ""
    : state.format === "story"
      ? "transform: scale(0.35); transform-origin: top left;"
      : "transform: scale(0.5); transform-origin: top left;";

  const headerText = state.header
    .split("|")
    .map((line) => line.trim())
    .join("<br>");

  // Highlight word in body
  let bodyHtml = state.body
    .split("|")
    .map((line) => line.trim())
    .join("<br>");

  if (state.highlight && state.highlight.trim()) {
    const regex = new RegExp(`(${state.highlight})`, "gi");
    bodyHtml = bodyHtml.replace(regex, `<span class="highlight">$1</span>`);
  }

  /* Determine glow position based on layout */
  let glowClass =
    state.layout === "left"
      ? "right"
      : state.layout === "right"
        ? "left"
        : "center";

  /* Accent line position */
  let accentLineHtml = "";
  if (state.layout !== "center") {
    accentLineHtml = `<div class="accent-line ${state.layout}"></div>`;
  }

  const html = `
        <div class="poster ${state.format}" style="
          --accent-color: ${c.accent};
          --accent-15: ${c.accent15};
          --accent-25: ${c.accent25};
          --accent-30: ${c.accent30};
          --accent-40: ${c.accent40};
          --accent-50: ${c.accent50};
          --glow-color: ${c.glow};
          --blur-amount: ${state.blur}px;
          --panel-border-width: ${state.blur === 0 ? "0" : "2px"};
          --font-scale-header: ${state.fontScaleHeader};
          --font-scale-body: ${state.fontScaleBody};
          --font-scale-misc: ${state.fontScaleMisc};
          --font-header: ${state.fontHeader};
          --font-body: ${state.fontBody};
          --font-misc: ${state.fontMisc};
          ${scale}
        ">
          <div class="poster-bg" style="background-image: url('${state.image}')"></div>
          <div class="ambient-glow ${glowClass}"></div>
          <div class="glass-panel ${state.layout}">
            <div class="glass-panel-bg"></div>
            <div class="glass-panel-content">
              ${accentLineHtml}
              ${state.logo != "none" ? `<div class="poster-logo"><img src="${state.logo}" alt="Logo" /></div>` : ""}
              ${state.header ? `<div class="poster-header">${headerText}</div>` : ""}
              <div class="poster-divider"></div>
              ${state.body ? `<div class="poster-body">${bodyHtml}</div>` : ""}
              ${state.date ? `<div class="poster-date">${state.date}</div>` : ""}
              ${state.date || state.cta ? '<div class="footer-divider"></div>' : ""}
              ${state.cta ? `<div class="poster-cta">${state.cta}</div>` : ""}
            </div>
          </div>
        </div>
      `;

  container.innerHTML = html;
}

// === UPDATE PREVIEW ===
function updatePreview() {
  // Update container size
  previewContainer.className = `preview-container ${state.format === "story" ? "story-size" : "feed-size"}`;
  renderPoster(previewContainer);
}

// === EVENT LISTENERS ===

// Format toggle
document.querySelectorAll("[data-format]").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll("[data-format]")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    state.format = btn.dataset.format;
    updatePreview();
  });
});

// Layout toggle
document.querySelectorAll("[data-layout]").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll("[data-layout]")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    state.layout = btn.dataset.layout;
    updatePreview();
  });
});

// Color toggle
document.querySelectorAll("[data-color]").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll("[data-color]")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    state.color = btn.dataset.color;
    updatePreview();
  });
});

// Blur toggle
document.querySelectorAll("[data-blur]").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll("[data-blur]")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    state.blur = parseInt(btn.dataset.blur);
    updatePreview();
  });
});

// === BACKGROUND GALLERY RENDERING ===
let currentBgCategory = "abstract";
const bgGalleryContainer = document.getElementById("bgGalleryContainer");

function renderBgGallery(category) {
  const images = backgroundImages[category] || [];
  const galleryHtml = `
                    <div class="image-gallery">
                        ${images
                          .map(
                            (img, index) => `
                            <div
                                class="image-thumb ${img === state.image ? "active" : ""}"
                                data-image="${img}"
                                style="background-image: url('${img}');"
                            ></div>
                        `,
                          )
                          .join("")}
                    </div>
                `;
  bgGalleryContainer.innerHTML = galleryHtml;

  // Attach click events to new thumbs
  bgGalleryContainer.querySelectorAll(".image-thumb").forEach((thumb) => {
    thumb.addEventListener("click", () => {
      document
        .querySelectorAll(".image-thumb")
        .forEach((t) => t.classList.remove("active"));
      thumb.classList.add("active");
      state.image = thumb.dataset.image;
      updatePreview();
    });
  });
}

// Background subcategory switching
document.querySelectorAll("[data-bg-category]").forEach((btn) => {
  btn.addEventListener("click", () => {
    // Update active tab
    document
      .querySelectorAll("[data-bg-category]")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // Render gallery for selected category
    currentBgCategory = btn.dataset.bgCategory;
    renderBgGallery(currentBgCategory);
  });
});

// Initial gallery render
renderBgGallery(currentBgCategory);

// Image upload
document.getElementById("imageUpload").addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      state.image = event.target.result;
      document
        .querySelectorAll(".image-thumb")
        .forEach((t) => t.classList.remove("active"));
      updatePreview();
    };
    reader.readAsDataURL(file);
  }
});

// Presets
document.querySelectorAll("[data-preset]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const preset = presets[btn.dataset.preset];
    if (preset) {
      Object.keys(preset).forEach((key) => {
        state[key] = preset[key];
        const input = document.getElementById(key);
        if (input) input.value = preset[key];
      });
      updatePreview();
    }
  });
});

// Text inputs
["header", "body", "highlight", "date", "cta"].forEach((id) => {
  const input = document.getElementById(id);
  input.addEventListener("input", () => {
    state[id] = input.value;
    updatePreview();
  });
});

// Logo selection
document.querySelectorAll(".logo-thumb").forEach((thumb) => {
  thumb.addEventListener("click", () => {
    document
      .querySelectorAll(".logo-thumb")
      .forEach((t) => t.classList.remove("active"));
    thumb.classList.add("active");
    state.logo = thumb.dataset.logo;
    updatePreview();
  });
});

// Font scale controls
const fontScaleHeaderInput = document.getElementById("fontScaleHeader");
const fontScaleBodyInput = document.getElementById("fontScaleBody");
const fontScaleMiscInput = document.getElementById("fontScaleMisc");

fontScaleHeaderInput.value = state.fontScaleHeader;
fontScaleBodyInput.value = state.fontScaleBody;
fontScaleMiscInput.value = state.fontScaleMisc;

// Header scale
fontScaleHeaderInput.addEventListener("input", () => {
  state.fontScaleHeader = parseInt(fontScaleHeaderInput.value) || 0;
  updatePreview();
});

// Body scale
fontScaleBodyInput.addEventListener("input", () => {
  state.fontScaleBody = parseInt(fontScaleBodyInput.value) || 0;
  updatePreview();
});

// Misc scale
fontScaleMiscInput.addEventListener("input", () => {
  state.fontScaleMisc = parseInt(fontScaleMiscInput.value) || 0;
  updatePreview();
});

// Scale buttons
document.querySelectorAll(".scale-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.scaleTarget;
    const isIncrement = btn.textContent.trim() === "+";
    const increment = isIncrement ? 2 : -2;

    if (target === "header") {
      state.fontScaleHeader = Math.max(
        -50,
        Math.min(50, state.fontScaleHeader + increment),
      );
      fontScaleHeaderInput.value = state.fontScaleHeader;
    } else if (target === "body") {
      state.fontScaleBody = Math.max(
        -50,
        Math.min(50, state.fontScaleBody + increment),
      );
      fontScaleBodyInput.value = state.fontScaleBody;
    } else if (target === "misc") {
      state.fontScaleMisc = Math.max(
        -50,
        Math.min(50, state.fontScaleMisc + increment),
      );
      fontScaleMiscInput.value = state.fontScaleMisc;
    }

    updatePreview();
  });
});

// Font selectors
const fontHeaderSelect = document.getElementById("fontHeader");
const fontBodySelect = document.getElementById("fontBody");
const fontMiscSelect = document.getElementById("fontMisc");

// Populate font selects
fontOptions.header.forEach((font) => {
  const option = document.createElement("option");
  option.value = font.value;
  option.textContent = font.name;
  option.style.fontFamily = font.value;
  if (font.value === state.fontHeader) option.selected = true;
  fontHeaderSelect.appendChild(option);
});

// Add custom font option for header
const customHeaderOption = document.createElement("option");
customHeaderOption.value = "custom";
customHeaderOption.textContent = "Wgraj własny z Google Fonts...";
fontHeaderSelect.appendChild(customHeaderOption);

fontOptions.body.forEach((font) => {
  const option = document.createElement("option");
  option.value = font.value;
  option.textContent = font.name;
  option.style.fontFamily = font.value;
  if (font.value === state.fontBody) option.selected = true;
  fontBodySelect.appendChild(option);
});

// Add custom font option for body
const customBodyOption = document.createElement("option");
customBodyOption.value = "custom";
customBodyOption.textContent = "Wgraj własny z Google Fonts...";
fontBodySelect.appendChild(customBodyOption);

fontOptions.misc.forEach((font) => {
  const option = document.createElement("option");
  option.value = font.value;
  option.textContent = font.name;
  option.style.fontFamily = font.value;
  if (font.value === state.fontMisc) option.selected = true;
  fontMiscSelect.appendChild(option);
});

// Add custom font option for misc
const customMiscOption = document.createElement("option");
customMiscOption.value = "custom";
customMiscOption.textContent = "Wgraj własny z Google Fonts...";
fontMiscSelect.appendChild(customMiscOption);

fontHeaderSelect.addEventListener("change", () => {
  if (fontHeaderSelect.value === "custom") {
    const customFont = prompt(
      "Wprowadź nazwę czcionki z Google Fonts (np. 'Playfair Display'):",
    );
    if (customFont && customFont.trim()) {
      const fontFamily = `'${customFont.trim()}', sans-serif`;
      loadGoogleFont(customFont.trim());
      state.fontHeader = fontFamily;

      // Add to options if not already there
      const existingOption = Array.from(fontHeaderSelect.options).find(
        (opt) => opt.value === fontFamily,
      );
      if (!existingOption) {
        const newOption = document.createElement("option");
        newOption.value = fontFamily;
        newOption.textContent = customFont.trim();
        newOption.style.fontFamily = fontFamily;
        fontHeaderSelect.insertBefore(newOption, fontHeaderSelect.lastChild);
      }
      fontHeaderSelect.value = fontFamily;
      updatePreview();
    } else {
      // Reset to previous selection
      fontHeaderSelect.value = state.fontHeader;
    }
  } else {
    const fontName =
      fontHeaderSelect.options[fontHeaderSelect.selectedIndex].textContent;
    loadGoogleFont(fontName);
    state.fontHeader = fontHeaderSelect.value;
    updatePreview();
  }
});

fontBodySelect.addEventListener("change", () => {
  if (fontBodySelect.value === "custom") {
    const customFont = prompt(
      "Wprowadź nazwę czcionki z Google Fonts (np. 'Playfair Display'):",
    );
    if (customFont && customFont.trim()) {
      const fontFamily = `'${customFont.trim()}', sans-serif`;
      loadGoogleFont(customFont.trim());
      state.fontBody = fontFamily;

      // Add to options if not already there
      const existingOption = Array.from(fontBodySelect.options).find(
        (opt) => opt.value === fontFamily,
      );
      if (!existingOption) {
        const newOption = document.createElement("option");
        newOption.value = fontFamily;
        newOption.textContent = customFont.trim();
        newOption.style.fontFamily = fontFamily;
        fontBodySelect.insertBefore(newOption, fontBodySelect.lastChild);
      }
      fontBodySelect.value = fontFamily;
      updatePreview();
    } else {
      // Reset to previous selection
      fontBodySelect.value = state.fontBody;
    }
  } else {
    const fontName =
      fontBodySelect.options[fontBodySelect.selectedIndex].textContent;
    loadGoogleFont(fontName);
    state.fontBody = fontBodySelect.value;
    updatePreview();
  }
});

fontMiscSelect.addEventListener("change", () => {
  if (fontMiscSelect.value === "custom") {
    const customFont = prompt(
      "Wprowadź nazwę czcionki z Google Fonts (np. 'Playfair Display'):",
    );
    if (customFont && customFont.trim()) {
      const fontFamily = `'${customFont.trim()}', sans-serif`;
      loadGoogleFont(customFont.trim());
      state.fontMisc = fontFamily;

      // Add to options if not already there
      const existingOption = Array.from(fontMiscSelect.options).find(
        (opt) => opt.value === fontFamily,
      );
      if (!existingOption) {
        const newOption = document.createElement("option");
        newOption.value = fontFamily;
        newOption.textContent = customFont.trim();
        newOption.style.fontFamily = fontFamily;
        fontMiscSelect.insertBefore(newOption, fontMiscSelect.lastChild);
      }
      fontMiscSelect.value = fontFamily;
      updatePreview();
    } else {
      // Reset to previous selection
      fontMiscSelect.value = state.fontMisc;
    }
  } else {
    const fontName =
      fontMiscSelect.options[fontMiscSelect.selectedIndex].textContent;
    loadGoogleFont(fontName);
    state.fontMisc = fontMiscSelect.value;
    updatePreview();
  }
});

// Download
downloadBtn.addEventListener("click", async () => {
  downloadBtn.classList.add("loading");
  downloadBtn.textContent = "Generowanie...";
  renderPoster(exportPoster, true);
  const posterEl = exportPoster.querySelector(".poster");

  await new Promise((resolve) => setTimeout(resolve, 200));

  try {
    const width = state.format === "story" ? 1080 : 1080;
    const height = state.format === "story" ? 1920 : 1080;

    // Get the actual glass panel element for accurate dimensions
    const glassPanel = posterEl.querySelector(".glass-panel");

    // Pre-render blurred background for the glass panel area
    const blurredBgDataUrl = await createBlurredBackground(
      state.image,
      width,
      height,
      state.blur,
      state.layout,
      state.format,
      glassPanel,
    );

    // Wait for images to load
    await new Promise((resolve) => setTimeout(resolve, 300));

    const glassPanelBg = posterEl.querySelector(".glass-panel-bg");

    // Apply pre-blurred background to glass panel for export
    if (glassPanelBg && state.blur) {
      glassPanelBg.style.backgroundImage = `url('${blurredBgDataUrl}')`;
      glassPanelBg.style.backgroundSize = "100% 100%";
      glassPanelBg.style.backgroundPosition = "0 0";
      glassPanelBg.style.backgroundRepeat = "no-repeat";

      // Remove backdrop-filter for export (we're using pre-blurred image)
      glassPanelBg.style.backdropFilter = "none";
      glassPanelBg.style.webkitBackdropFilter = "none";
    }

    // Wait a bit for the blurred background to render
    await new Promise((resolve) => setTimeout(resolve, 500));

    const cfgHTMLCANVAS = {
      width: width,
      height: height,
      scale: 1,
      useCORS: true,
      allowTaint: true,
      backgroundColor: "#000000",
    };
    const canvas = await html2canvas(posterEl, cfgHTMLCANVAS);

    // Download
    const link = document.createElement("a");
    const colorName = state.color.toUpperCase();
    const formatName = state.format.toUpperCase();
    link.download = `FC_${colorName}_${formatName}_${Date.now()}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  } catch (err) {
    console.error("Export error:", err, posterEl);
    alert("Eksport nie powiodl sie. Sprobuj ponownie.");
  }

  downloadBtn.classList.remove("loading");
  downloadBtn.textContent = "Pobierz Posta";
});

// Initial render
updatePreview();
