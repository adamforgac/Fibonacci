// USING LOOP

function fibs(n) {
    let fibArr = [0, 1];
    if(n <= 2) {
        return 1
    } else {
        for(let i = 1; i < n; i++) {
            let result = fibArr[i-1] + fibArr[i]
            fibArr.push(result);
        }
        fibArr.pop();
        return fibArr;
    }
}

console.log(fibs(10));



// USING RECURSION

function fibsRecur(n, arr = [0, 1]) {
    if(n <= arr.length) {
        return arr
    } else {
        const nextFib = arr[arr.length - 2] + arr[arr.length - 1]
        arr.push(nextFib);
        return fibsRecur(n, arr);
    }
}

console.log(fibsRecur(10));