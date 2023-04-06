function gladiatorExpences(lostFights, helmetPrice, swordPrice, shieldPrice, armourPrice) {
    let helmetBrokenCounter = 0;
    let swordBrokenCounter = 0;
    let shieldBrokenCounter = 0;
    let armourBrokenCounter = 0;
    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 === 0) {
            helmetBrokenCounter += 1;
        }
        if (i % 3 === 0) {
            swordBrokenCounter += 1;
        }
        if (i % 6 === 0) {
            shieldBrokenCounter += 1;
            if (shieldBrokenCounter % 2 === 0 && shieldBrokenCounter != 0) {
                armourBrokenCounter += 1;
            }
        }
        
    }
    let result = (helmetPrice * helmetBrokenCounter) + (swordPrice * swordBrokenCounter) + (shieldPrice * shieldBrokenCounter) + (armourPrice * armourBrokenCounter);
    console.log(`Gladiator expenses: ${result.toFixed(2)} aureus`);
}
gladiatorExpences(23,

    12.50,
    
    21.50,
    
    40,
    
    200);