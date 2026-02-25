const firstName = 'Eashwar';
const greeting = `Hello, ${firstName}!`; // Template literal with variable interpolation

console.log(greeting); // Output: Hello, Eashwar!
/////
const a = 5;
const b = 10;
const sum = `${a} + ${b} = ${a + b}`; // Template literal with expression evaluation

console.log(sum); // Output: 5 + 10 = 15
/////
const user = {
    name: firstName,
    age: 25,
    city: "Hyderabad"
}

const desc = `User Info: ${user.name}, Age: ${user.age}, City: ${user.city}`; // Template literal with variable interpolation

console.log(desc); // Output: User Info: Eashwar, Age: 25, City: Hyderabad