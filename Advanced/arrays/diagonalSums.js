function diagonal(arr) {
    let mainDiagonal = 0;
    let secondaryDiagonal = 0;
 
    for (let i = 0; i < arr.length; i++) {
        mainDiagonal += arr[i][i];
        secondaryDiagonal += arr[i][arr.length - 1 - i];
    }
    console.log(mainDiagonal, secondaryDiagonal);
}

diagonal([[20, 40],[10, 60]])