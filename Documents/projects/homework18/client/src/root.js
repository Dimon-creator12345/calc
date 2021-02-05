const MilitaryResource = require('./militaryResource.js');
const Squad=require('./squad.js');

let a=new MilitaryResource('tank',100,100);
let b=new MilitaryResource('tank',100,100);
let c=new MilitaryResource('tank',100,100);

let squad=new Squad(a,b,c);

console.log(squad);