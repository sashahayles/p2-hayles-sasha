//accordion start
var accordionTitle = document.querySelectorAll('#accordion .accordion-header');
var accordDesc = document.querySelectorAll('#accordion .open-p');
//accordion dropdown
function openAccordion() {
  //toogle indicator
  for (i = 0; i < accordionTitle.length; i++) {
    accordionTitle[i].childNodes[3].innerHTML = '▼';
    accordDesc[i].classList.remove('accordion-open');
  }
  this.nextElementSibling.classList.toggle('accordion-open');
  this.childNodes[3].innerHTML = '▲';
}
//event listener
for (i = 0; i < accordionTitle.length; i++) {
  accordionTitle[i].addEventListener('click', openAccordion);
}
//accordion end
//hamburger menu
var hamburgerButton = document.getElementById('hamburger');
var navMenu = document.querySelector('.menu');

function toggleMenu() {
  navMenu.classList.toggle('show-mobile-menu');
}
hamburgerButton.addEventListener('click', toggleMenu);
//hamburger menu end
//learn more extend
var pennylink = document.getElementById("learnbutton"),
morepenny = document.getElementById("pennymore");
pennylink.addEventListener("click", function(event) {
  event.preventDefault();
  morepenny.style.display = (pennymore.style.display === "none") ? "block" : "none";
}, false);
pennymore.style.display = "none";

//API random quotes
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var apiResult = JSON.parse(this.responseText);
    //Code Dealing With The API Data Goes Here
    //variables for quotes
    var randomQuote = document.createTextNode(apiResult [10].text);
    //add quote
    var quotes = document.querySelectorAll('#pennymore p span.learnquote');
    quotes[0].appendChild(randomQuote);
  }
};
xmlhttp.open('GET', 'https://type.fit/api/quotes', true);
xmlhttp.send();
