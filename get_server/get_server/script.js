const outDiv = document.querySelector('#root');
const BASE_URL = 'https://jsonplaceholder.typicode.com';
const postsEndpoint = '/posts';



const getAllPosts = async () => {

   const request = await fetch(`${BASE_URL}${postsEndpoint}`)
    const response = await request.json();
       const data = await response;
       data.forEach((item) => {
           outDiv.innerHTML += `
              <div>
                <ul>
                  <li>Title: ${item.title}</li>
                  <li><button data-id="${item.id}">More</button></li>
                </ul>
              </div>
           `;

           const arrayButtons = document.querySelectorAll('button');
           arrayButtons.forEach((button) => {
               button.addEventListener('click', (e) => {
                   let id = e.target.dataset.id;
                   document.location= `post.html?id=${id}`;
               })
           })
       })

};

getAllPosts();

