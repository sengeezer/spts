var _this = this;
var numberOfWheels = 4;
var numberPlate = 'TYP-512';
var car = { numberOfWheels: numberOfWheels, numberPlate: numberPlate };
car.toString = function () {
    return _this.numberPlate + " (" + _this.numberOfWheels + " wheels)";
};
console.log(car.toString());
// can be either type
var eitherType = '5';
// hence won't complain
eitherType = parseInt(eitherType, 10);
// type can be freed
var whatever = {};
// objects
var myObj = { 0: 1, 1: 2 };
// arrs
var members = ['Steve', 'Geoffrey'];
// generic
var otherMembers = Array();
// annotated function
var getMaxVal = function (num1, num2, num3) {
    return Math.max(num1, num2, num3);
};
// also valid:
var getOtherMaxVal = function (num1, num2, num3) {
    return Math.max(num1, num2, num3);
};
getMaxVal(3, 4, 66);
// optional and default value params
var sum = function (a, b) {
    return a + (b || 0);
};
var sums = function (a, b) {
    if (b === void 0) { b = 0; }
    return a + b;
};
// if no return, use void
var log = function (s) {
    console.log(s);
};
log('ess');
// Use any number of args
var otherGetMax = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return Math.max.apply(Math, nums);
};
//# sourceMappingURL=tutorial.js.map