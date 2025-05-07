// JavaScript Modern Showcase

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

// Arrow function & Destructuring
const fruits = ["apple", "banana", "cherry"];
fruits.forEach((fruit, i) => console.log(`#${i + 1}: ${fruit}`));

// Spread & Rest
const nums = [1, 2, 3];
const more = [...nums, 4];
const sum = (...args) => args.reduce((a, b) => a + b, 0);

console.log("Spread example:", more);
console.log("Sum:", sum(1, 2, 3, 4));

// Optional chaining & Nullish coalescing
const settings = {
  theme: {
    color: "dark"
  }
};
console.log(settings.theme?.color ?? "light");

// Modules (ESM-style usage example)
// import { example } from './example.js';
// example();
