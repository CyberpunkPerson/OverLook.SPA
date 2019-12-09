<template>
    <v-app>


        <toolbar></toolbar>
        <v-content>
            <router-view></router-view>
        </v-content>

      
        <v-footer></v-footer>
    </v-app>
</template>

<script>
    import Toolbar from '@layout/Toolbar'
    import Navigation from '@layout/Navigation'

    export default {
        name: "App",
        components: {Toolbar, Navigation}
    }
</script>

<style scoped>
</style>