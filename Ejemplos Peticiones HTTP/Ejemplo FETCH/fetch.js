const getData = async () => {
    try {
        const response = await fetch('https://cataas.com/api/cats?limit=10&skip=0');
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse;
        }
    } catch (error) {
        console.log(error);
    }
}

const getCat = async () => {
    let data = await getData();
    console.log(data);
}

getCat();