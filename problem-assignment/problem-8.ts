{
//Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.

function validateKeys<T>(obj: T, keys: (keyof T)[]): boolean {
  return keys.every(key => key in ( obj as object));
    
  
}

interface Person {
  name: string;
  age: number;
  email: string;
}

const person : Person = { name: "Alice", age: 26, email: "alice@example.com" };
console.log(validateKeys(person, ["name", "age"]));


//

}