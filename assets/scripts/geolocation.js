const latLgnArray = [
  ["Rue de Saint Jean", 45.76284862751659, 4.82712289542231],
  ["Bellecour", 45.75784511732561, 4.8318345861873855],
  ["Paul Bocuse", 45.815623046911064, 4.848125827332044],
  ["Parc de la tête d'or", 45.77724496109871, 4.854030158042909],
  ["Hôtel de Ville", 45.767720762954404, 4.835725478180787],
  ["Institut lumière", 45.74490954213577, 4.870858098379423],
  ["Bouchon Lyonnais", 45.76187314114473, 4.82623209282098],
  ["Tetedoie", 45.75894375572862, 4.823471376799861],
  ["La table de Max", 45.7504299522329, 4.844660414172378],
  ["Musée Des Confluences", 45.73315440812064, 4.8181694445917245],
  ["Halle Tony Garnier", 45.730841613025476, 4.824883982891172],
  ["Fourvière", 45.76201107234311, 4.822013365999859],
];

const map = L.map("mapid", {
  minZoom: 0,
  zoom: 20,
  maxZoom: 30,
});

const iconMe = L.icon({
  iconUrl: "./assets/images/icons/Me.png",
  iconSize: [50, 50],
  iconAnchor: [12, 50],
  popupAnchor: [15, -50],
});
const iconRestaurant = L.icon({
  iconUrl: "./assets/images/icons/restaurant.png",
  iconSize: [50, 50],
  iconAnchor: [0, 10],
  popupAnchor: [19, -10],
});
const iconMonument = L.icon({
  iconUrl: "./assets/images/icons/monument.png",
  iconSize: [40, 51],
  iconAnchor: [0, 18],
  popupAnchor: [18, -15],
});

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([45.76284862751659, 4.82712289542231], { icon: iconMonument })
  .addTo(map)
  .bindPopup("Rue de Saint Jean")
  .openPopup();
L.marker([45.75784511732561, 4.8318345861873855], { icon: iconMonument })
  .addTo(map)
  .bindPopup("Bellecour")
  .openPopup();
L.marker([45.815623046911064, 4.848125827332044], { icon: iconRestaurant })
  .addTo(map)
  .bindPopup("Paul Bocuse")
  .openPopup();
L.marker([45.77724496109871, 4.854030158042909], { icon: iconMonument })
  .addTo(map)
  .bindPopup("Parc de la tête d'or")
  .openPopup();
L.marker([45.767720762954404, 4.835725478180787], { icon: iconMonument })
  .addTo(map)
  .bindPopup("Hôtel de Ville")
  .openPopup();
L.marker([45.74490954213577, 4.870858098379423], { icon: iconMonument })
  .addTo(map)
  .bindPopup("Institut lumière")
  .openPopup();
L.marker([45.76187314114473, 4.82623209282098], { icon: iconRestaurant })
  .addTo(map)
  .bindPopup("Bouchon Lyonnais")
  .openPopup();
L.marker([45.75894375572862, 4.823471376799861], { icon: iconRestaurant })
  .addTo(map)
  .bindPopup("Tetedoie")
  .openPopup();
L.marker([45.7504299522329, 4.844660414172378], { icon: iconRestaurant })
  .addTo(map)
  .bindPopup("La table de max ")
  .openPopup("");
L.marker([45.73315440812064, 4.8181694445917245], { icon: iconMonument })
  .addTo(map)
  .bindPopup("Musée Des Confluences")
  .openPopup();
L.marker([45.730841613025476, 4.824883982891172], { icon: iconMonument })
  .addTo(map)
  .bindPopup("Halle Tony Garnier")
  .openPopup();
L.marker([45.76201107234311, 4.822013365999859], { icon: iconMonument })
  .addTo(map)
  .bindPopup("Fourvière")
  .openPopup();

function distance(lat1, lon1, lat2, lon2, unit) {
  if (lat1 === lat2 && lon1 === lon2) {
    return 0;
  }
  const radlat1 = (Math.PI * lat1) / 180;
  const radlat2 = (Math.PI * lat2) / 180;
  const theta = lon1 - lon2;
  const radtheta = (Math.PI * theta) / 180;
  let dist =
    Math.sin(radlat1) * Math.sin(radlat2) +
    Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
  if (dist > 1) {
    dist = 1;
  }
  dist = Math.acos(dist);
  dist = (dist * 180) / Math.PI;
  dist = dist * 60 * 1.1515;
  if (unit === "K") {
    dist *= 1.609344;
  }
  if (unit === "N") {
    dist *= 0.8684;
  }
  return dist;
}

function onLocationFound(position) {
  const lat = position.latitude;
  const lng = position.longitude;
  L.marker([lat, lng], { icon: iconMe }).addTo(map).bindPopup("Me").openPopup();
  map.setView(new L.LatLng(lat, lng), 13);

  const distancesArray = [];
  latLgnArray.forEach((point) => {
    distancesArray.push([
      distance(point[1], point[2], lat, lng, "K").toFixed(3),
      point[0],
    ]);
  });

  distancesArray.sort((a, b) => a[0] - b[0]);

  const listDistances = document.querySelector("#distances");
  for (let site in distancesArray) {
    const oneDistance = document.createElement("li");
    oneDistance.dataset.translatable = "";
    oneDistance.innerHTML = `<span>Le site <span style="color:var(--highlight-color);">${distancesArray[site][1]}</span> est à <span style="color:var(--highlight-color);">${distancesArray[site][0]} km</span> de vous</span><span>The site <span style="color:var(--highlight-color);">${distancesArray[site][1]}</span> is at <span style="color:var(--highlight-color);">${distancesArray[site][0]} km</span> from you</span>`;
    oneDistance.classList.add("distance");
    listDistances.appendChild(oneDistance);
  }
}

function onLocationError(e) {
  map.setView(new L.LatLng(45.76428137089953, 4.8320291315741954), 12);
}

map.on("locationfound", onLocationFound);
map.on("locationerror", onLocationError);

map.locate({ setView: true });
