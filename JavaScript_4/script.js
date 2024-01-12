const fruits = ['banana', 'apple', 'pineapple'];
// console.log(fruits.length);

// for( let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// function Degree(number, degree) {
//     let result = 1;

//     for(let i = 0; i < degree; i++) {
//         result = result * number;
//     }
//     return result;
// }
// console.log(Degree(2,3));

const users = [{name:'John', age: 21, role:'employee'}, 'apple', 'pineapple'];

// console.log(users.pop());
// console.log(users);
// console.log(users.push('developer'));
// console.log(users);

// let result = [];
// for(let i = 1; i < 100; i++) {
//     if(i % 2 == 0) {
//         result.push(i)
//     }
//     console.log(result);
// }

// console.log(users.shift());
// console.log(users);
// console.log(users.unshift('accountant'));
// console.log(users);

// for(let user of users) {
//     console.log(user);
// }

// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// alert(matrix[1][1]);

// let arr = [1, 2, 3];
// alert(arr.toString());

const baseURL = 'https://jsonplaceholder.typicode.com';
const endpoint = '/posts';

// const request = fetch('${baseURL}${endpoint}')
//   .then(response => response.json())
//   .then(data => console.log(data));
//   const response = request.json();
// console.log(request);

const divRoot = document.querySelector('#root');
async function getPosts(url, end) {
    const request = await fetch(`${url}${end}`);
    const response = await request.json();
    response.forEach(post => {
        divRoot.innerHTML += `<span>ID: ${post.id}</span><br /><span>Ttle: ${post.title}</span><br/><span>Body: ${post.body}</span><br/>`
    })
}

getPosts(baseURL,endpoint);