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
