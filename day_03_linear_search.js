function linearsearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

let arr = [1, 2, 3, 4, 5];
let target = 3;
let result = linearsearch(arr, target);
console.log("Index of target:", result);