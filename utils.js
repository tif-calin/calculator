export const basicOp = (n1, n2, op) => {
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