<template>
  <!-- <div> -->
  <v-card>
    <!-- <page-header /> -->
    <v-img class="responsive" :src='servidor +"/imagenes/pportada.jpg"'>
    <!-- <img class="responsive" :src='servidor +"/imagenes/pportada.jpg"'> -->
    </v-img>
    <v-app-bar
      dark
      accent-4
      dense
    >
      <v-toolbar-title>
        <img
          :src='servidor +"/imagenes/logoblanco.png"'
          class="img1 pointer"
          alt=""
          @click="home"
        >
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- <v-btn
        v-if="$store.state.isUserLoggedIn"
        @click="logout"
      >
          Cerrar Sesion
      </v-btn> -->

      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      bottom
      temporary
      dark
      right
      overlay-color="black"
    >
      <v-list>
        <v-list-item>
          <v-img
            :src='servidor +"/imagenes/logoblanco.png"'
          >
          </v-img>
        </v-list-item>
      </v-list>
      <v-list
        nav
      >
          <!-- active-class="deep-purple--text text--accent-4" -->
          <!-- color="primary" -->
        <v-list-item-group
          v-model="selectedItem"
        >
            <!-- :href="seccion.ruta" -->
          <v-list-item
            v-for="(seccion, s) in secciones"
            :key="s"
            @click="redireccion(seccion.ruta)"
            :class="{hidden: !$store.state.isUserLoggedIn && seccion.needToken}"
          >
            <v-list-item-icon>
              <v-icon v-text="seccion.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{seccion.text}}</v-list-item-title>
          </v-list-item>
          <!-- <v-list-item
            @click="redireccion('/admin')"
          >
            <v-list-item-icon>
              <v-icon>mdi-soccer</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Administrador</v-list-item-title>
          </v-list-item> -->
        </v-list-item-group>
      </v-list>
      <v-spacer></v-spacer>
      <v-btn
        v-if="$store.state.isUserLoggedIn"
        @click="logout"
      >
          Cerrar Sesion
      </v-btn>
    </v-navigation-drawer>
  </v-card>
  <!-- </div> -->
</template>
<script>
export default {
//   name: 'header'
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      sessionStorage.clear()
      console.log(this.$store.state.isUserLoggedIn, 'cierra sesion el usuario')
      // this.$router.push({
      //   name: 'Login'
      // })
      window.location.href = `${location.origin}/`
    },
    redireccion (slug) {
      if (slug === '/') {
        window.location.href = slug
      } else {
        // this.$router.push({name: slug})
        window.location.href = `${location.origin}/${slug}`
      }
    },
    home () {
      // this.$router.push({
      //   name: 'index'
      // })
      window.location.href = `${location.origin}/`
    }
  },
  async mounted () {
    console.log(this.$store.state.isUserLoggedIn, 'entra amounted')
    switch (window.location.pathname) {
      case ('/store'): {
        this.selectedItem = 1
        break
      }
      case ('/admin'): {
        this.selectedItem = 2
        break
      }
    }
    // if (window.location.pathname==='store') {
    // }
  },
  data () {
    return {
      servidor: process.env.VUE_APP_SERVER,
      drawer: false,
      group: null,
      selectedItem: 0,
      secciones: [
        {text: 'Inicio', icon: 'mdi-home', ruta: '/', needToken: 0},
        {text: 'Tienda', icon: 'mdi-store', ruta: 'store', needToken: 0},
        {text: 'Administrador', icon: 'mdi-soccer', ruta: 'admin', needToken: 1}
      ]
    }
  },
  watch: {
    group () {
      this.drawer = false
    }
  }
}
</script>
<style>
.pointer {
  cursor: pointer;
}
.hidden {
  visibility: hidden;
}
</style>
