function Car(brand, model, owner) {
    this.brand = brand;
    this.model = model;
    this.owner = owner;
    this.showInfo = function() {
        console.log(`this car name ${this.brand}, model is ${this.model}, owner is ${owner}`)
    }
}