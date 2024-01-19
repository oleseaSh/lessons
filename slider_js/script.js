let offsetLeft = 0;
const sliderContent = document.querySelector('.slider-content');
const nextButton = document.querySelector('#next');
const prevButton = document.querySelector('#prev');

nextButton.addEventListener('click', () => {
     offsetLeft += 256; // offsetLeft = offsetLeft + 256
    if(offsetLeft > 768) {
        offsetLeft = 0;
    }
    sliderContent.style.left = -offsetLeft + 'px';
});

prevButton.addEventListener('click', ()=> {
    offsetLeft -= 256;
    if(offsetLeft < 0) {
        offsetLeft = 768;
    }
    sliderContent.style.left = -offsetLeft + 'px';
})