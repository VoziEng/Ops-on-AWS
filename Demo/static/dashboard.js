document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("#sidebar nav ul a");

  links.forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const target = this.getAttribute("href").substring(1);
      window.location.href = `/${target.toLowerCase().replace(" ", "-")}`;
    });
  });
});

document.querySelectorAll('.know-more').forEach(button => {
  button.addEventListener('click', function() {
      alert('More details to come!');
  });
});

document.querySelectorAll('.know-more-one').forEach(button => {
button.addEventListener('click', function() {
    alert('More details to come!');
});
});


document.addEventListener('DOMContentLoaded', function() {
var knowMoreButton = document.querySelector('.know-more-two');
knowMoreButton.addEventListener('click', function() {
    alert('More information about driver performance.');
});
});

document.getElementById('toPDF').addEventListener('mouseover', function() {
  this.classList.add('hover-blue');
});

document.getElementById('toPDF').addEventListener('mouseout', function() {
  this.classList.remove('hover-blue');
});



function exportTableToExcel() {
  var table = document.querySelector('table'); // Adjust the selector if necessary
  var workbook = XLSX.utils.table_to_book(table); // Convert the table to a workbook
  var defaultFileName = "table_data"; // Default file name

  // Prompt user for file name, use default if no name is entered
  var fileName = prompt("Enter the name of the file", defaultFileName);
  if (fileName) {
      XLSX.writeFile(workbook, fileName + '.xlsx'); // Write the file
  }
}

// JavaScript for search functionality

document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.querySelector('input[type="search"]');

  searchInput.addEventListener('input', function() {
      const searchTerm = this.value.toLowerCase();
      const table = document.querySelector('.table__body table');
      const rows = table.querySelectorAll('tbody tr');

      rows.forEach(row => {
          const cells = row.querySelectorAll('td');
          const rowText = Array.from(cells).reduce((acc, cell) => acc + cell.textContent.toLowerCase(), '');
          row.style.display = rowText.includes(searchTerm) ? '' : 'none';
      });
  });
});
