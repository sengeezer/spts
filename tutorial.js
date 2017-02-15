var _this = this;
var numberOfWheels = 4;
var numberPlate = 'TYP-512';
var car = { numberOfWheels: numberOfWheels, numberPlate: numberPlate };
car.toString = function () {
    return _this.numberPlate + " (" + _this.numberOfWheels + " wheels)";
};
console.log(car.toString());
//# sourceMappingURL=tutorial.js.map