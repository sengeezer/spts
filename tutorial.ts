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