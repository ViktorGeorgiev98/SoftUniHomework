function houseParty(namesThatAreGoing) {
    let newListOfPeople = [];
    for (let i = 0; i < namesThatAreGoing.length; i++) {
        let currentPersonCommand = namesThatAreGoing[i].split(' ');
        let namePerson = currentPersonCommand[0];
        if (namesThatAreGoing[i].includes('not going')) {
            if (newListOfPeople.length === 0) {
                newListOfPeople.unshift(`${namePerson} is not in the list!`);
            } else {
                let counter = newListOfPeople.length;
                for (let j = 0; j < counter; j++) {
                    if (newListOfPeople[j].includes(namePerson)) {
                        newListOfPeople.splice(j, 1);
                    } else if (!newListOfPeople.includes(namePerson)) {
                        newListOfPeople.unshift(`${namePerson} is not in the list!`);
                        break;
                    }
                }
            }
        } else {
            if (newListOfPeople.length === 0) {
                newListOfPeople.push(namePerson);
            } else {    
                    if (newListOfPeople.includes(namePerson)) {
                        newListOfPeople.unshift(`${namePerson} is already in the list!`);
                    } else {
                        newListOfPeople.push(namePerson);
                    }
            }
        }
    }
    console.log(newListOfPeople.join('\n'));
}
houseParty(['Tom is going!',

'Annie is going!',

'Tom is going!',

'Garry is going!',

'Jerry is going!'])

console.log('=======================')

houseParty(['Allie is going!',

'George is going!',

'John is not going!',

'George is not going!'])