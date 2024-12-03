// Инициализация Telegram Web App API
const tg = window.Telegram.WebApp;

// Функция для открытия модального окна
function openModal(buttonId) {
    const messages = {
        1: "Вы нажали на кнопку 1!",
        2: "Это сообщение для кнопки 2.",
        3: "Привет! Вы выбрали кнопку 3.",
        4: "Это текст для кнопки 4.",
        5: "Последняя кнопка — номер 5.",
    };

    // Используем Telegram API для показа модального окна
    tg.showAlert(messages[buttonId]);
}

// Открываем WebApp на весь экран
tg.expand();
