const owners = [];
const askPersonName = "what's your name?";
const askPersonAge = "what's your age?";
const askCarBrand = "what's your car brand?";
const askCarModel = "what's your car model?";
const pName = 'name';
const age = 'age';
const brand = 'brand';
const model = 'model';
let persName;
let persAge;
let carBrand;
let carModel;
function getInfo(string, operation) {
    let info;
    let result;
    do {
        info = prompt(string);
        result = giveInfo(info, operation);
    } while (!result)
    return info;
}
function giveInfo(info, operation) {
    if (operation === 'name' || operation === 'brand' || operation === 'model') {
        return persNameCondition(info);
    } else if (operation === 'age') {
        return persAgeCondition(info);
    }
}
function persNameCondition(info) {
    if (typeof info === 'string' && isNaN(+info)) {
        return true
    } else {
        return false
    }
}
function persAgeCondition(info) {
    if (!isNaN(+info) && info >= 18 && info < 100) {
        return true
    } else {
        return false
    }
}

function app() {
    persName = getInfo(askPersonName, pName);
    persAge = +getInfo(askPersonAge, age);
    carBrand = getInfo(askCarBrand, brand);
    carModel = getInfo(askCarModel, model);
    let newPerson = new Person(persName, persAge);
    let newAuto = new Car(carBrand, carModel, persName);
    owners.push(newAuto)
}
app()
console.log(owners)

