"use strict";
class Student {
    constructor(firstName, middleInitial, lastName, age) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.age = age;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
function greeter(person) {
    console.log("Hello, " + person.firstName + " " + person.lastName + " (" + person.age + ")");
}
let user = new Student("Kocu", "K", "Maru", 20);
greeter(user);
//# sourceMappingURL=greeter.js.map