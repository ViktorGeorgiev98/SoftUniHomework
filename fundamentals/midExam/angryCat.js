function angryCat(arr, entryPoint, itemsType) {
    let index = entryPoint;
    let cost = Number(arr[index]);
    let leftSum = 0;
    let rightSum = 0;
    for (let i = index; i < arr.length; i++) {
        if (itemsType === 'cheap') {
            if (Number(arr[i]) < Number(arr[index])) {
                rightSum += Number(arr[i]);
            }
        } else if (itemsType === 'expensive') {
            if (Number(arr[i]) >= Number(arr[index]) && i != index) {
                rightSum += Number(arr[i]);
            }
        }
    }
    for (let j = index; j >= 0; j--) {
        if (itemsType === 'cheap') {
            if (Number(arr[j]) < Number(arr[index])) {
                leftSum += Number(arr[j]);
            }
        } else if (itemsType === 'expensive') {
            if (Number(arr[j]) >= Number(arr[index]) && j != index) {
                leftSum += Number(arr[j]);
            }
        }
    }
    if (leftSum === rightSum) {
        console.log(`Left - ${leftSum}`);
    } else if (leftSum > rightSum) {
        console.log(`Left - ${leftSum}`);
    } else {
        console.log(`Right - ${rightSum}`)
    }
}
angryCat([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3],
    7,
    "expensive")
    
    
    