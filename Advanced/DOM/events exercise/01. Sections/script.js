function create(words) {
   const contentDiv = document.getElementById('content');

   words.forEach((word) => {
      //  create elements
      const div = document.createElement('div');
      const paragraph = document.createElement('p');

      // setup paragraph
      paragraph.textContent = word;
      paragraph.style.display = 'none';

      // setup div
      div.appendChild(paragraph);
      div.addEventListener('click', revealOnClick)

      // append div to content
      contentDiv.appendChild(div);
   });

   function revealOnClick(e) {
      // console.log(e);
      e.currentTarget.children[0].style.display = 'block';
   }
}