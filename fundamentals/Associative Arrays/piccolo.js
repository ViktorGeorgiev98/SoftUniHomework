function piccolo(input) {
    let parkingLot = new Map();
    for (let line of input) {
        let currentCommandAndCarNumber = line.split(', ');
        let command = currentCommandAndCarNumber[0];
        let carNumber = currentCommandAndCarNumber[1];
        if (command === 'IN') {
            parkingLot.set(carNumber, '');
        } else if (command === 'OUT') {
            if (parkingLot.has(carNumber)) {
                parkingLot.delete(carNumber);
            }
        }
    }
    parkingLot = Array.from(parkingLot).sort((a, b) => a[0].localeCompare(b[0]));
    if (parkingLot.length === 0) {
        console.log(`Parking Lot is Empty`);
    }
    for (let [car, num] of parkingLot) {
        console.log(car);
    }
}

piccolo(['IN, CA2844AA',

'IN, CA1234TA',

'OUT, CA2844AA',

'IN, CA9999TT',

'IN, CA2866HI',

'OUT, CA1234TA',

'IN, CA2844AA',

'OUT, CA2866HI',

'IN, CA9876HH',

'IN, CA2822UU']);