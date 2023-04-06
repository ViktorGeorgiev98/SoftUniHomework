function heroRecruitment(input) {

    // variables
    let heroes = new Map();

    //  main logic of the task
    for (let line of input) {
        let spells = new Map();
        let currentCommandAndValues = line.split(' ');
        let command = currentCommandAndValues.shift();
        if (command === 'End') {
            break;
        }

        if (command === 'Enroll') {
            let heroName = currentCommandAndValues[0];
            if (heroes.has(heroName)) {
                console.log(`${heroName} is already enrolled.`);
            } else {
                heroes.set(heroName, spells);
            }
        } else if (command === 'Learn') {
            let heroName = currentCommandAndValues[0];
            let spell = currentCommandAndValues[1];
            if (!heroes.has(heroName)) {
                console.log(`${heroName} doesn't exist.`);
            } else {
                let currentSpells = heroes.get(heroName);
                if (currentSpells.has(spell)) {
                    console.log(`${heroName} has already learnt ${spell}.`);
                } else {
                    currentSpells.set(spell, spell);
                    heroes.set(heroName, currentSpells);
                }
            }
        } else if (command === 'Unlearn') {
            let heroName = currentCommandAndValues[0];
            let spell = currentCommandAndValues[1];
            if (!heroes.has(heroName)) {
                console.log(`${heroName} doesn't exist.`);
            } else {
                let currentSpells = heroes.get(heroName);
                if (!currentSpells.has(spell)) {
                    console.log(`${heroName} doesn't know ${spell}.`);
                } else {
                    currentSpells.delete(spell);
                    heroes.set(heroName, currentSpells);
                }
            }
        }
    }

    //  print the result

    console.log('Heroes:');
    let values = Array.from(heroes);
    for (let [hero, spells] of values) {
        if (spells.size < 1) {
            console.log(`== ${hero}:`);
        } else {
            let knownSpells = '';
            if (spells.size === 1) {
                for (let spell of spells.values()) {
                    knownSpells += spell
                }
                console.log(`== ${hero}: ${knownSpells}`);
            } else {
                for (let spell of spells.values()) {
                    if (knownSpells === '') {
                        knownSpells += spell;
                    } else {
                        knownSpells += ',' + ' ' + spell;
                    }
                }
                console.log(`== ${hero}: ${knownSpells}`);
            }
        }
    }
}

heroRecruitment(["Enroll Stefan",
"Enroll Peter",
"Enroll John",
"Learn Stefan Spell",
"Learn Peter Dispel",
"Learn Peter Kurec",
"End"])

;