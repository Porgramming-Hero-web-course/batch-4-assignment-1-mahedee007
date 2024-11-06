{
    //
    //Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

   function sumArray(array: number[]){
    return array.reduce((sum: number , num: number): number=> sum + num, 0)
   }
   
   const numbers = [1, 2, 3, 4, 5];
   console.log (sumArray(numbers))

    //
}