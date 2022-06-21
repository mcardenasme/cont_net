<template lang="pug">
.min-h-screen.min-w-screen.tracking-wider.leading-6.font-poppins.scroll-smooth(class="bg-[#31393C]")
  NavBar
  //-.font-normal.text-lg.text-white.cursor-pointer.p-20(@click="redirect") Hola
  //-InfoOne
  //-InfoTwo
  InfoThree(id="contnet")
  MyInicio
  QuienesSomos
  ModeloOp
  MyPlanes
  MyContacto
  


</template>

<script>
import NavBar from "./components/NavBar.vue" 
import InfoOne from "./components/InfoOne.vue" 
import InfoTwo from "./components/InfoTwo.vue" 
import InfoThree from "./components/InfoThree.vue" 
import EquipoTrabajo from "./components/EquipoTrabajo.vue"
import QuienesSomos from "./components/QuienesSomos.vue"
import MyInicio from "./components/MyInicio.vue"
import ModeloOp from "./components/ModeloOp.vue"
import MyPlanes from "./components/MyPlanes.vue"
import MyContacto from "./components/MyContacto.vue"

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
    },
}
</script>