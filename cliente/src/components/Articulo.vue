<template>
  <div>
    <v-row>
      <v-col
        :sm = 12
        :md = 8
        :lg = 9
        class="pr-0"
      >
        <v-row
          justify="center"
        >
          <v-col
            v-if="exists"
            :cols = 10
          >
            <div
              v-text="typeof articulo.metadata.titulo == 'undefined' ? '' : articulo.metadata.titulo "
              class="text-h3 pb-4 titulo"
            >
            </div>
            <v-row
             class="pb-2"
            >
              <v-col
                cols="12"
              >
                <v-card>
                  <v-img
                    contain
                    :src="articulo.metadata.portada.url"
                    height="400"
                    class="grey darken-4"
                    :alt="articulo.metadata.titulo"
                  >
                    <!-- :aspect-ratio="16/4" -->
                  </v-img>
                </v-card>
              </v-col>
            </v-row>
            <share-network
              network="facebook"
              :title="articulo.metadata.titulo"
              :url="urlActual"
              :quote="articulo.metadata.titulo"
              :hashtags="articulo.metadata.hashtag"
            >
                <v-icon
                  size=50
                >mdi-facebook</v-icon>
            </share-network>
            <share-network
              network="reddit"
              :url="urlActual"
              :title="articulo.metadata.titulo"
            >
                <v-icon
                  size=50
                >mdi-reddit</v-icon>
            </share-network>
            <share-network
              network="twitter"
              :url="urlActual"
              :title="articulo.metadata.titulo"
              :hashtags="articulo.metadata.hashtag"
            >
                <v-icon
                  size=50
                >mdi-twitter</v-icon>
            </share-network>
            <share-network
              network="whatsapp"
              :url="urlActual"
              :title="articulo.metadata.titulo"
            >
                <v-icon
                  size=50
                >mdi-whatsapp</v-icon>
            </share-network>
            <div
              v-html="articulo.content"
              class="pt-3"
            >
            </div>
          </v-col>
        </v-row>
        <v-row class="pt-3">
          <v-col class="pb-0">
            <cintillo />
          </v-col>
        </v-row>
      </v-col>
      <v-col
        :sm = 12
        :md = 4
        :lg = 3
        class="pa-0"
      >
        <page-redes-sociales class="width: 100%" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import PageRedesSociales from '@/components/RedesSociales'
import Articulos from '@/servicios/Articulos'
import Cintillo from '@/components/Cintillo'

export default {
  name: 'Articulo',
  components: {
    PageRedesSociales,
    Cintillo
  },
  methods: {
  },
  computed: {
    articulos: {
      get: function () {
        return this.articulo
      }
    }
  },
  async mounted () {
    this.articulo = (await Articulos.ObtenerArticulo(this.$route.params.articuloId)).data.object
    this.exists = true
    this.urlActual = location.toString()
    // console.log(this.articulo)
    // INFO: Imprime /articulo/algo-aqui
    // console.log(window.location.pathname)
    // Imprime http://www..../articulo/asda-asd
    // console.log(location.toString())
    // Imprime 192.168.0.21:8080
    // console.log(location.host)
  },
  data () {
    return {
      articulo: {
        metadata: {
          titulo: ''
        }
      },
      exists: false,
      urlActual: ''
    }
  },
  jsonld () {
    return {
      '@context': 'https://schema.org/',
      '@type': 'Article',
      'name': this.articulo.metadata.titulo,
      'description': this.articulo.content,
      'editor': 'BoserSalseoFutbolero',
      'contentReferenceTime': this.articulo.metadata.fecha_de_subida
    }
  },
  metaInfo () {
    // console.log(this.articulo)
    // var imagenPath = this.articulo.metadata.portada.url.toString()
    return {
      title: 'SalseFutbolero | ' + this.articulo.metadata.titulo,
      meta: [
        {name: 'description', content: this.articulo.content},
        {property: 'og:title', content: this.articulo.metadata.titulo},
        {property: 'og:site_name', content: 'SalseoFutbolero'},
        {property: 'og:type', content: 'Article'},
        {property: 'og:url', content: location.toString()},
        {property: 'og:published_time', content: this.articulo.metadata.fecha_de_subida}
        // Descomentar en cuanto se pueda ver reflejado en el sitio en linea
        // {property: 'og:image', content: imagenPath}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
