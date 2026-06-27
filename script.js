/* =========================================================
   MAXIMILLIAN MIKHAEL — PORTFOLIO LOGIC
   Edit bagian DATA di bawah untuk mengganti isi konten.
========================================================= */

/* ---------------------------------------------------------
   1. DATA — ganti sesuai kebutuhanmu
--------------------------------------------------------- */

const SKILLS = [
  {
    name: "Game Development",
    percent: 70,
    icon: `<svg viewBox="0 0 24 24" fill="none"><path d="M7 9h2m-1-1v2m6-1h.01M17 9h.01M6 14h12a3 3 0 0 0 3-3V9a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2a3 3 0 0 0 3 3Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 14l-1.2 5.4a1.5 1.5 0 0 0 2.6 1.3L8 18h8l1.6 2.7a1.5 1.5 0 0 0 2.6-1.3L19 14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`
  },
  {
    name: "Web Development",
    percent: 65,
    icon: `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="4.5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M3 8.5h18" stroke="currentColor" stroke-width="1.6"/><path d="M6.3 6.5h.01M8.6 6.5h.01" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`
  },
  {
    name: "Audio Production",
    percent: 55,
    icon: `<svg viewBox="0 0 24 24" fill="none"><path d="M9 18V6l9-2v12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><circle cx="6" cy="18" r="3" stroke="currentColor" stroke-width="1.6"/><circle cx="15" cy="16" r="3" stroke="currentColor" stroke-width="1.6"/></svg>`
  },
  {
    name: "UI / UX Design",
    percent: 50,
    icon: `<svg viewBox="0 0 24 24" fill="none"><path d="M4 4h7v7H4V4Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M13 4h7v7h-7V4Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M4 13h7v7H4v-7Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="16.5" cy="16.5" r="3.5" stroke="currentColor" stroke-width="1.6"/></svg>`
  },
  {
    name: "Version Control (Git)",
    percent: 60,
    icon: `<svg viewBox="0 0 24 24" fill="none"><circle cx="6" cy="6" r="2.2" stroke="currentColor" stroke-width="1.6"/><circle cx="6" cy="18" r="2.2" stroke="currentColor" stroke-width="1.6"/><circle cx="17" cy="12" r="2.2" stroke="currentColor" stroke-width="1.6"/><path d="M6 8.2V15.8" stroke="currentColor" stroke-width="1.6"/><path d="M8 6.8c4.5 0 5 1.7 7 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`
  },
  {
    name: "Problem Solving",
    percent: 75,
    icon: `<svg viewBox="0 0 24 24" fill="none"><path d="M9 18h6M10 21h4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M12 3a6 6 0 0 0-3.6 10.8c.4.3.6.8.6 1.3V16h6v-.9c0-.5.2-1 .6-1.3A6 6 0 0 0 12 3Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>`
  }
];

const PROJECTS = [
  {
    title: "Keturon",
    subtitle: "Project Akhir SMK",
    type: "game",
    typeLabel: "Game",
    mode: "collab",
    image: "assets/images/project-submitted.png",
    link: "https://github.com/username/submitted",
    desc: "Proyek game pendek yang dikembangkan secara kolaboratif bersama Tim Tugas Akhir. Di sini, saya bertanggung jawab penuh atas implementasi logika program (programming) dan seluruh produksi audio."
  }
  // ,
  // {
  //   title: "Portal Sekolah Digital",
  //   type: "web",
  //   typeLabel: "Web",
  //   mode: "collab",
  //   image: "assets/images/project-portal-sekolah.jpg",
  //   link: "https://github.com/username/portal-sekolah",
  //   desc: "Contoh deskripsi: website informasi sekolah dengan sistem pengumuman dan galeri kegiatan, dikerjakan bersama 2 rekan tim."
  // },
  // {
  //   title: "Ambient Loop Pack",
  //   type: "audio",
  //   typeLabel: "Audio",
  //   mode: "solo",
  //   image: "assets/images/project-ambient-loop.jpg",
  //   link: "https://soundcloud.com/username/sets/ambient-loop-pack",
  //   desc: "Contoh deskripsi: kumpulan musik latar ambient pendek untuk kebutuhan game indie, dibuat sebagai latihan sound design."
  // },
  // {
  //   title: "Tugas Akhir RPL",
  //   type: "web",
  //   typeLabel: "Web",
  //   mode: "collab",
  //   image: "assets/images/project-tugas-akhir.jpg",
  //   link: "https://github.com/username/tugas-akhir-rpl",
  //   desc: "Contoh deskripsi: aplikasi manajemen data sederhana sebagai proyek akhir kelulusan SMK, dikerjakan berkelompok."
  // }
];

