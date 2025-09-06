class ToyotaCar {

    constructor(brand, mileage){
        console.log("creating new object");
        this.brand = brand;
        this.mileage = mileage;
    }
    start(){
        console.log("start");
    }

    stop() {
        console.log("stop");
    }

}

let fortuner = new ToyotaCar("fortuner", 10);
console.log(fortuner);
let nexon = new ToyotaCar("nexon", 12);
console.log(nexon);