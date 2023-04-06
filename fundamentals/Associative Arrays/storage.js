function storage(input) {
    let map = new Map();
    for (let line of input) {
        let tokens = line.split(' ');
        let product = tokens[0];
        let quantity = Number(tokens[1]);
        if (!map.has(product)) {
            map.set(product, quantity);
        } else {
            let currentQuantity = map.get(product);
            let newQuantity = currentQuantity + quantity;
            map.set(product, newQuantity);
        }
    }

    for(let [product, quantity] of map) {
        console.log(`${product} -> ${quantity}`);
    }
}

storage(['apple 50',

'apple 61',

'coffee 115',

'coffee 40']);