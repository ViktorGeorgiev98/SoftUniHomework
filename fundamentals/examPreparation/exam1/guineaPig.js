function guineaPig(arr) {
    let guineaPigWeight = Number(arr.pop()) * 1000;
    let coverGrams = Number(arr.pop()) * 1000;
    let hayGrams = Number(arr.pop()) * 1000;
    let foodGrams = Number(arr.pop()) * 1000;
    for (let day = 1; day <= 30; day++) {
        foodGrams -= 300;
        if (day % 2 === 0) {
            hayGrams -= foodGrams * 0.05;
        }
        if (day % 3 === 0) {
            coverGrams -= guineaPigWeight / 3;
        }
        if (foodGrams <= 0 || hayGrams <= 0 || coverGrams <= 0) {
            console.log('Merry must go to the pet store!');
            return;
        }
    }
    console.log(`Everything is fine! Puppy is happy! Food: ${(foodGrams / 1000).toFixed(2)}, Hay: ${(hayGrams / 1000).toFixed(2)}, Cover: ${(coverGrams / 1000).toFixed(2)}.`);
} 
guineaPig(["1", 
"1.5", 
"3", 
"1.5"
]
)

