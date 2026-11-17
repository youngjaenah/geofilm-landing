// Shows the Korean or English half of each page: Korean for Korean browsers, English
// otherwise, and remembers the visitor's choice.
(function () {
  var stored = null;
  try { stored = localStorage.getItem("lang"); } catch (e) {}
  var lang = stored || ((navigator.language || "").toLowerCase().indexOf("ko") === 0 ? "ko" : "en");
  function apply(l) {
    document.documentElement.setAttribute("data-show", l);
    document.documentElement.lang = l;
    document.querySelectorAll(".lang button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.set === l));
    });
  }
  apply(lang);
  document.addEventListener("DOMContentLoaded", function () {
    apply(lang);
    document.querySelectorAll(".lang button").forEach(function (b) {
      b.addEventListener("click", function () {
        lang = b.dataset.set;
        try { localStorage.setItem("lang", lang); } catch (e) {}
        apply(lang);
      });
    });
  });
})();
