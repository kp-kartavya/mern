console.log("Hello, World!");


// there are two types of export
// 1. named export
export const name = "John Doe";
export function greet() {
  console.log("Hello!");
}

// 2. default export
export default function sayGoodbye() {
  console.log("Goodbye!");
}