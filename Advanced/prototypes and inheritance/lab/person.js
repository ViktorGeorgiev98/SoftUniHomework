function createPerson (firstName, lastName) {
    let person = {
        firstName: firstName,
        lastName: lastName,

        get fullName() {
            return `${this.firstName} ${this.lastName}`;
        },

        set fullName(name) {
            const [personFirstName, personLastName] = name.split(' ');
            this.firstName = personFirstName;
            this.lastName = personLastName;
        }
    }

    return person;
}


let person = createPerson("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla