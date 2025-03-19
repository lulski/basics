interface Person{
    firstName : string;
    lastName: string;
    age: number;
}

class Student{
    fullName: string;
    constructor( public firstName: string, public middleInitial: string, public lastName: string, public age: number){
        this.fullName = firstName + " " +  middleInitial + " " + lastName;
     }
}

function greeter(person: Person){
    //return "Hello, " + person.firstName + " " + person.lastName + " (" + person.age + ")";
    console.log ("Hello, " + person.firstName + " " + person.lastName + " (" + person.age + ")");
}

let user = new Student("Kocu", "K", "Maru", 20);

//document.body.textContent = greeter(user);
greeter(user);