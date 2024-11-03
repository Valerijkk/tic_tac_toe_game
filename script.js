"use strict"; // Включает строгий режим для улучшения качества кода

// Переменная для отслеживания текущего игрока, начнем с "X"
let currentPlayer = "X";
// Массив для хранения состояния игрового поля, изначально пустые клетки
let board = ["", "", "", "", "", "", "", "", ""];

// Массив с победными комбинациями индексов клеток
const winCombinations = [
    [0, 1, 2], // Первая строка
    [3, 4, 5], // Вторая строка
    [6, 7, 8], // Третья строка
    [0, 3, 6], // Первый столбец
    [1, 4, 7], // Второй столбец
    [2, 5, 8], // Третий столбец
    [0, 4, 8], // Диагональ слева сверху направо вниз
    [2, 4, 6]  // Диагональ справа сверху налево вниз
];

// Получение элементов DOM по их ID и классам
const cells = document.querySelectorAll(".cell"); // Все клетки игрового поля
const statusText = document.getElementById("status"); // Параграф для отображения статуса игры
const resetButton = document.getElementById("reset"); // Кнопка для сброса игры

// Функция для инициализации игры
function startGame() {
    // Добавление обработчика клика для каждой клетки
    cells.forEach(cell => cell.addEventListener("click", handleCellClick));
    // Добавление обработчика клика для кнопки сброса
    resetButton.addEventListener("click", resetGame);
    // Установка начального текста статуса
    statusText.textContent = `Ходит ${currentPlayer}`;
}

// Обработчик клика по клетке игрового поля
function handleCellClick(e) {
    const index = e.target.getAttribute("data-index"); // Получение индекса клетки из атрибута data-index
    if (board[index] !== "") return; // Если клетка уже занята, прекращаем обработку

    board[index] = currentPlayer; // Обновляем состояние игрового поля
    e.target.textContent = currentPlayer; // Отображаем символ текущего игрока в клетке

    if (checkWin()) { // Проверяем, победил ли текущий игрок
        statusText.textContent = `${currentPlayer} победил!`; // Обновляем статус
        cells.forEach(cell => cell.removeEventListener("click", handleCellClick)); // Удаляем обработчики кликов для клеток
    } else if (board.every(cell => cell !== "")) { // Проверяем, заполнены ли все клетки (ничья)
        statusText.textContent = `Ничья!`; // Обновляем статус на ничью
    } else {
        // Меняем текущего игрока на другого
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        statusText.textContent = `Ходит ${currentPlayer}`; // Обновляем статус
    }
}

// Функция для проверки победы
function checkWin() {
    // Проверяем каждую победную комбинацию
    return winCombinations.some(combination => {
        // Проверяем, все ли клетки в комбинации заняты символом текущего игрока
        return combination.every(index => board[index] === currentPlayer);
    });
}

// Функция для сброса игры
function resetGame() {
    currentPlayer = "X"; // Сбрасываем текущего игрока на "X"
    board = ["", "", "", "", "", "", "", "", ""]; // Очищаем игровое поле
    statusText.textContent = `Ходит ${currentPlayer}`; // Обновляем статус

    // Очищаем текст в каждой клетке и добавляем обработчик клика обратно
    cells.forEach(cell => {
        cell.textContent = ""; // Очищаем содержимое клетки
        cell.addEventListener("click", handleCellClick); // Добавляем обработчик клика
    });
}

// Добавление обработчика события загрузки DOM для инициализации игры
window.addEventListener("DOMContentLoaded", () => {
    console.log("DOM загружен. Инициализация игры...");
    startGame(); // Запуск функции инициализации
    convertCurrency(); // Это, вероятно, ошибка. Удалите или измените на подходящую функцию.
});

// Обработчик клика на кнопку "Конвертировать" (возможно, ошибка, т.к. это относится к другому проекту)
getBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Предотвращает стандартное поведение кнопки
    console.log("Нажата кнопка 'Конвертировать'");
    convertCurrency(); // Это, вероятно, ошибка. Удалите или измените на подходящую функцию.
});

// Обработчик клика на иконку обмена валют (возможно, ошибка, т.к. это относится к другому проекту)
exIcon.addEventListener("click", () => {
    console.log("Нажата иконка обмена валют");
    reverseCurrencies(); // Это, вероятно, ошибка. Удалите или измените на подходящую функцию.
});

// Обработчик изменения выбора валюты "Из" (возможно, ошибка, т.к. это относится к другому проекту)
fromCurrencySelect.addEventListener("change", () => {
    console.log(`Выбрана валюта 'Из': ${fromCurrencySelect.value}`);
    updateFlags(); // Это, вероятно, ошибка. Удалите или измените на подходящую функцию.
    convertCurrency(); // Это, вероятно, ошибка. Удалите или измените на подходящую функцию.
});

// Обработчик изменения выбора валюты "В" (возможно, ошибка, т.к. это относится к другому проекту)
toCurrencySelect.addEventListener("change", () => {
    console.log(`Выбрана валюта 'В': ${toCurrencySelect.value}`);
    updateFlags(); // Это, вероятно, ошибка. Удалите или измените на подходящую функцию.
    convertCurrency(); // Это, вероятно, ошибка. Удалите или измените на подходящую функцию.
});

// Обработчик ввода в поле суммы (возможно, ошибка, т.к. это относится к другому проекту)
amountEl.addEventListener("input", () => {
    console.log(`Введена сумма: ${amountEl.value}`);
    convertCurrency(); // Это, вероятно, ошибка. Удалите или измените на подходящую функцию.
});
