function addRemove(commands) {
    let num = 0
    let nums = [];
    // nums.push(num);
    for (let command of commands) {
        num++;
        if (command === 'add') {
            nums.push(num);
        } else if (command === 'remove') {
            nums.pop();
        }
    }
    for (let num of nums) {
        console.log(num);
    }
    if (nums.length === 0) {
        console.log('Empty')
    }
}

addRemove(['add',
'add',
'add',
'add']);