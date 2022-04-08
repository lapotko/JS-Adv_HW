let nameInput = document.getElementById('name');
let button = document.querySelector('input[type="submit"]');
let namePattern = /^[а-яА-яЁёa-zA-Z]*?\s?[а-яА-яЁёa-zA-Z]*[\-]?[а-яА-яЁёa-zA-Z]*\s?$/gmi;
let phonePattern = /^\+7\(\d{3}\)\d{3}-\d{4}$/;
let mailPattern = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,4}$/gmi
button.onclick = function () {
    let str = nameInput.value;
    if (!namePattern.test(str)) {
        console.log('error');
    } else console.log('ok');
}
//if input[i].id.test
//it`s better do this with "forEach" method
/* function test(name){
    let str = document.getElementById(name)
    if(str.value)
} */
