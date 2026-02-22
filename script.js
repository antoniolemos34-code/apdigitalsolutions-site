(() => {
  const btn = document.querySelector("[data-menu-button]");
  const menu = document.querySelector("[data-menu]");
  const overlay = document.querySelector("[data-overlay]");

  if (!btn || !menu || !overlay) return;

  const open = () => {
    menu.classList.add("is-open");
    overlay.hidden = false;
    btn.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  };

  const close = () => {
    menu.classList.remove("is-open");
    overlay.hidden = true;
    btn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };

  btn.addEventListener("click", () => {
    menu.classList.contains("is-open") ? close() : open();
  });

  overlay.addEventListener("click", close);

  menu.querySelectorAll("a").forEach(a => a.addEventListener("click", close));

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
})();
