function extractFile(input) {
    let index = input.lastIndexOf('\\');
    let neededInfo = input.substring(index + 1, input.length);
    neededInfo = neededInfo.split('.');
    if (neededInfo.length > 2) {
        console.log(`File name: ${neededInfo[0]}.${neededInfo[1]}`);
        console.log(`File extension: ${neededInfo[2]}`);
    } else {
        console.log(`File name: ${neededInfo[0]}`);
        console.log(`File extension: ${neededInfo[1]}`);
    }
}

extractFile('C:\\Projects\\Data-Structures\\template.bak.ppt');