function juices(input) {
   let bottles = new Map();
   let quantities = {};

   for (let juice of input) {
    let [juiceType, quantity] = juice.split(' => ');
    if (!quantities.hasOwnProperty(juiceType)) {
        quantities[juiceType] = Number(quantity);
    } else {
        quantities[juiceType] += Number(quantity);
    }

    const bottlesQt = Math.floor(quantities[juiceType] / 1000);
    if (bottlesQt) {
        quantities[juiceType] = quantities[juiceType] % 1000;
        if (!bottles.has(juiceType)) {
            bottles.set(juiceType, 0);
        } else {
            bottles.set(juiceType, bottles.get(juiceType) + bottlesQt);
        }
    }
   }

   for (let entry of bottles.entries()) {
    console.log(`${entry[0]} => ${entry[1]}`);
   }
}


juices(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']);