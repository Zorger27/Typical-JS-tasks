// вспомогательная функция, которая создаёт объект для хранения данных
function buildCharObject (str) {
    const charObj = {}
    for(let char of str.replace(/\W/g).toLowerCase()) {
// если у объекта уже есть пара ключ-значение, равная зацикливаемому значению, увеличьте значение на 1,
// в противном случае добавьте зацикленную букву в качестве ключа и 1 в качестве ее значения
        charObj[char] = charObj[char] + 1 || 1
    }
    return charObj
}

// основная функция
function anagram (){
    let strA = document.getElementById("str1").value;
    let strB = document.getElementById("str2").value;
    let message = document.querySelector(".message3");
    let error = document.querySelector(".error_message3");

// создаём объект, который содержит данные strA
    let aCharObject = buildCharObject(strA)
// создаём объект, который содержит данные strB
    let bCharObject = buildCharObject(strB)

    if ((strA.length && strB.length) < 2 || (strA.length && strB.length) <= 0){
        error.innerHTML = error.style.padding = '';
        message.innerHTML = message.style.padding = '';
        error.style.padding = "10px";
        error.innerHTML = "Мало символов!";
        return false;
    }

// сравниваем количество ключей в двух объектах (анаграммы должны иметь одинаковое количество букв)
    if(Object.keys(aCharObject).length !== Object.keys(bCharObject).length) {
        message.innerHTML = message.style.padding = '';
        error.style.padding = "10px";
        error.innerHTML = "Это НЕ Анаграмма!";
        return false
    }

// если оба объекта имеют одинаковое количество ключей,
// мы можем быть уверены, что по крайней мере обе строки имеют одинаковое количество символов
// и теперь мы можем сравнить два объекта, чтобы увидеть, имеют ли они одинаковые буквы в одинаковом количестве.
    for(let char in aCharObject){
        if(aCharObject[char] !== bCharObject[char]){
            message.innerHTML = message.style.padding = '';
            error.style.padding = "10px";
            error.innerHTML = "Это НЕ Анаграмма!";
            return false
        }
    }
    error.innerHTML = error.style.padding = '';
    message.style.padding = "10px";
    message.innerHTML = "Это Анаграмма!";
    return false;

// если обе вышеупомянутые проверки успешны, у вас есть анаграмма: return true.
//     return true
}
