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
for(i = 0; i < chiTown.length; i++){
  if(chiTown[i].innerHTML == "Chicago"){
    chiTown[i].remove();
  }
}

  }

  // Part 6
  // Although I am aware how to do this
  // it is best to use w3schools for this one
  // This one was done courtesy of w3schools
  // here is the link to the source code:
  // https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_appendchild
  function addPastRace() {
    var node = document.createElement("li");
    var textnode = document.createTextNode("Orlando");
    node.appendChild(textnode);
    document.getElementById("past-races").appendChild(node);
  }


  // Part 7
  function createNewBlogPost() {
    // Create a new `.blog-post` corresponding to the new city 
    // added in **Part 6**. You will have to create a new `<div>` 
    // with class of `.blog-post`, a new `<h1>` with text, and a 
    // new `<p>` with some text. Think about what order you want 
    // to create the elements, and what order you want to append 
    // them in.

let mainDiv = document.querySelector('.main');

let newDiv = document.createElement('div');
newDiv.setAttribute("class", "blog-post purple");
let myH1 = document.createElement('h1');
// myCity = document.createTextNode("Orlando");
// myH1.appendChild(myCity);
myH1.innerHTML = "Orlando";
// let h1Txt = document.createTextNode("Orlando");
let myPara = document.createElement('p');
myPara.setAttribute("class", "new-para")
myPara.innerHTML = "I DRIFTED AROUND UNIVERSAL STUDIOS!"
// let paraNode = document.createTextNode("I drifted Universal around Universal Studios!")
// myPara.appendChild(paraNode);
// myH1.appendChild(h1Txt);
myH1.appendChild(myPara);
newDiv.appendChild(myH1);
mainDiv.appendChild(newDiv);
console.log(mainDiv);





    
    // <div class="blog-post purple">
    // <h1>Los Angeles</h1>
    // <p>I RACED PAUL WALKER AND WON HIS CAR WITH MY CAR!</p>
    // </div>

  }

shortenPageTitle();
changeBodyBgColor();
removeLastFavoriteThing();
makeSpecialTitlesBigger();
RemoveChicagoRace();
addPastRace();
createNewBlogPost();
});
