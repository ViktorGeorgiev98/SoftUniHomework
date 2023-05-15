function list(names) {
    let sortedNames = names.sort((a, b) => a.localeCompare(b));
    let num = 1;
    for (let name of sortedNames) {
        console.log(`${num}.${name}`);
        num += 1;
    }
}

list(["John",
"Bob",
"Christina",
"Ema"]
);