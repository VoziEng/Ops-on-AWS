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


// script.js
document.addEventListener("DOMContentLoaded", function() {
  // When the user clicks on the profile icon, toggle between hiding and showing the dropdown content
  document.querySelector('.dropbtn').addEventListener('click', function() {
      document.getElementById("myDropdown").classList.toggle("show");
  });

  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          for (var i = 0; i < dropdowns.length; i++) {
              var openDropdown = dropdowns[i];
              if (openDropdown.classList.contains('show')) {
                  openDropdown.classList.remove('show');
              }
          }
      }
  }

  // Optional: Add functionality for logout
  document.getElementById('logout').addEventListener('click', function() {
      // Logout logic here
      console.log("Logging out...");
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
