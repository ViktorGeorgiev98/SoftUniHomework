function passwordValidator(password) {
    let containSpecialCharacters = contain(password);
    let digitsCounter = 0;
    let passwordIsValid = true;
    if (password.length < 6 || password.length > 10) {
        passwordIsValid = false;
        console.log('Password must be between 6 and 10 characters');
    }
    if (contain(password)) {
        passwordIsValid = false
        console.log('Password must consist only of letters and digits');
    }
    for (let i = 0; i < password.length; i++) {
        if (password[i] === '0' 
        || password[i] === '1' 
        || password[i] === '2' 
        || password[i] === '3' 
        || password[i] === '4' 
        || password[i] === '5' 
        || password[i] === '6' 
        || password[i] ==='7' 
        || password[i] === '8' 
        || password[i] === '9') {
            digitsCounter += 1;
        }
    }
    if (digitsCounter < 2) {
        passwordIsValid = false
        console.log('Password must have at least 2 digits');
    }
    // if (digitsCounter >= 2 && password.length >= 6 && password.length <= 10 && contain(password) != 'true') {
    //     console.log('Password is valid');
    // }
    if (passwordIsValid === true) {
        console.log('Password is valid');
    }
    function contain(password) {
        const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        return specialChars.test(password);
    }

}
passwordValidator('MyPass123');