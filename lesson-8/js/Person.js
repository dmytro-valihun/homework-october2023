function Person(name, age) {
    this.name = name;
    this.age = age;
    this.showInfo = function() {
        console.log(`my name ${this.name}, age is ${this.age}`)
    }
}