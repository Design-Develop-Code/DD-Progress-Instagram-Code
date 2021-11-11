window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  document.getElementById("navbar").style.background = "#fff";
}
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelectorAll(".nav_link");

  navToggle.addEventListener("click", () => {
    document.body.classlist.toggle("nav-open");
  });

  navLinks.forEach((link) => {
    link.addEventlistener("click", () => {
      document.body.classList.remove("nav-open");
    });
  });
