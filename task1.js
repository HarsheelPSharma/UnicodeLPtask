const titleToDelete = "YourToDoItemTitle"; // Replace with the actual title you want to delete

fetch(`https://jsonplaceholder.typicode.com/todos?title=${titleToDelete}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json', // You may need to adjust the content type
    // Add any other headers if required
  },
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to delete the to-do item');
    }
    console.log('To-do item deleted successfully');
  })
  .catch(error => console.error(error));
