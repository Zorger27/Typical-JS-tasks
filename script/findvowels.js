function findVowels() {
    let str = document.getElementById("str").value;
    let message = document.querySelector(".message4");
    let error = document.querySelector(".error_message4");
    let count = 0
    const vowels = ['a', 'e', 'i', 'o', 'u']
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            // Важно обратить внимание на использование метода .includes().
            // Он доступен и для строк, и для массивов.
            // Его стоит применять для того, чтобы выявить, содержит ли массив определенное значение.
            // Этот метод возвращает true, если массив содержит указанное значение, и false, если нет.
            count++
        }
    }

    if (str.length === 0 || null || undefined) {
        message.innerHTML = message.style.padding = '';
        error.style.padding = "10px";
        error.innerHTML = "Введите текст!";
        return false
    } else if (count !== 0) {
        error.innerHTML = error.style.padding = '';
        message.style.padding = "10px";
        message.innerHTML = `Количество гласных = ${count}`;
        return false;
    } else {
        message.innerHTML = message.style.padding = '';
        error.style.padding = "10px";
        error.innerHTML = "Здесь нет гласных!";
        return false
    }
    // return count
}