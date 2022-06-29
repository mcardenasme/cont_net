<template lang="pug">
.min-h-screen.min-w-screen.tracking-wider.leading-6.font-poppins
    NavBar
    BotonSugerencias
    PopUp
    MySlider
    MyDiagnostico
    MyInicio
    QuienesSomos
    ModeloOp
    MyPlanes
    MyContacto
    .w-full.bg-white.opacity-30.fixed
    .flex.fixed.place-content-center.pt-40.w-full
        .flex.grid.grid-col.gap-6.rounded-lg.bg-white.p-4(class="w-[40%]")
            <svg @click="redirectApp" class="w-6 h-6 justify-self-end cursor-pointer" fill="none" stroke="#A4A4A4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            input.text-base.font-normal.border-2.p-2(type="text" id="name" placeholder="Nombre")
            input.text-base.font-normal.border-2.p-2(type="text" id="name" placeholder="Teléfono")
            input.text-base.font-normal.border-2.p-2(type="text" id="name" placeholder="Horario en que desee ser contactado")
            .rounded-lg.p-3.mb-3(class="bg-[#26303A]") 
                .text-base.font-normal.text-center.leading-snug.text-white.cursor-pointer(@click="redirectApp" ) Enviar
      
</template>

<script>
import NavBar from "./NavBar.vue" 
import InfoOne from "./InfoOne.vue" 
import InfoTwo from "./InfoTwo.vue" 
import InfoThree from "./InfoThree.vue" 
import EquipoTrabajo from "./EquipoTrabajo.vue"
import QuienesSomos from "./QuienesSomos.vue"
import MyInicio from "./MyInicio.vue"
import ModeloOp from "./ModeloOp.vue"
import MyPlanes from "./MyPlanes.vue"
import MyContacto from "./MyContacto.vue"
import PopUp from "./PopUp.vue"
import MyDiagnostico from "./MyDiagnostico.vue"
import BotonSugerencias from "./BotonSugerencias.vue"
import MySlider from "./MySlider.vue"

export default {
    data() {
        return{
            
        }      
    },
    components:{
        NavBar,
        InfoOne,
        InfoTwo,
        InfoThree,
        EquipoTrabajo,
        QuienesSomos,
        MyInicio,
        ModeloOp,
        MyContacto,
        MyPlanes,
        PopUp,
        MyDiagnostico,
        BotonSugerencias,
        MySlider,
    },
    methods: {
    redirectApp () {
        this.$router.push('/')
    },
    }
  }
</script>