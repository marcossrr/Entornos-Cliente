let button = document.getElementsByName('cat');
let img = document.createElement('img');
button[0].insertAdjacentElement("afterend", img);

const getData = async (url) => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse;
        }
    } catch (error) {
        console.log(error);
    }
}

async function showcat(e) {
    let data = await getData('https://api.thecatapi.com/v1/images/search?size=full');
    img.src = data[0].url;
}

button[0].addEventListener('click', (e) => showcat(e));