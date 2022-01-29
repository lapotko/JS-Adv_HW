class Property {
  constructor(element) {
    this.name = element.value;
    this.price = +element.dataset['price'];
    this.calories = +element.dataset['calories'];
  }
}
class Burger {
  constructor(size, stuffing, topping) {
    this.size = new Property(this._select(size));
    this.stuffing = new Property(this._select(stuffing));
    this.topping = this._getTopping(topping);
  }
  _select(name) {
    return document.querySelector(`input[name = ${name}]:checked`);
  }
  _selectAll(name) {
    return [...document.querySelectorAll(`input[name = ${name}]:checked`)];
  }
  _getTopping(name) {
    let result = [];
    this._selectAll(name).forEach((el) => {
      result.push(new Property(el));
    });
    return result;
  }
  //_total это метод для вычисления итоговой цены и количества калорий
  // где param это требуемое значение (либо калории, либо цена), которое далее используется в методе showSum()
  _total(param) {
    let result = this.size[param] + this.stuffing[param];
    this.topping.forEach((el) => {
      result += el[param];
    });
    return result;
  }
  showSum(price, calories) {
    document.getElementById(price).textContent = `${this._total(price)} рублей`;
    document.getElementById(calories).textContent = `${this._total(calories)} калорий`;
  }
}
let inputs = [...document.getElementsByTagName('input')];
inputs.forEach(addEventListener('input', () => {
  let burger = new Burger('size', 'stuffing', 'topping');
  burger.showSum('price', 'calories');
})
);
