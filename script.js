const header = document.querySelector(".header");
const menuBtn = document.querySelector(".btn-mobile-nav");
const icons = document.querySelectorAll(".icon-mobile-nav");

menuBtn.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});

/* Scroll behavior smooth */

const allLinks = document.querySelectorAll("a:link");
allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");

    /* Scroll back to the top */
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    /* Scroll to other links */
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    /* Close mobile navigation */
    if (link.classList.contains(".main-nav-list")) {
      header.classList.toggle("nav-open");
    }
  });
});

/* Sticky Navigation */

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
