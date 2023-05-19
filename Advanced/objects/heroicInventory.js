function inventory(heroes) {
    let finalData = [];
    for (let hero of heroes) {
        let items = [];
        let splitHero = hero.split(' / ');
        let name = splitHero[0];
        let level = splitHero[1];
        if (splitHero.length > 2) {
            items = splitHero[2].split(', ');
        }
        let currentHero = {
            name: name,
            level: Number(level),
            items: items
        }
        
        finalData.push(currentHero);
    }
    // console.log(finalData);
    let finalDataJSON = JSON.stringify(finalData);
    console.log(finalDataJSON);
    // return finalDataJSON;
}

// inventory(['Isacc / 25 / Apple, GravityGun',
// 'Derek / 12 / BarrelVest, DestructionSword',
// 'Hes / 1 / Desolator, Sentinel, Antara']);

inventory(['Jake / 1000 / Gauss, HolidayGrenade']);