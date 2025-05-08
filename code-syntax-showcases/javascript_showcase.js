// JavaScript Showcase

/** JS DOCS comment */

class App extends LitApp {
	
	aboutPage = () => html`
	<main flow='col top gaps grow'>
		<h2>${ str('about') }</h2>
		<div style='font-family: monospace; border: 1px solid; padding: 1em; border-radius: 1rem;'>
			${this._params && JSON.stringify(this._params)}
		</div>
	</main>
	`
}
const tl = `heloo ${this.msg}`
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
String;
let regexLiteral = /pattern/gi;
let regexConstructor = new RegExp('^test$', 'm');
let dateObject = new Date();
let n = 1 + 0 - 50 * 2 / 10 % 3 ** 8;
let a = b && c || d ? true : false;
const CONST_VARIABLE = 42;
let stringValue = "Hello", bool = true;
let stringLiteral = 'Single quotes';
let stringLiteralDouble = "Double quotes";
let templateLiteral = `Template literal with expression: ${CONST_VARIABLE}`;
let nullValue = null, undefinedValue = undefined;

let userName = user?.profile?.name;
let userCity = user?.profile?.address?.city; 
let userCountry = user?.nonExistent?.country;

let typeOfString = typeof "string";
let isInstanceOfDate = dateObject instanceof Date;
let objToDelete = { prop: 1 };

delete objToDelete.prop;
void 0; 

let objectLiteral = {
	key: "value",
	'string-key': 123,
	method(){ },
	arrowFunc: () => {},
}

//--------------------------------------


const savedFilters = localStorage.getItem('myapp.selectedFilterTags');
if (savedFilters) {
	try {
		const tags = JSON.parse(savedFilters);
		if (Array.isArray(tags)) {
			this.selectedFilterTags = new Set(tags);
		}
	} 
	catch {}
}
document.addEventListener('fullscreenchange', this.onFullscreenChange);

const user = {
	name: "Alice",
	async greet() {
		const msg = await getMessage();
		console.log(`${msg}, ${this.name}`);
	}
};

async function getMessage() {
	return Promise.resolve("Hello");
}

const fruits = ["apple", "banana", "cherry"];
fruits.forEach((fruit, i) => console.log(`#${i + 1}: ${fruit}`));

// Spread & Rest
const nums = [1, 2, 3];
const more = [...nums, 4];
const sum = (...args) => args.reduce((a, b) => a + b, 0);

console.log("Spread example:", more);
console.log("Sum:", sum(1, 2, 3, 4));

console.log(settings.theme?.color ?? "light");
