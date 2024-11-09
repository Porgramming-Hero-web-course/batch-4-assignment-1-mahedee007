UnionType 
A union type allows a value one of several types. its similar to the javascript 'Or' operator.this type is define as single pipe (|).it use when a variable can be one of multple types. eg. String|Number|Boolean
Examples:

type Developer = 'frontend' | 'Backend'

so it will take either frontend or backend from Developer type.

Intersection Types
An intersection type combines multiple types into one. the value must match all of them. its similer to javascript '&' operator.it use when we need a value that has all properties from multiple types. eg Person& Contact

Example:
interface Person{
    name: string
    age: number
}
interface Contact{
    email: string
}

type Employyee = Person & Contact;
const employee: Employee ={
    name: 'Mahedee',
    age: 34
    email: 'mahedee@gmail.com'
}
So it will take both Person and Contact from Employee type.