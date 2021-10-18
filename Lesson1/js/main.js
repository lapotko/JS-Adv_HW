const products = [
    {id: 1, title: 'Notebook', price: 2000, img: 'img/notebook.png'},
    {id: 2, title: 'Mouse', price: 20, img: 'img/mouseicon.png'},
    {id: 3, title: 'Keyboard', price: 200, img: 'img/keyboard.png'},
    {id: 4, title: 'Gamepad', price: 50, img: 'img/gamepad.png' },
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (product, img = 'img/default.jpg') => {
    return `<div class="product-item">
                <h3>${product.title}</h3>
                <img width = "100%" height = "200px" src = ${product.img}>
                <p>${product.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};

const renderPage = list => {
    
    document.querySelector('.products').innerHTML = list.map(product => renderProduct(product)).join('');
};

renderPage(products);

