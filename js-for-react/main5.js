const todos = [
    { id: 1, text: 'Learn JavaScript', completed: true },
    { id: 2, text: 'Learn React', completed: false },
    { id: 3, text: 'Build a React App', completed: false }
];

// Array ForEach

// todos.forEach(todo => {
//     if (todo.completed === true) {
//         console.log(todo);
//     }
// });

todos.forEach((todo, index) => {
    if (todo.completed === true) {
        console.log(`Todo ${index + 1}: ${todo.text}`);
    }
});