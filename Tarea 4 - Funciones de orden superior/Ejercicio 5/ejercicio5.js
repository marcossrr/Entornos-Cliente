let photo = document.getElementsByClassName("photo");
let container = document.getElementsByClassName("photo-container");
let title = document.getElementsByTagName("h1");
let body = document.getElementsByTagName("body");
let change = false

for (let i = 0; i < photo.length; i++) {
    photo[i].style.transition = "2s";
}
for (let i = 0; i < container.length; i++) {
    container[i].style.transition = "2s";
}
title[0].style.transition = "2s";
body[0].style.transition = "2s";

let interval = setInterval(() => {
    if (change === false) {

        photo[0].style.height = "200px";
        photo[1].style.height = "400px";
        photo[2].style.height = "600px";

        photo[0].style.lineHeight = "150px";
        photo[1].style.lineHeight = "300px";
        photo[2].style.lineHeight = "400px";

        photo[0].style.color = "black";
        photo[1].style.color = "black";
        photo[2].style.color = "black";

        title[0].style.color = "white";

        for (let i = 0; i < container.length; i++) {
            container[i].style.height = "200px";
        }

        change = true;

    } else {

        for (let i = 0; i < photo.length; i++) {
            photo[i].style.height = "0px";
            photo[i].style.color = "white";
        }

        for (let i = 0; i < container.length; i++) {
            container[i].style.height = "600px";
        }

        title[0].style.color = "black;"
    }
}, 5000)
