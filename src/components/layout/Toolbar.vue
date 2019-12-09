<template>
  <v-card
    color="grey lighten-4"
    flat
    height="200px"
    tile
  >

    <v-toolbar
            fixed
            app
            clipped-right
    >

        <v-toolbar-title>
            <router-link to="/" tag="span" style="cursor: pointer">Overlook</router-link>
        </v-toolbar-title>
    </v-toolbar>
  </v-card> 
</template>

<script>
    export default {
        name: "toolbar"
    }
</script>

<style scoped>
</style>
