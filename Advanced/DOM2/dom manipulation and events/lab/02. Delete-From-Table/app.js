function deleteByEmail() {
    const result = document.getElementById('result');
    const input = document.querySelector('input[name="email"]').value;
    console.log(input);
    const table = document.querySelectorAll('tbody tr');
    const arrayTable = Array.from(table);
    let counter = false;
    arrayTable.forEach(el => {
        if (el.textContent.includes(input)) {
            result.textContent = 'Deleted.';
            el.remove();
            counter = true;
        }
    })

    if (counter === false) {
        result.textContent = 'Not found.';
    }
    // console.log(arrayTable)
    // console.log('TODO:...');
}