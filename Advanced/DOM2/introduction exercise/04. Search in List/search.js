function search() {
   // debugger
   // get elements
   const result = document.getElementById('result');
   const text = document.getElementById('searchText').value;
   const texts = document.getElementsByTagName('li');
   const arrTexts = Array.from(texts);
   let matchesCounter = 0;

   // main logic

   arrTexts.forEach(el => {
         if (el.textContent.includes(text)) {
            el.style.textDecoration = 'underline';
            el.style.fontWeight = 'bold';
            matchesCounter += 1;
         }
   })

   result.textContent = `${matchesCounter} matches found`;

   // TODO
}
