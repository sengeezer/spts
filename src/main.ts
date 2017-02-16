import hello from './hello/hello';
import { Building } from './Building';
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

