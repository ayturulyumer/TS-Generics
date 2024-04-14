"use strict";
class CarDealership {
    constructor(dealershipName) {
        this.soldCars = 0;
        this.modelsSold = {};
        this.dealershipName = dealershipName;
    }
    sellCar(dealerID, model) {
        const dealerIDasString = String(dealerID);
        this.modelsSold[dealerIDasString] = model;
        this.soldCars++;
    }
    showDetails() {
        let message = `${this.dealershipName}\n`;
        for (const dealerID in this.modelsSold) {
            message += `${dealerID} sold ${this.modelsSold[dealerID]}\n`;
        }
        return message;
    }
}
let dealership = new CarDealership("SilverStar");
dealership.sellCar("BG01", "C Class");
dealership.sellCar("BG02", "S Class");
dealership.sellCar("BG03", "ML Class");
dealership.sellCar("BG04", "CLK Class");
console.log(dealership.showDetails());
//# sourceMappingURL=carDealership.js.map