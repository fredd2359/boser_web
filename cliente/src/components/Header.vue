<template>
    <div>
        <!-- <page-header /> -->
        <v-img class="responsive" src="http://localhost:5000/imagenes/Pportada.jpg">
        </v-img>
        <v-toolbar
          dark
          accent-4
          dense
        >
          <v-app-bar-nav-icon></v-app-bar-nav-icon>

          <v-toolbar-title>
            <img src="http://localhost:5000/imagenes/logoblanco.png" class="img1" alt="">
          </v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn>
            <span>
              Hola
            </span>
            <!-- <v-icon>mdi-magnify</v-icon> -->
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-toolbar>
    </div>
</template>
<script>
export default {
//   name: 'header'
}
</script>
<style>

</style>
