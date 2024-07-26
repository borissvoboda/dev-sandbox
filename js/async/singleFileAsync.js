function delayedData(callback) {
  setTimeout(() => {
    callback('Delayed data.');
  }, 2000);
}

async function fetchData() {
  console.log('Fetching data...');

  const data = await new Promise((resolve) => {
    delayedData(resolve);
  });

  console.log(data);
}

fetchData();
