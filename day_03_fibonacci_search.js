function fibonacciSearch(arr, target) {
    let n = arr.length;

    let fib2 = 0;  
    let fib1 = 1;  
    let fib = fib2 + fib1;  

    while (fib < n) {
        fib2 = fib1;
        fib1 = fib;
        fib = fib2 + fib1;
    }

    let offset = -1;

    while (fib > 1) {
        let i = Math.min(offset + fib2, n - 1);

        if (arr[i] < target) {
            fib = fib1;
            fib1 = fib2;
            fib2 = fib - fib1;
            offset = i;
        } 
        else if (arr[i] > target) {
            fib = fib2;
            fib1 = fib1 - fib2;
            fib2 = fib - fib1;
        } 
        else {
            return i;
        }
    }

    if (fib1 && arr[offset + 1] === target) {
        return offset + 1;
    }

    return -1;
}

let arr = [10, 22, 35, 40, 45, 50, 80, 82, 85, 90, 100];
let target = 85;
let result = fibonacciSearch(arr, target);
console.log("Index of target:", result);