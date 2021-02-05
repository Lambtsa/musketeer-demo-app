const calcButton = document.querySelector('#calcSubmit');
const calcInput = document.querySelector('#calcInput');
const calcOutput = document.querySelector('#calcOutput');

const romanButton = document.querySelector('#romanSubmit');
const romanInput = document.querySelector('#romanInput');
const romanOutput = document.querySelector('#romanOutput');

const factorizeButton = document.querySelector('#factorizerSubmit');
const factorizerInput = document.querySelector('#factorizerInput');
const factorizerOutput = document.querySelector('#factorizerOutput');

const fizzBuzzButton = document.querySelector('#fizzBuzzSubmit');
const fizzBuzzInput = document.querySelector('#fizzBuzzInput');
const fizzBuzzOutput = document.querySelector('#fizzBuzzOutput');

fizzBuzzButton.addEventListener('click', (event) => {
  event.preventDefault();
  getData('/api/fizzbuzz', { input: fizzBuzzInput.value }, data => {
    fizzBuzzInput.value = "";
    if (data.error) {
      fizzBuzzOutput.textContent = data.error;
      fizzBuzzOutput.setAttribute('class', 'output red');
    } else {
      fizzBuzzOutput.innerHTML = "";
      fizzBuzzOutput.setAttribute('class', 'output green');
      data.answer.forEach(element => {
        const newSpan = document.createElement('span');
        newSpan.textContent = element;
        fizzBuzzOutput.appendChild(newSpan);
      });
    }
  })
})

const getData = (url, input, callback) => {
  fetch (url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(input)
  })
  .then(response => response.json())
  .then(callback)
  .catch(error => {
    callback({ error: error.message })
  })
  .finally(() => console.log('Done'));
}


calcButton.addEventListener('click', (event) => {
  event.preventDefault();
  const calcValue = calcInput.value
  fetch ('/api/calculator', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ input: calcValue })
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    if(data.answer){
      calcOutput.setAttribute('class', 'output green');
      calcOutput.textContent = data.answer;
    } else {
      calcOutput.setAttribute('class', 'output red');
      calcOutput.textContent = data.error;
    }
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => console.log('Done'));
});

romanButton.addEventListener('click', (event) => {
  event.preventDefault();
  const romanValue = romanInput.value
  fetch ('/api/roman-numerals', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ input: romanValue })
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    if(data.answer){
      romanOutput.setAttribute('class', 'output green');
      romanOutput.textContent = data.answer;
    } else {
      romanOutput.setAttribute('class', 'output red');
      romanOutput.textContent = data.error;
    }
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => console.log('Done'));
});

factorizeButton.addEventListener('click', (event) => {
  event.preventDefault();
  const factorizeValue = parseInt(factorizerInput.value);
  console.log(factorizeValue);
  fetch ('/api/factorize', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ input: factorizeValue })
  })
  .then(response => response.json())
  .then(data => {
    console.log(data.answer);
    if(data.answer){
      factorizerOutput.setAttribute('class', 'output green');
      factorizerOutput.textContent = data.answer;
    } else {
      factorizerOutput.setAttribute('class', 'output red');
      factorizerOutput.textContent = data.error;
    }
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => console.log('Done'));
});
