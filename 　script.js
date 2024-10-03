// Инициализация баланса и токенов
document.getElementById("balance").innerText = "Баланс: " + (localStorage.getItem("balance") || 1000);
document.getElementById("tokensText").innerText = "Токены: " + (localStorage.getItem("tokens") || 0);

// Хранение промокодов и соответствующих наград
const promoCodes = {
    "PROMO10": 10,
    "PROMO20": 20,
    "PROMO30": 30,
    "PROMO40": 40,
    "PROMO50": 50,
    "PROMO60": 60,
    "PROMO70": 70,
    "PROMO80": 80,
    "PROMO90": 90,
    "PROMO100": 100
};

// Функция для переключения видимости выпадающего меню
function toggleGames() {
    const gameOptions = document.getElementById("gameOptions");
    gameOptions.classList.toggle("hidden");
}

// Функция для переключения видимости промо-секции
function togglePromo() {
    const promoSection = document.getElementById("promoSection");
    promoSection.classList.toggle("hidden");
}

// Функция для обмена валюты на токены
function exchangeCurrency() {
    let balance = parseInt(localStorage.getItem("balance")) || 1000;
    let tokens = parseInt(localStorage.getItem("tokens")) || 0;

    if (balance >= 10) {
        balance -= 10;
        tokens += 1;
        updateBalance(balance);
        updateTokens(tokens);
    } else {
        alert("Недостаточно игровой валюты для обмена.");
    }
}

// Функция для обновления токенов
function updateTokens(newTokens) {
    localStorage.setItem("tokens", newTokens);
    document.getElementById("tokensText").innerText = "Токены: " + newTokens;
}

// Функция для применения промокода
function redeemPromoCode() {
    const promoCode = document.getElementById("promoCode").value.toUpperCase(); // Приводим к верхнему регистру
    let balance = parseInt(localStorage.getItem("balance")) || 1000;

    if (promoCodes[promoCode]) { // Проверка наличия промокода
        const amount = promoCodes[promoCode];
        balance += amount;
        delete promoCodes[promoCode]; // Удаляем промокод из доступных
        updateBalance(balance);
        alert(`Промокод применён! Вы получили ${amount} игровой валюты.`);
    } else {
        alert("Неверный или уже использованный промокод.");
    }

    document.getElementById("promoCode").value = ""; // Сброс поля ввода
}

// Функция для просмотра цены токена
function viewTokenPrice() {
    alert("Цена токена: 10 игровой валюты");
}

// Функция для обновления баланса
function updateBalance(newBalance) {
    localStorage.setItem("balance", newBalance);
    document.getElementById("balance").innerText = "Баланс: " + newBalance;
}

// Инициализация баланса и токенов при загрузке
