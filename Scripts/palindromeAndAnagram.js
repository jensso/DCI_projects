let sentence = `This is a simple sentence with many different words for exampling how to handle strings and convert them to arrays.`
let sentenceArray = sentence.split(` `);

console.log(sentenceArray);
  let longestWord = sentenceArray[0];
for (let i = 1; i < sentenceArray.length; i++) {
  if (sentenceArray[i].length >= longestWord.length) {
    longestWord = sentenceArray[i];
  }
}
console.log(longestWord);
/*
Write a function that accepts a name and returns a message if this name is  a palindrome or not.
You may want to use some of the strings and arrays methods you learned in order to do this.
*/

let isPalindrome = function(name) {
name = name.toLowerCase();
let reversedName = name.split(``).reverse().join(``);
let conclusion;
name === reversedName ? console.log(`${name} is a palindrome`):console.log(`${name} is NOT a palindrome`);

}
isPalindrome(`Hund`);
isPalindrome(`Anna`);
/*
Write a function that accepts two words and checks if they are anagrams.
In other words check if they contain the same letters exactly regardless of order.
You may find helpful the .sort() method of an array to complete this task faster.
*/

let isAnagram = function(firstWord,secondWord) {
  word1 = firstWord;
  word2 = secondWord;
  word1 = word1.split(``).sort().join(``).toUpperCase();
  word2 = word2.split(``).sort().join(``).toUpperCase();
  word1 === word2 ? console.log(`${firstWord} is an anagram of ${secondWord}`) : console.log(`${firstWord} is NOT an anagram of ${secondWord}`);
}
isAnagram(`Hund`,`Sahne`);
isAnagram(`cat`,`act`);
