const getData = () => {
    const xhr = new XMLHttpRequest();
    const url = 'https://cataas.com/api/cats?limit=10&skip=0';
    xhr.responseType = 'text';
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            try {
                let data = JSON.parse(xhr.responseText);
                console.log(data);
            } catch (err) {
                console.log(err.message + " in " + xhr.responseText);
                return;
            }
        }
    }
    xhr.open('GET', url);
    xhr.send();
}

getData();
