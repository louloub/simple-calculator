let firstNumberInt;
let secondNumberInt;
let calculateButton = document.getElementById('calculateButton'); 
let resetButton = document.getElementById('resetButton'); 
let result = document.getElementById('result');

calculateButton.addEventListener('click', function(event) { 
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

resetButton.addEventListener("click", function(event) {
    firstNumberInt = parseInt(document.getElementById('firstNumberInt').value)
    secondNumberInt = parseInt(document.getElementById('secondNumberInt').value)
    document.getElementById('firstNumberInt').value = '';
    document.getElementById('secondNumberInt').value = '';
})