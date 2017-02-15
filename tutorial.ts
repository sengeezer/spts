let numberOfWheels: number = 4;
let numberPlate: string = 'TYP-512';

let car = {numberOfWheels, numberPlate};

car.toString = () => {
    return `${this.numberPlate} (${this.numberOfWheels} wheels)`;
};

console.log(car.toString());

// can be either type
let eitherType: number | string = '5';
// hence won't complain
eitherType = parseInt(eitherType, 10);

// type can be freed
let whatever: any = {};

// objects
let myObj: Object = { 0: 1, 1: 2};

// arrs
let members: string[] = ['Steve', 'Geoffrey'];
// generic
let otherMembers = Array<string>();

// annotated function
let getMaxVal = (num1: number, num2: number, num3: number): number => {
    return Math.max(num1, num2, num3);
};
// also valid:
let getOtherMaxVal: (a: number, b: number, c: number) => number = (num1, num2, num3) => {
    return Math.max(num1, num2, num3);
};

getMaxVal(3, 4, 66);

// optional and default value params
let sum = (a: number, b?: number): number => {
    return a + (b || 0);
}

let sums = (a: number, b: number = 0): number => {
    return a +b;
}

// if no return, use void
let log = (s: string): void => {
    console.log(s);
}

log('ess');

// Use any number of args
let otherGetMax = (...nums: number[]): number => {
    return Math.max(...nums);
}