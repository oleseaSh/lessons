// let styles = ['Джаз', 'Блюз'];
// styles.push('Рок-н-ролл');
// styles[1] = 'Классика';
// alert(styles);
// // alert(styles[styles.length-2]);
// // alert(styles.at(-1));
// // alert(styles[0]);
// // alert(styles.length);

// // for (let style of styles) {
// //     alert(style);
// // }


// alert(styles.shift());
// alert(styles);
// styles.unshift('Рэп','Рэгги');
// alert(styles);
// alert(styles.length);

// let arr = ['a', 'b'];
// arr.push(function() {
//     alert(this);
// });
// arr[2]();
 function sumInput() {
    let numbers = [];
    while(true) {
        let value = prompt('Введите число', 0);
        if (value === "" || value === null || !isFinite(value)) break;
        numbers.push(+value);
    }
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
 }
 alert(sumInput());