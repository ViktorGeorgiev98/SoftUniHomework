function glasniBukvi(input) {
    let text = input[0];
    let sum = 0;
    let value = 0
    for (let i = 0; i < text.length; i++) {
        switch(text.charAt(i)) {
            case 'a':
                value += 1;
                break;
            case 'e':
                value += 2;
                break;
            case 'i':
                value += 3;
                break;
            case 'o':
                value += 4;
                break;
            case 'u':
                value += 5;
                break;
            default:
                break
            sum += value
        }
        // sum += value
    }
    sum += value
    console.log(sum) 
    // console.log(value)
}
glasniBukvi(["hello"])