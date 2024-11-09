{
    //Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.
    


    function countWordOccurrences(sentence: string, word: string): number {
        const lowercaseSentence = sentence.toLowerCase();
        const lowercaseWord = word.toLowerCase();
        const words = lowercaseSentence.split(' ');
        return words.filter(word => word === lowercaseWord).length;

    }
    
    console.log(countWordOccurrences("I love typescript", "typescript")); 
}