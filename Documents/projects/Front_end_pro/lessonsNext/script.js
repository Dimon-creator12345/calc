// Object
let object ={name:'Dima',age:'18',};

// number Of Characters In Object

function numberOfCharactersInObject(object){
    let string ='';
for (const key in object) {
    if (object.hasOwnProperty(key)) {
        string += object[key];
    }
}
return string.length;
}

console.log(numberOfCharactersInObject(object));



// ObjectWithoutValue


function ObjectWithoutValue(object){
let objectClone={};
for (const key in object) {
    if (object.hasOwnProperty(key)) {
        objectClone[key] = key;
        objectClone[key] = null;
    };
};
return objectClone;
};

console.log(ObjectWithoutValue(object));


// NumberOfCharactersInTheObject


function NumberOfCharactersInTheObject(object){
    let objectClone={};
for (const key in object) {
    if (object.hasOwnProperty(key)) {
       objectClone[key]=String(object[key]).length
    }
}
return objectClone;
}

console.log(NumberOfCharactersInTheObject(object));
