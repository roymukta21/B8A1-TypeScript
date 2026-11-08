# Type Aliases vs Interfaces in TypeScript

## Introduction

TypeScript offers both type aliases and interfaces for describing the shape of data. They often look similar, but they support different capabilities. Understanding those differences helps keep a project consistent and maintainable.

## Detailed Explanation

An interface is commonly used to describe the structure of objects and classes. For example:

```ts
interface User {
  id: number;
  name: string;
  email?: string;
}

interface Admin extends User {
  permissions: string[];
}
```

Interfaces support declaration merging. If an interface with the same name is declared more than once in the same scope, TypeScript combines its members. This can be useful when extending types from libraries or adding properties to an existing contract.

A type alias can describe object shapes too, but it can also represent unions, intersections, primitives, tuples, and function types.

```ts
type Status = "pending" | "approved" | "rejected";
type Point = readonly [number, number];
type Account = User & { isActive: boolean };
```

Unlike interfaces, type aliases cannot be reopened through declaration merging. Both forms can extend or combine object structures: interfaces use `extends`, while aliases commonly use intersection (`&`). Neither is universally better.

## Conclusion

Choose an interface when defining an object-oriented contract, especially one that may be extended or merged. Choose a type alias for unions, tuples, utility combinations, or other types that are not simply object shapes. For ordinary object models, either is valid; consistency within a codebase matters most.
