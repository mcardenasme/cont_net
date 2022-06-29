<template lang="pug">
.min-h-screen.tracking-wider.leading-6.font-poppins.scroll-smooth 
    NavBar
    BotonSugerencias
    PopUp
    MySlider
    //- InfoOne
    //- InfoTwo
    //-InfoThree(id="contnet")
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
    },

}
</script>
