async function deleteToDoItemByTitle(titleToDelete) {
    try {
      // Fetch the to-do items with the specified title
      const res = await fetch(`https://jsonplaceholder.typicode.com/todos?title=${titleToDelete}`);
      
      if (!res.ok) {
        throw new Error('Failed to fetch the to-do item');
      }
  
      const data = await res.json();
  
      // Check if any matching to-do items were found
      if (data.length === 0) {
        console.log('No matching to-do items found for deletion.');
        return;
      }
  
      // Get the first matching to-do item's ID
      const toDoItemIdToDelete = data[0].id;
  
      // Delete the to-do item by its ID
      const deleteResponse = await fetch(`https://jsonplaceholder.typicode.com/todos/${toDoItemIdToDelete}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers if required
        },
      });
  
      if (!deleteResponse.ok) {
        throw new Error('Failed to delete the to-do item');
      }
  
      console.log('To-do item deleted successfully');
    } catch (error) {
      console.error(error);
    }
  }
  
  // Usage: Replace "YourToDoItemTitle" with the actual title you want to delete
  const titleToDelete = "YourToDoItemTitle";
  deleteToDoItemByTitle(titleToDelete);
  