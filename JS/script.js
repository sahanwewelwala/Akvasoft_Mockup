window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    document.getElementById("navbar").style.background = "#fff";
}

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        document.body.classList.remove("nav-open");
    });
});
const navbar = document.querySelector('.nav');
window.onscroll = () => {
    if (window.scrollY > 300) {
        navbar.classList.add('nav-active');
        navbar.classList.add('nav__link::before');
        
        var all = document.getElementsByClassName('nav__list');
        for (var i = 0; i < all.length; i++) {
            all[i].style.color = '#2e2e2e';
            
        }

    } else {
        
        navbar.classList.remove('nav-active');
        navbar.classList.add('nav__link-nav__item-active');
        var all = document.getElementsByClassName('nav__list');
        
        for (var i = 0; i < all.length; i++) {
            all[i].style.color = '#ffff';
           
        }
        
    }
};
AOS.init({
    duration: 3000,
  })
  