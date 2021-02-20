<template>
  <v-card>
    <v-img class="responsive" :src='servidor +"/imagenes/pportada.jpg"'>
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

        <!-- v-if="$store.state.isUserLoggedIn" -->
      <v-btn
        @click="redireccion('/')"
        height="100%"
        depressed
        tile
        v-if="!$store.state.isUserLoggedIn"
        :class=" selectedItem == '0' ? 'activo' : ''"
      >
        <v-icon
          class="mr-2"
        >mdi-home</v-icon>
        Inicio
      </v-btn>
      <v-btn
        @click="redireccion('store')"
        height="100%"
        depressed
        tile
        v-if="!$store.state.isUserLoggedIn"
        :class=" selectedItem == '1' ? 'activo' : ''"
      >
        <v-icon
          class="mr-2"
        >mdi-store</v-icon>
        Tienda
      </v-btn>
      <!-- <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab>Tab 1</v-tab>
          <v-tab>Tab 2</v-tab>
          <v-tab>Tab 3</v-tab>
        </v-tabs>
      </template> -->
      <v-app-bar-nav-icon
        v-if="$store.state.isUserLoggedIn"
        @click.stop="drawer = !drawer"
      >
      </v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
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
        <v-list-item-group
          v-model="selectedItem"
        >
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
      window.location.href = `${location.origin}/`
    },
    redireccion (slug) {
      if (slug === '/') {
        window.location.href = slug
      } else {
        window.location.href = `${location.origin}/${slug}`
      }
    },
    home () {
      // INFO: Lineas para navegar pero no se adapta a esta aplicación
      // this.$router.push({
      //   name: 'index'
      // })
      window.location.href = `${location.origin}/`
    }
  },
  async mounted () {
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
.activo{
  background-color: #414545 !important
  /* background-color: -internal-light-dark(rgb(239, 239, 239), rgb(59, 59, 59)); */
}
</style>
