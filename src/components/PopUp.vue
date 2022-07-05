<template lang="pug">
.flex.fixed.place-content-center.pt-20.w-full
    .flex.grid.grid-col.gap-6.rounded-lg.bg-white.p-4.shadow-lg(class="w-[40%] h-[50%]" v-if="isActive")
        <svg @click="hide" class="w-6 h-6 justify-self-end cursor-pointer" fill="none" stroke="#A4A4A4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        .text-base.font-semibold.text-center.leading-snug(class="text-[#26303A]") Agenda una reunión con una asesor de Contractual Networks
        .text-base.font-normal.text-center.leading-snug(class="text-[#26303A]") es 100% gratis 
        .rounded-lg.py-3.mb-3.flex.place-content-center.cursor-pointer(class="bg-[#26303A]" @click="reservar")
            .text-base.font-normal.leading-snug.text-white Reservar mi espacio

    .flex.grid.grid-col.gap-6.rounded-lg.bg-white.p-6(class="w-[40%] h-[50%]" v-if="isActiveData")
        <svg @click="hide" class="w-6 h-6 justify-self-end cursor-pointer" fill="none" stroke="#A4A4A4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        input.text-base.font-normal.border-2.p-2(type="text" id="name" placeholder="Nombre")
        input.text-base.font-normal.border-2.p-2(type="text" id="name" placeholder="Teléfono")
        input.text-base.font-normal.border-2.p-2(type="text" id="name" placeholder="Horario en que desee ser contactado")
        .rounded-lg.p-3.mb-3(class="bg-[#26303A]") 
            .text-base.font-normal.text-center.leading-snug.text-white.cursor-pointer(@click="enviar" ) Enviar

</template>

<script>

export default {
    data() {
        return{
            isActive: true,
            isActiveData: false,
        }      
    },
    methods: {
    hide () {
        this.isActive = false
        this.isActiveData = false
    },
    reservar (){
        this.isActive = false
        this.isActiveData = true
    },
    enviar (){
        this.isActive = false
        this.isActiveData = false
    },
    // redirectPopup () {
    //     this.$router.push('/data/')
    // },
    }
  }
</script>