const calc =document.querySelector('.calculator');
const calcContainer = document.querySelector('.container');


const openBtn =document.querySelector('.openCalc');
console.log(openBtn);

openBtn.addEventListener('click', ()=>{
    
    calcContainer.classList.add('active');
});

const closeIcon = document.querySelector('.icon-close');

closeIcon.addEventListener('click', ()=>{
    calcContainer.classList.remove('active');
});
