<template>
  <!-- <v-col class="pb-0"> -->
  <v-container fluid>
    <v-card
    >
      <!-- class="ml-5" -->
      <!-- max-width="500" -->
        <v-row
          justify= "center"
        >
            <!-- TODO: implementar columnas en las cards -->
          <v-col
            v-for="articulo in articulos.objects"
            :key="articulo._id"
            justify= "center"
            :cols="articulo.metadata.flex"
          >
            <v-card
              min-width="290"
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
              </v-img>
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
          </v-col>
        </v-row>
    </v-card>
  </v-container>
  <!-- </v-col> -->
</template>
<script>
import Articulos from '@/servicios/Articulos'

export default {
  name: 'articulos',
  methods: {
    redireccion (url) {
      window.open(url, '_blank')
    },
    getArticulo (slug) {
      window.location.href = `http://192.168.1.66:8080/articulo/${slug}`
    }
  },
  components: {
    // ShareNetwork
  },
  async mounted () {
    this.articulos = (await Articulos.ObtenerArticulosPrincipal()).data
  },
  data () {
    return {
      articulos: []
    }
  }
}
</script>
<style>
.left {
  text-align: left;
}
.pointer {
  cursor: pointer;
}
</style>
