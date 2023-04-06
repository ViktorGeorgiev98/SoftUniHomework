function triangle(num) {
    // let buff = "";
    for (let row = 1; row <= num; row++) {
        let buff = "";
        for(let column = 0; column < row; column++) {
            buff += row + " ";
        }
        console.log(buff);
    }
    // console.log(buff);
}
triangle("3");