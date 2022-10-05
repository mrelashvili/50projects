'use strict';

const container = document.querySelector('.container');

window.addEventListener('keydown', (e) => {
	container.innerHTML = `
		<div class="box">
			${e.key === ' ' ? 'Space' : e.key}
			<small>e.key</small>
		</div>
		<div class="box">
			${e.keyCode}
			<small>65</small>
		</div>
		<div class="box">
			${e.code}
			<small>e.code</small>
		</div>
	`
})