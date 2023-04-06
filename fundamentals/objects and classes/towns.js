function towns(arr) {
    for (let i = 0; i < arr.length; i++) {
        let currentCity = arr[i].split('|');
        let currentCityInfo = {
            town:currentCity[0].trim(),
            latitude:(Number(currentCity[1])).toFixed(2),
            longitude:(Number(currentCity[2])).toFixed(2)
        }
    
        console.log(currentCityInfo);
    }
}
towns(['Sofia | 42.696552 | 23.32601',

'Beijing | 39.913818 | 116.363625'])