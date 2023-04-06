function storeProvision(arr1, arr2) {
    let myStore = {};
    for (let i = 0; i < arr1.length; i+= 2) {
        let name = arr1[i];
        let quantity = Number(arr1[i + 1]);
        myStore[name] = quantity;
    }

    for (let i = 0; i < arr2.length; i+= 2) {
        let name = arr2[i];
        let quantity = Number(arr2[i + 1]);
        if (myStore.hasOwnProperty(name)) {
            myStore[name] += quantity;
        } else {
            myStore[name] = quantity;
        }
    }

    for (let key of Object.keys(myStore)) {
        console.log(`${key} -> ${myStore[key]}`);
    }
}
storeProvision([

    'Chips', '5', 'CocaCola', '9', 'Bananas',
    
    '14', 'Pasta', '4', 'Beer', '2'
    
    ],
    
    [
    
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    
    'Tomatoes', '70', 'Bananas', '30'
    
    ]);