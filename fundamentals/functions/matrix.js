function matrix(num) {
    for (let i = 1; i <= num; i++) {
        let buff = '';
        for (let j = 1; j <= num; j++) {
            buff += num + ' ';
        }
        console.log(buff);
    }
}
matrix(7)