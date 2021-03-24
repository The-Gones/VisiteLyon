// const markerMonument = L.icon({iconUrl: Me.png});

function onGeolocSuccess(position) {
  const iconMe = L.icon({
    iconUrl: "./assets/Icons/Me.png",
    iconSize: [50, 50],
    iconAnchor: [12, 50],
    popupAnchor: [15, -50],
  });
  const iconRestaurant = L.icon({
    iconUrl: "./assets/Icons/restaurant.png",
    iconSize: [50, 50],
    iconAnchor: [0, 10],
    popupAnchor: [19, -10],
  });
  const iconMonument = L.icon({
    iconUrl: "./assets/Icons/monument.png",
    iconSize: [40, 51],
    iconAnchor: [0, 18],
    popupAnchor: [18, -15],
  });
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const map = L.map("mapid").setView([lat, lng], 15);
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
  L.marker([lat, lng], { icon: iconMe }).addTo(map).bindPopup("Me").openPopup();
}

// function showContact(position) {
//   const iconContact = L.icon({
//     iconUrl: "./assets/Icons/Me.png",
//     iconSize: [50, 50],
//     iconAnchor: [12, 50],
//     popupAnchor: [15, -50],
//   });

//   const map = L.map("mapid").setView(
//     [45.74645589235081, 4.8271580692520475],
//     13
//   );
//   L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//     attribution:
//       '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//   }).addTo(map);

//   L.marker([lat, lng], { icon: iconMe }).addTo(map).bindPopup("Me").openPopup();
// }

document.addEventListener("DOMContentLoaded", function (event) {
  if (window.location.pathname === "/index.html") {
    if (!navigator.geolocation) {
      geolocStatus.textContent = "Geolocation is not supported";
    } else {
      navigator.geolocation.getCurrentPosition(onGeolocSuccess);
    }
  } else if (window.location.pathname === "/contact.html") {
    navigator.geolocation(showContact);
  }
});
