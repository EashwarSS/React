const todos = [
    { id: 1, text: 'Learn JavaScript', completed: true },
    { id: 2, text: 'Learn React', completed: false },
    { id: 3, text: 'Build a React App', completed: false }
];

//Array Map

const mappedTodos = todos.map(todo => {
    if (todo.completed === true) {
        return { ...todo, text: `${todo.text} (Completed)` };
    }
    return todo;
});

console.log(mappedTodos); // Output: [{ id: 1, text: 'Learn JavaScript (Completed)', completed: true }, { id: 2, text: 'Learn React', completed: false }, { id: 3, text: 'Build a React App', completed: false }]