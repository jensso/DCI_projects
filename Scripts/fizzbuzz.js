/*for (var number = 1; number <= 100; number++) {
   
if (number % 3 ==0 && number % 5==0) {console.log("FizzBuzz");}

else if (number % 5 ==0) {console.log("Buzz");}

else if (number % 3 ==0) {console.log ("Fizz");}

else {console.log (number);}

}


function fizzBuzz(){for (var number = 1; number <= 100; number++) {
   
if (number % 3 ==0 && number % 5==0) {console.log("FizzBuzz");}

else if (number % 5 ==0) {console.log("Buzz");}

else if (number % 3 ==0) {console.log ("Fizz");}

else {console.log (number);}

}
	console.log('Hallo in der Welt der Funktionen');

}

fizzBuzz(){for (var number = 1; number <= 100; number++) {
   
if (number % 3 ==0 && number % 5==0) {console.log("FizzBuzz");}

else if (number % 5 ==0) {console.log("Buzz");}

else if (number % 3 ==0) {console.log ("Fizz");}

else {console.log (number);}

}}

function displayName(userName, Age) {console.log("Hy, my Name is " + userName+ " ,ich bin "+ Age+ " Jahre alt");}

displayName("HANS", 66);
displayName("JENS", 47);


function praxis(stunden, minuten){
	console.log("Es ist " +stunden + "und " + minuten) }

praxis("12h ", 50)
praxis("13h "; 22)



function summe(a,b,c,d,e)

var ergebnis = summe(1,2,3,4,5)

console.log(summe*2)


function rente(alter,rentenalter,brutto,steuersatz){
}

var alter(30)
var rentenalter(67)
var brutto(2500)
var steuersatz(25)
*/


													//events: which element// 
													//what type of event//

var heading = document.querySelector('h1');
var counter = 1;

heading.addEventListener('click',function(){console.log('the click was done '+counter +' times')
;counter++;
});
