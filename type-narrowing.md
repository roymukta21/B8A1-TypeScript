# Type Narrowing in TypeScript

## Introduction

A union type allows a value to hold more than one possible type. Type narrowing is the process of checking a value at runtime so TypeScript can safely treat it as a more specific type within a code branch. It reduces unsafe assumptions and makes code easier to maintain.

## Detailed Explanation

The `typeof` operator is useful for primitive values such as strings and numbers:

```ts
function formatValue(value: string | number): string {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  }
  return value.toFixed(2);
}
```

Inside the first branch, TypeScript knows that `value` is a string. In the other branch, it knows that the value is a number.

For class instances, use `instanceof`. It checks whether an object was created from a particular constructor:

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

The `in` operator checks whether a property exists on an object. It is especially helpful with unions of object types:

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

Each check gives TypeScript evidence about the value's shape, allowing safer property access without unnecessary type assertions.

## Conclusion

Use `typeof` for primitive checks, `instanceof` for class instances, and `in` for object-property checks. These narrowing techniques make union-based functions safer, clearer, and more reliable.
