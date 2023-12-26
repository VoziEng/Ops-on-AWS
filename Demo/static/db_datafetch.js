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
            let tableBody = document.querySelector('table tbody'); // Ensure this selector matches the actual table body in your HTML
            data.forEach(row => {
                let tr = document.createElement('tr');
                // Ensure that the keys in 'row' match the table column order
                Object.keys(row).forEach(key => {
                    let td = document.createElement('td');
                    td.textContent = row[key]; // Use 'row[key]' to maintain the order of data
                    tr.appendChild(td);
                });
                tableBody.appendChild(tr);
            });
        }).catch(error => {
            console.error('Error fetching data:', error);
        });
});
