<template lang="pug">
.flex.place-content-center.pt-40.fixed.w-full
    .flex.grid.grid-col.gap-6.rounded-lg.bg-white.p-4(class="w-[40%]" v-if="isActive")
        <svg class="w-6 h-6 justify-self-end cursor-pointer" @click="hide" fill="none" stroke="#A4A4A4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        .text-base.font-semibold.text-center.leading-snug(class="text-[#26303A]") Agenda una reunión con una asesor de Contractual Networks
        .text-base.font-normal.text-center.leading-snug(class="text-[#26303A]") es 100% gratis 
        a.rounded-lg.py-3.mb-3.flex.place-content-center.cursor-pointer(class="bg-[#26303A]" @click="redirectPopup")
            .text-base.font-normal.leading-snug.text-white Reservar mi espacio
        
</template>

<script>

export default {
    data() {
        return{
            isActive: true,
        }      
    },
    methods: {
    hide () {
        this.isActive = false
    },
    redirectPopup () {
        this.$router.push('/data/')
    },
    }
  }
</script>