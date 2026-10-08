let paragraphs = document.getElementsByTagName("p");
let div = document.getElementsByTagName("div");
let h1 = document.getElementsByTagName("h1");
let paragraph = [
    paragraph1,
    paragraph2,
    paragraph3,
    paragraph4,
    paragraph5
];
let imgs = [
    "imagenes/hemisferic/1.jpg",
    "imagenes/museu/1.jpg",
    "imagenes/oceanografic/1.jpg",
    "imagenes/palau/1.jpg",
    "imagenes/umbracle/1.jpg"
]

for (let i = 0; i + 1 < paragraphs.length; i++) {
    paragraphs[i].remove();
}

paragraphs[0].style.visibility = "hidden";
div[0].style.visibility = "hidden";



h1[0].addEventListener('mouseover', function () {
    this.style.backgroundImage = ""
})
