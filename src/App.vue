<template>
  <div>
    <v-app>
      <v-main>
          <router-view/>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'
export default {
  name: 'App',
  metaInfo () {
    return {
      title: 'BoserSalseoFutbolero - PaginaWebOficial',
      meta: [
        // {name: 'description', content: 'Hola esto es la descripcion.'},
        // {property: 'og:title', content: 'BoserWeb este es el titulo'},
        // {property: 'og:site_name', content: 'BoserSalseo'},
        // {property: 'og:url', content: 'http://www.bosersalseo.com/'},
        // {property: 'og:type', content: 'website'},
        // {name: 'robots', content: 'index,follow'}
      ]
    }
  },
  components: {
    PageHeader
  }
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
