'use strict';

const btn = document.querySelector('.btn');
const jokeContainer = document.getElementById('joke');


const fetchJokes = async () => {
	const config = {
		headers: {
			'Accept': 'application/json'
		}
	}
	const res = await fetch('https://icanhazdadjoke.com', config);
	const data = await res.json();

	jokeContainer.innerHTML = data.joke;
}

fetchJokes();
//
// const fetchJokes =  () => {
// 	const config = {
// 		headers: {
// 			'Accept': 'application/json'
// 		}
// 	}
// 	fetch('https://icanhazdadjoke.com', config).then(res =>
// 		res.json().then(data => {
// 			jokeContainer.innerHTML = data.joke;
// 		})
// 	);
// }

btn.addEventListener('click', fetchJokes);