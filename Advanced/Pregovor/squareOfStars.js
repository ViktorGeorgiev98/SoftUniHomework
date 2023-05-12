function sqare(parameter) {
    if (parameter === undefined) {
        parameter = 5;
    }

    for (let i = 1; i <= parameter; i++) {
        let bufer = '';
        for (let i = 1; i <= parameter; i++) {
            bufer += '* ';
        }
        console.log(bufer);
    }
}

sqare();