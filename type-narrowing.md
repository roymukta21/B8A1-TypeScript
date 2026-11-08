# Understanding Type Narrowing in TypeScript

## Introduction

While working with TypeScript, we often need to handle values that can have different types. For example, a function might receive either a string or a number. But we cannot always perform the same operation on both. This is where Type Narrowing becomes useful. It helps TypeScript identify the actual type of a value before we use it.

## How Does Type Narrowing Work?

TypeScript provides several ways to narrow down types. One common approach is the `typeof` operator. It is mainly used when checking primitive values.

```ts
function formatValue(value: string | number): string {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  }

  return value.toFixed(2);
}
```

Here, TypeScript understands that `value` is a string inside the first condition. Otherwise, it treats the value as a number.

Another useful method is `instanceof`. It helps us check whether an object belongs to a particular class.

```ts
class EmailError extends Error {
  retryable = true;
}

function describeError(error: Error | string): string {
  if (error instanceof EmailError) {
    return error.retryable ? "Retry possible" : "Do not retry";
  }

  if (error instanceof Error) {
    return error.message;
  }

  return error;
}
```

We can also use the `in` operator to check whether an object contains a specific property.

```ts
type Cat = { meow: () => void };
type Dog = { bark: () => void };

function makeSound(pet: Cat | Dog): void {
  if ("meow" in pet) {
    pet.meow();
  } else {
    pet.bark();
  }
}
```

In this example, TypeScript identifies the correct object type by checking which property exists.

## Conclusion

Type Narrowing is an important part of writing reliable TypeScript code. I find it especially helpful when working with union types because it allows me to handle different values safely. Using `typeof`, `instanceof`, and `in` makes code easier to understand and reduces unexpected type errors.