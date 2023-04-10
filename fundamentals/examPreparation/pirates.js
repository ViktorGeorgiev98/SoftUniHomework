function pirates(input) {
    let cities = new Map();
    function createCity(cityName, cityPopulation, cityGold) {
        let city = {
            name: cityName,
            population: cityPopulation,
            gold: cityGold,
            plunder(people, gold) {
                console.log(`${this.name} plundered! ${gold} gold stolen, ${people} citizens killed.`);
                this.population -= people;
                this.gold -= gold;
            },
            prosper(gold) {
                if (gold < 0) {
                    console.log(`Gold added cannot be a negative number!`);
                } else {
                    this.gold += gold;
                    console.log(`${gold} gold added to the city treasury. ${this.name} now has ${this.gold} gold.`);
                }
            }
        }
        return city;
    }


    for (let line of input) {
        let currentCommandAndCity = input.shift().split('||');
        let city = currentCommandAndCity.shift();
        if (city === 'Sail') {
            break;
        }
        let population = Number(currentCommandAndCity.shift());
        let gold = Number(currentCommandAndCity.shift());
        let currentCity = createCity(city, population, gold);
        if (cities.has(city)) {
            let currentCityValue = cities.get(city);
            currentCityValue.population += population;
            currentCityValue.gold += gold;
            cities.set(city, currentCityValue);
        } else {
            cities.set(city, currentCity);
        }
    }

    for (let line of input) {
        let currentCityAndCommand = line.split('=>');
        let command = currentCityAndCommand.shift();
        if (command === 'End') {
            break;
        }

        if (command === 'Plunder') {
            let city = currentCityAndCommand.shift();
            let people = Number(currentCityAndCommand.shift());
            let gold = Number(currentCityAndCommand.shift());
            if (cities.has(city)) {
                let currentCityValue = cities.get(city);
                currentCityValue.plunder(people, gold);
                if (currentCityValue.gold <= 0 || currentCityValue.population <= 0) {
                    console.log(`${city} has been wiped off the map!`);
                    cities.delete(city);
                }
            }
        } else if (command === 'Prosper') {
            let city = currentCityAndCommand.shift();
            let gold = Number(currentCityAndCommand.shift());
            if (cities.has(city)) {
                let currentCityValue = cities.get(city);
                currentCityValue.prosper(gold);
            }
        }
    }

    if (cities.size <= 0) {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
        return;
    }
    console.log(`Ahoy, Captain! There are ${cities.size} wealthy settlements to go to:`);
    for (let city of cities.values()) {
        console.log(`${city.name} -> Population: ${city.population} citizens, Gold: ${city.gold} kg`);
    }
}

pirates(["Nassau||95000||1000",
"San Juan||930000||1250",
"Campeche||270000||690",
"Port Royal||320000||1000",
"Port Royal||100000||2000",
"Sail",
"Prosper=>Port Royal=>-200",
"Plunder=>Nassau=>94000=>750",
"Plunder=>Nassau=>1000=>150",
"Plunder=>Campeche=>150000=>690",
"End"])
;
