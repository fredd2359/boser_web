<template>
  <div>
    <v-row>
      <v-col class="pa-0">
        <page-header/>
      </v-col>
    </v-row>
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
                  >
                    <!-- :aspect-ratio="16/4" -->
                  </v-img>
                </v-card>
              </v-col>
            </v-row>
              <!-- description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You." -->
            <share-network
              network="facebook"
              :title="articulo.metadata.titulo"
              :url="urlActual"
              :quote="articulo.metadata.titulo"
              :hashtags="articulo.metadata.hashtag"
            >
              <!-- <network network="facebook"> -->
                <v-icon
                  size=50
                >mdi-facebook</v-icon>
                <!-- <i class="mdi-facebook"></i> Facebook -->
              <!-- </network> -->
            <!-- Share on Facebook -->
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
              <!-- description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You." -->
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
              <!-- description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You." -->
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
    <v-row>
      <v-col class="pr-0 pl-0 pb-0">
        <page-foot class="width: 100%" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
// import Visuales from '@/servicios/Visuales'
import PageHeader from '@/components/Header.vue'
import PageFoot from '@/components/Foot'
import PageRedesSociales from '@/components/RedesSociales'
import Articulos from '@/servicios/Articulos'
import Cintillo from '@/components/cintilloPrueba'

export default {
  name: 'Articulo',
  components: {
    PageHeader,
    PageFoot,
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
    // Imprime /articulo/algo-aqui
    // console.log(window.location.pathname)
    // Imprime http://www..../articulo/asda-asd
    // console.log(location.toString())
  },
  data () {
    return {
      articulo: [],
      exists: false,
      urlActual: ''
    }
  },
  metaInfo () {
    return {
      title: this.articulo.metadata.titulo,
      meta: [
        // { name: 'description', content: 'Connect and follow ' + this.userData.name + ' on Epiloge - ' + this.userData.tagline},
        {name: 'description', content: 'Esto es la descripcion del articulo'},
        // { property: 'og:title', content: this.userData.name + ' - Epiloge'},
        {property: 'og:title', content: this.articulo.metadata.titulo},
        // { property: 'og:site_name', content: 'Epiloge'},
        {property: 'og:site_name', content: 'BoserSalseo'},
        // { property: 'og:description', content: 'Connect and follow ' + this.userData.name + ' on Epiloge - ' + this.userData.tagline},
        // {property: 'og:description', content: 'og descipcion del articulo'},
        {property: 'og:type', content: 'website'},
        {property: 'og:url', content: this.urlActual}
        // {property: 'og:url', content: this.urlActual ? this.urlActual + '/Hoas' : 'https://salseofutbolero-server.herokuapp.com'},
        // Descomentar en cuanto se pueda ver reflejado en el sitio en linea
        // {property: 'og:image', content: 'https:/salseofutbolero-server.herokuapp.com/imagenes/pportada.jpg'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.titulo {
  font-family: 'Paytone One', sans-serif !important;
  /* font-weight: bold; */
  /* font-size: 48px; */
}
</style>
