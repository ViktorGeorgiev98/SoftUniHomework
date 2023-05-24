function colorize() {
    let names = document.getElementsByTagName('tr');
    // console.log(names);
    let arrNames = Array.from(names);
    // console.log(arrNames);
    for (let i = 0; i < arrNames.length; i++) {
        if (i % 2 != 0) {
            arrNames[i].style.backgroundColor = 'teal';
        }
    }
    // TODO
}