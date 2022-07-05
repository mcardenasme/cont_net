<template lang="pug">
.flex.fixed.place-content-center.pt-28.w-full
    .flex.grid.grid-col.gap-6.rounded-lg.bg-white.p-4(class="w-[40%]" v-if="isActiveData")
        <svg @click="hide" class="w-6 h-6 justify-self-end cursor-pointer" fill="none" stroke="#A4A4A4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        input.text-base.font-normal.border-2.p-2(type="text" id="name" placeholder="Nombre")
        input.text-base.font-normal.border-2.p-2(type="text" id="name" placeholder="Teléfono")
        input.text-base.font-normal.border-2.p-2(type="text" id="name" placeholder="Horario en que desee ser contactado")
        .rounded-lg.p-3.mb-3(class="bg-[#26303A]") 
            .text-base.font-normal.text-center.leading-snug.text-white.cursor-pointer(@click="hide" ) Enviar
      
</template>

<script>

export default {
    data() {
        return{
            isActiveData: true,
        }      
    },
    methods: {
    hide () {
        this.isActiveData = false
    },
    }
  }
</script>