let numberOfClick = 0;
let numberOneCreated = false;
let operationSelected = null;
let valueNumber1, valueNumber2;


// Função para exibir o número selecionado
function updateDisplay(buttonNumber) {
    if (numberOfClick == 0) {
        display.innerText = buttonNumber;
    } else {
        display.innerText += buttonNumber;
    }
    numberOfClick++;
}

// Escutador de eventos do botão C da calculadora
clearButton.addEventListener("click", deleteDisplay);

// Função para limpar os valores/display
function deleteDisplay() {
    display.innerText = 0;
    numberOfClick = 0;
    numberOneCreated = false;
}

plusButton.addEventListener("click", sum);
function sum() {
    valueNumber1 = +display.innerText;

    numberOneCreated = true;
    display.innerText = 0;
    numberOfClick = 0;
    operationSelected = "sum";
}


minusButton.addEventListener("click", subtraction);
function subtraction() {
    valueNumber1 = +display.innerText;

    numberOneCreated = true;
    display.innerText = 0;
    numberOfClick = 0;
    operationSelected = "subtraction";
}


timesButton.addEventListener("click", multiplication);
function multiplication() {
    valueNumber1 = +display.innerText;

    numberOneCreated = true;
    display.innerText = 0;
    numberOfClick = 0;
    operationSelected = "multiplication";
}

dividedButton.addEventListener("click", division);
function division() {
    valueNumber1 = +display.innerText;

    numberOneCreated = true;
    display.innerText = 0;
    numberOfClick = 0;
    operationSelected = "division";
}



resultButton.addEventListener("click", result);
function result() {
    if (numberOneCreated == true) {
        valueNumber2 = +display.innerText;

        if (operationSelected == "sum"){
            display.innerText = valueNumber1 + valueNumber2;
        } else if (operationSelected == "subtraction"){
            display.innerText = valueNumber1 - valueNumber2;
        } else if (operationSelected == "multiplication") {
            display.innerText = valueNumber1 * valueNumber2;
        } else if (operationSelected == "division") {
            display.innerText = valueNumber1 / valueNumber2;
        }
    } 
}