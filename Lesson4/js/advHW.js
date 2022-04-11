
let button = document.querySelector('button[type="submit"]');
let patterns = {
    //свойстов должно совпадать с id у input'а
    name: /^[а-яА-яЁёa-zA-Z]+\s?[а-яА-яЁёa-zA-Z]*[\-]?[а-яА-яЁёa-zA-Z]*\s?$/gi,
    phone: /^\+7\(\d{3}\)\d{3}-\d{4}$/,
    mail: /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,4}$/gi
}
function test(event) {
    let inputs = Array.from(document.getElementsByTagName('input'));//make array from collection
    inputs.forEach(element => {
        let p = element.nextElementSibling;
        let pattern = patterns[element.id];
        if (!pattern.test(element.value)) {
            event.preventDefault();
            console.log('Не валидно = ' + element.value);
            element.classList.add('error');
            p.classList.add('visible');
            element.value = '';
        } else {
            p.classList.remove('visible');
            element.classList.remove('error');
        }
    })
    alert('Данные приняты');
}
button.onclick = test;

