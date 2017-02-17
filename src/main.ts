import hello from './hello/hello';
import { Building, BuildingTypes } from './Building';
import { ResidentialBuilding } from './ResidentialBuilding';
import { CommercialBuilding } from './CommercialBuilding';

let rb = new ResidentialBuilding('DellUxe St', 12, 100);
rb.addResident();

let cb = new CommercialBuilding('Floor St', 1, 500);
cb.addShop().addShop().addShop();

cb.address = 'Joerg Wuppertal St 6';
console.log(cb.address);

// array can take either kind
let buildings: Building[] = [];
buildings.push(rb);
buildings.push(cb);

document.getElementsByClassName('js-app')[0].innerHTML = `
    <p>Residential property tax: ${rb.getPropertyTax()}</p>
    <p>Commercial property tax: ${cb.getPropertyTax()}</p>
`;

// generic
// 'makes' types, T is ...
function identityTransformation<T> (value: T): T {
    return value;
}

let num = identityTransformation(5);
let str = identityTransformation('hello');
let cty = identityTransformation(BuildingTypes.Industrial);
let obj = identityTransformation({key: 25});
let arr = identityTransformation(['abc', 'def']);

// two types
function log<T1, T2>(a: T1, b: T2){
    console.log(a, b);
}

// TS verifies types
log<string, number>('TS session no: ', 4);

// generic filter
function filter<T>(
    arr: Array<T>,
    condition: (element: T) => boolean
): Array<T> {
    let filtered: Array<T> = [];

    for(let el of arr){
        if (condition(el)){
            filtered.push(el);
        }
    }

    return filtered;
}

filter<number>([2, 1, -4], el => el >= 0);

class Stack<T> {
    constructor(){
        this.values = [];
    }
    protected values: Array<T>;
    public push(item : T): void {
        this.values.push(item);
    }
    public pop(): T {
        return this.values.pop();
    }
    public size(): number {
        return this.values.length;
    }
}

// generic stack because no type declared
let s = new Stack();

s.push('C++');
s.push('D');
s.push(5);

let topEl = s.pop();

// with declared type
let s1 = new Stack<string>();

s1.push('C++');
s1.push('D');

document.getElementsByClassName('js-app-1')[0].innerHTML = `${s.size()}`;

interface User {
    name: string;
    email: string;
}

// require name and e-mail
class UserStack<T extends User> {
    constructor(){
        this.values = [];
    }
    protected values: Array<T>;
    public push(item : T): void {
        this.values.push(item);
    }
    public pop(): T {
        return this.values.pop();
    }
    public size(): number {
        return this.values.length;
    }
}

let admin = {name: 'admin', email: 'admin@eggsample.com', 'phone': '3455551212'};
let user = {name: 'user', email: 'user@eggsample.com'};

let registeredUsers = new UserStack();
registeredUsers.push(admin);
registeredUsers.push(user);
registeredUsers.push({name: 'other', email: 'other@eggsample.com'});
