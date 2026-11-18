function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function link(label, url) {
  const target = element("a", "inline-link", label);
  target.href = url;
  return target;
}

function renderList(id, items, render) {
  const container = document.getElementById(id);
  container.append(...items.map(render));
}

document.title = teamSite.name;
document.querySelectorAll("[data-name]").forEach((node) => { node.textContent = teamSite.name; });
document.getElementById("headline").textContent = teamSite.headline;
document.getElementById("intro").textContent = teamSite.intro;
document.getElementById("vision-copy").textContent = teamSite.vision;
const hero = document.getElementById("hero-art");
const track = document.getElementById("hero-track");
const heroImages = teamSite.heroImages ?? (teamSite.heroImage ? [{ src: teamSite.heroImage, alt: "" }] : []);
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const dots = [];
let currentSlide = 0;
let autoplay = !reducedMotion.matches;
let carouselTimer;

heroImages.forEach((item, index) => {
  const slide = element("div", "hero-slide");
  slide.setAttribute("role", "group");
  slide.setAttribute("aria-roledescription", "幻灯片");
  slide.setAttribute("aria-label", String(index + 1) + " / " + heroImages.length);
  const image = element("img");
  image.src = item.src;
  image.alt = item.alt || "";
  image.draggable = false;
  slide.append(image);
  track.append(slide);

  const dot = element("button", "hero-dot");
  dot.type = "button";
  dot.setAttribute("aria-label", "查看第 " + (index + 1) + " 张图片");
  dot.addEventListener("click", () => showSlide(index));
  document.getElementById("hero-dots").append(dot);
  dots.push(dot);
});

function updateCarouselControls() {
  dots.forEach((dot, index) => {
    dot.setAttribute("aria-pressed", String(index === currentSlide));
  });
  const play = document.getElementById("hero-play");
  play.textContent = autoplay ? "Ⅱ" : "▶";
  play.setAttribute("aria-label", autoplay ? "暂停自动播放" : "开始自动播放");
}

function scheduleCarousel() {
  clearTimeout(carouselTimer);
  const paused = document.hidden || hero.matches(":hover") || hero.contains(document.activeElement);
  if (autoplay && heroImages.length > 1 && !paused) {
    carouselTimer = setTimeout(() => showSlide(currentSlide + 1), 6000);
  }
}

function showSlide(index) {
  currentSlide = (index + heroImages.length) % heroImages.length;
  track.scrollTo({
    left: currentSlide * track.clientWidth,
    behavior: reducedMotion.matches ? "instant" : "smooth",
  });
  updateCarouselControls();
  scheduleCarousel();
}

track.addEventListener("scroll", () => {
  currentSlide = Math.round(track.scrollLeft / track.clientWidth);
  updateCarouselControls();
  scheduleCarousel();
}, { passive: true });
track.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
    event.preventDefault();
    showSlide(currentSlide + (event.key === "ArrowRight" ? 1 : -1));
  }
});
document.getElementById("hero-previous").addEventListener("click", () => showSlide(currentSlide - 1));
document.getElementById("hero-next").addEventListener("click", () => showSlide(currentSlide + 1));
document.getElementById("hero-play").addEventListener("click", () => {
  autoplay = !autoplay;
  updateCarouselControls();
  scheduleCarousel();
});
hero.addEventListener("pointerenter", scheduleCarousel);
hero.addEventListener("pointerleave", scheduleCarousel);
hero.addEventListener("focusin", scheduleCarousel);
hero.addEventListener("focusout", () => setTimeout(scheduleCarousel, 0));
document.addEventListener("visibilitychange", scheduleCarousel);
reducedMotion.addEventListener("change", () => {
  autoplay = !reducedMotion.matches;
  updateCarouselControls();
  scheduleCarousel();
});
window.addEventListener("resize", () => {
  track.scrollTo({ left: currentSlide * track.clientWidth, behavior: "instant" });
});
document.getElementById("hero-controls").hidden = heroImages.length < 2;
hero.hidden = heroImages.length === 0;
updateCarouselControls();
scheduleCarousel();

renderList("research-list", teamSite.research, (item) => {
  const card = element("article", "research-card");
  card.append(element("h3", "", item.title), element("p", "", item.description));
  if (item.url) card.append(link("了解" + item.title + " ↗", item.url));
  return card;
});

document.getElementById("project-title").textContent = teamSite.project.title;
document.getElementById("project-description").textContent = teamSite.project.description;
document.getElementById("project-example").textContent = teamSite.project.example;
renderList("project-steps", teamSite.project.steps, (step) => {
  const item = element("li");
  item.append(element("h4", "", step.title), element("p", "", step.description));
  return item;
});

renderList("work-list", teamSite.work, (item) => {
  const row = element("article", "work-row");
  const details = element("div");
  const heading = element("h3", "", item.url ? "" : item.title);
  if (item.url) heading.append(link(item.title + " ↗", item.url));
  details.append(heading, element("p", "", item.description));
  row.append(element("p", "work-type", item.type), details);
  return row;
});

renderList("people-list", teamSite.people, (person) => {
  const card = element("article", "person");
  const portrait = element("div", "portrait");
  portrait.setAttribute("aria-hidden", "true");
  if (person.photo) {
    const image = element("img");
    image.src = person.photo;
    image.alt = "";
    image.loading = "lazy";
    image.addEventListener("error", () => image.remove());
    portrait.append(image);
  }
  card.append(portrait, element("h3", "", person.name));
  const details = element("dl", "person-details");
  details.append(
    element("dt", "", "研究方向"),
    element("dd", "", person.research || "待补充"),
    element("dt", "", "当前状态"),
    element("dd", "", person.status || "待补充"),
  );
  card.append(details);
  if (person.bio) card.append(element("p", "", person.bio));
  if (person.url) card.append(link(person.name + "的个人主页 ↗", person.url));
  return card;
});

document.getElementById("people-empty").hidden = teamSite.people.length > 0;

document.getElementById("contact-copy").textContent = teamSite.contact.text;
if (teamSite.contact.email) {
  const contact = document.getElementById("contact-link");
  contact.href = "mailto:" + teamSite.contact.email;
  contact.hidden = false;
}
if (!teamSite.research.length) document.querySelector(".hero a").hidden = true;

document.getElementById("about-copy").textContent = teamSite.about;
renderList("practices-list", teamSite.practices, (practice) => {
  const item = element("article");
  item.append(element("h3", "", practice.title), element("p", "", practice.description));
  return item;
});
