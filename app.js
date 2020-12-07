// open and close nav element

const selectElement = (element) => document.querySelector(element);

selectElement('.menu-icons').addEventListener('click',function () {
    selectElement('nav').classList.toggle('active');
});

//on scroll of window effects

window.addEventListener('scroll', function(){
    if(this.scrollY > 20){
        selectElement('header').classList.toggle('onscroll');
    } else{
        selectElement('header').classList.remove('onscroll');
    }
});