/* Navbar */
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
  menuBtn.onclick = () => {
    navbar.classList.add("show");
    menuBtn.classList.add("hide");
    body.classList.add("disabled");
  }
  cancelBtn.onclick = () => {
    body.classList.remove("disabled");
    navbar.classList.remove("show");
    menuBtn.classList.remove("hide");
  }
  window.onscroll = () => {
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
  }

window.addEventListener('scroll', function () {
  const nav = document.querySelector('nav');
  nav.classList.toggle('sticky', window.scrollY > 0)
})

/* Slides */
const slides = document.querySelector('.slider').children
const indicatorImages = document.querySelector('.slider-indicator').children;

for(let i = 0; i < indicatorImages.length; i++) {
  indicatorImages[i].addEventListener('click', function() {
    for(let j = 0; j < indicatorImages.length; j++) {
      indicatorImages[j].classList.remove('active')
    }
    this.classList.add('active')
    const id = this.getAttribute('data-id');
    for(let j = 0; j < slides.length; j++) {
      slides[j].classList.remove('active')
    }
    slides[id].classList.add('active')
  })
}