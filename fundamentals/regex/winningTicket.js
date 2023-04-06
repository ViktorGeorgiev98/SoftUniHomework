function winningTicket(input) {
    let length = 0;
    // let pattern = /[\@\#\$\^]{6,}/;
    // let pattern = /[\@\#\$\^]{6,}/;
    let pattern = /\@{6,10}|\#{6,10}|\${6,10}|\^{6,10}/;
    let inputArr = input.split(', ');
    for (let el of inputArr) {
        el = el.trim();
        if (el.length === 20) {
            let firstHalfEl = el.slice(0, 10);
            let secondHalfEl = el.slice(10, 20);
            let firstMatch = firstHalfEl.match(pattern);
            let secondMatch = secondHalfEl.match(pattern);
            if ( firstMatch && secondMatch) {
                lengthCheck(firstMatch, secondMatch)
                if (length < 10 && length >= 6) {
                    console.log(`ticket "${el}" - ${length}${firstMatch[0][0]}`);
                } else if (length === 10) {
                    console.log(`ticket "${el}" - ${length}${firstMatch[0][0]} Jackpot!`);
                }
            
            } else {
                console.log(`ticket "${el}" - no match`)
            }
        } else {
            console.log('invalid ticket');
        }
    }
    
    function lengthCheck(firstElement, secondElement) {
        if (firstElement[0].length > secondElement[0].length) {
            length = secondElement[0].length;
        } else if (secondElement[0].length > firstElement[0].length) {
            length = firstElement[0].length;
        } else if (firstElement[0].length === secondElement[0].length){
            length = firstElement[0].length;
        }
        return length;
    }
}

winningTicket('$$$$$$$$$$$$$$&&$$$$, aabb , th@@@@@@eemo@@@@@@ey')