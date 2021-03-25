const cards = document.querySelector(".cards");
const sitesList = [
  {
    id: 1,
    name: "Restaurant Gastronomique Christian Tetedoie",
    district: "Lyon 5ème // Lyon 5th",
    picture: "./assets/images/restaurants/restaurant_tetedoie.jpg",
    description:
      "<span>Assurement une des plus belles tables de Lyon.Le restaurant de Christian Christian Têtedoie nous propose une cuisine gastronomique prestigieuse.</span> <span>Certainly one of the most beautiful Restaurants in Lyon. Christian Têtedoie's restaurant offers prestigious gourmet cuisine.</span>",
  },
  {
    id: 2,
    name: "Restaurant Paul Bocuse",
    district: "Collonges au Mont d'Or // Collonges Collonges au Mont d'Or ",
    picture: "./assets/images/restaurants/restaurant_paul_bocuse.png",
    description:
      "<span>Commemt decrire un monumemt tel que Monsieur Paul ? Sa disparition il y a 2 ans a laisse un grand vide a Collonges mais le flambeau a vite ete repris et la famille reste aux commandes</span><span>How to describe a monument such as Monsieur Paul? His disappearance 2 years ago left a great void in Collonges but the torch was quickly picked up and the family remains in charge</span>",
  },
  {
    id: 3,
    name: "Restaurant La Table de Max",
    district: "Lyon 7ème // Lyon 7th",
    picture: "./assets/images/restaurants/restaurant_la_table_de_max.jpg",
    description:
      "<span>Un restaurant de copain pour une cuisine simple mais recomfortante</span><span>A friend's restaurant for simple but comforting cuisine</span>",
  },
  {
    id: 4,
    name: "Bouchon Les Lyonnais",
    district: "Lyon 5er // Lyon 5st",
    picture: "./assets/images/restaurants/restaurant_bouchon_les_lyonnais.JPG",
    description:
      "<span>Ahhhh les celebres bouchons lyonnais, si tu as 50 ans et que tu n'as pas mis les pieds dans un bouchon c'est que tu as rate ta vie !</span><span>Ahhhh the famous Bouchons Lyonnais, if you are 50 years old and you have not set foot in a cork you have missed your life!</span>",
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

for (let site of sitesList) {
  createCard(site.name, site.picture, site.district, site.description, site.id);
}
