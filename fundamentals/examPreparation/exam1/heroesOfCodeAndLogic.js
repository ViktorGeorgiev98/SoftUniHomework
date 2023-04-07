function heroesOfCodeAndLogic(input) {
    let numberOfHeroes = Number(input.shift());
    let heroes = new Map();

    function createHero(heroName, heroHealth, heroMana) {
        let hero = {
            name: heroName,
            health: heroHealth,
            mana: heroMana,
            castSpell(manaNeeded, spell) {
                if (this.mana > 200) {
                    this.mana = 200;
                }
                if (this.mana >= manaNeeded) {
                    this.mana -= manaNeeded;
                    console.log(`${this.name} has successfully cast ${spell} and now has ${this.mana} MP!`);
                } else {
                    console.log(`${this.name} does not have enough MP to cast ${spell}!`);
                }
            },

            takeDamage(damage, attacker) {
                if (this.health > 100) {
                    this.health = 100;
                }
                if (this.health > damage) {
                    this.health -= damage;
                    console.log(`${this.name} was hit for ${damage} HP by ${attacker} and now has ${this.health} HP left!`);
                } else {
                    this.health -= damage;
                    console.log(`${this.name} has been killed by ${attacker}!`);
                }
            },

            recharge(amount) {
                let currentMana = this.mana;
                this.mana += amount;
                let manaRecharged = 0;
                if (this.mana <= 200) {
                    manaRecharged = amount;
                } else {
                    manaRecharged = 200 - currentMana;
                    this.mana = 200;
                }
                console.log(`${this.name} recharged for ${manaRecharged} MP!`);
            },

            heal(amount) {
                let currentHealth = this.health;
                this.health += amount;
                let healthRecharged = 0;
                if (this.health <= 100) {
                    healthRecharged = amount;
                } else {
                    healthRecharged = 100 - currentHealth;
                    this.health = 100;
                }
                console.log(`${this.name} healed for ${healthRecharged} HP!`);
            }
        }

        return hero;
    }


    for (let i = 0; i < numberOfHeroes; i++) {
        let currentLine = input.shift()
        let currentHeroData = currentLine.split(' ');
        let name = currentHeroData[0];
        let health = Number(currentHeroData[1]);
        let mana = Number(currentHeroData[2]);
        let currentHero = createHero(name, health, mana);
        heroes.set(name, currentHero);
    }


    for (let line of input) {
        let currentLineAndCommand = line.split(' - ');
        let command = currentLineAndCommand.shift();
        if (command === 'End') {
            break;
        }

        if (command === 'CastSpell') {
            let heroName = currentLineAndCommand[0];
            let mpNeeded = Number(currentLineAndCommand[1]);
            let spell = currentLineAndCommand[2];
            if (heroes.has(heroName)) {
                let currentResult = heroes.get(heroName);
                currentResult.castSpell(mpNeeded, spell);
                heroes.set(heroName, currentResult);
            }
        } else if (command === 'TakeDamage') {
            let heroName = currentLineAndCommand[0];
            let damage = Number(currentLineAndCommand[1]);
            let attacker = currentLineAndCommand[2];
            if (heroes.has(heroName)) {
                let currentResult = heroes.get(heroName);
                currentResult.takeDamage(damage, attacker);
                heroes.set(heroName, currentResult);
                if (currentResult.health <= 0) {
                    heroes.delete(heroName);
                }
            }
        } else if (command === 'Recharge') {
            let heroName = currentLineAndCommand[0];
            let amount = Number(currentLineAndCommand[1]);
            if (heroes.has(heroName)) {
                let currentResult = heroes.get(heroName);
                currentResult.recharge(amount);
                heroes.set(heroName, currentResult);
            }
        } else if (command === 'Heal') {
            let heroName = currentLineAndCommand[0];
            let amount = Number(currentLineAndCommand[1]);
            if (heroes.has(heroName)) {
                let currentResult = heroes.get(heroName);
                currentResult.heal(amount);
                heroes.set(heroName, currentResult);
            }
        }
    }



    for (let hero of heroes.values()) {
        console.log(`${hero.name}`);
        console.log(` HP: ${hero.health}`);
        console.log(` MP: ${hero.mana}`);
    }
}


heroesOfCodeAndLogic(['4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
    ])