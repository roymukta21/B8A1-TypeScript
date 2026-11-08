
function multiplyValue(value: number, multiplier: number = 2): number {
  return value * multiplier;
}

function processInput(input: string | number | boolean): string | number {
  if (typeof input === "string") {
    return input.trim().toLowerCase();
  } else if (typeof input === "number") {
    return input * 10;
  } else {
    return input ? "Active" : "Inactive";
  }
}

function formatCoordinate(
  coordinate: readonly [number, number, string]
): string {
  return `Location: ${coordinate[2]} (${coordinate[0]}, ${coordinate[1]})`;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.flat();
}

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

function getPopularCourses(
  courses: Course[],
  minStudents: number
): Course[] {
  return courses.filter(
    (course: Course) =>
      course.isPublished && course.students >= minStudents
  );
}

function pluckValues<T, K extends keyof T>(
  items: T[],
  key: K
): T[K][] {
  return items.map((item: T) => item[key]);
}

class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

async function validateAgeAsync(age: number): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    if (age < 18) {
      reject(new Error("Access Denied: Must be 18 or older"));
    } else {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    }
  });
}

function getUniqueNumbers(numbers: number[]): number[] {
  return [...new Set(numbers)];
}

interface Product {
  id: number;
  name: string;
  price: number;
}

function updateProductPrice(
  product: Product,
  newPrice: number
): Product {
  return { ...product, price: newPrice };
}
