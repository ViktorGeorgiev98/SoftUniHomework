function addressBook(arr) {
    let book = {};
    for (let addresses of arr) {
        let [name, address] = addresses.split(':');
        book[name] = address;
    }

    let entries = Object.entries(book);
    entries.sort((a, b) => a[0].localeCompare(b[0]));
    for (let [name, address] of entries) {
        console.log(`${name} -> ${address}`);
    }
}


addressBook(['Tim:Doe Crossing',

'Bill:Nelson Place',

'Peter:Carlyle Ave',

'Bill:Ornery Rd'])