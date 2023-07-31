let PokemonText = document.querySelector("h1");
PokemonText.style["background-color"] = "#2e549b";
PokemonText.style.textDecoration = "underline";

let intoText = document.querySelector("h2");
intoText.style["text-align"] = "center";

let Background = document.querySelector("body");
Background.style["background-color"] = "darkblue";

let bulb = document.querySelectorAll("#bulbasaur_container");
bulb[0].style["background-color"] = "#408c8c"; 

let names = document.querySelectorAll(".pokemon_names");
names[0].innerHTML = "Bulbasaur!";
names[1].innerHTML = "Charmander!";
names[2].innerHTML = "Squirtle!";


for (let i = 0; i < names.length; i++) {
    names[i].style.color = "#FDEFA6";
}

let images = document.querySelectorAll("img"); 

for (let i = 0; i < images.length; i++) {
    images[i].style["border-color"] = "yellow";
    images[i].style["border-style"] = "dotted";
}
