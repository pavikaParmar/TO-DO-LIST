// Get references to the input field, button, and the list
const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

// Function to add a new task
function addTodo() {
    const todoText = todoInput.value.trim(); // Get the input value and trim any whitespace

    if (todoText !== '') {
        // Create a new list item
        const listItem = document.createElement('li');
        listItem.textContent = todoText;

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');

        // Add delete functionality to the delete button
        deleteButton.addEventListener('click', () => {
            listItem.remove();
        });

        // Append the delete button to the list item
        listItem.appendChild(deleteButton);

        // Add the list item to the list
        todoList.appendChild(listItem);

        // Clear the input field
        todoInput.value = '';
    } else {
        alert('Please enter a task!');
    }
}

// Add the task when the button is clicked
addButton.addEventListener('click', addTodo);

// Optional: Add the task when the Enter key is pressed
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTodo();
    }
});
