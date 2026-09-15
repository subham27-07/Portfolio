(function () {
  const file = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
  const isHome = file === "" || file === "index.html";
  const home = isHome ? "" : "index.html";

  function bind(header) {
    const toggle = header.querySelector(".menu-toggle");
    const nav = header.querySelector("#site-nav");
    if (!toggle || !nav || toggle.dataset.bound) return;
    toggle.dataset.bound = "true";
    toggle.addEventListener("click", function () {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  function currentPage(nav) {
    const links = nav.querySelectorAll("a");
    links.forEach(function (link) {
      link.removeAttribute("aria-current");
    });
    if (file === "projects.html") {
      const projects = nav.querySelector('a[href$="projects.html"]');
      if (projects) projects.setAttribute("aria-current", "page");
    }
  }

  let header = document.querySelector(".site-header");
  if (!header) {
    header = document.createElement("header");
    header.className = "site-header";
    header.innerHTML =
      '<div class="site-header-inner">' +
      '<a class="wordmark" href="index.html">Subham Sah</a>' +
      '<button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav">Menu</button>' +
      '<nav id="site-nav" class="nav" aria-label="Primary">' +
      '<a href="' + home + '#about">About</a>' +
      '<a href="' + home + '#publications">Publications</a>' +
      '<a href="' + home + '#research">Research</a>' +
      '<a href="' + home + '#awards">Awards</a>' +
      '<a href="projects.html">Projects</a>' +
      "</nav></div>";
    document.body.insertBefore(header, document.body.firstChild);
  }

  bind(header);
  currentPage(header.querySelector("#site-nav"));

  ["#sidebar", "#header"].forEach(function (selector) {
    document.querySelectorAll(selector).forEach(function (el) {
      el.remove();
    });
  });
})();
