const button = document.querySelector('button')
const jokeText = document.querySelector('p')

button.addEventListener('click', () => {
  fetch(
    'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random',
    {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'x-rapidapi-key': 'INSERT YOUR RAPIDAPI KEY HERE',
        'x-rapidapi-host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
      },
    }
  )
    .then(response => response.json())
    .then(data => {
      jokeText.innerHTML = data.value.replace(
        /(chuck norris)/gi,
        '<span>$1</span>'
      )
    })
})

