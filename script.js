const locatButton = document.getElementById('geoloc-button');
const geolocStatus = document.getElementById('geoloc-status');


function onGeolocSuccess(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const map = L.map('mapid').setView([lat, lng], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
L.marker([lat, lng]).addTo(map)
    .bindPopup('Me')
    .openPopup();
L.marker([45.76284862751659, 4.82712289542231]).addTo(map)
    .bindPopup('Rue de Saint Jean')
    .openPopup();
L.marker([45.75784511732561, 4.8318345861873855]).addTo(map)
    .bindPopup('Bellecour')
    .openPopup();
L.marker([45.815623046911064, 4.848125827332044]).addTo(map)
    .bindPopup('Paul Bocuse')
    .openPopup();
L.marker([45.77724496109871, 4.854030158042909]).addTo(map)
    .bindPopup("Parc de la tête d'or")
    .openPopup()
L.marker([45.767720762954404, 4.835725478180787]).addTo(map)
    .bindPopup('Hôtel de Ville')
    .openPopup()
L.marker([45.74490954213577, 4.870858098379423]).addTo(map)
    .bindPopup('Institut lumière')
    .openPopup()
L.marker([45.76187314114473, 4.82623209282098]).addTo(map)
    .bindPopup('Bouchon Lyonnais')
    .openPopup()
L.marker([45.75894375572862, 4.823471376799861]).addTo(map)
    .bindPopup('Tetedoie')
    .openPopup()
L.marker([45.7504299522329, 4.844660414172378]).addTo(map)
    .bindPopup('La table de max')
    .openPopup()
L.marker([45.73315440812064, 4.8181694445917245]).addTo(map)
    .bindPopup('Musée Des Confluences')
    .openPopup()
L.marker([45.730841613025476, 4.824883982891172]).addTo(map)
    .bindPopup('Hall Tony Gargnier')
    .openPopup()    
    L.marker([45.76201107234311, 4.822013365999859]).addTo(map)
    .bindPopup('Fourvière')
    .openPopup() 
}

locatButton.addEventListener('click', function() {
    if(!navigator.geolocation) {
        geolocStatus.textContent = 'geolocalisation not support';
    } else{
        navigator.geolocation.getCurrentPosition(onGeolocSuccess);
    }
});
