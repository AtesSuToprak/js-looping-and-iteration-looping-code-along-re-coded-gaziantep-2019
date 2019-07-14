// Code your solutions in this file

let names = ["Ada", "Brendan", "Ali"];
const events = "birthday";

function writeCards(names , events) {

let newArr = [];
  for(let i = 0 ; i <names.length; i++) { 
    
    newArr.push(`Thank you, ${names[i]}, for the wonderful ${events[i]} gift.`);
    
  }
  return newArr;
}

let counter = 10;
function countDown(counter) {
  
  while (counter > 0) {
    
    console.log(counter);
    counter--;
    
   
  }
  
}