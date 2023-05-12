function length(text1, text2, text3) {
    let totalLength = text1.length + text2.length + text3.length;
    let averageLength = totalLength / 3;
    console.log(totalLength);
    console.log(Math.round(averageLength));
}

length('chocolate', 'ice cream', 'cake')