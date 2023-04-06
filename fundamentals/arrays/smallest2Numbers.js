function smallest2Numbers(arr) {
    let sortedInAscending = arr.sort((a, b) => a - b);
    let result = sortedInAscending.slice(0, 2);
    console.log(result.join(' '));
}
smallest2Numbers([3, 0, 10, 4, 7, 3])