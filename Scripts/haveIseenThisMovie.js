let cinema = function(title,director,release,actor,seen) {
  this.title = title;
  this.director = director;
  this.release = release;
  this.seen = seen;
}

let starWars = new cinema(`Star Wars I`,`Yoda`,1977, `Luke Skywalker`, true);
let django = new cinema(`Django unchained`, `Quentin Tarantino`, 2005, `C.Waltz`,true);
let titanic = new cinema(`Titanic`, `somebody`,1998,`L.diCaprio`,false);
let dirtyDancing = new cinema(`Dirty Dancing`,`somebody else`, 1986,`P.Swayze`,true);
let birds = new cinema(`Die Vögel`,`Alfred Hitchcock`, 1964, `I Dontknow`, false);

let allMovies = {
  starWars: starWars,
  django: django,
  titanic: titanic,
  dirtyDancing: dirtyDancing,
  birds: birds,
  printSeenMovies: function() {

  for (let watchedMovies in this) {
    if (this[watchedMovies].seen) {
      console.log(this[watchedMovies].title);
      }
    }
  }
}
allMovies.printSeenMovies();

/*
Create an object constructor that gives back the following properties for every participant of the class:

His/her firstname,
his/her lastname,
his/her age,
his/her nationality,
his/her hours of programming experience (be creative here!)
his/her favorite programming language (put a string here),
his/her favorite hobby (outside programming lol!). This could also be omitted. Optional. Some of them you know some of them not.

Once you have created all 14 objects, put them inside a big object.
Every object should have it's own key. The outer object should be an object literal.
After this, create a function that iterates through every student and checks if the student
has a 'hobby' property or not. If yes print to the console that 'The kid has a life',
otherwise 'The kid is doomed like his/her teacher or worse.'
*/
let classmates = function(Vorname,Nachname,Alter,Nationalität,ProgErfahrung,ProgFavorit) {
  this.Vorname = Vorname;
  this.Nachname = Nachname;
  this.Alter = Alter;
  this.Nationalität = Nationalität;
  this.ProgErfahrung = ProgErfahrung;
  this.ProgFavorit = ProgFavorit;
}

let meir = new classmates(`Meir`,`Overferst`,36,`Israel`,2,`SaSs`);
let eugen = new classmates(`Eugen`,`Kuhn`,32,`Russland`,5,`CSS`);
let nour = new classmates(`Nour`,`Something`,29,`Syrien`,1,`HTML`);
let ali = new classmates(`Ali`,`Pudina`,33,`Iran`,1,`alles was sich bewegt`);
let murhaf = new classmates(`Murhaf`,`Murhafson`,36,`Syrien`,4,`javascript`);

ali.Hobby = `lesen und reiten`;
nour.Hobby = `Zug fahren`;

let course = {
  meir : meir,
  eugen : eugen,
  nour : nour,
  ali : ali,
  murhaf : murhaf,
  printHobbys: function() {
    for (let guys in this) {
      if (this[guys].Hobby) {
        console.log(this[guys].Hobby);
      }
    }
  }
}

course.printHobbys();
