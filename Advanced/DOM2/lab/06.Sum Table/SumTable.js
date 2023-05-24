function sumTable() {
    let table = Array.from(document.getElementsByTagName('td'));
    console.log(table);
    let result = 0;
    for (let i = 0; i < table.length; i++) {
        if (i % 2 != 0) {
            let currentPrice = Number(table[i]);
            result += Number(currentPrice);
            console.log(currentPrice);
            console.log(result)
        }
        
    }
    let total = document.getElementById('sum');
    total.value = result;
}