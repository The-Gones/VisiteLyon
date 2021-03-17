const locatButton = document.getElementById('geoloc-button');
const geolocStatus = document.getElementById('geoloc-status');

function onGeolocSuccess(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    
    const map = L.map('mapid').setView([lat, lng], 18);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
L.marker([lat, lng]).addTo(map)
    .openPopup();
}
locatButton.addEventListener('click', function() {
    if(!navigator.geolocation) {
        geolocStatus.textContent = 'geolocalisation not support';
    } else{
        navigator.geolocation.getCurrentPosition(onGeolocSuccess);
    }
});