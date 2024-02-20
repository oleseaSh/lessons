const x = [10, 12, 26, -8, -3, 0, 120, 50];
const y = x.map((item) => item * 21);

console.log(y);

const z = x.filter((item, index) => item > 0);

console.log(z);
