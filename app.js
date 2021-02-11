// Helper functions

const basicOp = (n1, n2, op) => {
    let result;
    switch (op) {
        case "-":
            result = Number(n1) - Number(n2);
            break;
        case "*":
            result  = Number(n1) * Number(n2);
            break;
        case "×":
            result = Number(n1) * Number(n2);
            break;
        case "/":
            result = Number(n1) / Number(n2);
            break;
        case "÷":
            result = Number(n1) / Number(n2);
            break;
        default:
            result = Number(n1) + Number(n2);
    }

    return result;
};


// CALC

const inNum1 = document.getElementById('calc-in1');
const inNum2 = document.getElementById('calc-in2');
const inFnc = document.getElementById('calc-select-fnc');

const outResult = document.getElementById('calc-output');

const btn = document.getElementById('calc-button');

btn.addEventListener('click', () => {
    let result = basicOp(inNum1.value, inNum2.value, inFnc.value);

    outResult.innerText = result;
})


// QUIZ

const outNum1 = document.getElementById('quiz-num1');
const outOp = document.getElementById('quiz-operator');
const outNum2 = document.getElementById('quiz-num2');
const inAns = document.getElementById('quiz-input');

const btnQuiz = document.getElementById('quiz-button');

const generateQuiz = () => {
    const operator = ['+', '-', '×', '÷'][Math.floor(Math.random() * 4)];
    const num1 = Math.floor(Math.random() * 150) - 50;
    const num2 = Math.floor(Math.random() * 150) - 50;

    outNum1.innerText = num1;
    outNum2.innerText = num2;
    outOp.innerText = operator;
};

const checkQuiz = () => {
    const inNum1 = Number(outNum1.innerText);
    const inNum2 = Number(outNum2.innerText);
    const op = outOp.innerText;
    const inputtedAns = Number(inAns.value);
    const correctAns = basicOp(inNum1, inNum2, op);

    inAns.classList.remove('animate-correct');
    inAns.classList.remove('animate-wrong');
    if (inputtedAns === correctAns) {
        inAns.classList.add('animate-correct');
        inAns.value = '';
    } else {
        inAns.classList.add('animate-wrong');
        inAns.value = correctAns;
    }

    generateQuiz();
}

btnQuiz.addEventListener('click', checkQuiz);