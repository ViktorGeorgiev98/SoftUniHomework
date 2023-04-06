function plantDiscovery(input) {
    // Variables
    let numberOfPlants = Number(input.shift());
    let exhibition = new Map();
    let plants = [];

    // Below is the method to create a new plant

    function createPlant(plantName, plantRarity, plantRating) {
        let plant = {
            name: plantName,
            rarity: plantRarity,
            rating: plantRating,
            ratingAverageCounter: 0,
            // method to update rating
            rateUpdate(ratingToBeAdded) {
             this.rating += ratingToBeAdded;
             this.ratingAverageCounter += 1;
            },
            // method to update rarity
            updateRarity(newRarity) {
                this.rarity = newRarity;
            },
            // method to reset rating
            resetRating() {
                this.rating = 0;
                this.ratingAverageCounter = 0;
            }
        };
        return plant;
    }

    // Creating the needed plants and putting them in a asossiative array to be stored and user later
    // All is done using the method create plant

    for (let i = 0; i < numberOfPlants; i++) {
        let current = input.shift();
        let [currentPlant, currentRarity] = current.split('<->');
        currentRarity = Number(currentRarity);
        let currentRating = 0;
        let plant = createPlant(currentPlant, currentRarity, currentRating);
        exhibition.set(currentPlant, plant);
    }

    // Main logic of the task, need to execute all commands

    for (let line of input) { 
        let currentLine = line.split(': ');
        let command = currentLine.shift();
        if (command === 'Exhibition') {
            break;
        }
        let name;
        let value;
        if (currentLine[0].includes(' - ')) {
           [name, value] = currentLine[0].split(' - ');
        } else {
            name = currentLine[0];
        }
        if (command === 'Rate') {
            if (exhibition.has(name)) {
                let plant = exhibition.get(name);
                let rating = Number(value);
                plant.rateUpdate(rating);
                exhibition.set(name, plant);
            } else {
                console.log('error');
            }
        } else if (command === 'Update') {
            if (exhibition.has(name)) {
                let plant = exhibition.get(name);
                let rarity = Number(value);
                plant.updateRarity(rarity);
                exhibition.set(name, plant);
            } else {
                console.log('error');
            }
        } else if (command === 'Reset') {
            if (exhibition.has(name)) {
                let plant = exhibition.get(name);
                let rating = 0;
                plant.resetRating(rating);
                exhibition.set(name, plant);
            } else {
                console.log('error');
            }
        }

    }

    // All plants are updated, now need to print them.

    console.log('Plants for the exhibition:');

    for (let plant of exhibition.values()) { // piece => name of the plant ; value => information about it
        if (plant.rating > 0) {
            console.log(`- ${plant.name}; Rarity: ${plant.rarity}; Rating: ${(plant.rating / plant.ratingAverageCounter).toFixed(2)}`);
        } else {
            console.log(`- ${plant.name}; Rarity: ${plant.rarity}; Rating: ${plant.rating .toFixed(2)}`);
        }
    }

}

// plantDiscovery(["3",
// "Arnoldii<->4",
// "Woodii<->7",
// "Welwitschia<->2",
// "Rate: Woodii - 10",
// "Rate: Welwitschia - 7",
// "Rate: Arnoldii - 3",
// "Rate: Woodii - 5",
// "Update: Woodii - 5",
// "Reset: Arnoldii",
// "Exhibition"])
// ;


plantDiscovery(["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"])



plantDiscovery(["2",
"Candelabra<->10",
"Oahu<->10",
"Rate: Oahu - 7",
"Rate: Candelabra - 6",
"Exhibition"])
