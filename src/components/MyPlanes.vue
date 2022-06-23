<template lang="pug">
.flex.py-8.px-20.scroll-mt-20.scroll-smooth.justify-between(class="bg-[#FAFAFA]")(id="planes")
    .flex.grid.grid-col(class="w-[30%]")
        .rounded-t-lg.bg-white.flex.grid.grid-col.gap-6.p-6.justify-items-center.drop-shadow-lg
            .text-4xl.font-light.text-center.text-black.uppercase.leading-snug Básico
            <svg class="w-14" fill="none" stroke="#D8D8D8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
            .flex
                .text-5xl.font-normal.text-center.text-black.uppercase.leading-snug $ 65.000
                .text-base.font-normal.text-center.text-black.leading-snug.mt-8 / Hora
            .text-base.font-light.text-center.text-black.leading-snug Cantidad de horas mínimas: 
                p 1 hora
        .justify-items-center.p-6(class="bg-[#26303A]")
            .text-xl.font-normal.text-center.text-white.uppercase.leading-snug TEMAS DE COMPLEJIDAD BÁSICA
        .justify-items-center.px-2.py-6(class="bg-[#E6E6E6] text-[#6E6E6E]")
            .text-sm.font-light.text-center.leading-snug La idea es desarrollar temas de complejidad básica, cuya intensidad horaria se presten para el desarrollo del tema, tales como:
        .justify-items-center.px-2.py-6(class="bg-[#F2F2F2] text-[#6E6E6E]")
            .text-sm.font-light.text-center.leading-snug Introducción a la Contratación Estatal
        .justify-items-center.px-2.py-6(class="bg-[#E6E6E6] text-[#6E6E6E]")
            .text-sm.font-light.text-center.leading-snug Introducción a las plataformas de Contratación Estatal
        .rounded-b-lg.justify-items-center.p-6.bg-white.drop-shadow-lg
            .rounded-lg.cursor-pointer.w-32.p-2.text-white.ml-20(class="bg-[#406A80] hover:bg-white hover:text-black")
                .text-sm.font-light.text-center.leading-snug.uppercase PAGA AQUÍ

    .flex.grid.grid-col(class="w-[30%]")
        .rounded-t-lg.bg-white.flex.grid.grid-col.gap-6.p-6.justify-items-center.drop-shadow-lg
            <svg class="w-14" fill="none" stroke="#D8D8D8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            .text-4xl.font-light.text-center.text-black.uppercase.leading-snug Intermedio
            .flex
                .text-5xl.font-normal.text-center.text-black.uppercase.leading-snug $ 60.000
                .text-base.font-normal.text-center.text-black.leading-snug.mt-8 / Hora
            .text-base.font-light.text-center.text-black.leading-snug Cantidad de horas mínimas: 
                p 3 horas
        .justify-items-center.p-6(class="bg-[#26303A]")
            .text-xl.font-normal.text-center.text-white.uppercase.leading-snug TEMAS DE COMPLEJIDAD INTERMEDIA
        .justify-items-center.px-2.py-6(class="bg-[#E6E6E6] text-[#6E6E6E]")
            .text-sm.font-light.text-center.leading-snug La idea es desarrollar temas de complejidad intermedia, cuya intensidad horaria se presten para el desarrollo del tema, tales como:
        .justify-items-center.px-2.py-6(class="bg-[#F2F2F2] text-[#6E6E6E]")
            .text-sm.font-light.text-center.leading-snug Inscripción en SECOP II
        .justify-items-center.px-2.py-6(class="bg-[#E6E6E6] text-[#6E6E6E]")
            .text-sm.font-light.text-center.leading-snug Inscripción, renovación o Actualización del RUP
        .justify-items-center.px-2.py-6(class="bg-[#F2F2F2] text-[#6E6E6E]")
            .text-sm.font-light.text-center.leading-snug Busqueda efectiva de procesos
        .justify-items-center.px-2.py-6(class="bg-[#E6E6E6] text-[#6E6E6E]")
            .text-sm.font-light.text-center.leading-snug Como revisar un proceso de contratación
        .rounded-b-lg.justify-items-center.p-6.bg-white.drop-shadow-lg
            .rounded-lg.cursor-pointer.w-32.p-2.text-white.ml-20(class="bg-[#406A80] hover:bg-white hover:text-black")
                .text-sm.font-light.text-center.leading-snug.uppercase PAGA AQUÍ

    .flex.grid.grid-col(class="w-[30%]")
        .rounded-t-lg.bg-white.flex.grid.grid-col.gap-6.p-6.justify-items-center.drop-shadow-lg
            .text-4xl.font-light.text-center.text-black.uppercase.leading-snug Avanzado
            <svg class="w-14" fill="none" stroke="#D8D8D8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            .flex
                .text-5xl.font-normal.text-center.text-black.uppercase.leading-snug $ 55.000
                .text-base.font-normal.text-center.text-black.leading-snug.mt-8 / Hora
            .text-base.font-light.text-center.text-black.leading-snug Cantidad de horas mínimas: 
                p 5 horas
        .justify-items-center.p-6(class="bg-[#26303A]")
            .text-xl.font-normal.text-center.text-white.uppercase.leading-snug TEMAS DE COMPLEJIDAD AVANZADA
        .justify-items-center.px-2.py-6(class="bg-[#E6E6E6] text-[#6E6E6E]")
            .text-sm.font-light.text-center.leading-snug La idea es desarrollar temas de complejidad avanzada, cuya intensidad horaria se presten para el desarrollo del tema, tales como:
        .justify-items-center.px-2.py-6(class="bg-[#F2F2F2] text-[#6E6E6E]")
            .text-sm.font-light.text-center.leading-snug Armado de propuesta
        .justify-items-center.px-2.py-6(class="bg-[#E6E6E6] text-[#6E6E6E]")
            .text-sm.font-light.text-center.leading-snug Importancia de las observaciones en el proceso de Contratación
        .rounded-b-lg.justify-items-center.p-6.bg-white.drop-shadow-lg
            .rounded-lg.cursor-pointer.w-32.p-2.text-white.ml-20(class="bg-[#406A80] hover:bg-white hover:text-black")
                .text-sm.font-light.text-center.leading-snug.uppercase PAGA AQUÍ


</template>