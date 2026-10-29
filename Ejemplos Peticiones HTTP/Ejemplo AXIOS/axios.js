const getData = async () => {
    try {
        let response = await axios.get('https://cataas.com/api/cats?limit=10&skip=0'); 
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

getData();
