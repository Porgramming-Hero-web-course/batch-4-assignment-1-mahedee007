{
    //
    // Poblem-2
    //Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.
    function removeDuplicates(numbers: number[]): number[] {
        return numbers.filter((num, idx)=> numbers.indexOf(num) === idx)
    }

    console.log(removeDuplicates([1, 2,2,2, 2, 3,3,3,3 ,4, 4, 5]))

    

    //
}