const magicBook = {
    recipes: {
        golem: {
            bone: 10,
            stone: 100,
            nail: 100,
            poo: 53
        },
        littleDevil: {
            lava: 10,
            evil: 999
        },
    },
};

const kitchen = {
    bone: 999,
    stone: 999,
    nail: 999,
    poo: 999,
    lava: 999,
    evil: 999,
    kettle: {
        material: 'metal',
        ingridients: {},
    },
    addIngridientToKettle(nameOfIngridient, amount) {
        this.kettle.ingridients[nameOfIngridient] = (this.kettle.ingridients[nameOfIngridient] || 0) + amount;
        this[nameOfIngridient] -= amount;
    },
    cook(recipes) {
        let keys = 0;
        for (key in recipes) {
            keys += 1;
        }
        let number = 0;
        for(let key in recipes){
            if (this.kettle.ingridients[key] >= recipes[key]) {
                number+=1;
                if(number==keys){
                    console.log(recipes)
                }
            }
            else {
                alert('Не достаточно ресурсов!!!');
                break;
            }
        }
    },
};


console.log(kitchen.addIngridientToKettle('bone', 10));
console.log(kitchen.addIngridientToKettle('stone', 100));
console.log(kitchen.addIngridientToKettle('nail', 100));
console.log(kitchen.addIngridientToKettle('poo', 53));

console.log(kitchen.cook(magicBook.recipes.golem));