document.addEventListener("DOMContentLoaded", function() {
    // Function to determine the correct data endpoint
    function determineEndpoint() {
        // Check for a specific element or URL to decide the endpoint
        if (document.URL.includes('driver')) {
            return '/drivers_data';
        } else if (document.URL.includes('vehicles')) {
            return '/vehicles_data';
        } else if (document.URL.includes('performance')) {
            return '/performance_data'; 
        }
    }

    const endpoint = determineEndpoint();

    fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            let tableBody = document.querySelector('.table__body tbody');
            data.forEach(row => {
                let tr = document.createElement('tr');
                Object.values(row).forEach(text => {
                    let td = document.createElement('td');
                    td.textContent = text;
                    tr.appendChild(td);
                });
                tableBody.appendChild(tr);
            });
        }).catch(error => {
            console.error('Error fetching data:', error);
        });
});
