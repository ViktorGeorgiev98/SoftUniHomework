function emojiDetector(input) {
    let coolThreshold = 1;
    let coolEmojis = [];
    let pattern1 = /(::|\*\*)(?<animalName>[A-Z][a-z]{2,})\1/g;
    let pattern2 = /[0-9]/g;
    let coolEmojisNumbers = input[0].match(pattern2);
    let totalEmojis = input[0].match(pattern1);
    for (let num of coolEmojisNumbers) {
        coolThreshold *= Number(num);
    }
    let checkForCoolEmojis = pattern1.exec(input[0]);
    while(checkForCoolEmojis) {
        let currentAnimal = checkForCoolEmojis.groups.animalName;
        let currentAnimalNumber = 0;
        for (let char of currentAnimal) {
            currentAnimalNumber += Number(char.charCodeAt(0));
        }
        if (currentAnimalNumber > coolThreshold) {
            coolEmojis.push(checkForCoolEmojis[0]);
        }
        checkForCoolEmojis = pattern1.exec(input[0]);
    }
    console.log(`Cool threshold: ${coolThreshold}`);
    console.log(`${totalEmojis.length} emojis found in the text. The cool ones are:`);
    for (let emoji of coolEmojis) {
        console.log(`${emoji}`);
    }
}


emojiDetector([("In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**")]);