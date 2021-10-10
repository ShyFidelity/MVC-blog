

const newCommentHandler = async (event) => {
  console.log("i did it");
    event.preventDefault();
  
    const comment = document.querySelector('#comment').value.trim();
    
  
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
  .querySelector('#commentBtn')
  .addEventListener('click', newCommentHandler);
  