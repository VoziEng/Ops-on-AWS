document.addEventListener("DOMContentLoaded", function() {
    fetch('/data')
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
            console.error('Error fetching vehicle data:', error);
        });
});
