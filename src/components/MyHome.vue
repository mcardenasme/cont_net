<template lang="pug">
.min-w-screen.min-h-screen.tracking-wider.leading-6.font-poppins.scroll-smooth 
    NavBar
    WhatsappButton
    BotonSugerencias
    PopUp
    MySlider
    .rounded.bg-gray-200.p-2.w-28.text-gray-600.cursor-pointer(@click="redirectPopup") Redirect
    MyDiagnostico
    MyInicio
    QuienesSomos
    ModeloOp
    MyPlanes
    MyContacto

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
import WhatsappButton from "./WhatsappButton.vue"

export default{
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
        WhatsappButton,
    },
    methods: {
        redirectPopup () {
        this.$router.push('/function/')
    },
    }

}
</script>
