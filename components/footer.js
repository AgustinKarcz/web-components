function footerCreator() {
  if (document.querySelector(".footer")) {
    console.warn("El footer ya existe, evitando duplicados.");
    return;
  }

  const footerContainer = document.createElement("footer");
  footerContainer.classList.add("footer");

  footerContainer.innerHTML = `
    <div class="footer__content">
      <a href="index.html" class="footer__logo">
        <img class="header__logo-image" src="./assets/img/LOGO-IMG.png" alt="Logo">
      </a>
      <ul class="footer__links">
        <li><i class="fa-solid fa-house"></i><a href=  "./index.html">Home</a></li>
        <li><i class="fa-solid fa-user"></i><a href=  "./servicios.html">Servicios</a></li>
        <li><i class="fa-solid fa-phone"></i><a href="./contacto.html">Contacto</a></li>
      </ul>
      <ul class="footer__social">
   <li><a href="#" aria-label="GitHub"><i class="fa-brands fa-github"></i></a></li>
<li><a href="#" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a></li>
<li><a href="#" aria-label="Twitter"><i class="fa-brands fa-twitter"></i></a></li>
      </ul>
      <p class="footer__copyright">©2025 - https://apx.school</p>
    </div>
  `;

  document.body.appendChild(footerContainer);
}

footerCreator();
