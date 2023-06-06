function validate() {
    // get elements
    const emailField = document.getElementById('email');
    // set regex
    let regex = /(?<name>[a-z]+)@(?<domain>[a-z]+).(?<extension>[a-z]+)/;
    emailField.addEventListener('change', change);

    function change(e) {
        e.target.classList.remove('error');
        if (!regex.test(e.target.value)) {
            ev.target.classList.add('error');
        }
    }
}