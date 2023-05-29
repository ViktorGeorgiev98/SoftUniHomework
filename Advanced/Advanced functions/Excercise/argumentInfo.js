function solve(...args) {
    let obj = {};
    args.forEach((arg) => {
        const typeOfArg = typeof arg;
        console.log(`${typeof arg}: ${arg}`);
        obj[typeOfArg] = obj[typeOfArg] 
        ?  (obj[typeOfArg] += 1) 
        : (obj[typeOfArg] = 1);
    });
    //  sort desc order
    const sortedInDescOrder = Object.entries(obj).sort((a,b) => b[1] - a[1]);
    sortedInDescOrder.forEach(([key, value]) => {
        console.log(`${key} = ${value}`);
    });
    
    
}

solve("cat", 42, function () {
    console.log("Hello world!");
});