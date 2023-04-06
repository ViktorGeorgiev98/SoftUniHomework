function spaceTravel(arr) {
    let travelDistance = arr.shift().split('||');
    let fuel = Number(arr.shift());
    let ammo = Number(arr.shift());
    for (let i = 0; i < travelDistance.length; i++) {
        let commandAndDistance = travelDistance[i].split(' ');
        let command = commandAndDistance[0];
        let value = Number(commandAndDistance[1]); 
        if (command === 'Titan') {
            console.log(`You have reached Titan, all passengers are safe.`);
            return;
        } else if (command === 'Travel') {
            fuel -= value;
            if (fuel >= 0) {
                console.log(`The spaceship travelled ${value} light-years.`);
            } else {
                console.log(`Mission failed.`);
                return;
            }
        } else if (command === 'Enemy') {
            if (ammo >= value) {
                ammo -= value;
                console.log(`An enemy with ${value} armour is defeated.`);
            } else {
                fuel -= value * 2;
                if (fuel >= 0) {
                    console.log(`An enemy with ${value} armour is outmaneuvered.`);
                } else {
                    console.log(`Mission failed.`);
                    return;
                }
            }
        } else if (command === 'Repair') {
            fuel += value;
            ammo += value * 2;
            console.log(`Ammunitions added: ${value * 2}.`);
            console.log(`Fuel added: ${value}.`);
        }
    }
}
spaceTravel([ 'Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan', 
'60', 
'100' ])

