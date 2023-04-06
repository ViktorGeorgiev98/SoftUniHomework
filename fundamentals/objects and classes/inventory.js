function inventory(data) {
    let result = [];

    for (let line of data) {
        let [name, level, items] = line.split(" / ");
        let heroes = {
            name: name,
            level: level,
            items: items.split(', ')
        }
        result.push(heroes);
    }
    result.sort((heroesA, heroesB) => heroesA.level - heroesB.level);
    for (let heroes of result) {
        console.log(`Hero: ${heroes.name}`);
        console.log(`level => ${heroes.level}`);
        console.log(`items => ${heroes.items.join(", ")}`);
    }
}
inventory([

    'Isacc / 25 / Apple, GravityGun',
    
    'Derek / 12 / BarrelVest, DestructionSword',
    
    'Hes / 1 / Desolator, Sentinel, Antara'
    
    ])