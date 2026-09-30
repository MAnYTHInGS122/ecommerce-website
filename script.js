const close = document.getElementById('close');
const bar = document.getElementById('bar');
const navbar = document.getElementById('navbar');


if(bar){
    bar.addEventListener('click', ()=>{
        navbar.style.right = '0px';
    })
}
if(close){
    close.addEventListener('click', ()=>{
        navbar.style.right= '-200px';
    })
}