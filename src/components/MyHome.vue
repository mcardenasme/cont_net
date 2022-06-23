<template lang="pug">
.min-h-screen.min-w-screen.tracking-wider.leading-6.font-poppins.scroll-smooth(class="bg-[#31393C]")
    NavBar
    PopUp
    //- InfoOne
    //- InfoTwo
    InfoThree(id="contnet")
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
    },

}
</script>
