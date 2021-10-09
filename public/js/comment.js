const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#comment').value.trim();
    
  
    if (comment) {
      const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({ comment }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/posts');
      } else {
        alert('Failed to create comment');
      }
    }
  };
  
  
  document
    .querySelector('#submitBtn')
    .addEventListener('click', newFormHandler);
  