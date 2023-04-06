function armies(input) {
    let armies = new Map();

    for (let line of input) {
        if (line.includes('arrives')) {
            let index = line.indexOf('arrives');
            line.splice(index, 1);
            let generalName = line[0];
            armies.set(generalName, '');
        } else {
            if (line.includes(':')) {
                let currentArmy = line.split(':');
                let general = currentArmy[0];
                let generalArmy = currentArmy[1].split(' ');
                if (armies.has(general)) {
                armies.set(general, generalArmy);
               }
            } else {
                let [armyName, quantity] = line.split(' + ');
                if (armies.has(armyName)) {
                    let currentArmyCount = armies.get(armyName);
                    let newArmyCount = currentArmyCount + quantity;
                    armies.set()
                }
            }

        }
    }
}

armies(['Rick Burr arrives', 
'Fergus: Wexamp, 30245',
 'Rick Burr: Juard, 50000',
  'Findlay arrives',
   'Findlay: Britox, 34540',
    'Wexamp + 6000', 
    'Juard + 1350', 
    'Britox + 4500', 
    'Porter arrives', 
    'Porter: Legion, 55000', 
    'Legion + 302', 
    'Rick Burr defeated', 
    'Porter: Retix, 3205'])