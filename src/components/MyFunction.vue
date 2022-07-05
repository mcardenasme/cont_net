<template lang="pug">
.flex.grid.grid-col.gap-4.font-poppins.p-8
    .text-lg.font-normal.text-black {{data}}
    .rounded.bg-gray-200.p-2.w-28.text-gray-600.cursor-pointer(@click="getData") Get data
    .rounded.bg-gray-200.p-2.w-28.text-gray-600.cursor-pointer(@click="redirectApp") Go back
</template>

<script>
import axios from "axios";
export default{
    data() {
        return {
            data: null,
        }
    },
    methods: {
        async getData() {
            await axios.get('https://pokeapi.co/api/v2/pokemon/ditto').then(response => {
                this.data = response.data
            })
        },
        redirectApp() {
            this.$router.push('/')
        },
    }
}
</script>