let firstNumberInt;
let secondNumberInt;
let myButton = document.getElementById('calculateButton'); 
let result = document.getElementById('result')

myButton.addEventListener('click', function(event) { 
    firstNumberInt = parseInt(document.getElementById('firstNumberInt').value)
    secondNumberInt = parseInt(document.getElementById('secondNumberInt').value)
    console.log("operator = " +operator)

    switch (document.getElementById('operator').value) {
        case "+":
            result.value = firstNumberInt + secondNumberInt
        break;
        case "-":
            result.value = firstNumberInt - secondNumberInt
        break;
        case "*":
            result.value = firstNumberInt * secondNumberInt
        break;
    }
});