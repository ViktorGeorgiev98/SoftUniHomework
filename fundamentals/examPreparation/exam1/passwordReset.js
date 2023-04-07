function passwordReset(input) {
    let password = input.shift();
    for (let line of input) {
        let currentLine = line.split(' ');
        let command = currentLine.shift();
        if (command === 'Done') {
            break;
        }

        if (command === 'TakeOdd') {
            password = takeOdd(password);
            console.log(password);
        } else if (command === 'Cut') {
            let index = Number(currentLine[0]);
            let lenghtToCut = Number(currentLine[1]);
            password = cut(password, index, lenghtToCut);
            console.log(password);
        } else if (command === 'Substitute') {
            let substringToReplace = currentLine[0];
            let substringToAdd = currentLine[1];
            if (password.includes(substringToReplace)) {
                password = replace(password, substringToReplace, substringToAdd);
                console.log(password);
            } else {
                console.log(`Nothing to replace!`);
            }
        }

    }


    function takeOdd(text) {
        let newText = '';
        for (let i = 0; i < text.length; i++) {
            if (i % 2 != 0) {
                newText += text[i];
            }
        }
        return newText;
    }

    function cut(text, index, length) {
        let newText = '';
        let leftSide = text.slice(0, index);
        let rightSide = text.slice(index + length);
        newText = leftSide + rightSide;
        return newText;
    }

    function replace(text, substring, newSubstring) {
        while (text.includes(substring)) {
            text = text.replace(substring, newSubstring);
        }
        return text;
    }

    console.log(`Your password is: ${password}`);
}

passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
"TakeOdd",
"Cut 18 2",
"Substitute ! ***",
"Substitute ? .!.",
"Done"])
