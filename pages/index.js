function main() {
  function getCards() {
    return fetch(
      "https://cdn.contentful.com/spaces/6ncssp2psbh7/environments/master/entries?access_token=NWdoJvA0ABibx5aSgMCO5Kt6Li_hgYNrDfNCtr-9n0E&content_type=serviceCard&sys.id[in]=7CbFlq2FQ0qo9NXePSifTT,4cSWhc9oTttr5fTxJbNCeD,75uWCzVQBLYylfukQ1vC2I"
    )
      .then((res) => res.json())
      .then((data) => {
        const fieldsCollection = data.items
          .map((item) => {
            const mediaField = item.fields.media;
            if (!mediaField || !mediaField.sys || !mediaField.sys.id) {
              return null;
            }

            const imageId = mediaField.sys.id;

            const imageUrl = data.includes.Asset.find(
              (asset) => asset.sys.id === imageId
            );

            return {
              title: item.fields.titulo,
              descripcion: item.fields.descripcion.content[0].content[0].value,
              image: imageUrl ? imageUrl.fields.file.url : null,
            };
          })
          .filter(Boolean);

        renderCards(fieldsCollection);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }

  function renderCards(cards) {
    const containerCard = document.querySelector(".services__cards");
    cards.forEach((card) => {
      const { title, descripcion, image } = card;

      const cardHTML = `
        <div class="service-card">
          <div class="card-images">
            ${
              image
                ? `<img class="additional-image" src="${image}" alt="${title}">`
                : "No image available"
            } 
          </div>
          <h3 class="card-title">${title}</h3>
          <p class="card-description">${descripcion}</p>
        </div>
      `;
      containerCard.innerHTML += cardHTML;
    });
  }

  getCards();
}

main();
