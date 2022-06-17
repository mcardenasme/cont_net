<template lang="pug">
.flex.grid.grid-col.gap-2.bg-white.py-8
    .text-lg.font-normal.text-center.leading-7.text-black Tu puedes contar con nosotros
    .font-light.text-center.text-black.uppercase.leading-snug(class="text-[40px]")
      p NUESTRO EQUIPO DE
      p TRABAJO
    .text-sm.font-light.text-center.leading-7(class="text-[#6E6E6E]") 
      p Está compuesto por colaboradores de todas las áreas especializados en Contratatación Estatal, 
      p esto con el fin de brindar una asesoría enfocada a cada actividad económica de nuestros aliados, 
      p siempre con el objetivo de ganar el proceso de selección.
    .px-28.py-10
      .flex.justify-between(v-for="person in team" :nombre="person.nombre" :puesto="person.puesto" :especialidad="person.especialidad" :especialidad2="person.especialidad2")
        .flex.grid.grid-col.font-montserrat.cursor-pointer.content-start
            <svg class="w-16 place-self-center hover:scale-110 hover:ease-in-out" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
            .text-lg.font-normal.text-center.uppercase.pt-4.text-black(class=" hover:text-[#3B6D7F] hover:ease-in-out") {{nombre}}
            .text-base.font-light.text-center(class="text-[#2A333A]") 
                p {{puesto}}
                p {{especialidad}}
                p {{especialidad2}}
</template>

<script>
import team from './team.json'
//import MyTeam from "./components/MyTeam.vue"

export default{
    props:{
        nombre: String,
        puesto: String,
        especialidad: String,
        especialidad2: String
    },
    // components:{
    //     MyTeam,
    // },
    data () {
      return{
          team:team,
      }
    },
}
</script>