/* Sertifikat — letakkan file gambar di assets/images/, lalu isi data di bawah.
   "issuer" = lembaga/penyelenggara, "year" = tahun didapat. Field "credentialUrl"
   bersifat opsional: kalau diisi, akan muncul tombol "Verifikasi" di lightbox.
   "images" adalah ARRAY — isi 1 gambar saja kalau cuma satu, atau lebih dari 1
   kalau mau bisa digeser kiri/kanan di lightbox (misal halaman depan & belakang). */
const CERTIFICATES = [
  {
    title: "Sertifikat Fullstack Web Developer",
    issuer: "Dicoding X DBS Foundation 2026",
    year: "2026",
    images: ["assets/images/Codingcamp20261.png", "assets/images/Codingcamp20262.png"],
    credentialUrl: ""
  },
  {
    title: "Sertifikat ITCC2023",
    issuer: "Himpunan Mahasiswa Teknologi Informasi",
    year: "2023",
    images: ["assets/images/ITCC2023.jpg"],
    credentialUrl: ""
  },
  {
    title: "Sertifikat Codefavour 5.0",
    issuer: "Stempeddia & Kodekiddo",
    year: "2024",
    images: ["assets/images/Codefavour.jpg"],
    credentialUrl: ""
  },
  {
    title: "Sertifikat Gecofest2023",
    issuer: "Unika Soegijapranata",
    year: "2026",
    images: ["assets/images/Gecofest2023.jpeg"],
    credentialUrl: ""
  },
];

const SOCIALS = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/maximillianmikhael07",
    icon: `<svg viewBox="0 0 24 24" fill="none"><rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="12" r="3.7" stroke="currentColor" stroke-width="1.6"/><circle cx="17" cy="7" r="1" fill="currentColor"/></svg>`
  },
  {
    name: "GitHub",
    url: "https://github.com/Elstarlight",
    icon: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.64-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.55 9.55 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.75c0 .26.18.57.69.48A10 10 0 0 0 12 2Z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg>`
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/username",
    icon: `<svg viewBox="0 0 24 24" fill="none"><rect x="3.5" y="3.5" width="17" height="17" rx="3" stroke="currentColor" stroke-width="1.6"/><path d="M7.7 10.2v6.3M7.7 7.6v.01M11.4 16.5v-3.7c0-1.4.9-2.4 2.2-2.4 1.3 0 2.1 1 2.1 2.4v3.7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.4 12v4.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`
  },
  {
    name: "Twitter / X",
    url: "https://x.com/Naelhussein07",
    icon: `<svg viewBox="0 0 24 24" fill="none"><path d="M4 4l16 16M20 4 4 20" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/share/1DS9PWsive",
    icon: `<svg viewBox="0 0 24 24" fill="none"><path d="M14 8.5h2.5V5.5H14c-1.93 0-3.5 1.57-3.5 3.5v2H8.5v3H10.5v8h3v-8h2.3l.7-3H13.5v-2c0-.28.22-.5.5-.5Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>`
  }
];

/* ---------------------------------------------------------
   2. RENDER SKILLS
--------------------------------------------------------- */

