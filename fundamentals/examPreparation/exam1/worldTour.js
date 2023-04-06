function worldTour(input) {
    let destinations = input.shift();
    for (let line of input) {
        let [command, value1, value2] = line.split(':');
        if (command === 'Travel') {
            // console.log(`Ready for world tour! Planned stops: ${destinations}`);
            break;
        } else if (command === 'Add Stop') {
            let index = Number(value1);
            let string = (value2);
            if (index >= 0 && index < destinations.length) {
                let leftSide = destinations.slice(0, index);
                let rightSide = destinations.slice(index);
                destinations = leftSide + string + rightSide;
                // console.log(destinations);
            }
            console.log(destinations);
        } else if (command === 'Remove Stop') {
            let startIndex = Number(value1);
            let endIndex = Number(value2);
            if ((startIndex >= 0 && startIndex < destinations.length) 
            && (endIndex >= 0 && endIndex < destinations.length)) {
                let leftSide = destinations.slice(0, startIndex);
                let rigthSide = destinations.slice(endIndex + 1);
                destinations = leftSide + rigthSide;
                // console.log(destinations);
            }
            console.log(destinations);
        } else if (command === 'Switch') {
            let oldString = value1;
            let newString = value2;
            while(destinations.includes(oldString)) {
                destinations = destinations.replace(oldString, newString);
            }
            console.log(destinations);
        }
    }
    console.log(`Ready for world tour! Planned stops: ${destinations}`);
}

// worldTour(["Albania:Bulgaria:Cyprus:Deuchland",
// "Add Stop:3:Nigeria",
// "Remove Stop:4:8",
// "Switch:Albania: Azərbaycan",
// "Travel"]
// )
// ;


worldTour(["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"]
)