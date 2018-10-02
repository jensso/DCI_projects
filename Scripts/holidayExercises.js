/*
Find the forbidden word
Create a function that accepts a sentence as an argument (a string) and checks if this sentence contains
one of the forbidden words you have predefined. If it does print to the console something like
('The message cannot be printed because it contains inappropriate words'). Otherwise print the sentence itself.

Predefine 5 forbidden words and put them in an array before creating the function.
Thus it would be easier to check every word if it is included to the forbidden array of words or not.
hint; You may want to refresh the strings split and the arrays includes method before starting.
*/

let showSentence = function(sentence) {
  let explicit = [`cock`,`ASS`,`butt`,`Dick`,`cunt`];
  explicit = explicit.join(` `).toLowerCase().split(` `);
  sentence = sentence.toLowerCase().split(` `);

  for (let i = 0; i < explicit.length; i++) {

    if (sentence.includes(explicit[i])) {
    console.log('The message cannot be printed because it contains inappropriate words');
    return sentence;
    break;
}
}
console.log(sentence.join(` `));
}
showSentence(`My name is dick`);
showSentence(`My name is dirk`);
