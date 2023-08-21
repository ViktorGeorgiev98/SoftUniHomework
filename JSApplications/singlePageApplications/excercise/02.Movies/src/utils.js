// Principles:
// YAGNI => you aren't gonna need it
// KISS => keep it simple


export function showView(section) {
    // hide all sections
    // show only home page sections


    document.querySelectorAll('.viewSection').forEach((s) => {
        s.style.display = 'none';
    })
    section.style.display = 'block';
}