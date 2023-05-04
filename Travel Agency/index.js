'use strict'









// modal window

const modal1 = document.querySelector('.airplane-details');
const modal2 = document.querySelector('.amazing-tour-details');
const modal3 = document.querySelector('.cruise-details');
const modal4 = document.querySelector('.hotel-details');


const overlay = document.querySelector('.overlay');



const closebtn1 = document.querySelector('.close-1');
const closebtn2 = document.querySelector('.close-2');
const closebtn3 = document.querySelector('.close-3');
const closebtn4 = document.querySelector('.close-4');

const btn1 = document.querySelector('.button-1');
const btn2 = document.querySelector('.button-2');
const btn3 = document.querySelector('.button-3');
const btn4 = document.querySelector('.button-4');





const openmodal1 = function(){
    modal1.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
const openmodal2 = function(){
    modal2.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
const openmodal3 = function(){
    modal3.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
const openmodal4 = function(){
    modal4.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closemodal1 = function(){
    modal1.classList.add('hidden');
    overlay.classList.add('hidden');
}
const closemodal2 = function(){
     modal2.classList.add('hidden');
     overlay.classList.add('hidden');
 }
 const closemodal3 = function(){
     modal3.classList.add('hidden');
     overlay.classList.add('hidden');
 }
 const closemodal4 = function(){
     modal4.classList.add('hidden');
     overlay.classList.add('hidden');
 }


 closebtn1.addEventListener('click',closemodal1)
 closebtn2.addEventListener('click',closemodal2)
 closebtn3.addEventListener('click',closemodal3)
 closebtn4.addEventListener('click',closemodal4)
 overlay.addEventListener('click',closemodal1)
 overlay.addEventListener('click',closemodal2)
 overlay.addEventListener('click',closemodal3)
 overlay.addEventListener('click',closemodal4)


 btn1.addEventListener('click',openmodal1);
 btn2.addEventListener('click',openmodal2);
 btn3.addEventListener('click',openmodal3);
 btn4.addEventListener('click',openmodal4);





// const homeSection = document.querySelector('.home-detail');

// const observer =new IntersectionObserver((entries)=>{
//     const ent = entries[0];
//     console.log(ent);
//     ent.isIntersecting===false ? 
// },{
//     root:null,
//     rootMargin:'',
//     threshold:'',
// })
// observer.observe(homeSection);

