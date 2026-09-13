// Tomaso Valdinoci — sito tributo
// Nav mobile toggle + lightbox per le gallerie fotografiche

document.addEventListener("DOMContentLoaded", function () {
  /* ---------- Nav mobile ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Lightbox ---------- */
  var triggers = Array.prototype.slice.call(document.querySelectorAll("[data-lightbox]"));
  if (!triggers.length) return;

  var lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.innerHTML =
    '<button class="lightbox-close" aria-label="Chiudi">✕</button>' +
    '<button class="lightbox-nav lightbox-prev" aria-label="Precedente">‹</button>' +
    '<button class="lightbox-nav lightbox-next" aria-label="Successiva">›</button>' +
    '<div class="lightbox-inner"><img alt="" /><p class="lightbox-cap"></p></div>';
  document.body.appendChild(lightbox);

  var imgEl = lightbox.querySelector("img");
  var capEl = lightbox.querySelector(".lightbox-cap");
  var closeBtn = lightbox.querySelector(".lightbox-close");
  var prevBtn = lightbox.querySelector(".lightbox-prev");
  var nextBtn = lightbox.querySelector(".lightbox-next");
  var current = 0;

  function show(index) {
    current = (index + triggers.length) % triggers.length;
    var t = triggers[current];
    imgEl.src = t.getAttribute("data-lightbox");
    imgEl.alt = t.getAttribute("data-caption") || "";
    capEl.textContent = t.getAttribute("data-caption") || "";
  }

  function open(index) {
    show(index);
    lightbox.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function close() {
    lightbox.classList.remove("open");
    document.body.style.overflow = "";
  }

  triggers.forEach(function (t, i) {
    t.addEventListener("click", function (e) {
      e.preventDefault();
      open(i);
    });
  });

  closeBtn.addEventListener("click", close);
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) close();
  });
  prevBtn.addEventListener("click", function () { show(current - 1); });
  nextBtn.addEventListener("click", function () { show(current + 1); });

  document.addEventListener("keydown", function (e) {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(current - 1);
    if (e.key === "ArrowRight") show(current + 1);
  });
});
