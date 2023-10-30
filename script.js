fetch("header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;
  });

fetch("footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  });

const mobileMenu = document.querySelector(".mobileMenu");
const navMenu = document.querySelector(".navMenu");

mobileMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle('active');
  navMenu.classList.toggle('active');
})

document.querySelectorAll(".na-link").forEach(n =>n.addEventListener("click",()=>{
    mobileMenu.classList.remove('active');
    navMenu.classList.remove('active');
}))

