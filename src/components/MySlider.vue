<template lang="pug">
.min-h-screen.min-w-screen
    .flex.grid.grid-col.gap-7.font-poppins.font-light.text-white.text-center.uppercase.w-full(v-if="slide1" class="text-[42px] py-[20%] bg-[#31393C]")
        p contrata con el estado 
        p aumenta tus ventas 
        .font-normal |crece con nosotros|
        .flex.gap-4.justify-center.pt-32
            <svg xmlns="http://www.w3.org/2000/svg" width="12" fill="white" class="bi bi-circle-fill cursor-pointer" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8"/></svg>
            <svg @click="goToSlide2" xmlns="http://www.w3.org/2000/svg" width="12" fill="white" class="bi bi-circle cursor-pointer" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/></svg>
            <svg @click="goToSlide3" xmlns="http://www.w3.org/2000/svg" width="12" fill="white" class="bi bi-circle cursor-pointer" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/></svg>

    .flex.grid.grid-col.gap-7.font-poppins.font-light.text-white.text-right.justify-end.uppercase.w-full.pr-44(v-if="slide2" class="text-[42px] py-[20%] bg-[#31393C]")
        p conviértete en
        .font-normal proveedor
        p del estado
        .flex.gap-2.justify-end
            .rounded.py-2.px-5.font-normal.cursor-pointer(class="bg-[#3F6A83] text-[10px] hover:bg-[#2A333A] hover:cubic-bezier(0.42, 0, 0.58, 1)") nuestros servicios
            .rounded.py-2.px-5.font-normal.cursor-pointer(class="bg-[#3F6A83] text-[10px] hover:bg-[#2A333A]") conoce más
        <svg @click="goToSlide1" xmlns="http://www.w3.org/2000/svg" width="12" fill="white" class="bi bi-circle cursor-pointer" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" fill="white" class="bi bi-circle-fill cursor-pointer" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8"/></svg>
        <svg @click="goToSlide3" xmlns="http://www.w3.org/2000/svg" width="12" fill="white" class="bi bi-circle cursor-pointer" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/></svg>


</template>

<script>
export default {
    data() {
        return{
            slide1: true,
            slide2: false,
            slide3: false,
        }      
    },
    methods: {
        goToSlide1 () {
            this.slide1 = true
            this.slide2 = false
            this.slide3 = false
        },
        goToSlide2 () {
            this.slide1 = false
            this.slide2 = true
            this.slide3 = false
        },
        goToSlide3 () {
            this.slide1 = false
            this.slide2 = false
            this.slide3 = true
        },

    },
}
</script>

<!-- <script>
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