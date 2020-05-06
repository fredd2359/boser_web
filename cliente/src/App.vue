<template>
  <div id="app">
    <v-app>
      <v-content>
        <!-- TODO: Implementar Bara de navegacion -->
        <!-- <page-header /> -->
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
  margin-top: 60px;
}
</style>
