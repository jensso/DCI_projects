/*for (var number = 1; number <= 100; number++) {

if (number % 3 ==0 && number % 5==0) {console.log("FizzBuzz");}

else if (number % 5 ==0) {console.log("Buzz");}

else if (number % 3 ==0) {console.log ("Fizz");}

else {console.log (number);}

}
fizzBuzz => {

  for (var i = 1; i <=100; i++) {
    if (i % 3 ==0 && i % 5 ==0) {
      console.warn(`FizzBuzz`);
    }
    else if (i % 5 ==0) {
      console.log(`fizz`);
    }
    else if (i % 3 ==0) {
      console.log(`buzz`);
    }
    else {
      console.error(i);
    }
  }
}


										//what type of event//

var heading = document.querySelector('h1');
var counter = 1;

heading.addEventListener('click',function(){console.log('the click was done '+counter +' times')
;counter++;
});
