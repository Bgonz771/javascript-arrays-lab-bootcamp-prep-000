// Add your functions and code here

 var kittens =["Milo","Otis","Garfield"];

function destructivelyAppendKitten(name){
    kittens.push("Ralph");
      return kittens;
}

var kittens =["Milo","Otis","Garfield"];

function destructivelyPrependKitten(name){
    kittens.unshift("Bob");
      return kittens;
}

var kittens =["Milo","Otis","Garfield"];

function destructivelyRemoveLastKitten(name){
    kittens.pop();
      return kittens;
}

var kittens =["Milo","Otis","Garfield"];

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
  
}

var kittens =["Milo","Otis","Garfield"];
var nKitten =["Broom"];
function appendKitten(array1,array2){
   var nKit = (kittens.concat(nKitten));
   return nKit;
 } 
  
var kittens =["Milo","Otis","Garfield"];
var nKitten =["Broom"];
function prependKitten(name){
   var nKit = (nKitten.concat(Kittens));
   return nKit;
 } 
  

