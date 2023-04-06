// function proccessOddNumbers(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (i % 2 !== 0) {
//             newArr.unshift(arr[i] * 2);
//         }
//     }
//     console.log(newArr.join(' '));
// }

// proccessOddNumbers([3, 0, 10, 4, 7, 3])


function proccessOddNumbers(arr) {
    let result = arr.filter((num, i) => i % 2 == 1)
    .map(x => x * 2)
    .reverse();
    return result.join(' ');
}
console.log(proccessOddNumbers([3, 0, 10, 4, 7, 3]));