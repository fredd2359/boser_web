<template>
  <div id="app">
    <v-app>
      <v-content>
        <!-- <page-header /> -->
        <v-img class="responsive" src="http://localhost:5000/imagenes/pportada.jpg">
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
        <!-- Sección del cuerpo -->
        <v-container class="d-inline-block pa-2">
          <router-view/>
        </v-container>
      </v-content>
    </v-app>
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.responsive {
  width: 100%;
  height: auto;
}
.img1{
    width: 130px;
    position: absolute;
    margin-top: -25px;
    margin-left: 36px;
}
</style>
