/*
function addition() {
  var x = 10*10;
  var y = 20 % 4  ;
  return x + y;
   }
console.log(addition());

function type() {
  var num = 0;
  return typeof num;
}
console.log(type());
*/

function zeugnis(name, x) {
  if (x <1 || x >100) {
    console.log(`That's not possible!`);
    return;
  }
  if (x < 50) {
    console.log(`${name} has ${x} and NOT passed..try next time!`);

  }
  else if (x <=60) {
    console.log(`${name} has ${x} D`);
  }
  else if (x <=80) {
    console.log(`${name} has ${x} C`);
  }
  else if (x <=90) {
    console.log(`${name} has ${x} B`);
  }
  else if (x <=98) {
    console.log(`${name} has ${x} A`);
  }
  else if (x ===99) {
    console.log(`${name} has ${x} Almost Perfect!`);
  }
  else if (x ===100) {
    console.log(`${name} has ${x}! Take a day off tomorrow!`);
  }

}


zeugnis(`Marcelo`, 102);
zeugnis(`Mauro`, 99);
