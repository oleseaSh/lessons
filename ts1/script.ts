console.log('test');
console.log(100 );

// let x = 6;
// console.log(x);

// let y = 8;
// console.log(y);

// x = y;
// console.log(x);
// x = 'script';

let x : number = 6;
console.log(x);
console.log(x, typeof x);

let y : number;
console.log(y);
y = 50;
console.log(y);
y = +'80';
console.log(y);

const str1 : string = 'Hello';
const str2 : string = 'World';
console.log(str1, typeof str1);
console.log(str1 + ' ' + str2);

// let z : any;
// z = 100;
// console.log(z);
// z = 'apple';
// console.log(z);
// z = false;
// console.log(z);

const str3 : string = str1 + str2;
console.log(str3);

// let z : any;
// z = 100;
// console.log(z, typeof z);
// z = 'Vasea';
// console.log(z, typeof z);

const z : boolean = Boolean(0);
console.log(z, typeof z);

const b : number = parseInt('42', 10);
console.log(b, typeof b);

const c : string = String(57);
console.log(c, typeof c);

document.querySelector('.root').textContent = str3;
document.querySelector('.root2').textContent = String(b);
const x10 : number = +document.querySelector('.root3').textContent;







 