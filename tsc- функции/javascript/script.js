"use strict";
// function test() {
//     console.log('Hello');
// }
//  test();
function Test2() {
    const x = 40;
    return x;
}
;
console.log(Test2());
function Test3() {
    document.querySelector('.root').textContent = 'Hello world!';
}
Test3();
function Test4(x, y) {
    return x * y;
}
console.log(30 - Test4(2, 5));
function Test5(x, y) {
    console.log(x * y);
}
Test5(5, 6);
function Test6(x, y) {
    return y !== undefined ? x * y : x;
}
console.log(Test6(7));
function Test7(x, y) {
    return y !== undefined && x !== undefined ? x * y : 'enter value';
}
console.log(Test7());
function checkEmail(email) {
    return email.indexOf('@') !== -1 ? email.toLowerCase() : false;
}
console.log(checkEmail('vasea@  pupkin'));
function checkEmail2(email) {
    return email.indexOf('@') !== -1 ? 'Hello user' : 'Invalid user';
}
console.log(checkEmail2('vasea@pupkin'));
//# sourceMappingURL=script.js.map