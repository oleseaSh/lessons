const pageHref = window.location.href;
let splitItem = pageHref.split('?id=');
const BASE_URL = 'https://jsonplaceholder.typicode.com';
const postsEndpoint = '/posts';
const outDiv = document.querySelector('#root');
const getPostById = async () => {
    const request = await fetch(`${BASE_URL}${postsEndpoint}/${splitItem[1]}`);
    const response = await request.json();
    const data = await response;

    outDiv.innerHTML += `
         <div>
                <ul>
                  <li>Title: ${data.title}</li>
                  <li>Description: ${data.body}</li>
                  <li><button onclick="document.location='index.html'">Back</button></li>
                </ul>
              </div>
    `
}

getPostById();