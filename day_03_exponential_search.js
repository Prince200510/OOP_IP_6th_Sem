function bin(arr, left, right, target) {
    while(left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        if(arr[mid] === target) {
            return mid;
        } else if(arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

function exponential_search(arr, target) {
    let n = arr.length;

    if(arr[0] === target) {
        return 0;
    }

    let i = 1;

    while(i < n && arr[i] <= target) {
        i *= 2;
    }

    return bin(arr, Math.floor(i / 2), Math.floor(i, n - 1), target);
}

let arr = [2, 4, 8, 16, 32, 64, 128];
let target = 32;
let result = exponential_search(arr, target);
console.log("Index of target:", result);