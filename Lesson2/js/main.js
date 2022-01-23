class ProductList{
    constructor(container='.products'){
        this.container = container;
        this.goods = [];
        this._fetchProducts();
        this.render();//вывод товаров на страницу
        this.total();//подсчёт стоимости товаров
    }
    _fetchProducts(){
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50},
        ];
    }
    
    render(){
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const item = new ProductItem(product);
             block.insertAdjacentHTML("beforeend",item.render());
//           block.innerHTML += item.render();
        }
    }
    total(){
        let sum = 0;
        for(let item of this.goods){
            sum += item.price;
        }
        return sum;
    }
}

class ProductItem{
    constructor(product,img='https://via.placeholder.com/200x150'){
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = img;
    }
    render(){
           return `<div class="product-item">
                <img src="${this.img}">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}
class Cart {
    increaseAmount(){}
    reduceAmount(){}
    delFromCart(){}
    cleanCart(){}
}
class CartItem {
    addToCart(){}
    increaseAmount(){}  //данные методы нужны, как возможность увеличить или уменьшить количество до добавления в корзину.
    reduceAmount(){}    //но если такая возможность не предусматривается, то можно их удалить.
}
let list = new ProductList();



