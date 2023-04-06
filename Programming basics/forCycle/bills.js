function bills(input) {
    let numberOfMonths = Number(input[0]);
    let electricityBill = 0;
    let waterBill = 20;
    let internetBill = 15;
    // let otherBills = (electricityBill + waterBill + internetBill) * 0.20 + electricityBill + internetBill + waterBill; 
    let otherBills = 0
    let totalBillsEl = 0;
    let totalWaterBill = 0;
    let totalNetBill = 0;
    let totalOthersBill = 0;
    let averageBills = 0;
    for (let month = 1; month <= numberOfMonths; month++) {
        electricityBill = Number(input[month]);
        totalBillsEl += electricityBill;
        totalWaterBill += 20;
        totalNetBill += 15;
        // totalOthersBill += otherBills;
        otherBills = (electricityBill + waterBill + internetBill) * 0.20 + electricityBill + internetBill + waterBill;
        totalOthersBill += otherBills;
        // totalOthersBill += otherBills;
        averageBills += electricityBill + waterBill + internetBill + otherBills;
    }
    console.log(`Electricity: ${totalBillsEl.toFixed(2)} lv`);
    console.log(`Water: ${totalWaterBill.toFixed(2)} lv`);
    console.log(`Internet: ${totalNetBill.toFixed(2)} lv`);
    console.log(`Other: ${totalOthersBill.toFixed(2)} lv`);
    console.log(`Average: ${(averageBills / numberOfMonths).toFixed(2)} lv`);
}
bills(["5", "68.63", "89.25", "132.53", "93.53", "63.22"])