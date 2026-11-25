(() => {
  "use strict";

  const html = document.documentElement;
  const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
  const motionButton = document.querySelector("[data-motion-toggle]");
  const navigation = document.getElementById("navigation");
  const menuButton = document.querySelector("[data-menu-toggle]");
  const hero = document.querySelector(".hero");
  const imageLayer = document.querySelector(".hero-image");
  const preferenceKey = "izkovan.showcase.motion";
  let paused = false;
  let enabled = false;
  let heroVisible = true;
  let scrollFrame = 0;

  try {
    const saved = localStorage.getItem(preferenceKey) ?? localStorage.getItem("koralis.showcase.motion");
    paused = saved === "off";
  } catch { /* File previews also work without local storage. */ }

  function paintImage() {
    scrollFrame = 0;
    const offset = enabled && heroVisible && !document.hidden && innerWidth > 760
      ? Math.min(32, Math.max(0, -hero.getBoundingClientRect().top) * 0.09) : 0;
    imageLayer.style.transform = offset ? "translateY(" + offset.toFixed(2) + "px)" : "";
  }
  function onScroll() {
    if (enabled && heroVisible && !document.hidden && !scrollFrame) {
      scrollFrame = requestAnimationFrame(paintImage);
    }
  }
  function syncMotion() {
    enabled = !preference.matches && !paused;
    html.dataset.motion = enabled ? "on" : "off";
    const label = preference.matches ? "Sistem ayarına göre hareket azaltıldı"
      : enabled ? "Hareketleri duraklat" : "Hareketleri başlat";
    motionButton.disabled = preference.matches;
    motionButton.setAttribute("aria-pressed", String(enabled));
    motionButton.setAttribute("aria-label", label);
    motionButton.title = label;
    document.dispatchEvent(new CustomEvent("izkovan-motion", {detail: {enabled}}));
    paintImage();
  }
  motionButton.addEventListener("click", () => {
    paused = !paused;
    try { localStorage.setItem(preferenceKey, paused ? "off" : "on"); } catch {}
    syncMotion();
  });
  preference.addEventListener("change", syncMotion);
  syncMotion();
  window.addEventListener("scroll", onScroll, {passive: true});
  window.addEventListener("resize", onScroll, {passive: true});
  document.addEventListener("visibilitychange", paintImage);
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(([entry]) => {
      heroVisible = entry.isIntersecting;
      paintImage();
    }).observe(hero);
    const reveal = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        if (enabled) entry.target.classList.add("enter-view");
        reveal.unobserve(entry.target);
      }
    }, {threshold: 0.15});
    for (const section of document.querySelectorAll(".section-head, .download-grid")) reveal.observe(section);
  }

  const record = document.querySelector(".record");
  let swap;
  let selected = "0";
  document.querySelector(".cases").addEventListener("click", event => {
    const button = event.target.closest("button[data-case]");
    if (!button || selected === button.dataset.case) return;
    selected = button.dataset.case;
    if (swap) swap.cancel();
    if (enabled && record.animate) {
      swap = record.animate([{opacity: .72, transform: "translateY(5px)"}, {opacity: 1, transform: "none"}],
        {duration: 230, easing: "ease-out"});
    }
  });
  document.addEventListener("izkovan-motion", () => { if (!enabled && swap) swap.cancel(); });

  function menu(open) {
    navigation.classList.toggle("open", open);
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Menüyü kapat" : "Menüyü aç");
  }
  menuButton.addEventListener("click", () => menu(menuButton.getAttribute("aria-expanded") !== "true"));
  navigation.addEventListener("click", event => {
    const link = event.target.closest("a[href^='#']");
    if (!link || menuButton.getAttribute("aria-expanded") !== "true") return;
    menu(false);
    const section = document.getElementById(link.hash.slice(1));
    if (section) {
      section.tabIndex = -1;
      section.focus({preventScroll:true});
    }
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      menu(false);
      menuButton.focus();
    }
  });
  document.addEventListener("click", event => {
    if (!event.target.closest(".mast") && menuButton.getAttribute("aria-expanded") === "true") menu(false);
  });
  window.matchMedia("(min-width: 761px)").addEventListener("change", () => menu(false));
})();
