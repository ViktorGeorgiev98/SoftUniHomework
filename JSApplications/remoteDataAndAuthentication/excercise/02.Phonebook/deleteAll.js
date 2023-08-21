export async function deleteAllEntries() {
    const url = 'http://localhost:3030/jsonstore/phonebook';
    const settings = {
        method: 'DELETE'
    }

    const response = await fetch(url, settings);
}