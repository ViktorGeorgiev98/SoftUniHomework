function solve(area, vol, input) {
    let data = [];
    let newInput = JSON.parse(input);
    // console.log(newInput);
    for (let obj of newInput) {
        let currentArea = area.apply(obj);
        let currentVolume = vol.apply(obj);
        data.push({area: currentArea, volume: currentVolume});
    }

    return data;
    // console.log(data);
}

solve(area, vol, `[
{"x":"10","y":"-22","z":"10"},
{"x":"47","y":"7","z":"-5"},
{"x":"55","y":"8","z":"0"},
{"x":"100","y":"100","z":"100"},
{"x":"55","y":"80","z":"250"}
]`
);

function area() {
    return Math.abs(this.x * this.y);
}

function vol() {
    return Math.abs(this.x * this.y * this.z);
}