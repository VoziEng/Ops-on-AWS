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
