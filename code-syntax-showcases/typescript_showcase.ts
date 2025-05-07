// TypeScript Modern Showcase

type User = {
  name: string;
  age: number;
  active?: boolean;
};

const user: User = {
  name: "Alice",
  age: 30
};

function greet(user: User): string {
  return `Hello, ${user.name}`;
}

// Generic Function
function identity<T>(arg: T): T {
  return arg;
}

// Interface and Class
interface Shape {
  area(): number;
}

class Rectangle implements Shape {
  constructor(public width: number, public height: number) {}
  area(): number {
    return this.width * this.height;
  }
}

// Enums and Tuples
enum Status {
  Success,
  Failure
}

const result: [string, Status] = ["Operation complete", Status.Success];

console.log(greet(user));
console.log(new Rectangle(10, 5).area());
console.log(result);
