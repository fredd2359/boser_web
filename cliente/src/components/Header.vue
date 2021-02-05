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

        <v-btn
          v-if="$store.state.isUserLoggedIn"
          @click="logout"
        >
            Cerrar Sesion
        </v-btn>

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
          title="hola"
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
            >
              <v-list-item-icon>
                <v-icon v-text="seccion.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{seccion.text}}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
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
      this.$router.push({
        name: 'Login'
      })
    },
    redireccion (slug) {
      if (slug === '/') {
        window.location.href = slug
      } else {
        this.$router.push({name: slug})
      }
      // window.location.href = `${location.origin}/articulo/${slug}`
    },
    home () {
      // this.$router.push({
      //   name: 'index'
      // })
      window.location.href = `${location.origin}/`
    }
  },
  data () {
    return {
      servidor: process.env.VUE_APP_SERVER,
      items: [
        'web', 'shopping', 'videos', 'images', 'news'
      ],
      drawer: false,
      group: null,
      selectedItem: 1,
      secciones: [
        {text: 'Inicio', icon: 'mdi-home', ruta: '/'},
        {text: 'Nuevo', icon: 'mdi-home', ruta: 'Login'},
        {text: 'Tienda', icon: 'mdi-store', ruta: 'Tienda'}
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
</style>
