function cutAndReverse(input) {
    let index = Math.floor(input.length / 2);
    let end = input.slice(index, input.length);
    let start = input.slice(0, index);
    end = end.split('').reverse().join('');
    start = start.split('').reverse().join('');
    console.log(start);
    console.log(end);
}

cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');