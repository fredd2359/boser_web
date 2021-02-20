<template>
  <!-- <div> -->
  <v-card>
    <!-- <v-row>
      <v-col class="pa-0">
        <page-header class="width: 100% lenght: 100%"/>
      </v-col>
    </v-row> -->
    <v-row>
      <v-col
        :sm = 12
        :md = 8
        :lg = 9
        class="pr-0"
      >
        <v-carousel
          :height="tamaños.carousel"
          cycle
          hide-delimiter-background
          interval=8000
        >
          <v-carousel-item
            reverse-transition="fade-transition"
            transition="fade-transition"
            v-for="(imagen, i) in imagenes.files"
            :key="i"
          >
            <img
              :src="imagen.metadata.url"
              style="height:100%;"
            >
          </v-carousel-item>
        </v-carousel>
        <v-parallax
          :src ='servidor + "/imagenes/Fondovideo.jpeg"'
          :height="tamaños.parallax"
        >
          <v-row
            align="center"
          >
            <v-col
              contain
              :sm = 12
            >
              <youtube
                :video-id="source"
                :player-width="tamaños.youtube.width"
                :player-height="tamaños.youtube.height"
              >
              </youtube>
            </v-col>
          </v-row>
        </v-parallax>
        <v-row
          class="d-flex justify-center"
        >
          <v-card
            outlined
            class="ml-3 mr-3 mt-3 mb-3"
            v-for="articulo in articulos.objects"
            :key="articulo._id"
          >
            <page-articulos :articulo="articulo"/>
          </v-card>
        </v-row>
      </v-col>
      <v-col
        :sm = 12
        :md = 4
        :lg = 3
        class="pa-0"
      >
        <page-redes-sociales class="width: 100% lenght: 100%" />
      </v-col>
    </v-row>
    <!-- <v-row>
      <v-col class="pr-0 pl-0 pb-0">
        <page-foot class="width: 100%" />
      </v-col>
    </v-row> -->
  </v-card>
  <!-- </div> -->
</template>

<script>
import VueYouTubeEmbed from 'vue-youtube-embed'
import PageRedesSociales from '@/components/RedesSociales'
import PageArticulos from '@/components/Articulos'
import ArticulosService from '@/servicios/Articulos'
import Visuales from '@/servicios/Visuales'

export default {
  name: 'Principal',
  components: {
    VueYouTubeEmbed,
    PageRedesSociales,
    PageArticulos
  },
  methods: {
  },
  computed: {
    source: {
      get: function () {
        return this.$youtube.getIdFromURL(`${window.location.protocol}//www.youtube.com/watch?v=` + this.urlchido)
      }
    },
    tamaños: {
      get: function () {
        var t = {
          'carousel': 0,
          'parallax': 0,
          'youtube': {
            'height': 0,
            'width': 0
          }
        }
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': {
            // 320 x 240
            // 512 x 384
            t.carousel = 200
            t.parallax = 310
            t.youtube.height = 290
            t.youtube.width = 300
            break
          }
          case 'sm': {
            // 640 x 480
            // 800 x 600
            t.carousel = 300
            t.parallax = 380
            t.youtube.height = 360
            t.youtube.width = 400
            break
          }
          case 'md': {
            // 1024 x 768
            t.carousel = 350
            t.parallax = 370
            t.youtube.height = 350
            t.youtube.width = 480
            break
          }
          case 'lg': {
            // 1280 x 720
            t.carousel = 400
            t.parallax = 420
            t.youtube.height = 400
            t.youtube.width = 650
            break
          }
          case 'xl': {
            // 1920 x 1080
            t.carousel = 500
            t.parallax = 470
            t.youtube.height = 450
            t.youtube.width = 810
            break
          }
        }
        return t
      }
    }
  },
  async mounted () {
    this.links = (await Visuales.ObtenerLinks()).data
    this.imagenes = (await Visuales.CarouselImgs()).data
    this.urlchido = this.links.links[0].ruta
    this.articulos = (await ArticulosService.ObtenerArticulosPrincipal()).data
  },
  data () {
    return {
      articulos: [],
      imagenes: {
        files: ''
      },
      links: '',
      urlchido: '',
      servidor: process.env.VUE_APP_SERVER
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
