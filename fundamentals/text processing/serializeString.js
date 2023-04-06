function serializeString(input) {
    let string = input.join('');
    // let string = input;
    let map = new Map();
    for (let i = 0; i < string.length; i++) {
        let currentChar = string[i];
        if (!map.has(currentChar)) {
            map.set(currentChar, i);
        } else {
            let currentResult = map.get(currentChar);
            let newResult = currentResult+'/'+i;
            map.set(currentChar, newResult);
        }
    }
    let entries = map.entries();
    for (let [key, value] of entries) {
        console.log(`${key}:${value}`);
    }
}

serializeString(["avjavamsdmcalsdm"]);