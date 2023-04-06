function employees2(arr) {
    let result = {};
    for (let i = 0; i < arr.length; i++) {
        result = {
            name: arr[i],
            personalNumber: arr[i].length
        }
    }

    for (let key of Object.keys(result)) {
        console.log(`Name: ${key} -- Personal Number: ${result[key]}`);
    }
}
employees2([

    'Silas Butler',
    
    'Adnaan Buckley',
    
    'Juan Peterson',
    
    'Brendan Villarreal'
    
    ])