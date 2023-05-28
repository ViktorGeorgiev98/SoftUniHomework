function colorize() {
//    get elements
    let table = document.getElementsByTagName('tr');
    let tableArray = Array.from(table);
    // let tableArrayValue = tableArray.map(x => x.textContent);
    // console.log(tableArray);
    for (let i = 0; i < tableArray.length; i++) {
        if (i % 2 != 0) {
            tableArray[i].style.backgroundColor = 'Teal';
        }
    }
}