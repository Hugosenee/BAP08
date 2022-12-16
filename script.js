// aparaitre div scroll

const timing = .20
const option = {
    root: null,
    rootMargin: '0px',
    threshold: timing
};

const HandleIntersect = function (entries , observer) {
    entries.forEach((entry) => {
        if(entry.intersectionRatio > timing){
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        }
    })
};

const observer = new IntersectionObserver(HandleIntersect, option);
document.querySelectorAll('.reveal').forEach(function (reveal) {
    observer.observe(reveal)
});



let slides = document.querySelectorAll('.slider');
let btnnext = document.querySelector('#next')
let btnprevious = document.querySelector('#previous')
let i = 0


if (btnnext.addEventListener('click', function() {

    slides[i].classList.remove('active')
    if (i < 2 ){
        i++
    }   else {
        i = 0
    }
    slides[i].classList.add('active')


}));

if (btnprevious.addEventListener('click', function() {

    slides[i].classList.remove('active')
    if (i > 0 ){
        i--
    }   else {
        i = 2
    }
    slides[i].classList.add('active')


}));

let cards = document.querySelectorAll('.cards');
let btnnext2 = document.querySelector('#next2')
let btnprevious2 = document.querySelector('#previous2')
let p = 0

if (btnnext2.addEventListener('click', function() {

    cards[p].classList.remove('active')
    if (p < 2 ){
        p++
    }   else {
        p = 0
    }
    cards[p].classList.add('active')
}));



if (btnprevious2.addEventListener('click', function() {

    cards[p].classList.remove('active')
    if (p > 0 ){
        p--
    }   else {
        p = 2
    }
    cards[p].classList.add('active')


}));

