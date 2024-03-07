const pi = 3.14;
const surface = 4 * pi * 3390 * 3390; // surface area of Mars
console.log('Surface area of Mars: ', surface);

// Возведение в стерень
2**4; //16
Math.pow(2,4); // 16

/*      if (условие) then выполнить что-то
        else if (другое условие) then
        выполнить что-то другое
        else (ни одного из тех условий) then
        выполнить что-то еще;  */

const abs = (num) => {
    if (num > 0) {
        return num;
    } else if (num < 0) {
        return -num;
    } else {
        return 0;
    }
}

/*                                  Математические предикаты :
            ===
            ==!
            >
            <
            >=
            <=
            &&
            ||
            !
*/

const abc = (num) => {
    if (num === 0 || num > 0) {
        return num;
    } else {
        return -num
    }
}

/*                                Тернарный оператор :
 Тернарная, или условная, операция вычисляет 
и возвращает значение, то есть является выражением. 
Условная конструкция if в JavaScript выражением НЕ является. Это инструкция — она 
выполняет действие, ничего не вычисляя и не возвращая.
*/

const AbsValue = (num === 0 || num > 0) ? num : -num;

/* Как следствие, мы НЕ можем с помощью 
 конструкции if сделать так же:
Чтобы сделать тоже самое, придётся "попотеть": */


let absValue; 
if (num >= 0) { 
absValue = num; 
} else { 
absValue = -num; 
} 

const getAbs = num => (num >= 0) ? num : -num; 

// Вместо унылого: 

const getAbs1 = (num) => { 
if (num >= 0) { 
return num; 
} 
return -num; 
}; 



const type = (num > 0) ? 'positive' : (num < 0) ? 'negative' : 'zero';

// if (condition) {
//     statement;
//     ... ;
//     ... ;
// } else {
//     statement;
//     ... ;
//     ... ;
// }


/* Представляем функции 
 Можно представить функции как чёрные коробки: коробка забирает объект, производит внутри 
какие-то действия, а потом выплёвывает что-то новое 
o Некоторые функции ничего не забирают (не принимают аргументы), некоторые вообще 
ничего не делают (они пустые), некоторые не возвращают значения. 
o Наш surfaceAreaCalculator принимает один аргумент (radius), вычисляет площадь 
поверхности и возвращает результат этого вычисления. 
 Функции могут вызывать другие функции 
 surfaceAreaCalculator может вызывать функцию square, чтобы получить радиус, возведённый в 
квадрат, вместо того, чтобы умножать радиус на радиус. 
 Мы пишем функции, чтобы облегчить жизнь: 
o такой код легче понимать 
o функции могут переиспользоваться несколько раз 
*/



const surfaceAreaCalculator = (radius) => {
    return 4 * pi * square(radius);
}

const square = (num) => {
    return num * num;
}

const surfaceOfMars = surfaceAreaCalculator(3390);

console.log('Площадь поверхности Марса:', surfaceOfMars);