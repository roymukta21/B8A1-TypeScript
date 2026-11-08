# Type Aliases and Interfaces in TypeScript: Understanding the Difference

## Introduction

When I started learning TypeScript, I noticed that both `type` and `interface` could be used to describe objects. At first, they seemed almost identical. However, after exploring more examples, I found that they have some important differences. Knowing when to use each one can make code easier to organise and maintain.

## Detailed Explanation

An interface is mainly used to define what properties an object should have. It is also useful when creating structures that can be extended by other interfaces.

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

Here, `Admin` gets all the properties from `User` and adds a new `permissions` property. Another interesting feature of interfaces is declaration merging. This means we can declare an interface with the same name again, and TypeScript will combine its properties.

On the other hand, a type alias gives us more flexibility. It can describe objects, but it can also define unions, tuples, and other combinations of types.

```ts
type Status = "pending" | "approved" | "rejected";

type Point = readonly [number, number];

type Account = User & {
  isActive: boolean;
};
```

In this example, `Status` represents specific string values, while `Point` defines a tuple. The `Account` type combines two object structures using the intersection operator.

Unlike interfaces, type aliases do not support declaration merging. Interfaces commonly use `extends` for