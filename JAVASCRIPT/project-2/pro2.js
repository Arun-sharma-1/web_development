'use strict'
const model=document.querySelector('.modal')
const overlay=document.querySelector('.overlay')
const btnclosemodel=document.querySelector('.close-modal')
let btnopenmodel=document.querySelectorAll('.show-modal');

// console.log(btnopenmodel)
const openmodel=function()
{
    console.log('clicked ')
    model.classList.remove('hidden')
    // overlay.classList.remove('hidden')
}

const closemodel = function()
{
    model.classList.add('hidden')
}


for (let i=0; i < btnopenmodel.length ; i++)
{
    // console.log(btnopenmodel[i].textContent)
    btnopenmodel[i].addEventListener('click',openmodel)
 

} 

btnclosemodel.addEventListener('click',closemodel)
document.addEventListener('keydown',function (e)
{
    console.log(e.key);


if(e.key==='Escape' && ! model.classList.contains('hidden') )
     closemodel();
    

});