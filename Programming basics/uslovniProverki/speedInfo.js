function speedInfo(input) {
    let speedKm = Number(input[0]);
    if (speedKm <= 10) {
        console.log("slow")
    } else if (speedKm <= 50) {
        console.log("average")
    } else if (speedKm <= 150) {
        console.log("fast")
    } else if ( speedKm <= 1000) {
        console.log("ultra fast")
    } else if (speedKm > 1000) {
        console.log("extremely fast")
    }
}