const jokes = document.querySelector('#jokes-content')
const button = document.querySelector('button')

const getDadJoke = async () => {
    try {
        const config = {headers:  { Accept: 'application/json'}};
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        return res.data.joke
    } catch (e) {
        console.log( 'Opps, no jokes availiable now...');
    }
}

const addJoke = async () => {
    const newLI = document.createElement('li');
    newLI.append(await getDadJoke())
    jokes.append(newLI);
}

button.addEventListener('click', addJoke)