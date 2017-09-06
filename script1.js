/**
 * Created by SYLVAIN on 06/09/2017.
 */


'use strict';



//Copy of stirng boolean numbers => replace value with most recent
let age = 100;
let age2 = age;

console.log(`age : ${age}  age2 : ${age2}`);

age = 200;

console.log(age);


//Array

//On a juste creer une reference a l'array principale, ce qui ne va jamais changer puisque l'on va revenir à la reference de base à chaque utilisation
/* ERROR
const array = ["team1", "TEALZLE", "bonjout"];
const team = array;
team[2] = 'Lux';
console.log(array);
console.log(team);
*/

//Solution pour cela
const array = ["team1", "TEALZLE", "bonjout"];
const team = array.slice();  //CREER UNE COPY ET NON UNE REFERENCE
team[2] = "bjno";

//On peut concatener deux array ce qui va aussi CREER UNE COPY
const team2 = [].concat(team);

//MEME chose avec un spread issu de ES6
//On va cree un tableau qu'on spread dans team
const team3 = [...team];


//Une autre solution avec l'objet Array

const team5 = Array.from(team);

//Ainsi via une copy cela va permettre de creer et de modifier independant les array de leur reference




//NOW FOR OBJECT
const person = {
    name: 'Sylvain',
    age: 21
};

/*
//ICI ON CREER UNE REFERENCE ET NON UNE COPY !
//Si on fait captain.age = 99 alors person sera aussi cahnger !!!!
const captain = person;
*/

//Pour pallier à cela on utilise ceci
const captain = Object.assign({}, person, {age: 99, name: "captain"});




