function areaOfFigures(input) {
    let typeOfFigure = input[0];
    let area = 0;
    if (typeOfFigure == "square") {
        let a = Number(input[1]);
        area = a * a;
        
    } else if (typeOfFigure == "rectangle") {
        let a = Number(input[1]);
        let b = Number(input[2]);
        area = a * b;
        
    } else if (typeOfFigure == "circle") {
        let a = Number(input[1]);
        let pi = Math.PI
        area = pi * Math.pow(a, 2);
        
    } else if (typeOfFigure == "triangle") {
        let a = Number(input[1]);
        let b = Number(input[2]);
        area = a * b / 2;
        
    }
    console.log(area.toFixed(3));
}
