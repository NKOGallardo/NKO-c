const cards = document.querySelectorAll(
".policy-card, .promise"
);


function reveal(){

cards.forEach(card=>{

const position =
card.getBoundingClientRect().top;


if(position < window.innerHeight - 100){

card.classList.add("show");

}

});

}


window.addEventListener(
"scroll",
reveal
);


reveal();