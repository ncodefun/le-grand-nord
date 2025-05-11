import { LitApp, html, str } from '/_libs/LitApp.js'

class App extends LitApp {
	
	constructor() { this.super() }
	
	aboutPage = () => html`
		<main flow='col top gaps grow'>
			<h2 class='strong'>${ str('about') }</h2>
			<div>${ this._params && JSON.stringify(this._params) }</div>
			hello
		</main>
	`
}

async function fetchData(url) {
	try {
		const response = await fetch(url); // `fetch` is a browser/Node API
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const data = await response.json();
		return data;
	} 
	catch (error) {
		console.error("Failed to fetch data:", error);
		return null;
	}
}

function greet(name) {
	return `Hello, ${name}!`;
}
let arrayLiteral = [1, "two", { three: 3 }, [4, 5]];
function sumNumbers(...numbers) { 
	return numbers.reduce((acc, curr) => acc + curr, 0);
}

customElements.define('my-app', App);


// ----------------------------------------------------------------
sumNumbers();
arrayLiteral;
greet('you')
const msg = `heloo ${this.msg}`
fetchData()