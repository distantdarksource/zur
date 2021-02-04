const CHOCOLATE = 50, MILK = 45, BREAD = 20, ALCOHOL = 150, CYGARETTE = 150, CURRENCY = 'рублей';
const userName = prompt('Введите Ваше имя', '');
const userAddress = prompt('Введи Ваш адрес', '');
let userDeposit = +prompt('Внесите сумму депозита, руб', '');
let isContinueShop = true;
let cart = '\r\n' + '\r\n' + 'Корзина:';
while (isContinueShop) {
    let productName = prompt(`Текущий депозит: ${userDeposit} ${CURRENCY}. Введите название товара`, '');
    switch (productName) {
        case 'Шоколад':
            buyProduct(CHOCOLATE, productName, false);
            break;
        case 'Молоко':
            buyProduct(MILK, productName, false);
            break;
        case 'Хлеб':
            buyProduct(BREAD, productName, false);
            break;
        case 'Алкоголь':
            buyProduct(ALCOHOL, productName, true);
            break;
        case 'Сигареты':
            buyProduct(CYGARETTE, productName, true);
            break;
        default:
            alert('товар не найден');
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