# B8A1 – TypeScript Problem Solving and OOP

This repository contains my solutions for the B8A1 assignment. I have worked on different TypeScript concepts, including functions, interfaces, generics, type narrowing, asynchronous programming, and object-oriented programming.

## Project Files

- **solutions.ts** – Contains the solutions to the coding problems, including functions, an interface, and classes.
- **type-aliases-vs-interfaces.md** – Explains the differences between type aliases and interfaces in TypeScript.
- **type-narrowing.md** – Covers type narrowing with practical examples of `typeof`, `instanceof`, and the `in` operator.

## How to Run

First, install TypeScript as a development dependency:

```bash
npm install --save-dev typescript
```

To check the TypeScript code for errors, run:

```bash
npx tsc solutions.ts --noEmit --strict --target ES2019
```

## Additional Notes

The assignment instructions also mention `getUniqueNumbers`, `Product`, and `updateProductPrice`. However, detailed problem descriptions and sample outputs for these items were not included in the provided questions.

I have added simple implementations based on my understanding. The `getUniqueNumbers` function returns unique numbers while keeping their original order. The `Product` interface contains `id`, `name`, and `price`, and `updateProductPrice` creates a new product object with the updated price without changing the original one.

If there are any additional requirements for these items, their implementations may need to be adjusted.