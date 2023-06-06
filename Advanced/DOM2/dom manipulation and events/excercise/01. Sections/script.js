function create(words) {
   const content = document.getElementById('content');
   // const wordsArr = words.split(', ');

   for (let word of words) {
      let el = document.createElement('div');
      el.addEventListener('click', unhide);
      let elParagraph = document.createElement('p');
      elParagraph.textContent = word;
      elParagraph.style.display = 'none';
      el.appendChild(elParagraph);
      content.appendChild(el);

   }

   function unhide(e) {
      e.target.querySelector('p').style.display='block';
   }
}


// function create(words) {
//    const content = document.getElementById('content');

//    words.forEach(w => {
//        const div = document.createElement('div');
//        div.addEventListener('click', onClick);

//        const p = document.createElement('p');
//        p.textContent = w;
//        p.style.display = 'none';

//        div.appendChild(p);
//        content.appendChild(div);
//    });

//    function onClick(ev) {
//        ev.target.querySelector('p').style.display='block';
//    }
// }