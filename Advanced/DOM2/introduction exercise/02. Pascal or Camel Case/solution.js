function solve() {
  // naming of variables
  const CAMEL_CASE = 'Camel Case';
  const PASCAL_CASE = 'Pascal Case';
  // get elements
  const input = document.getElementById('text').value;
  const namingConvention = document.getElementById('naming-convention').value;
  const result = document.getElementById('result');
  let text = '';
  let wordsArr = [];
  let finalWordsArr = [];
  wordsArr = input.split(' ');
  wordsArr = wordsArr.map(x => x.toLowerCase());
  if (namingConvention != CAMEL_CASE && namingConvention != PASCAL_CASE) {
    text = 'Error!';
  } else if (namingConvention === CAMEL_CASE) {
    finalWordsArr.push(wordsArr[0]);
    for (let i = 0; i < wordsArr.length; i++) {
      if (i != 0) {
        wordsArr[i][0] = wordsArr[i][0].toUpperCase();
        finalWordsArr.push(wordsArr[i]);
      }
    }
    text = finalWordsArr.join('');
  } else if (namingConvention === PASCAL_CASE) {
    wordsArr.forEach(word => {
      word[0] = word[0].toUpperCase();
      finalWordsArr.push(word);
    });
    text = finalWordsArr.join('');
  }

  result.textContent = text;
  
  //TODO...
}