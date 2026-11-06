(function () {
  "use strict";

  var root = document.documentElement;
  var storageKey = "svu-events-theme";
  var systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
  var preferredTheme = null;
  var toggle;

  try {
    var savedTheme = localStorage.getItem(storageKey);
    if (savedTheme === "light" || savedTheme === "dark") {
      preferredTheme = savedTheme;
    }
  } catch (error) {
    // يبقى التبديل متاحاً إذا كان المتصفح يمنع التخزين المحلي.
  }

  function applyTheme(theme) {
    root.setAttribute("data-bs-theme", theme);
    if (toggle) {
      toggle.setAttribute("aria-pressed", String(theme === "dark"));
    }
  }

  applyTheme(preferredTheme || (systemTheme.matches ? "dark" : "light"));

  systemTheme.addEventListener("change", function (event) {
    if (!preferredTheme) {
      applyTheme(event.matches ? "dark" : "light");
    }
  });

  window.addEventListener("storage", function (event) {
    if (event.key === storageKey || event.key === null) {
      preferredTheme = event.newValue === "dark" || event.newValue === "light"
        ? event.newValue : null;
      applyTheme(preferredTheme || (systemTheme.matches ? "dark" : "light"));
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    var tools = document.createElement("div");
    tools.className = "site-tools";

    toggle = document.createElement("button");
    toggle.type = "button";
    toggle.id = "theme-toggle";
    toggle.className = "site-tool theme-toggle";
    toggle.title = "الوضع الداكن";
    toggle.setAttribute("aria-label", "الوضع الداكن");
    toggle.setAttribute("aria-pressed", String(root.getAttribute("data-bs-theme") === "dark"));
    toggle.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" focusable="false"><path d="M20.8 13.1A9 9 0 0 1 10.9 3.2a9 9 0 1 0 9.9 9.9Z"/></svg>';
    toggle.addEventListener("click", function () {
      preferredTheme = root.getAttribute("data-bs-theme") === "dark" ? "light" : "dark";
      applyTheme(preferredTheme);
      try {
        localStorage.setItem(storageKey, preferredTheme);
      } catch (error) {
        // يظل اختيار المستخدم فعالاً في الصفحة الحالية.
      }
    });
    tools.appendChild(toggle);

    var scrollTopButton = document.createElement("button");
    scrollTopButton.type = "button";
    scrollTopButton.id = "scroll-to-top";
    scrollTopButton.className = "site-tool scroll-top";
    scrollTopButton.title = "العودة إلى أعلى الصفحة";
    scrollTopButton.setAttribute("aria-label", "العودة إلى أعلى الصفحة");
    scrollTopButton.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" focusable="false"><path d="m5 12 7-7 7 7M12 5v15"/></svg>';
    scrollTopButton.addEventListener("click", function () {
      var heading = document.querySelector("main h1");
      if (heading) {
        var wasFocusable = heading.hasAttribute("tabindex");
        if (!wasFocusable) {
          heading.setAttribute("tabindex", "-1");
          heading.addEventListener("blur", function () {
            heading.removeAttribute("tabindex");
          }, { once: true });
        }
        heading.focus({ preventScroll: true });
      }
      window.scrollTo({
        top: 0,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth"
      });
    });

    function updateScrollButton() {
      scrollTopButton.hidden = window.scrollY < 300;
    }

    updateScrollButton();
    window.addEventListener("scroll", updateScrollButton, { passive: true });
    tools.appendChild(scrollTopButton);
    document.body.appendChild(tools);
  });
})();
