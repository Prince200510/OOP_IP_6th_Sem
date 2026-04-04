function interpolation_search(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while(left <= right && target >= arr[left] && target <= arr[right]) {
        let pos = left + Math.floor(((right - left) / (arr[right] - arr[left])) * (target - arr[left]));

        if(arr[pos] == target) {
            return pos;
        } else if(arr[pos] < target) {
            left = pos + 1;
        } else {
            right = pos - 1;
        }
    }
    return -1;
}

let arr = [1, 2, 3, 4, 5];
let target = 3;
let result = interpolation_search(arr, target);
console.log("Index of target:", result);