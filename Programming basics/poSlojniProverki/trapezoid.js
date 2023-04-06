function trapezoid(input) {
    n1 = Number(input[0]);
    n2 = Number(input[1]);
    n3 = Number(input[2]);
    let area = (n1 + n2) * n3 / 2;
    console.log(area.toFixed(2));
}