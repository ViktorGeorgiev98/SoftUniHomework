function employees(arr) {
    let result = [];
    for (let name of arr) {
        let myInfo = {
            name: name,
            personalNumber: name.length
        }
        result.push(myInfo);
    }

    for (let obj of result) {
        console.log(`Name: ${obj.name} -- Personal Number: ${obj.personalNumber}`);
    }
}
employees([

'Silas Butler',

'Adnaan Buckley',

'Juan Peterson',

'Brendan Villarreal'

])