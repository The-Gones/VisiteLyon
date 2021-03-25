const cards = document.querySelector(".cards");
const sitesList = [
  {
    id: 1,
    name: "<span>Place Bellecour</span><span>Bellecour Place</span>",
    district: "Lyon 2ème // Lyon 2nd",
    picture: "./assets/images/sites/lyon_2eme_roue_bellecour.jpg",
    description:
      "<span>La plus grande place de la ville de Lyon offre aux promeneurs un vaste espace dont l’accès est interdit aux véhicules. Elle est ainsi la plus grande place piétonnière d'Europe : parfaite pour flâner !<br><br>En son centre se trouve une statue équestre de Louis XIV. Une autre statue, représentant Le Petit Prince et Antoine de Saint-Exupéry, est située à l'extrémité sud-ouest de la place.<br><br>Deux pavillons se trouvent sur la place et abritent des services de l'Office du tourisme, ainsi qu'un petit parc pour enfants, une fontaine, deux brasseries et périodiquement une grande roue (durant les fêtes de fin d'année).</span><span>Blabla english</span>",
  },
  {
    id: 2,
    name: "Rue Saint Jean // Saint Jean Street",
    district: "Lyon 5ème // Lyon 5th",
    picture: "./assets/images/sites/lyon_5eme_rue_de_saint_jean.png",
    description: "<span>Blabla français 2</span><span>Blabla english 2</span>",
  },
  {
    id: 3,
    name: "Parc de la Tête d’Or // Tête d'Or Park",
    district: "Lyon 6ème // Lyon 6th",
    picture: "./assets/images/sites/lyon_6eme_parc_de_la_tete_d_or.jpg",
    description: "<span>Blabla français 3</span><span>Blabla english 3</span>",
  },
  {
    id: 4,
    name: "Hôtel de ville // City Hall",
    district: "Lyon 1er // Lyon 1st",
    picture: "./assets/images/sites/lyon_1er_hotel_de_ville.jpg",
    description: "<span>Blabla français 4</span><span>Blabla english 4</span>",
  },
  {
    id: 5,
    name: "Institut Lumière // Lumière Institute",
    district: "Lyon 7ème // Lyon 7th",
    picture: "./assets/images/sites/lyon_7eme_institut_lumiere.jpg",
    description: "<span>Blabla français 5</span><span>Blabla english 5</span>",
  },
  {
    id: 6,
    name: "Musée des Confluences // Confluence Museum",
    district: "Lyon 2ème // Lyon 2nd",
    picture: "./assets/images/sites/lyon_2_musee_confluences.jpg",
    description: "<span>Blabla français 5</span><span>Blabla english 5</span>",
  },
  {
    id: 7,
    name: "Halle Tony Garnier // Tony Garnier Hall",
    district: "Lyon 2ème // Lyon 2nd",
    picture: "./assets/images/sites/lyon_2eme_halle_tony_garnier.jpg",
    description: "<span>Blabla français 5</span><span>Blabla english 5</span>",
  },
  {
    id: 8,
    name: "Basilique de Fourvière // Fourvière Basilica",
    district: "Lyon 5ème // Lyon 5th",
    picture: "./assets/images/sites/lyon_5eme_fourviere.jpg",
    description: "<span>Blabla français 5</span><span>Blabla english 5</span>",
  },
];

function createCard(title, imageUrl, district, description, id) {
  const card = document.createElement("div");
  card.classList.add("card");
  cards.appendChild(card);

  const cardImg = document.createElement("div");
  cardImg.style.backgroundImage = `url(${imageUrl})`;
  cardImg.classList.add("card-img");
  card.appendChild(cardImg);

  const cardTitle = document.createElement("div");
  cardTitle.classList.add("card-title");
  cardTitle.dataset.translatable = "";
  cardTitle.innerHTML = title;
  card.appendChild(cardTitle);

  const cardDistrict = document.createElement("div");
  cardDistrict.classList.add("card-district");
  cardDistrict.dataset.translatable = "";
  cardDistrict.innerHTML = district;
  card.appendChild(cardDistrict);

  const overlay = document.createElement("div");
  overlay.id = id;
  overlay.classList.add("overlay");
  cards.appendChild(overlay);
  overlay.style.display = "none";
  document.getElementById(id).addEventListener("click", () => {
    document.getElementById(id).style.display = "none";
  });

  const overlayScrolling = document.createElement("div");
  overlayScrolling.classList.add("scrolling");
  overlayScrolling.dataset.translatable = "";
  overlayScrolling.innerHTML = description;
  overlay.appendChild(overlayScrolling);

  card.addEventListener("click", () => {
    document.getElementById(id).style.display = "block";
  });
}

sitesList.forEach((site) =>
  createCard(site.name, site.picture, site.district, site.description, site.id)
);
