function sum(arr) {
    let firstEl = arr.shift();
    let lastEl = arr.pop();
    let result = Number(firstEl) + Number(lastEl);
    console.log(result);
}

sum(['20', '30', '40']);