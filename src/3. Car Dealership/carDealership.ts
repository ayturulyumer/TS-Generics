interface Dealership<T> {
  dealershipName: T;
  soldCars: number;
}

interface Actions<T> {
  sellCar(dealerID: T, model: T): void;
}

class CarDealership<T> implements Dealership<T>, Actions<T> {
  dealershipName: T;
  soldCars: number = 0;
  modelsSold: { [key: string]: T } = {};

  constructor(dealershipName: T) {
    this.dealershipName = dealershipName;
  }

  sellCar(dealerID: T, model: T): void {
    const dealerIDasString: string = String(dealerID);
    this.modelsSold[dealerIDasString] = model;
    this.soldCars++;
  }

  showDetails(): string {
    let message: string = `${this.dealershipName}\n`;
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
