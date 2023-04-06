function cone(radius, height) {
    let volume = (height / 3) * (Math.PI) * Math.pow(radius,2);
    let area = Math.PI * (radius * height) + Math.PI * (Math.pow(radius, 2));
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
}
cone(3,5);
cone(3.3, 7.8);
