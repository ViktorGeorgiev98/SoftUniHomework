function loadingBar(num) {
    let divisions = num / 10;
    let arr = [];
    for (let i = 1; i <= divisions; i++) {
        arr.push('%');
    }
    for (let j = 10; j > divisions; j--) {
        arr.push('.');
    }
    if (num === 100) {
        console.log(`100% Complete!`);
    } else {
        console.log(`${num}% [${arr.join('')}]`);
        console.log(`Still loading...`);
    }
}
loadingBar(100)