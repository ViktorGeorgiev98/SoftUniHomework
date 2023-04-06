function theLift(arr) {
    let peopleWaitingForTheLift = Number(arr[0]);
    let liftsAvailable = arr[1].split(' ');
    for (let i = 0; i < liftsAvailable.length; i++) {
        let liftsWith4People = 0;
        for (let j = 0; j < liftsAvailable.length; j++) {
            if (Number(liftsAvailable[j]) >= 4) {
                liftsWith4People += 1;
            }
        }
        if (liftsWith4People === liftsAvailable.length) {
            break;
        }
        if (peopleWaitingForTheLift >= 4) {
            if (liftsAvailable[i] != 0 && Number(liftsAvailable[i]) < 4) {
                let diff = 4 - Number(liftsAvailable[i]);
                liftsAvailable[i] = Number(liftsAvailable[i]) + diff;
                peopleWaitingForTheLift -= diff;
            } else {
                liftsAvailable[i] = Number(liftsAvailable[i] ) + 4;
                peopleWaitingForTheLift -= 4;
            }
        } else {
            if (liftsAvailable[i] != 0 && Number(liftsAvailable[i]) < 4) {
                let diff = 4 - Number(liftsAvailable[i]);
                if (diff <= peopleWaitingForTheLift) {
                    liftsAvailable[i] = Number(liftsAvailable[i]) + diff;
                    peopleWaitingForTheLift -= diff;
                } else {
                    liftsAvailable[i] = Number(liftsAvailable[i]) + peopleWaitingForTheLift;
                    peopleWaitingForTheLift -= peopleWaitingForTheLift;
                }
            } else {
            let peopleLeft = 4 + (peopleWaitingForTheLift - 4)
            liftsAvailable[i] = Number(Number(liftsAvailable[i]) + peopleLeft);
            peopleWaitingForTheLift -= peopleLeft;
            }
        }
        if (peopleWaitingForTheLift <= 0) {
            break;
        }
        // if (Number(liftsAvailable[i]) > 4) {
        //     let peopleLeft = Number(Number(liftsAvailable[i]) - 4);
        //     if (i + 1 >= liftsAvailable.length) {
        //         liftsAvailable[0] = Number(Number(liftsAvailable[0]) + peopleLeft);
        //     } else {
        //         liftsAvailable[i + 1] = Number(Number(liftsAvailable[i + 1]) + peopleLeft);
        //         liftsAvailable[i] = 4;
        //     }
        // }
    }
    for (let k = 0; k < liftsAvailable.length; k++) {
        if (Number(liftsAvailable[k]) > 4) {
            let diff = Number(liftsAvailable[k]) - 4;
            liftsAvailable[k] = 4;
            peopleWaitingForTheLift += diff;
        }
    }
    if (peopleWaitingForTheLift <= 0) {
        console.log(`The lift has empty spots!`);
        console.log(liftsAvailable.join(' '));
    } else {
        console.log(`There isn't enough space! ${peopleWaitingForTheLift} people in a queue!`);
        console.log(liftsAvailable.join(' '));
    }
}
theLift([
    "20",
    "0 2 0"
   ]
   
   
   
   )

console.log(`''''''''''''''''''''''''''''''''''''`);



theLift([
    "15",
    "0 0 0 0 0"
   ]
   )