function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  if (!grid) return;
  grid.innerHTML = SKILLS.map((s, i) => `
    <div class="skill-card" style="transition-delay:${i * 40}ms">
      <div class="skill-card__head">
        <span class="skill-card__name">
          <span class="skill-card__icon">${s.icon}</span>
          ${s.name}
        </span>
        <span class="skill-card__pct" data-pct="${s.percent}">0%</span>
      </div>
      <div class="skill-bar">
        <div class="skill-bar__fill" data-fill="${s.percent}"></div>
      </div>
    </div>
  `).join("");
}

/* ---------------------------------------------------------
   3. RENDER PROJECTS
--------------------------------------------------------- */

const LINK_ICON = `<svg viewBox="0 0 24 24" fill="none" width="14" height="14" style="display:inline-block; vertical-align:middle; margin-right:4px;"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const ZOOM_ICON = `<svg viewBox="0 0 24 24" fill="none"><circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" stroke-width="1.8"/><path d="M15.2 15.2 20 20" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M10.5 8v5M8 10.5h5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`;

const STACK_ICON = `<svg viewBox="0 0 24 24" fill="none" width="12" height="12"><rect x="7" y="3" width="14" height="14" rx="2" stroke="currentColor" stroke-width="1.8"/><path d="M3 7v12a2 2 0 0 0 2 2h12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const ARROW_ICON = `<svg viewBox="0 0 24 24" fill="none"><path d="M15 6l-6 6 6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const MODE_ICON = {
  solo: `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="3.4" stroke="currentColor" stroke-width="1.6"/><path d="M5.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
  collab: `<svg viewBox="0 0 24 24" fill="none"><circle cx="8.5" cy="8" r="2.8" stroke="currentColor" stroke-width="1.6"/><circle cx="16" cy="9" r="2.3" stroke="currentColor" stroke-width="1.6"/><path d="M3.5 19c0-3 2.3-5.2 5-5.2s5 2.2 5 5.2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M14.5 14.3c2.2.2 3.8 1.9 3.8 4.2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
  game: `<svg viewBox="0 0 24 24" fill="none"><path d="M7 9h2m-1-1v2m6-1h.01M17 9h.01M6 14h12a3 3 0 0 0 3-3V9a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2a3 3 0 0 0 3 3Z" stroke="currentColor" stroke-width="1.6"/><path d="M5 14l-1.2 5.4a1.5 1.5 0 0 0 2.6 1.3L8 18h8l1.6 2.7a1.5 1.5 0 0 0 2.6-1.3L19 14" stroke="currentColor" stroke-width="1.6"/></svg>`,
  web: `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="4.5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M3 8.5h18" stroke="currentColor" stroke-width="1.6"/></svg>`,
  audio: `<svg viewBox="0 0 24 24" fill="none"><path d="M9 18V6l9-2v12" stroke="currentColor" stroke-width="1.6"/><circle cx="6" cy="18" r="3" stroke="currentColor" stroke-width="1.6"/><circle cx="15" cy="16" r="3" stroke="currentColor" stroke-width="1.6"/></svg>`
};

const CERT_FALLBACK_ICON = `<svg viewBox="0 0 24 24" fill="none"><path d="M8 3h8a2 2 0 0 1 2 2v9.5a2 2 0 0 1-2 2h-2.2L12 21l-1.8-4.5H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M8.5 7.5h7M8.5 10.5h7M8.5 13.5h4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>`;

function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  grid.innerHTML = PROJECTS.map((p, i) => {
    const Tag = p.link ? "a" : "div";
    const linkAttrs = p.link ? `href="${p.link}" target="_blank" rel="noopener noreferrer"` : "";
    const imgId = `projectImg-${i}`;

    return `
    <${Tag} class="project-card" data-type="${p.type}" ${linkAttrs}>
      <div class="project-card__thumb">
        <img src="${p.image || ''}" alt="Thumbnail ${p.title}" id="${imgId}" loading="lazy">
        <div class="project-card__thumb-fallback" data-fallback>
          ${MODE_ICON[p.type] || ""}
        </div>
        ${p.link ? `<span class="project-card__link-badge">${LINK_ICON} Lihat Proyek</span>` : ""}
      </div>
      <div class="project-card__body">
        <div class="project-card__top">
          <span class="project-card__type type-${p.type}">${p.typeLabel}</span>
          <span class="project-card__mode">${MODE_ICON[p.mode]} ${p.mode === "solo" ? "Solo" : "Kolaborasi"}</span>
        </div>
        <h3 class="project-card__title">${p.title}</h3>
        ${p.subtitle ? `<p class="project-card__subtitle">${p.subtitle}</p>` : ""}
        <p class="project-card__desc">${p.desc}</p>
      </div>
    </${Tag}>
  `;
  }).join("");

  setupFilter();
  setupImageFallback(".project-card__thumb img");
}

