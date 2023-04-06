function race(input) {
    // variables
    let participants = input.shift();
    let endResults = {};
    // let namePattern = /(?<name>[A-z-Z]+)/;
    let namePattern = /[A-Z|a-z]/g;
    let distancePattern = /[0-9]/g;
    //  cycle for the input data
    for (let line of input) {
        if (line === 'end of race') {
            break;
        }
        // need to check for both patterns and do the math :D
        if (namePattern.test(line)) {
            let name = line.match(namePattern).join('');
            let distance = 0;
            let currentDistance = line.match(distancePattern);
            for (let line of currentDistance) {
                distance += Number(line);
            }
            if (participants.includes(name)) {
                if (!endResults.hasOwnProperty(name)) {
                    endResults[name] = distance;
                } else {
                    endResults[name] += distance;
                }
            }
        }

    }

    // need to sort the players and print them

    let sortedPlacesForPlayers = Object.entries(endResults).sort((a, b) => b[1] - a[1]);
    console.log(`1st place: ${sortedPlacesForPlayers[0][0]}`);
    console.log(`2nd place: ${sortedPlacesForPlayers[1][0]}`);
    console.log(`3rd place: ${sortedPlacesForPlayers[2][0]}`);
    console.log('👉👌');
}

race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne', 'Mi*&^%$ch123o!#$%#nne787) ', '%$$B(*&&)i89ll)*&) ', 'R**(on%^&ald992) ', 'T(*^^%immy77) ', 'Ma10**$#g0g0g0i0e', 'end of race']);