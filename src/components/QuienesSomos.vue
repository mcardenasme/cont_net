<template lang="pug">
.flex.py-8.scroll-mt-20.scroll-smooth(class="bg-[#26303A]")(id="quienessomos")
    .h-auto(class="w-1/2 bg-[#164B59]")
    .flex.items-center(class="w-1/2")
        .flex.grid.grid-col.px-14
            .font-normal.text-white.uppercase.leading-snug(class="text-[40px] w-1/2") Quiénes 
            .font-semibold.text-white.uppercase.leading-snug(class="text-[40px] w-1/2") somos ?
            ul.list-disc.text-sm.font-light.text-white.text-justify.leading-7.pt-8
                li Profesionales especializados en aumentar los ingresos económicos de las empresas a través de procesos de selección y clientes estratégicos.
                br
                li Identificamos las empresas a las cuales asesoramos y encontramos procesos, donde su empresa podría aumentar las utilidades contratando con empresas públicas y privadas.
        .rounded-l-lg.w-8.h-32.cursor-pointer(class="bg-[#E6E6E6]" @click="suggestions")
            .font-light.text-sm.text-black.mt-20(class="rotate-[270deg]") Sugerencias

.flex.place-items-center.rounded.lg.bg-white(class="w-[40%] h-[20%]" v-if="isActive2")
    .font-semibold.text-base.text-black.text-center Nos gustaría conocer tu opinión

</template>


<script>
export default {
    data() {
        return{
            isActive2: false,
        }      
    },
    methods: {
    suggestions () {
        console.log('clickeado')
        this.isActive2 = true
    },
    }
  }
</script>