let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

document.addEventListener('DOMContentLoaded', function(event) {

  // Random quote of the day generator
  function randomQuote() {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener

  // Part 1
  function shortenPageTitle() {
let myTitle = document.getElementById('main-title');
myTitle.innerHTML = "Welcome to my homepage."
  }


  // Part 2
  function changeBodyBgColor() {
document.body.style.backgroundImage = "linear-gradient(to bottom, yellow , red, blue)";
  }


  // Part 3
  function removeLastFavoriteThing() {
 let favThings = document.getElementById("favorite-things").lastElementChild;
 console.log(favThings.innerHTML)
 favThings.remove(favThings);
 
 }


  // Part 4
  function makeSpecialTitlesBigger() {
    var myFont = document.querySelectorAll(`.special-title`);
    for ( var i = 0; i < myFont.length; i ++ ) {
        myFont[i].style.fontSize = "2rem";
    }
  }


  // Part 5
  function RemoveChicagoRace() {
let chiTown = document.getElementById("past-races").children;
console.log(chiTown);
for(i = 0; i < chiTown.length; i++){
  if(chiTown[i].innerHTML == "Chicago"){
    chiTown[i].remove();
  }
}

  }

  // Part 6
  function addPastRace() {

  }


  // Part 7
  function createNewBlogPost() {

  }

shortenPageTitle();
changeBodyBgColor();
removeLastFavoriteThing();
makeSpecialTitlesBigger();
RemoveChicagoRace();
});
