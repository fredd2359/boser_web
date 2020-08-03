<template>
    <div>
        <!-- <page-header /> -->
        <v-img class="responsive" :src='servidor +"/imagenes/pportada.jpg"'>
        <!-- <img class="responsive" :src='servidor +"/imagenes/pportada.jpg"'> -->
        </v-img>
        <v-toolbar
          dark
          accent-4
          dense
        >
          <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
          <v-toolbar-title>
            <img :src='servidor +"/imagenes/logoblanco.png"' class="img1" alt="">
          </v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn
            v-if="$store.state.isUserLoggedIn"
            @click="logout"
          >
            <span>
              Cerrar Sesion
            </span>
            <!-- <v-icon>mdi-magnify</v-icon> -->
          </v-btn>
          <!-- TODO: implementar barra que se encoge -->
          <!-- <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn> -->
        </v-toolbar>
    </div>
</template>
<script>
export default {
//   name: 'header'
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'Login'
      })
    }
  },
  data () {
    return {
      servidor: process.env.VUE_APP_SERVER
    }
  }
}
</script>
<style>

</style>
