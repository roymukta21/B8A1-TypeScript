# B8A1 — Problem Solving with TypeScript & OOP

This repository contains the TypeScript coding solutions and two technical blog posts for assignment B8A1.

## Files

- `solutions.ts` — implementations of the requested functions, interface, and classes.
- `type-aliases-vs-interfaces.md` — comparison of TypeScript type aliases and interfaces.
- `type-narrowing.md` — practical type-narrowing examples using `typeof`, `instanceof`, and `in`.

## Run

Install TypeScript in your project if it is not already installed:

```bash
npm install --save-dev typescript
```

Check the solution file:

```bash
npx tsc solutions.ts --noEmit --strict --target ES2017
```

## Note

The assignment's coding requirements mention `getUniqueNumbers`, `Product`, and `updateProductPrice`, but the supplied problem descriptions do not include their detailed specifications or sample inputs/outputs. This submission includes straightforward implementations: unique numeric values in first-seen order, a `Product` interface with `id`, `name`, and `price`, and an immutable price update that returns a new product object. Confirm these assumptions with the instructor if those items have separate required signatures.
