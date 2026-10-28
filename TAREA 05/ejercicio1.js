let form = document.getElementsByTagName('form');
let getData = document.getElementsByClassName('get_data');

form[0].addEventListener('submit', function(event){
    event.preventDefault();

    let name = document.getElementsByClassName('name').value;
    let first_surname = document.getElementsByClassName('first_surname').value;
    let second_surname = document.getElementsByClassName('second_surname').value;
    let dni = document.getElementsByClassName('dni').value;

    let user = {
        name: 'name',
        firstSurname: 'first_surname', 
        secondSurname: 'second_surname'
    }

    localStorage.setItem('dni', JSON.stringify(user));
})


