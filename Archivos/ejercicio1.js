let nav = document.getElementsByTagName("nav");
let title = document.getElementsByTagName("h2");

let paragraph1 = document.createElement("p");
let paragraph2 = document.createElement("p");
let paragraph3 = document.createElement("p");
let paragraph4 = document.createElement("p");
let paragraph5 = document.createElement("p");

nav[0].appendChild(paragraph1);
nav[0].appendChild(paragraph2);
nav[0].appendChild(paragraph3);
nav[0].appendChild(paragraph4);
nav[0].appendChild(paragraph5);

paragraph1.innerHTML = "Hemisferic";
paragraph2.innerHTML = "Museu de le ciencies";
paragraph3.innerHTML = "Oceanografic";
paragraph4.innerHTML = "Palau de les arts";
paragraph5.innerHTML = "Umbracle";

nav[0].style.visibility = "hidden";

title[0].addEventListener('click', function(){
    if(nav[0].style.visibility = "hidden"){
        nav[0].style.visibility = "visible";
    }else{
        nav[0].style.visibility = "hidden";
    }
    }
)

