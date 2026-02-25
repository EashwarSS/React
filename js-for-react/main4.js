const todos = [
    { id: 1, text: 'Learn JavaScript', completed: true },
    { id: 2, text: 'Learn React', completed: false },
    { id: 3, text: 'Build a React App', completed: false }
];

//Array Filter

// const completedTodos = todos.filter(todo => todo.completed === true);
// console.log(completedTodos); // Output: [{ id: 1, text: 'Learn JavaScript', completed: true }

todos.filter(todo => todo.completed == true);

console.log(todos); // Output: [{ id: 1, text: 'Learn JavaScript', completed: true }, { id: 2, text: 'Learn React', completed: false }, { id: 3, text: 'Build a React App', completed: false }]