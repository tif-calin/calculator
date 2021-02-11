// import functions and grab DOM elements
const inNum1 = document.getElementById('calc-in1');
const inNum2 = document.getElementById('calc-in2');
const inFnc = document.getElementById('calc-select-fnc');

const outResult = document.getElementById('calc-output');

const btn = document.getElementById('calc-button');


// initialize state

// set event listeners to update state and DOM

btn.addEventListener('click', () => {
    let result;
    switch (inFnc.value) {
        case "-":
            result = Number(inNum1.value) - Number(inNum2.value);
            break;
        case "*":
            result = (Number(inNum1.value) * Number(inNum2.value));
            break;
        case "/":
            result = (Number(inNum1.value) / Number(inNum2.value));
            break;
        default:
            result = Number(inNum1.value) + Number(inNum2.value);
    }

    outResult.innerText = result;
})