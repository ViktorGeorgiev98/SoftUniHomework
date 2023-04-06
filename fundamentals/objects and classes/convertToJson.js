function convertToJson(firstName, lastName, age) {
    let obj = {name: firstName, 
        lastName: lastName, 
        hairColor: age};
    console.log(JSON.stringify(obj));
}
convertToJson('George', 'Jones',

'Brown')