// function solve() {
//    document.querySelector('#searchBtn').addEventListener('click', onClick);

//    function onClick() {
//       //   TODO:
//       // get elements
//       const text = document.getElementById('searchField').value;
//       const values = document.getElementsByTagName('tr');
//       const arrValues = Array.from(values);
//       console.log(arrValues);

//       arrValues.forEach(row => {
//          row.classList.remove('select');
//       })
      
//       // main logic
//       for (let i = 2; i < arrValues.length; i++) {
//          // let [name, email, course] = arrValues[i].textContent.split(' ');
//          console.log(arrValues[i].textContent);
//          console.log(name);
//          if (arrValues[i].textContent.includes(text)) {
//             // arrValues[i].style.backgroundColor = 'yellow';
//             arrValues[i].classList.add('select');
//          }
//          // } else {
//          //    for (let j = 0; j < text.length; j++) {
//          //       if (arrValues[i].textContent.includes(text[j])) {
//          //          arrValues[i].style.backgroundColor = 'yellow';
//          //       }
//          //    }
//          // }
//       }

//       text.value = '';
//       text.textContent = '';

//    }
// }


function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   const rows = document.querySelectorAll('tbody tr');
   function onClick() {
      const inputValueToLower = document.getElementById('searchField').value.toLowerCase();

      for (let row of rows) {
         const rowTextToLower = row.textContent.toLowerCase();

         if (rowTextToLower.includes(inputValueToLower)) {
            row.setAttribute('class', 'select');
         } else {
            row.removeAttribute('class');
         }
      }
      //   TODO:

   }
}