const products = [
    {id: 1, title: 'Notebook', price: 2000, img: 'img/notebook.png'},
    {id: 2, title: 'Mouse', price: 20, img: 'img/mouseicon.png'},
    {id: 3, title: 'Keyboard', price: 200, img: 'img/keyboard.png'},
    {id: 4, title: 'Gamepad', price: 50, img: 'img/gamepad.png' },
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (title, price, img = 'img/default.jpg') => 
     `<div class="product-item">
                <h3>${title}</h3>
                <img width = "100%" height = "200px" src = ${img}>
                <p>${price}</p>
                <button class="buy-btn">Купить</button>
            </div>`

const renderPage = list => {
    const productsList = list.map(item => renderProduct(item.title,item.price,item.img));
    console.log(productsList.join(""));
    document.querySelector('.products').innerHTML = productsList.join("");
};

renderPage(products);

