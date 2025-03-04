function headerCreator() {
  if (document.querySelector(".header")) {
    console.warn("El header ya existe, evitando duplicados.");
    return;
  }

  const headerContainer = document.createElement("header");
  headerContainer.classList.add("header");
  headerContainer.innerHTML = `
    <!-- Logo -->
    <a href="index.html" class="header__logo">
      <img class="header__logo-image" src="./assets/img/LOGO-IMG.png" alt="Logo">
    </a>

    <nav class="header__desktop-nav">
      <ul>
        <li><a href="./portfolio.html"">Portfolio</a></li>
        <li><a href="./servicios.html">Servicios</a></li>
        <li><a href="./contacto.html">Contacto</a></li>
      </ul>
    </nav>

    <button class="header__burger-button" aria-label="Abrir menú"><i class="fa-solid fa-bars"></i></button>

    <nav class="header__mobile-nav">
      <button class="header__close-button" aria-label="Cerrar menú"><i class="fa-solid fa-bars"></i></button>
      <ul>
        <li><a href="./portfolio.html"">Portfolio</a></li>
        <li><a href="./servicios.html">Servicios</a></li>
        <li><a href="./contacto.html">Contacto</a></li>
      </ul>
    </nav>
  `;

  document.body.prepend(headerContainer);

  const burgerButton = headerContainer.querySelector(".header__burger-button");
  const closeButton = headerContainer.querySelector(".header__close-button");
  const mobileNav = headerContainer.querySelector(".header__mobile-nav");

  burgerButton.addEventListener("click", () => {
    mobileNav.classList.toggle("header__mobile-nav--open");
  });

  closeButton.addEventListener("click", () => {
    mobileNav.classList.remove("header__mobile-nav--open");
  });

  console.log("Header generado correctamente.");
}

headerCreator();
