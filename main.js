//accordion start
var accordionTitle = document.querySelectorAll('#accordion .accordion-header');
var accordDesc =document.querySelectorAll('#accordion .open-p')

//accordion dropdown
function openAccordion() {

  //toogle indicator
  for (i=0; i <accordionTitle.length; i++) {
    accordionTitle[i].childNodes[3].innerHTML = '▼';
    accordDesc[i].classList.remove('accordion-open');
  }

  this.nextElementSibling.classList.toggle ('accordion-open');
  this.childNodes[3].innerHTML ='▲';
}
//event listener
for (i=0; i < accordionTitle.length; i++) {
  accordionTitle[i].addEventListener ('click', openAccordion);
}
//accordion end
//hamburger menu
var hamburgerButton = document.getElementById('hamburger');
var navMenu = document.querySelector('.menu');

function toggleMenu() {
  navMenu.classList.toggle('show-mobile-menu');
}
hamburgerButton.addEventListener('click',toggleMenu);
