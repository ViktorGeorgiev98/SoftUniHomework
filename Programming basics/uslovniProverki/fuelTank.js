function fuelTank(input) {
    let fuel = input[0];
    let litresFuel = Number(input[1]);
    if (fuel === 'Gas') {
        if (litresFuel >= 25) {
            console.log(`You have enough gas.`)
        } else if (litresFuel < 25) {
            console.log(`Fill your tank with gas!`)
        }
    } else if (fuel === 'Gasoline') {
        if (litresFuel >= 25) {
            console.log(`You have enough gasoline.`)
        } else if (litresFuel < 25) {
            console.log(`Fill your tank with gasoline!`)
        }
    } else if (fuel === 'Diesel') {
        if (litresFuel >= 25) {
            console.log(`You have enough diesel.`)
        } else if (litresFuel < 25) {
            console.log(`Fill your tank with diesel!`)
        }
    } else {
        console.log('Invalid fuel!')
    }
}
fuelTank(["Kerosene" , "200"])