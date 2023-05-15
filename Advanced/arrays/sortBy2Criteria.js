function sortArray(input) {
    input.sort(twoCriteriaSort);
    input.forEach(el => console.log(el));
  
    function twoCriteriaSort(cur, next) {
      if (cur.length === next.length) {
        return cur.localeCompare(next);
      }
      return cur.length - next.length;
    }
  }

sortArray(['alpha',
'beta', 'gamma']);

console.log('==================');

sortArray(['Isacc',
'Theodor', 'Jack',
'Harrison',
'George'])

console.log('==================');

sortArray(['test',
'Deny', 'omen',
'Default'])