document.getElementById('my_form').addEventListener('submit', async function(event) {
  event.preventDefault();
  const title = document.getElementById('title').value;
  const price = document.getElementById('price').value;
  const data = {
    title: title,
    price: price
  };

  try {
    const response = await fetch('http://localhost:3000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      const result = await response.json();
      console.log('Added Product:', result);
    } else {
      console.error('Error:', response.status);
    }
  } catch (error) {
    console.error('Error:', error);
  }
});