const randomNumber = Math.floor(Math.random()*100) + 1;
let tries = 0
const resultDiv = document.getElementById('result')
document.getElementById('submit').onclick = function() {
    const userGuess = Number(document.getElementById('guess').value)
    tries++
    if(userGuess===randomNumber){
        resultDiv.textContent=`Угадал за ${tries} попыток`
    }else if(userGuess<randomNumber) {
        resultDiv.textContent='у тебя маленькое число'    }
        else if(userGuess>randomNumber ){
            resultDiv.textContent='У тебя большое число'
        }
}