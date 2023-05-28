function editElement(reference, match, replace) {
    let currentElement = reference.textContent
    while (currentElement.includes(match)) {
        currentElement = currentElement.replace(match, replace);
    }

    reference.textContent = currentElement;


}