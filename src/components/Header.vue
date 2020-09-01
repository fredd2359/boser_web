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
            <!-- <span>
            </span> -->
              Cerrar Sesion
            <!-- <v-icon>mdi-magnify</v-icon> -->
          </v-btn>
          <!-- TODO: implementar barra que se encoge -->
          <!-- <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn> -->
          <!-- TODO: barra de navegacion -->
          <!-- <template v-slot:extension>
            <v-tabs
              v-model="tab"
              align-with-title
            >
              <v-tabs-slider color="yellow"></v-tabs-slider>

              <v-tab v-for="item in items" :key="item">
                {{ item }}
              </v-tab>
            </v-tabs>
          </template> -->
        </v-toolbar>
        <!-- TODO: implementar barra de navegacion -->
        <!-- <v-tabs-items v-model="tab">
          <v-tab-item
            v-for="item in items"
            :key="item"
          >
            <v-card flat>
              <v-card-text v-text="text"></v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items> -->
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
      servidor: process.env.VUE_APP_SERVER,
      items: [
        'web', 'shopping', 'videos', 'images', 'news'
      ]
    }
  }
}
</script>
<style>

</style>
