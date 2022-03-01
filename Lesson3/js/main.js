const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
const cartContent = document.querySelector('.cart-content');


class Cart {
    constructor(container = cartContent) {
        this.container = container;
        this.cartGoods = [];
        this._showHideCart();
        this._getCartProducts()
            .then(cartData => {
                this.cartGoods = [...cartData.contents];
                this.renderCart()
            })
    }
    _getCartProducts() {
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }
    renderCart() {
        const block = this.container;
        for (let product of this.cartGoods) {
            const productObj = new CartItem(product);
            block.insertAdjacentHTML('beforeend', productObj.renderCartItem());
        }
    }
    _showHideCart() {
        let button = document.querySelector('.btn-cart');
        button.addEventListener('click', () => {
            cartContent.style.display == "" ? cartContent.style.display = "block" : cartContent.style.display = "";
        });
    }

}
class CartItem {
    constructor(item, img = 'https://via.placeholder.com/50x70') {
        this.title = item.product_name;
        this.price = item.price;
        this.id = item.id_product;
        this.quantity = item.quantity;
        this.img = img;

    }

    renderCartItem() {
        return `<div data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div>
                    <p>${this.title} ${this.price * this.quantity} $</p>
                    <p>${this.quantity} шт</p>
                    <button class = 'delButton'>X</button>
                </div>
            </div>`
    }

}
class ProductsList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];//массив товаров из JSON документа
        this._getProducts()
            .then(data => { //data - объект js
                this.goods = [...data];
                this.render()
            });
    }
    _getProducts() {

        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }
    calcSum() {
        return this.allProducts.reduce((accum, item) => accum += item.price, 0);
    }
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);
            block.insertAdjacentHTML('beforeend', productObj.renderItem());
        }

    }
}
class ProductItem {
    constructor(product, img = 'https://via.placeholder.com/200x150') {
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
    }
    renderItem() {

        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} $</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`
    }
}
let list = new ProductsList();
let cart = new Cart;



