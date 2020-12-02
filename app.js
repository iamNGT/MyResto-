// open and close nav element

const selectElement = (element) => document.querySelector(element);

selectElement('.menu-icons').addEventListener('click',function () {
    selectElement('nav').classList.toggle('active');
});