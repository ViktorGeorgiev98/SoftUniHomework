function deserializeString(input) {
    let result = [];
    for (let line of input) {
        if (line === 'end') {
            break;
        }
        let [char, indexes] = line.split(':');
        indexes = indexes.split('/');
        for (let i = 0; i < indexes.length; i++) {
             result[Number(indexes[i])] = char;
            }  
         }
    console.log(result.join(''));
}

deserializeString(['a:0/2/4/6',

'b:1/3/5',

'end']);