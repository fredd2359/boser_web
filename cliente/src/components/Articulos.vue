<template>
  <!-- <v-col class="pb-0"> -->
  <!-- <v-container fluid> -->
    <v-hover v-slot="{ hover }">
      <v-card
        :elevation="hover ? 12 : 2"
        :class="{'on-hover': hover}"
        min-width="210"
        max-width="450"
      >
        <v-img
          :src="articulo.metadata.portada.url"
          class="white--text align-end left pointer"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          @click="getArticulo(articulo.slug)"
        >
        <!-- <v-spacer></v-spacer> -->
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
            <!-- {{articulo.slug}} -->
          </v-card-title>
        </v-img>
        <!-- <v-card-actions
          class="pt-0"
        >
          <v-spacer></v-spacer>

          <share-network
            network="facebook"
            url="https://news.vuejs.org/issues/180"
            description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
            title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
            quote="The hot reload is so fast it\'s near instant. - Evan You"
            hashtags="vuejs,vite"
          >
              <v-icon>mdi-facebook</v-icon>
          </share-network>
          <share-network
            network="reddit"
            url="https://news.vuejs.org/issues/180"
            title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
          >
              <v-icon>mdi-reddit</v-icon>
          </share-network>
          <share-network
            network="twitter"
            url="https://news.vuejs.org/issues/180"
            title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
            description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
            hashtags="vuejs,vite"
          >
              <v-icon>mdi-twitter</v-icon>
          </share-network>
          <share-network
            network="whatsapp"
            url="https://news.vuejs.org/issues/180"
            title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
            description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
          >
              <v-icon>mdi-whatsapp</v-icon>
          </share-network>
        </v-card-actions> -->
      </v-card>
    </v-hover>
  <!-- </v-container> -->
  <!-- </v-col> -->
</template>
<script>
// import Articulos from '@/servicios/Articulos'

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
