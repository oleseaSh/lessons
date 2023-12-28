// function sum(a, b) {
//     return a + b;
// }

// alert(sum(7, 5));
// alert(sum(8, 6));

// let sumResult = sum(4, 9);
// alert(sumResult);

// function showMessage(from, text) {
//     if(text === 'underfind') {
//         text = 'text is empty';
//     }
//     return from + ':' + text;
// }
// let from = 'Dave';
// let text = 'Hello';
// alert(showMessage(from, text));


// function checkAge(age) {
//     if(age > 100) {
//         alert('Hello Duncan!!!');
//     }
//     else if(age <18) {
//         alert('Access denied');
//     }
//     else {
//         alert('Hello User');
//     }
// }

// checkAge(16);

let value = prompt('Insert number');
// alert(value);
if (value < 0) {
    alert('-1');
}
else if (value > 0) {
    alert('1');
}
else {
    alert('0');
}