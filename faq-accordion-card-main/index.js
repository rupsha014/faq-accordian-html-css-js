const acccard = document.querySelector(".accordian-card")
const answ1 = document.getElementsByClassName("ans1")[0];
const answ2 = document.getElementsByClassName("ans2")[0];
const answ3 = document.getElementsByClassName("ans3")[0];
const answ4 = document.getElementsByClassName("ans4")[0];
const answ5 = document.getElementsByClassName("ans5")[0];
const pointer1 = document.getElementsByClassName("point")[0];
const pointer2 = document.getElementsByClassName("point")[1];
const pointer3 = document.getElementsByClassName("point")[2];
const pointer4 = document.getElementsByClassName("point")[3];
const pointer5 = document.getElementsByClassName("point")[4];
const pointerup1 = document.getElementsByClassName("point-up")[0];
const pointerup2 = document.getElementsByClassName("point-up")[1];
const pointerup3 = document.getElementsByClassName("point-up")[2];
const pointerup4 = document.getElementsByClassName("point-up")[3];
const pointerup5 = document.getElementsByClassName("point-up")[4];

pointer1.addEventListener("click" ,() => {
    document.getElementsByClassName('ans1')[0].classList.remove('hidden');  
    pointer1.classList.add('hidden');
    pointerup1.classList.remove('hidden')
});
pointerup1.addEventListener("click" ,() => {
    document.getElementsByClassName('ans1')[0].classList.add('hidden');  
    pointer1.classList.remove('hidden');
    pointerup1.classList.add('hidden')
});

pointer2.addEventListener("click" ,() => {
    document.getElementsByClassName('ans2')[0].classList.remove('hidden');  
    pointer2.classList.add('hidden');
    pointerup2.classList.remove('hidden')
});
pointerup2.addEventListener("click" ,() => {
    document.getElementsByClassName('ans2')[0].classList.add('hidden');  
    pointer2.classList.remove('hidden');
    pointerup2.classList.add('hidden')
});

pointer3.addEventListener("click" ,() => {
    document.getElementsByClassName('ans3')[0].classList.remove('hidden');   
    pointer3.classList.add('hidden');
    pointerup3.classList.remove('hidden')
});
pointerup3.addEventListener("click" ,() => {
    document.getElementsByClassName('ans3')[0].classList.add('hidden');  
    pointer3.classList.remove('hidden');
    pointerup3.classList.add('hidden')
});

pointer4.addEventListener("click" ,() => {
    document.getElementsByClassName('ans4')[0].classList.remove('hidden'); 
    pointer4.classList.add('hidden');
    pointerup4.classList.remove('hidden')
});
pointerup4.addEventListener("click" ,() => {
    document.getElementsByClassName('ans4')[0].classList.add('hidden');  
    pointer4.classList.remove('hidden');
    pointerup4.classList.add('hidden')
});

pointer5.addEventListener("click" ,() => {
    document.getElementsByClassName('ans5')[0].classList.remove('hidden');
    pointer5.classList.add('hidden');
    pointerup5.classList.remove('hidden')
});
pointerup5.addEventListener("click" ,() => {
    document.getElementsByClassName('ans5')[0].classList.add('hidden');  
    pointer5.classList.remove('hidden');
    pointerup5.classList.add('hidden')
});



