const todos = [
    { id: 1, text: 'Learn JavaScript', completed: true },
    { id: 2, text: 'Learn React', completed: false },
    { id: 3, text: 'Build a React App', completed: false }
];

// const todaById = todos.find(todo => todo.id === 2);
const todaById = todos.find((todo) => todo.completed === false && todo.text.includes('React'));
// console.log(todaById); // Output: { id: 2, text: 'Learn React', completed: false }
console.log(todaById); // Output: { id: 2, text: 'Learn React', completed: false }