const display = document.querySelector(".dis");
const btns = document.querySelectorAll("#to_display");
const clean = document.querySelector("#c");
const calculate = document.querySelector("#clculate");

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        let text = display.textContent;
        display.textContent = text + btn.textContent;
    });
});

calculate.addEventListener("click", operate);

clean.addEventListener("click", () => {
    display.textContent = "";
});

function operate() {
    let text = display.textContent;
    let n1 = "", n2 = "";
    let operatorIndex = -1;

    // Find the index of the operator
    for (let i = 0; i < text.length; i++) {
        if (text[i] === '+' || text[i] === '-' || text[i] === '*' || text[i] === '/') {
            operatorIndex = i;
            break;
        }
    }

    if (operatorIndex !== -1) {
        n1 = parseFloat(text.substring(0, operatorIndex));
        n2 = parseFloat(text.substring(operatorIndex + 1, text.length));

        switch (text[operatorIndex]) {
            case '+':
                display.textContent = add(n1, n2);
                break;
            case '-':
                display.textContent = subtract(n1, n2);
                break;
            case '*':
                display.textContent = multiply(n1, n2);
                break;
            case '/':
                display.textContent = divide(n1, n2);
                break;
        }
    }
}

function add(n1, n2) {
    let result = n1 + n2;
    return result;
}

function subtract(n1, n2) {
    let result = n1 - n2;
    return result;
}

function multiply(n1, n2) {
    let result = n1 * n2;
    return result;
}

function divide(n1, n2) {
    let result = n1 / n2;
    return result;
}
