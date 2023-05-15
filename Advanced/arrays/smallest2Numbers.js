function smallest2Numbers(arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    console.log(`${sortedArr[0]} ${sortedArr[1]}`);
}

smallest2Numbers([30, 15, 50, 5]);