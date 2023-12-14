// Initialize the map and set its view to our chosen geographical coordinates and a zoom level:
var mymap = L.map('map').setView([20.5937, 78.9629], 5);

// Set up the OSM layer:
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(mymap);

// Example data for drivers, you would get this from your backend

const drivers = [
  { name: 'GANGADHARA R', id: '6360194858' },
  { name: 'Dadapeer D R', id: '6363526230' },
  { name: 'SACHIN G S G S', id: '6363675269' },
  // ... more drivers
];



// Function to add a marker for a driver
function addDriverMarker(driver) {
    L.marker(driver.latLng).addTo(mymap)
        .bindPopup(driver.name);
}

// Populate the driver list and add markers
drivers.forEach(driver => {
    var driverElement = document.createElement('div');
    driverElement.className = 'driver';
    driverElement.textContent = driver.name;
    document.getElementById('driver-list').appendChild(driverElement);

    addDriverMarker(driver);
});

function searchDrivers(searchTerm) {
  // Filter the drivers array
  const filteredDrivers = drivers.filter(driver => 
      driver.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Update the UI with the filtered list
  const driverListElement = document.getElementById('driver-list');
  driverListElement.innerHTML = ''; // Clear the current list

  // Append the filtered drivers to the driver list
  filteredDrivers.forEach(driver => {
      const driverElement = document.createElement('li');
      driverElement.textContent = driver.name;
      driverListElement.appendChild(driverElement);
  });
}

document.getElementById('search-driver').addEventListener('input', function(e) {
    searchDrivers(e.target.value);
});



// Initialize map using a library like Leaflet.js
// var map = L.map('map').setView([51.505, -0.09], 13);
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '© OpenStreetMap contributors'
// }).addTo(map);

// You would also handle status filter toggles and update the driver list accordingly.
