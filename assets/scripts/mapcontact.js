const map = L.map("mapid");

const iconMe = L.icon({
  iconUrl: "./assets/images/icons/Me.png",
  iconSize: [50, 50],
  iconAnchor: [12, 50],
  popupAnchor: [15, -50],
});
const iconWild = L.icon({
  iconUrl: "./assets/images/icons/ordinateur.png",
  iconSize: [50, 50],
  iconAnchor: [0, 10],
  popupAnchor: [19, -10],
});

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([45.74636657848492, 4.8271802891410704], { icon: iconWild })
  .addTo(map)
  .bindPopup("Wild Code School")
  .openPopup();

function onLocationFound(position) {
  const lat = position.latitude;
  const lng = position.longitude;
  L.marker([lat, lng], { icon: iconMe }).addTo(map).bindPopup("Me").openPopup();
  map.setView(new L.LatLng(45.74636657848492, 4.8271802891410704), 16);
}

function onLocationError(e) {
  map.setView(new L.LatLng(45.76428137089953, 4.8320291315741954), 16);
}

map.on("locationfound", onLocationFound);
map.on("locationerror", onLocationError);

map.locate({ setView: true, maxZoom: 13 });
