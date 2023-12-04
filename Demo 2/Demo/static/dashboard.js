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