function formCreator() {
  document.addEventListener("DOMContentLoaded", function () {
    const contactSection = document.querySelector(".contact");

    if (!contactSection) {
      console.error("No se encontró la sección .contact");
      return;
    }

    const existingForm = contactSection.querySelector(".form");
    if (existingForm) {
      existingForm.remove();
    }

    const formHTML = `
      <form id="contactForm" class="form">
        <fieldset class="fieldset">
          <div class="form__cards">
            <div class="form__content-1">
              <label for="name">Nombre</label>
              <input id="name" type="text" placeholder="Tu nombre" required />
            </div>
            <div class="form__content-2">
              <label for="email">Email</label>
              <input id="email" type="email" placeholder="tu@email.com" required />
            </div>
            <div class="form__content-3">
              <label for="message">Mensaje</label>
              <textarea id="message" placeholder="Deja un mensaje!" required></textarea>
            </div>
            <div class="form__button-container">
              <button type="submit" class="button" id="sendBtn">Enviar</button>
            </div>
          </div>
        </fieldset>
      </form>
    `;

    contactSection.innerHTML += formHTML;

    console.log("Formulario insertado correctamente.");

    const form = document.getElementById("contactForm");
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      const url = "https://apx.school/api/utils/email-to-student";

      const data = {
        to: email,
        message: message,
      };

      fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error al enviar el mensaje");
          }
          return response.json();
        })
        .then((data) => {
          alert("Correo enviado correctamente!");
          console.log("Respuesta del servidor:", data);
          form.reset();
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Hubo un problema al enviar el mensaje.");
        });
    });
  });
}

formCreator();
