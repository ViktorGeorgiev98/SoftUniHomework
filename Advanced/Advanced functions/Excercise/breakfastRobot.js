function getManager() {
    // constants
    const SUCCESS_MSG = "Success";
    // dictionaries
    const elements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    };
    const receipts = {
        apple: {carbohydrate: 1, flavour: 2},
        lemonade: {carbohydrate: 10, flavour: 20},
        burger: {carbohydrate: 5, fat: 7, flavour: 3},
        eggs: {protein: 5, fat: 1, flavour: 1},
        turkey: {carbohydrate: 10, protein: 10, fat: 10, flavour: 10}
    };

    // error handling   
    const getError = (element) => `Error: not enough ${element} in stock`;
    const commands = {
        restock: (element, quantity)=>{
            elements[element += Number(quantity)];
            return SUCCESS_MSG;
        },
        prepare: (recipe, quantity)=>{
            let missingEntry;
            let errorMsg;

            for (let i = 0; i < quantity; i++) {
                missingEntry = Object.entries(receipts[recipe]).find(x => elements[x[0]] < Number([x[1]]));
                if (!missingEntry) {
                    Object.entries(receipts[recipe]).forEach(x => {
                        elements[x[0]] -= Number(x[1]);
                    });
                } else {
                    errorMsg = getError(missingEntry[0]);
                    break;
                }
            }
            return errorMsg ? errorMsg : SUCCESS_MSG;
        },
        report: ()=>{
            Object.keys(elements).reduce((a,b) => {
                a.push(`${b}=${elements[b]}`);
                return a;
            }, []).join(" ");
        },
    };

    return function(cmd) {
        const cmdTokens = cmd.split(" ");

        return cmdTokens.length === 1 ? commands[cmdTokens[0]]() : commands[cmdTokens[0]](cmdTokens[1], cmdTokens[2]);
    }
}

let manager = solution ();
console.log (manager ("restock flavour 50")); // Success
console.log (manager ("prepare lemonade 4")); // Error: not enough carbohydrate in
stock