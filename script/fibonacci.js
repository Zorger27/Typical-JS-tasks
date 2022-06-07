function fibonacci() {
    let num = document.getElementById("num").value;
    let message = document.querySelector(".message5");
    let error = document.querySelector(".error_message5");
// сохраняем последовательность Фибоначчи, которую мы собираемся сгенерировать,
// внутри массива и инициализируем массив первыми двумя числами последовательности
    const result = [0, 1]

    for (let i = 2; i <= num; i++) {
        // помещаем сумму двух чисел, предшествующих положению "i" в массиве результатов, в конце массива результатов
        const prevNum1 = result[i - 1]
        const prevNum2 = result[i - 2]
        result.push(prevNum1 + prevNum2)
    }

    if (num >= 1) {
        error.innerHTML = error.style.padding = '';
        message.style.padding = "10px";
        message.innerHTML = `Число Фибоначчи для ${num} элемента = ${result[num]}`;
        return false;
    } else {
        message.innerHTML = message.style.padding = '';
        error.style.padding = "10px";
        error.innerHTML = "Введите положительное число!";
        return false
    }
// возвращаем последнее значение в массиве результатов
//     return result[num]
}

// В массиве результатов первые два числа содержатся в ряду,
// поскольку каждая запись в последовательности состоит из суммы двух предыдущих чисел.
// В самом начале двух чисел, которые можно взять для получения следующего числа нет,
// поэтому цикл не может сгенерировать их в автоматическом режиме.
// Но, как мы знаем, первые два числа — всегда 0 и 1.
// Поэтому инициализировать массив результатов можно вручную.