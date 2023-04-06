function value(input) {
    let sum = 0;
    let task = input.pop();
    let string = input.join('');
    if (task === 'UPPERCASE') {
        for (let i = 0; i < string.length; i++) {
            if (string[i].toUpperCase() === string[i] 
            && string.charCodeAt(i) <= 90 
            && string.charCodeAt(i) >= 65) {
                let currentResult = string.charCodeAt(i);
                sum += currentResult;
            }
        }
    } else if (task === 'LOWERCASE') {
        for (let i = 0; i < string.length; i++) {
            if (string[i].toLowerCase() === string[i]
            && string.charCodeAt(i) >= 97 
            && string.charCodeAt(i) <= 122) {
                let currentResult = string.charCodeAt(i);
                sum += currentResult;
            }
        }
            
    }

    console.log(`The total sum is: ${sum}`);
}

value(['HelloFromMyAwesomePROGRAM',

'LOWERCASE']);