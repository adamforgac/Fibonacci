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