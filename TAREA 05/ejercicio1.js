let guardar = document.getElementsByTagName('button');

guardar[0].addEventListener('submit', function(){
    event.preventDefault();

    let name = document.getElementByClassName('name').value;
    let first_surname = document.getElementByClassName('first_surname').value;
    let second_surname = document.getElementsByClassName('second_surname').value;
    let dni = document.getElementsByClassName('dni').value;

    window.localStorage.setItem('name', JSON.stringify(name));
    window.localStorage.setItem('first_surname', JSON.stringify(first_surname));
    window.localStorage.setItem('second_surname', JSON.stringify(second_surname));
    window.localStorage.setItem('dni', JSON.stringify(dni));
})