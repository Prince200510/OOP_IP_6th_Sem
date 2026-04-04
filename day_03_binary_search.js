function binary_search(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while(left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        if(arr[mid] == target) {
            return mid;
        } else if(arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
}

let arr = [1, 2, 3, 4, 5];
let target = 3;
let result = binary_search(arr, target);
console.log("Index of target:", result); 