function setupFilter() {
  const buttons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".project-card");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("is-active"));
      btn.classList.add("is-active");

      const filter = btn.dataset.filter;
      cards.forEach(card => {
        const matches = filter === "all" || card.dataset.type === filter;
        card.classList.toggle("is-hidden", !matches);
      });
    });
  });
}

/* ---------------------------------------------------------
   4. RENDER CERTIFICATES + LIGHTBOX
--------------------------------------------------------- */

function renderCertificates() {
  const grid = document.getElementById("certificatesGrid");
  if (!grid) return;

  grid.innerHTML = CERTIFICATES.map((c, i) => {
    const firstImg = c.images?.[0] || "";
    const count = c.images?.length || 0;
    return `
    <button type="button" class="cert-card" data-cert-index="${i}">
      <span class="cert-card__thumb">
        <img src="${firstImg}" alt="Sertifikat ${c.title}" loading="lazy">
        <span class="cert-card__thumb-fallback" data-fallback>${CERT_FALLBACK_ICON}</span>
        ${count > 1 ? `<span class="cert-card__count">${STACK_ICON} ${count}</span>` : ""}
        <span class="cert-card__zoom-hint">${ZOOM_ICON} Perbesar</span>
      </span>
      <span class="cert-card__body">
        <span class="cert-card__title">${c.title}</span>
        <span class="cert-card__issuer">${c.issuer}</span>
        <span class="cert-card__year">${c.year}</span>
      </span>
    </button>
  `;
  }).join("");

  setupImageFallback(".cert-card__thumb img");
  setupCertLightbox();
}

function setupCertLightbox() {
  const lightbox = document.getElementById("certLightbox");
  const img = document.getElementById("certLightboxImg");
  const caption = document.getElementById("certLightboxCaption");
  const closeBtn = document.getElementById("certLightboxClose");
  const prevBtns = document.querySelectorAll("[data-cert-prev]");
  const nextBtns = document.querySelectorAll("[data-cert-next]");
  const counter = document.getElementById("certLightboxCounter");
  if (!lightbox || !img || !caption || !closeBtn) return;

  let currentCertIndex = 0;
  let currentImgIndex = 0;

  function renderLightboxImage() {
    const c = CERTIFICATES[currentCertIndex];
    if (!c) return;
    const images = c.images || [];
    const total = images.length;

    img.src = images[currentImgIndex] || "";
    img.alt = `Sertifikat ${c.title} (${currentImgIndex + 1}/${total})`;
    caption.textContent = `${c.title} — ${c.issuer} (${c.year})`;

    const showNav = total > 1;

    prevBtns.forEach(b => b.classList.toggle("is-hidden", !showNav));
    nextBtns.forEach(b => b.classList.toggle("is-hidden", !showNav));

    if (counter) {
      counter.classList.toggle("is-hidden", !showNav);
      counter.textContent = `${currentImgIndex + 1} / ${total}`;
    }
  }

  function openLightbox(certIndex) {
    const c = CERTIFICATES[certIndex];
    if (!c) return;
    currentCertIndex = certIndex;
    currentImgIndex = 0;
    renderLightboxImage();
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function goPrev() {
    const total = CERTIFICATES[currentCertIndex]?.images?.length || 1;
    currentImgIndex = (currentImgIndex - 1 + total) % total;
    renderLightboxImage();
  }

  function goNext() {
    const total = CERTIFICATES[currentCertIndex]?.images?.length || 1;
    currentImgIndex = (currentImgIndex + 1) % total;
    renderLightboxImage();
  }

  document.querySelectorAll(".cert-card").forEach(card => {
    card.addEventListener("click", () => {
      const idx = parseInt(card.dataset.certIndex, 10);
      openLightbox(idx);
    });
  });

  closeBtn.addEventListener("click", closeLightbox);
  prevBtns.forEach(b => b.addEventListener("click", (e) => { e.stopPropagation(); goPrev(); }));
  nextBtns.forEach(b => b.addEventListener("click", (e) => { e.stopPropagation(); goNext(); }));

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // Navigasi keyboard tetap didukung untuk pengguna desktop (opsional, tidak mengganggu zoom)
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("is-open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") goPrev();
    if (e.key === "ArrowRight") goNext();
  });
}

