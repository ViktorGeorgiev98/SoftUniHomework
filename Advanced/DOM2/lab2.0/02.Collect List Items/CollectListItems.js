function extractText() {
    // debugger
//    get elements
   let lis = document.getElementsByTagName('li');
   let lisArray = Array.from(lis);
   let allTexts = lisArray.map(x => x.textContent);
   let newArr = [];
   let result = document.getElementById('result');
   for (let el of allTexts) {
    newArr.push(el);
   }


   result.textContent = newArr.join('\n');
   
}