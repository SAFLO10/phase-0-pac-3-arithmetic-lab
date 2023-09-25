function subtract(a,b) {
    return a-b;
}
function add(a,b) {
    return a+b;
}
function multiply(a,b) {
    return a*b;
}
function divide(a,b) {
    return a/b;
}
function increment(a) {
return a+1;
}
function decrement(a) {
    return a-1;
}
function makeInt(n) {
    const parsedInt = parseInt(n, 10); 
    if (isNaN(parsedInt)) {
    return NaN; 
    }
    return parsedInt; 
    }
    function preserveDecimal(n) {
        const parsedFloat = parseFloat(n); 
        if (isNaN(parsedFloat)) {
        return NaN; 
        }
        return parsedFloat; 
        }
