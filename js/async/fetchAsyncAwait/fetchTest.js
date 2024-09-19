async function fetchData3(url) {
  const response = await fetch(url);
  // ... there will be more
  console.log(response);
}

fetchData3('https://jsonplaceholder.typicode.com/todos');
