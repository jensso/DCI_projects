/*Create a random color
Create a random color by creating three different random number integers from 0 to 255. Store them into an array.
Then try to paint the background body of your document with the combination of colors you created by putting the randomly generated numbers into an rgb() function as arguments.
hint:
Check the document.body.style.background = 'rgb(three numbers here)'
*/
// let colorCreator = function() {
// let r = Math.ceil(Math.random()*255);
// let g = Math.ceil(Math.random()*255);
// let b = Math.ceil(Math.random()*255);
//
// return [r,g,b];
// }
// let randomColor = colorCreator();
// console.log(randomColor);
// document.body.style.background = `rgb(${randomColor})`;

let hexaDezCreator = function() {
  let Hexa = [`0`,`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,`A`,`B`,`C`,`D`,`E`,`F`];

  let randomColor = `#`;

  for (let i = 1; i <=6; i++) {
    let randomIndexNr = Math.floor(Math.random()*Hexa.length);
    randomColor += Hexa[randomIndexNr];
}
    console.log(randomColor);
    return randomColor;
}
document.body.style.background = hexaDezCreator();