/* ---------------------------------------------------------
   5. RENDER SOCIALS
--------------------------------------------------------- */

function renderSocials() {
  const wrap = document.getElementById("socials");
  if (!wrap) return;
  wrap.innerHTML = SOCIALS.map(s => `
    <a class="social-link" href="${s.url}" target="_blank" rel="noopener noreferrer">
      ${s.icon} ${s.name}
    </a>
  `).join("");
}

/* ---------------------------------------------------------
   6. IMAGE FALLBACK (shared helper untuk project & sertifikat)
--------------------------------------------------------- */

function setupImageFallback(selector) {
  document.querySelectorAll(selector).forEach(img => {
    const showFallback = () => {
      img.style.display = "none";
      const fallback = img.parentElement?.querySelector("[data-fallback]");
      fallback?.classList?.add("is-shown");
    };
    if (!img.getAttribute("src")) {
      showFallback();
      return;
    }
    img.addEventListener("error", showFallback);
  });
}

/* ---------------------------------------------------------
   7. PROFILE PHOTO FALLBACK
--------------------------------------------------------- */

function setupProfilePhoto() {
  const img = document.getElementById("profileImg");
  const fallback = document.getElementById("profileFallback");
  if (!img || !fallback) return;

  img.addEventListener("error", () => {
    img.style.display = "none";
    fallback.style.display = "flex";
  });
}

/* ---------------------------------------------------------
   8. SCROLL REVEAL
--------------------------------------------------------- */

function setupScrollReveal() {
  const revealEls = document.querySelectorAll(".reveal");
  const skillBars = document.querySelectorAll(".skill-bar__fill");
  const skillPcts = document.querySelectorAll(".skill-card__pct");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");

        if (entry.target.id === "skills" || entry.target.querySelector?.("#skillsGrid")) {
          skillBars.forEach(bar => {
            bar.style.width = bar.dataset.fill + "%";
          });
          skillPcts.forEach(pct => animateCount(pct));
        }

        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });

  revealEls.forEach(el => observer.observe(el));
}

function animateCount(el) {
  const target = parseInt(el.dataset.pct, 10);
  const duration = 900;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const value = Math.round(progress * target);
    el.textContent = value + "%";
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

/* ---------------------------------------------------------
   9. NAVBAR — scroll style + mobile toggle + active link
--------------------------------------------------------- */

function setupNavbar() {
  const navbar = document.getElementById("navbar");
  const toggle = document.getElementById("navToggle");
  const mobileMenu = document.getElementById("navMobile");
  const navLinks = document.querySelectorAll("[data-nav]");
  const sections = document.querySelectorAll("main section[id]");

  if (!navbar || !toggle || !mobileMenu) return;

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("is-scrolled", window.scrollY > 8);
  });

  toggle.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
        });
      }
    });
  }, { threshold: 0.5, rootMargin: "-80px 0px -40% 0px" });

  sections.forEach(s => navObserver.observe(s));
}

/* ---------------------------------------------------------
   10. INIT
--------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderProjects();
  renderCertificates();
  renderSocials();
  setupProfilePhoto();
  setupNavbar();
  setupScrollReveal();

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});