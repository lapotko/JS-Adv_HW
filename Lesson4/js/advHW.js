
let button = document.querySelector('button[type="submit"]');
let patterns = {
    name: /^[а-яА-яЁёa-zA-Z]+\s?[а-яА-яЁёa-zA-Z]*[\-]?[а-яА-яЁёa-zA-Z]*\s?$/gmi,
    phone: /^\+7\(\d{3}\)\d{3}-\d{4}$/,
    mail: /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,4}$/gmi
}

button.onclick = function (event) {
    let inputs = Array.from(document.getElementsByTagName('input'));//make array from collection
    inputs.forEach(element => {
        let pattern = patterns[element.id];
        if (!pattern.test(element.value)) {
            event.preventDefault();
            console.log('preventDefault');
        }
    })
    //How can I get value from each input of collection with no need to create variable obviously for each of them;
    /* let nameInput = document.getElementById('name');
    let phoneInput = document.getElementById('phone');
    let mailInput = document.getElementById('mail');
    let nameStr = nameInput.value;
    if (!namePattern.test(nameStr)) {
        console.log('error');
    } else console.log('ok');
    let phoneStr = phoneInput.value;
    if (!phonePattern.test(phoneStr)) {
        console.log('error');
    } else console.log('ok');
    let mailStr = mailInput.value;
    if (!mailPattern.test(mailStr)) {
        console.log('error');
    } else console.log('ok'); */
}

