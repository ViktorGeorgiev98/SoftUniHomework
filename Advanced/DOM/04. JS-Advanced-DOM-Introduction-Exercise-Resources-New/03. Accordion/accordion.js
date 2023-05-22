function toggle() {
    // this exercise is for toggling (to show or hide elements or texts depending on button click or other events)
    // constants for the job
    const MORE = 'More';
    const LESS = 'Less';

    // capture elements
    const buttonSpan = document.querySelector('.button');
    const divWrapperText = document.querySelector('#extra');

    // toggle functionality
    buttonSpan.textContent = buttonSpan.textContent === MORE ? LESS : MORE;
    divWrapperText.style.display = divWrapperText.style.display === 'none' 
    || divWrapperText.style.display === '' 
    ? 'block'
    : 'none';
}