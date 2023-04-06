function invalidNumber(input) {
    let number = Number(input[0]);
    let numberIsValid = true
    if (number >= 100 
        && number <= 200 
        || number == 0) {
            numberIsValid
        
        } else {
            numberIsValid = false
            console.log("invalid")
        }
}