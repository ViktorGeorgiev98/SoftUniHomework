function manOWar(arr) {
    let statusPirateShip = arr.shift().split('>');
    let statusWarShip = arr.shift().split('>');
    let maximumHealthPerSection = Number(arr.shift());
    let stalemate = true;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'Retire') {
            break;
        } else {
            let commandAndValues = arr[i].split(' ');
            let command = commandAndValues[0];
            let value = Number(commandAndValues[1]);

            if (command === 'Fire') {
                let index = value;
                let damage = Number(commandAndValues[2]);
                if (index >= 0 && index < statusWarShip.length) {
                    statusWarShip[index] = Number(statusWarShip[index]) - damage;
                    if (Number(statusWarShip[index]) <= 0) {
                        console.log(`You won! The enemy ship has sunken.`);
                        stalemate = false;
                        return;
                    } 
                }
            } else if (command === 'Defend') {
                let startIndex = Number(commandAndValues[1]);
                let endIndex = Number(commandAndValues[2]);
                let damage = Number(commandAndValues[3]);
                if (startIndex >= 0 && startIndex < statusPirateShip.length && endIndex >= 0 && endIndex < statusPirateShip.length) {
                    for (let j = startIndex; j <= endIndex; j++) {
                        statusPirateShip[j] = Number(statusPirateShip[j]) - damage;
                        if (Number(statusPirateShip[j]) <= 0) {
                            console.log(`You lost! The pirate ship has sunken.`);
                            stalemate = false;
                            return
                        }
                    }
                }
            } else if (command === 'Repair') {
                let index = commandAndValues[1];
                let health = Number(commandAndValues[2]);
                if (index >= 0 && index < statusPirateShip.length) {
                    statusPirateShip[index] = Number(statusPirateShip[index]) + health;
                    if (Number(statusPirateShip[index]) > maximumHealthPerSection) {
                        statusPirateShip[index] = maximumHealthPerSection;
                    }
                }
            } else if (command === 'Status') {
                let sectionsThatNeedRepair = maximumHealthPerSection * 0.2;
                let sectionsForRepair = 0;
                for (let k = 0; k < statusPirateShip.length; k++) {
                    if (Number(statusPirateShip[k]) < sectionsThatNeedRepair) {
                        sectionsForRepair += 1;
                    }
                } 
                console.log(`${sectionsForRepair} sections need repair.`);
            }
        }
    }
    if (stalemate === true) {
        let pirateShipHealth = 0;
        let warShipHealth = 0;
        for (let u = 0; u < statusPirateShip.length; u++) {
            pirateShipHealth += Number(statusPirateShip[u]);
        }
        for (let y = 0; y < statusWarShip.length; y++) {
            warShipHealth += Number(statusWarShip[y]);
        }
        console.log(`Pirate ship status: ${pirateShipHealth}`);
        console.log(`Warship status: ${warShipHealth}`);
    }
}
manOWar(["2>3>4>5>2",
"6>7>8>9>10>11",
"20",
"Status",
"Fire 2 3",
"Defend 0 4 11",
"Repair 3 18",
"Retire"])

