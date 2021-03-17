<template>
  <div>
    <v-app>
      <v-main>
          <page-header
            class="width: 100% lenght: 100%"
            v-if="!onLogin"
          />
          <router-view/>
          <page-foot
            class="width: 100%"
            v-if="!onLogin"
          />
      </v-main>
    </v-app>
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'
import PageFoot from '@/components/Foot'

export default {
  name: 'App',
  metaInfo () {
    return {
      title: 'BoserSalseoFutbolero - PaginaWebOficial',
      meta: [
        {name: 'description', content: 'Sitio de humor y noticias del futból Mexicano!'},
        {property: 'og:title', content: 'SalseoFutbolero | Sitio de humor y noticias del futból Mexicano!'},
        {property: 'og:site_name', content: 'SalseoFutbolero'},
        // {property: 'og:url', content: 'http://www.bosersalseo.com/'},
        {property: 'og:type', content: 'website'},
        {name: 'robots', content: 'index,follow'}
      ]
    }
  },
  components: {
    PageFoot,
    PageHeader
  },
  data () {
    return {
      onLogin: false,
      urlActual: ''
    }
  },
  async mounted () {
    // Funcionalidad para esconder barra de navegación en ruta de /login
    this.urlActual = window.location.pathname
    if (this.urlActual === '/login') {
      this.onLogin = true
    }
  }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.titulo {
  font-family: 'Paytone One', sans-serif !important;
  /* font-weight: bold; */
  /* font-size: 48px; */
}
.responsive {
  width: 100%;
  height: auto;
}
.img1{
    width: 122px;
    position: absolute;
    margin-top: -25px;
    margin-left: 36px;
}
</style>
