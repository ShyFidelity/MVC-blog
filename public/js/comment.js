

const newCommentHandler = async (event) => {
  console.log("i did it");
    event.preventDefault();
  
    const comment = document.querySelector('#comment').value.trim();
    
  //change format to match comment route
    if (comment) {
      const response = await fetch(`/api/:id/comment`, {
        method: 'POST',
        body: JSON.stringify({ comment }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to create comment');
      }
    }
  };



document
  .querySelector('#commentBtn')
  .addEventListener('click', newCommentHandler);
  