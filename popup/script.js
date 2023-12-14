const showButton = document.querySelector('#show');
const popup = document.querySelector('#popup');

// const popupWrapper = document.querySelector('#wrapper');
//
// showButton.addEventListener('click', function() {
//     if(popupWrapper.style.display === 'none') {
//         popupWrapper.style.display = 'block';
//     } else {
//         popupWrapper.style.display = 'none';
//     }
// })

showButton.addEventListener('click', ()=> {
    popup.hidden = false;

})