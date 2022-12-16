let img = document.querySelectorAll('.img')
let img1 = document.querySelector('#img1')
let img2 = document.querySelector('#img2')
let img3 = document.querySelector('#img3')
let smallimg1 = document.querySelector('#smallimg1')
let smallimg2 = document.querySelector('#smallimg2')
let smallimg3 = document.querySelector('#smallimg3')

if (smallimg2.addEventListener('click', function() {
    img.forEach(Element => {
        Element.classList.remove('active')
    });
    img2.classList.add('active')
})); else if (smallimg3.addEventListener('click', function() {
    img.forEach(Element => {
        Element.classList.remove('active')
    });
    img3.classList.add('active')
})); else if (smallimg1.addEventListener('click', function() {
    img.forEach(Element => {
        Element.classList.remove('active')
    });
    img1.classList.add('active')
}));
