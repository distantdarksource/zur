const CURRENCY = 'рублей';
let sortament = {
    chocolate: 50,
    milk: 45,
    bread: 20,
    alcohol: 150,
    cygarette: 150,
};
const userName = prompt('Введите Ваше имя', '');
const userAddress = prompt('Введи Ваш адрес', '');
let userDeposit = +prompt('Внесите сумму депозита, руб', '');
let isContinueShop = true;
let cart = '\r\n' + '\r\n' + 'Корзина:';
while (isContinueShop) {
    let productName = prompt(`Текущий депозит: ${userDeposit} ${CURRENCY}. Введите название товара`, '');
    if (productName === 'alcohol' || productName === 'cygarette') {
        buyProduct(sortament[productName], productName, true);
        } else {
        buyProduct(sortament[productName], productName, false);
    }
    isContinueShop = confirm(`продолжаем покупки? ${cart}`);
}



let end = confirm(`Клиент: ${userName}` + `\r\n` + `Адрес доставки: ${userAddress}` + `${cart}` + `\r\n` + `\r\n` + `Верно ли составлен заказ?`);
if (!end) {
    alert('Жаль что вам ничего не подошло');
} else {
    alert('Доставим в ближайшее время');
}


function showPoorMessage() {
    alert('У вас не достаточно средств для покупки товара');
}


function isAdult(isNeedAsk) {
    let result = isNeedAsk ? confirm('вам есть 18 лет?') : true;
    if (result === false) {
        alert('Вам нет 18 лет');
    }
    return result;
}

function isPoor(price) {
    let isEnoughMoney = userDeposit >= price;
    if (!isEnoughMoney) {
        showPoorMessage();
    }
    return !isEnoughMoney;
}

function addCart(price, productName) {
    cart += '\r\n' + productName;
    userDeposit -= price;
}


function buyProduct(price, productName, isCheckAge) {
    if (isAdult(isCheckAge) && !isPoor(price)) {
        addCart(price, productName);
    }
}