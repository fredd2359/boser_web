<template>
  <v-hover v-slot="{ hover }">
    <v-card
      :elevation="hover ? 12 : 2"
      :class="{'on-hover': hover}"
      min-width="210"
      max-width="380"
    >
      <v-img
        :src="articulo.metadata.portada.url"
        class="white--text align-end left pointer"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        @click="getArticulo(articulo.slug)"
      >
        <v-chip
          class="ma-2"
          color="deep-orange darken-3"
          text-color="white"
          @click="getArticulo(articulo.slug)"
        >
          {{articulo.metadata.hashtag}}
        </v-chip>
        <v-card-text
          v-text="articulo.metadata.fecha_de_subida"
          class="left pb-0 pointer"
          @click="getArticulo(articulo.slug)"
        >
        </v-card-text>
        <v-card-title
          class="pt-0 pointer"
          v-text="articulo.metadata.titulo"
          @click="getArticulo(articulo.slug)"
        >
        </v-card-title>
      </v-img>
    </v-card>
  </v-hover>
</template>
<script>

export default {
  name: 'Articulos',
  props: {
    articulo: {
      // type: String
    }
  },
  methods: {
    redireccion (url) {
      window.open(url, '_blank')
    },
    getArticulo (slug) {
      window.location.href = `${location.origin}/articulo/${slug}`
    }
  },
  components: {
    // ShareNetwork
  },
  async mounted () {
    // console.log('Este es el Articulos.vue')
    // this.articulos = (await Articulos.ObtenerArticulosPrincipal()).data
  },
  data () {
    return {
      // articulos: []
    }
  }
}
</script>
<style scoped>
.left {
  text-align: left;
}
.pointer {
  cursor: pointer;
}
.v-card {
  transition: opacity .2s ease-in-out;
  opacity: .9;
}
.v-card:hover {
  /* transition: opacity .4s ease-in-out; */
  opacity: 1;
 }
/* .v-card:not(.on-hover) {
  opacity: .9;
 } */

</style>
