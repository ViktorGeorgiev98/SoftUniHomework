function minerTask(input) {
    let resources = new Map();

    for (let i = 0; i < input.length; i += 2) {
        let resource = input[i];
        let quantity = Number(input[i + 1]);
        if (!resources.has(resource)) {
            resources.set(resource, quantity);
        } else {
            let currentQuantity = resources.get(resource);
            let newQuantity = currentQuantity + quantity;
            resources.set(resource, newQuantity);
        }
    }

    resources = Array.from(resources);
    for (let [resource, quantity] of resources) {
        console.log(`${resource} -> ${quantity}`);
    }
}

minerTask([ 'gold', '155', 'silver', '10', 'copper', '17', 'gold', '15' ]);