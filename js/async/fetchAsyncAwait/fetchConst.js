async function fetchDataFunction(url) {
  const response = await fetch(url);
  const data = response.data();
}

const fetchData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
};

fetchData('https://jsonplaceholder.typicode.com/todos');
