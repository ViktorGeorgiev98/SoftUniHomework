function pie(pieFlavours, targetFlavour1, targetFlavour2) {
    let index1 = pieFlavours.indexOf(targetFlavour1);
    let index2 = pieFlavours.indexOf(targetFlavour2);
    let newArr = [];
    for (let i = index1; i <= index2; i++) {
        newArr.push(pieFlavours[i]);
    }

    return newArr;
}

pie(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'
);