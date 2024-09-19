async function fetchFromApis(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data: ', error);
  }
}

// fetchFromApis('https://jsonplaceholder1.typicode.com/todos');

// ----------------------------------------------------------

// Step #1: Create an async function with URL as a parameter.
// async keyword makes the function asynchronous, which allows us to use await inside of it.
// Async function changes the way JS works with a function, even without the await expression inside.

async function fetchData1(url) {
  // Fetching logic.
}
// -----------------------------------------------------------------------

// #region 2. pure fetch
// Step #2:

async function fetchData2(url) {
  const data = fetch(url);
  console.log(data);
}

// fetchData2('https://jsonplaceholder.typicode.com/todos');

// add fetch: but in and of itself it only returns pending promise.
// As it is, fetch only returns a promise and when you console.log data, you are
// logging the promise itself.
// A promise in JS is an object that represents the eventual completion, or failue of an async operation and its resulting value.
// What I am logging is a promise - it is like a stickynote:
// "Hey, we are waiting for the resolution. If you want the final result, follow these instructions..."?

// to be more exact:
// A promise is an object representing a task that’s happening asynchronously.

// When you log it, you’re seeing its current state: either pending (if the task is still running), fulfilled (if it’s done successfully), or rejected (if it failed).

// The problem with my console log is that I use it too early for the promise to be resolved. The data hasn't arrived yet, bcs
// the call is still in progress.

// -----------------------------------------------------------------------
// #region 3. await

// step #3

async function fetchData3(url) {
  const response = await fetch(url);
  // ... there will be more
  // console.log(data);
}

//fetchData3('https://jsonplaceholder.typicode.com/todos');

// When I add the AWAIT keyword, I am basically telling the response constant:
// "Hey, response constant, wait until the fetch() function is done with fatching and has final result.
// When it finishes, get that result, whatever it is - success of failure."

// Technically:
// The await keyword pauses the execution of the function at that point until the promise returned by fetch() resolves.
// When the promise is resolved, the resolved value (in this case, the HTTP response object) is assigned to const response.

// -----------------------------------

// #region 4. structure the data

async function fetchData4(url) {
  // wait until the fetch is complete. then assign the response to "response" const.
  const response = await fetch(url);
  // Now we know that fetch has resolved. Response const contains the result. I will access the body by json() method.
  const data = await response.json();
  console.log(data);
}

fetchData4('https://jsonplaceholder.typicode.com/todos');

// If I would console.log the whole response, I would see a very complicated object. It is a Response object. It has several properties and methods attached to it.
// In general, for my app, I only need a fraction of that.
// now the data const will contain the response body.

// #region 5. try / catch

// lets wrap logic in try / catch statements

async function fetchData5(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data: ', error);
  }
}

fetchData5('https://jsonplaceholder.typicode.com/todos');

// -----------------------------------------------------------------------
// #region 6. use data further
// If I want to use data further; example...

// example 1:

async function fetchData51(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function useData() {
  const data = await fetchData51('https://jsonplaceholder.typicode.com/todos');
  // Use the data here, for example:
  console.log(data);
  // Or pass it to other functions
  processData(data);
}

function processData(data) {
  // Process or manipulate the data here
  console.log('Processing data:', data);
}

useData();

// example 2, react component:

import React, { useEffect, useState } from 'react';

function DataFetchingComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/todos'
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []); // Empty dependency array means this runs once on mount

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Data</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetchingComponent;
