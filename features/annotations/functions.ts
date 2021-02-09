const add = (a: number, b: number): number => {
  return a + b
}


const subtract = (a: number, b: number): number => {
  return a - b
}

function divide(a: number, b: number): number {
  return a / b
}

// Anonymous function saved to variable:
const multiply = function(a: number, b:number): number {
  return a * b
}

// Use void when not returning anything (or null/undefined)
const logger = (message: string): void => {
  console.log(message)
}

const throwError = (message: string): never => {
  throw new Error(message)
}