function convertToObject(objJSON) {
    let obj = JSON.parse(objJSON);
    for (let key of Object.keys(obj)) {
        console.log(`${key}: ${obj[key]}`);
    }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')