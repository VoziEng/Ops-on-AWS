document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchDriver');
  
    searchInput.addEventListener('keyup', function() {
      const term = searchInput.value.toLowerCase();
      const rows = document.querySelectorAll('table tbody tr');
  
      rows.forEach(row => {
        const driver = row.cells[0].textContent.toLowerCase();
        if(driver.indexOf(term) > -1) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });
    });
  }); 

  document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.querySelector('.button');
  
    downloadBtn.addEventListener('click', function() {
      // Assuming you want to download the table data
      const data = [['Driver Name', 'Booking Request', 'Acceptance Rate', 'Cancellation Rate', 'Completed Trips', 'Earnings', 'Cash Collected']];
      const rows = document.querySelectorAll('table tbody tr');
      
      rows.forEach(row => {
        const rowData = [];
        row.querySelectorAll('td').forEach(cell => {
          rowData.push(cell.innerText);
        });
        data.push(rowData);
      });
      
      const csvContent = data.map(e => e.join(",")).join("\n");
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      downloadBtn.setAttribute('href', url);
      downloadBtn.setAttribute('download', 'Performance_Report.csv');
    });
  });
  