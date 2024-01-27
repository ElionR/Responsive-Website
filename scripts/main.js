document.getElementById("home-learn-more").addEventListener("click", function() {
    document.getElementById("quote").scrollIntoView({ behavior: 'smooth' });
});

var icon = document.getElementById("menu-icon");
var menu = document.getElementById("mobile-menu");
var flamur = true;

function toggleMenu(){
  if(flamur){
    menu.style.width="230px";
  }
  else{
    menu.style.width="0px";
  }
  flamur=!flamur
}



icon.addEventListener("click",()=>{
  toggleMenu();
});

window.addEventListener('resize', () => {
  flamur=true;
  menu.style.width="0px";
})




const quoteParagraph = document.getElementById('quote-text-img');
const previousButton = document.getElementById('previousBtn');
const nextButton = document.getElementById('nextBtn');

const quotes = [
  "Do the most productive thing possible at every given moment― Tom Hopkins.",
  "The soul becomes dyed with the color of its thoughts.―  Marcus Aurelius",
  "Just when you think it can't get any worse, it can. And just when you think it can't get any better, it can.―  Nicholas Sparks",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "The only way to guarantee peace is by making the prospect of war seem hopeless― Thomas Shelby",
  "A lion doesn't concern itself with the opinion of sheep.― George R.R. Martin",
  "Did you think the lion was sleeping because he didn't roar― Friedrich Schiller",
  "La familia es todo.― Hector Salamanca  ",
  "You can change what you do ,but you can't change what you want― Thomas Shelby",
  "He who is brave is free.",
  "You have power over your mind – not outside events. Realize this, and you will find strength.", 
  "You have power over your mind — not outside events. Realize this, and you will find strength.―  Marcus Aurelius"
];

let currentQuoteIndex = 0;

function showQuote() {
  quoteParagraph.textContent = quotes[currentQuoteIndex];
}

function goToPreviousQuote() {
  currentQuoteIndex--;
  if (currentQuoteIndex < 0) {
    currentQuoteIndex = quotes.length - 1;
  }
  showQuote();
}

function goToNextQuote() {
  currentQuoteIndex++;
  if (currentQuoteIndex >= quotes.length) {
    currentQuoteIndex = 0;
  }
  showQuote();
}

previousButton.addEventListener('click', goToPreviousQuote);
nextButton.addEventListener('click', goToNextQuote);

showQuote();


previousButton.addEventListener('click', changeText());
nextButton.addEventListener('click', changeText());


var btns = document.querySelectorAll(".buttoni")


function changeText(){ 
quoteParagraph.style.opacity = "0";
    quoteParagraph.style.transition =".0s";
    setTimeout(()=>{

      quoteParagraph.style.transition =".4s";
        quoteParagraph.style.opacity="1";
        
    },300)

}


btns.forEach((x)=>{x.addEventListener("click",changeText)})
