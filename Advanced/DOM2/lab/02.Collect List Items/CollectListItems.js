// function extractText() {
//     let items = document.getElementById('items').value;
//     let arrayResult = Array.from(items).forEach(element => {
//         arrayResult.push(element.textContent);
//     });
//     let result = document.getElementById('result');
//     result.textContent = arrayResult.join('\n');
    
// }

function extractText() {
    let lis = document.getElementsByTagName('li');
    let liArray = Array.from(lis);
    let allTexts = liArray.map(x => x.textContent);
    let textArea = document.getElementById('result');
    textArea.value = allTexts.join('\n');
    // TODO
}