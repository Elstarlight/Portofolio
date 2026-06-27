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
    mode: "collabg",
    image: "assets/images/project-submitted.png",
    link: "https://github.com/username/submitted",
    desc: "Proyek game pendek yang dikembangkan secara kolaboratif bersama Tim Tugas Akhir. Di sini, saya bertanggung jawab penuh atas implementasi logika program (programming) dan seluruh produksi audio."
  }//,
//   {
//     title: "Portal Sekolah Digital",
//     type: "web",
//     typeLabel: "Web",
//     mode: "collab",
//     image: "assets/images/project-portal-sekolah.jpg",
//     link: "https://github.com/username/portal-sekolah",
//     desc: "Contoh deskripsi: website informasi sekolah dengan sistem pengumuman dan galeri kegiatan, dikerjakan bersama 2 rekan tim."
//   },
//   {
//     title: "Ambient Loop Pack",
//     type: "audio",
//     typeLabel: "Audio",
//     mode: "solo",
//     image: "assets/images/project-ambient-loop.jpg",
//     link: "https://soundcloud.com/username/sets/ambient-loop-pack",
//     desc: "Contoh deskripsi: kumpulan musik latar ambient pendek untuk kebutuhan game indie, dibuat sebagai latihan sound design."
//   },
//   {
//     title: "Tugas Akhir RPL",
//     type: "web",
//     typeLabel: "Web",
//     mode: "collab",
//     image: "assets/images/project-tugas-akhir.jpg",
//     link: "https://github.com/username/tugas-akhir-rpl",
//     desc: "Contoh deskripsi: aplikasi manajemen data sederhana sebagai proyek akhir kelulusan SMK, dikerjakan berkelompok."
//   }
];

const SOCIALS = [
  {
    name: "Instagram",
    url: "https://instagram.com/username",
    icon: `<svg viewBox="0 0 24 24" fill="none"><rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="12" r="3.7" stroke="currentColor" stroke-width="1.6"/><circle cx="17" cy="7" r="1" fill="currentColor"/></svg>`
  },
  {
    name: "GitHub",
    url: "https://github.com/username",
    icon: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.64-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.55 9.55 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.75c0 .26.18.57.69.48A10 10 0 0 0 12 2Z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg>`
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/username",
    icon: `<svg viewBox="0 0 24 24" fill="none"><rect x="3.5" y="3.5" width="17" height="17" rx="3" stroke="currentColor" stroke-width="1.6"/><path d="M7.7 10.2v6.3M7.7 7.6v.01M11.4 16.5v-3.7c0-1.4.9-2.4 2.2-2.4 1.3 0 2.1 1 2.1 2.4v3.7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.4 12v4.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`
  },
  {
    name: "Twitter / X",
    url: "https://x.com/username",
    icon: `<svg viewBox="0 0 24 24" fill="none"><path d="M4 4l16 16M20 4 4 20" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`
  },
  {
    name: "Facebook",
    url: "https://facebook.com/username",
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

// Ditambahkan LINK_ICON eksternal agar badge "Lihat Proyek" tidak error
const LINK_ICON = `<svg viewBox="0 0 24 24" fill="none" width="14" height="14" style="display:inline-block; vertical-align:middle; margin-right:4px;"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const MODE_ICON = {
  solo: `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="3.4" stroke="currentColor" stroke-width="1.6"/><path d="M5.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
  collab: `<svg viewBox="0 0 24 24" fill="none"><circle cx="8.5" cy="8" r="2.8" stroke="currentColor" stroke-width="1.6"/><circle cx="16" cy="9" r="2.3" stroke="currentColor" stroke-width="1.6"/><path d="M3.5 19c0-3 2.3-5.2 5-5.2s5 2.2 5 5.2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M14.5 14.3c2.2.2 3.8 1.9 3.8 4.2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
  // Ikon penunjang fallback thumbnail proyek berdasarkan tipenya
  game: `<svg viewBox="0 0 24 24" fill="none"><path d="M7 9h2m-1-1v2m6-1h.01M17 9h.01M6 14h12a3 3 0 0 0 3-3V9a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2a3 3 0 0 0 3 3Z" stroke="currentColor" stroke-width="1.6"/><path d="M5 14l-1.2 5.4a1.5 1.5 0 0 0 2.6 1.3L8 18h8l1.6 2.7a1.5 1.5 0 0 0 2.6-1.3L19 14" stroke="currentColor" stroke-width="1.6"/></svg>`,
  web: `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="4.5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M3 8.5h18" stroke="currentColor" stroke-width="1.6"/></svg>`,
  audio: `<svg viewBox="0 0 24 24" fill="none"><path d="M9 18V6l9-2v12" stroke="currentColor" stroke-width="1.6"/><circle cx="6" cy="18" r="3" stroke="currentColor" stroke-width="1.6"/><circle cx="15" cy="16" r="3" stroke="currentColor" stroke-width="1.6"/></svg>`
};

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
  setupProjectThumbs();
}

function setupProjectThumbs() {
  document.querySelectorAll(".project-card__thumb img").forEach(img => {
    const showFallback = () => {
      img.style.display = "none";
      img.previousElementSibling?.classList?.add("is-shown");
    };
    if (!img.getAttribute("src")) {
      showFallback();
      return;
    }
    img.addEventListener("error", showFallback);
  });
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
   4. RENDER SOCIALS
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
   5. PROFILE PHOTO FALLBACK
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
   6. SCROLL REVEAL
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
   7. NAVBAR — scroll style + mobile toggle + active link
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
   8. INIT
--------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderProjects();
  renderSocials();
  setupProfilePhoto();
  setupNavbar();
  setupScrollReveal();
  
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});