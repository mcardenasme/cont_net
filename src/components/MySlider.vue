<template lang="pug">
.flex(id="slider" class=" -ml-[100%]")
    .w-full.h-32( class="bg-[#DF01A5]")       
    .w-full.h-32( class="slider_section bg-[#01DFD7]")
    //- .w-full.h-32( class="slider_section bg-[#FFFF00]")
    <svg id="btn_left" class="absolute w-6 h-6 ml-[5%] self-center cursor-pointer" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
    <svg id="btn_right" class="absolute w-6 h-6 ml-[95%] self-center cursor-pointer" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>


</template>
<!-- 
<script>
const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider_section");
//let sliderSectionLast = 
const btnLeft = document.querySelector("#btn_left");
const btnRight = document.querySelector("#btn_right");
slider.insertAdjacentElement('afterbegin', sliderSection[sliderSection.lenght -1]);
function Next() {
    let sliderSectionFirst = document.querySelectorAll(".slider_section")[0];
    slider.getElementsByClassName.marginLeft = "-200%";
    slider.getElementsByClassName.transition = "all 0.5s"
    setTomeout(function(){
        slider.getElementsByClassName.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.getElementsByClassName.marginLeft = "-100%";
    }, 500);
};

function Prev() {
    let sliderSection = document.querySelectorAll(".slider_section");
    let sliderSectionLast = sliderSection[sliderSection.lenght -1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s"
    setTomeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
};

btnRight.addEventListener('click', function(){
    Next();
})
btnLeft.addEventListener('click', function(){
    Prev();
})
</script> -->