let factorial = (num)=> {
  let sum = 1;
  if (typeof num !== `number`) {
    return `not a number!`;
  }

  else if (num <0) {
    return `negative number!`
  }
  else if (num ===0) {
    return `number is zero!`
  }

  for (let i = 1; i <= num; i++) {
    sum = i*sum;
  }
  return sum;
};


module.exports = factorial;
