function dungeonDark(arr) {
    let rooms = rooms1(arr);
    let health = 100;
    let coins = 0;
    let bestRoom = 0;
    
    function rooms1(arr) {
        let stringForTask = arr.join('');
        // let arrForTask = stringForTask.split('');
        for (let i = 0; i < stringForTask.length; i++) {
            stringForTask = stringForTask.replace("|", ",");
        }
        stringForTask.split();
        let arrForTask = []
        let newArr = [];
        for (let j = 0; j <= stringForTask.length; j++) {
            // let stringForJoin = '';
            let stringForJoin = arrForTask.join('');
            if (stringForTask[j] === ',') {
                stringForJoin = arrForTask.join('');
                newArr.push(stringForJoin);
                arrForTask = [];
            } else {
                arrForTask.push(stringForTask[j]);
            }
            if (j === stringForTask.length) {
                newArr.push(stringForJoin);
            }
        }
        return newArr;
    }
    let arr2 = [];
    for (let k = 0; k < rooms.length; k++) {
        bestRoom += 1;
        let arr3 = [];
        let arr4 = [];
        // for (let h = 0; h < rooms[k].length; h++) {
        arr3 = [];
        arr4 = [];
        let currentIndex = rooms[k];
        let len = currentIndex.length
        for (let t = 0; t < currentIndex.length; t++) {
            if (currentIndex[t] != '0' 
        && currentIndex[t] != '1' 
        && currentIndex[t] != '2' 
        && currentIndex[t] != '3' 
        && currentIndex[t] != '4' 
        && currentIndex[t] != '5' 
        && currentIndex[t] != '6' 
        && currentIndex[t] != '7' 
        && currentIndex[t] != '8' 
        && currentIndex[t] != '9') {
            arr3.push(currentIndex[t]);
        }
        }
        for (let r = 0; r < currentIndex.length; r++) {
        if (currentIndex[r] === '0' 
        || currentIndex[r] === '1' 
        || currentIndex[r] === '2' 
        || currentIndex[r] === '3' 
        || currentIndex[r] === '4' 
        || currentIndex[r] === '5' 
        || currentIndex[r] === '6' 
        || currentIndex[r] === '7' 
        || currentIndex[r] === '8' 
        || currentIndex[r] === '9') {
            arr4.push(currentIndex[r]);
        }
        }
            
        let arr3String = arr3.join('');
        let arr4String = arr4.join('');
        arr3String = arr3String.trim();
        arr4String = arr4String.trim();
        if (arr3String === 'potion') {
            let healthPoints = Number(arr4String)
            if (health + healthPoints > 100) {
                healthPoints = 100 - health;
                health += healthPoints;
                health = 100;
            } else {
                health += healthPoints;
            }
            console.log(`You healed for ${healthPoints} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (arr3String === 'chest') {
            let coinsNumber = Number(arr4String);
            console.log(`You found ${coinsNumber} coins.`);
            coins += Number(coinsNumber);
        } else {
            health -= Number(arr4String);
            if (health > 0) {
                let monsterName = arr3String;
                console.log(`You slayed ${monsterName}.`)
            } else {
                let monsterName = arr3String;
                console.log(`You died! Killed by ${monsterName}.`);
                console.log(`Best room: ${bestRoom}`);
                break;
            }
        }

    }
    if (bestRoom >= rooms.length) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}