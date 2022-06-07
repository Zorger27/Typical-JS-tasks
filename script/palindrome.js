function palindrome() {
    let str = document.getElementById("word").value;
    let message = document.querySelector(".message");
    let error = document.querySelector(".error_message");

    if (str.length > 2) {
        // Преобразование символов входной строки в нижний регистр.
        // Это гарантия того, что программа будет сравнивать именно сами символы, а не регистр или еще что-то.
        str = str.toLowerCase()
        // Второй шаг — реверс строки.
        // Необходимо преобразовать ее в массив посредством метода .split() (библиотека String).
        // Переворачиваем массив, используя .reverse()(библиотека Array).
        // Последний этап — преобразование обратного массива в строку при помощи .join() (библиотека Array).
        if (str === str.split('').reverse().join('')) {
            error.innerHTML = error.style.padding = '';
            message.style.padding = "10px";
            message.innerHTML = "Это Палиндром!";
            return false;
        } else {
            message.innerHTML = message.style.padding = '';
            error.style.padding = "10px";
            error.innerHTML = "Это НЕ Палиндром!";
            return false;
        }
    } else {
        error.innerHTML = error.style.padding = '';
        message.innerHTML = message.style.padding = '';
        error.style.padding = "10px";
        error.innerHTML = "Мало символов!";
        return false;
    }
}
