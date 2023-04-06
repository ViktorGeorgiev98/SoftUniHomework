// function distinctArray(arr) {
//     let newArr = arr;
//     for (let i = 0; i < newArr.length; i++) {
//         let counter = 0;
//         for (let j = 0; j < newArr.length; j++) {
//             if (newArr[j] === newArr[i]) {
//                 counter += 1;
//                 if (counter >= 2) {
//                     newArr.splice(j, 1);
//                     counter = 0
//                 }
//             }
//         }
//     }
//     console.log(newArr.join(' '));
// }
// distinctArray([20, 8, 12, 13, 4,

//     4, 8, 5])

function distinctArray(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr.join(' '));
}
distinctArray([7, 8, 9, 7, 2, 3,

    4, 1, 2])
    console.log('7 8 9 2 3 4 1');