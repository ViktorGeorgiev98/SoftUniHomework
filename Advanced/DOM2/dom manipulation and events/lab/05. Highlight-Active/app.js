// function focused() {
//     let elements = document.getElementsByTagName('div');
//     let arrElements = Array.from(elements);
//     // console.log(arrElements);
//     for (let i = 1; i < arrElements.length; i++) {
//         arrElements[i].addEventListener('mouseover', focusClass);
//         arrElements[i].addEventListener('mouseout', unfocusClass);
//     }

//     function focusClass(e) {
//         e.target.setAttribute('class', 'focused');
//     }

//     function unfocusClass(e) {
//         e.target.removeAttribute('class');
//     }
// }

function focused() {
    const inputs = Array.from(document.querySelectorAll('div input'));
    inputs.forEach(input => {
        input.addEventListener("focus", onFocus, false);
        input.addEventListener("blur", onBlur, false);
    });

    function onFocus(ev) {
        ev.target.parentElement.classList.add('focused');
    }

    function onBlur(ev) {
        ev.target.parentElement.classList.remove('focused');
    }
}