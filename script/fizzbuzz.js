function fizzbuzz() {
    let num = document.getElementById("number").value;
    let message = document.querySelector(".message2");
    let error = document.querySelector(".error_message2");

    for(let i=1; i <= num; i++){
        // проверяем введённое число на кратность и 3 и 5
        if(i % 3 === 0 && i % 5 === 0){
            console.log('fizzbuzz')
        }
        // проверяем введённое число на кратность 3
        else if(i % 3 === 0){
            console.log('fizz')
        }
        // проверяем введённое число на кратность 5
        else if(i % 5 === 0){
            console.log('buzz')
        }   else{
            console.log(i)
        }
    }
    if (num < 2 || num <= 0){
        error.innerHTML = error.style.padding = '';
        message.innerHTML = message.style.padding = '';
        error.style.padding = "10px";
        error.innerHTML = "Мало символов!";
        return false;
    }
    error.innerHTML = error.style.padding = '';
    message.innerHTML = message.style.padding = '';
    message.style.padding = "10px";
    message.innerHTML = "Done! Look in Console...";
    return false;
}
