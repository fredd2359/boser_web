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
        <v-row class="justify-center">
          <v-col
            :cols = 10
          >
            <v-carousel
              cycle
              :height="tamaños.carousel"
              hide-delimiter-background
              interval=8000

            >
              <v-carousel-item
                reverse-transition="fade-transition"
                transition="fade-transition"
                v-for="(imagen, i) in imagenes.files"
                :key="i"
                height="100%"
              >
                <img
                  :src="imagen.metadata.url"
                  style="height:100%;"
                >
              </v-carousel-item>
            </v-carousel>
          </v-col>
        </v-row>
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
              <!-- :md = 8
              :lg = 8 -->
              <youtube
                :video-id="source"
                :player-width="tamaños.youtube.width"
                :player-height="tamaños.youtube.height"
              >
              </youtube>
            </v-col>
            <!-- <v-col
              :sm = 12
              :md = 4
              :lg = 4
            >
              <div class="fb-group" data-href="https://www.facebook.com/groups/sectaboseriana/?source_id=955050067872220" data-width="220" data-show-social-context="true" data-show-metadata="true"></div>
            </v-col> -->
          </v-row>
        </v-parallax>
        <v-row class="pt-3">
          <v-col class="pb-0">
            <page-articulos/>
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
import Visuales from '@/servicios/Visuales'
import PageHeader from '@/components/Header.vue'
import VueYouTubeEmbed from 'vue-youtube-embed'
import PageFoot from '@/components/Foot'
import PageRedesSociales from '@/components/RedesSociales'
import PageArticulos from '@/components/Articulos'

export default {
  name: 'Principal',
  components: {
    PageHeader,
    VueYouTubeEmbed,
    PageFoot,
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
            t.carousel = 200
            t.parallax = 690
            // No se puede ir mas abajo de 360px
            t.youtube.height = 290
            t.youtube.width = 300
            break
          }
          case 'sm': {
            t.carousel = 300
            t.parallax = 720
            t.youtube.height = 360
            t.youtube.width = 400
            break
          }
          case 'md': {
            t.carousel = 350
            t.parallax = 500
            t.youtube.height = 350
            t.youtube.width = 480
            break
          }
          case 'lg': {
            t.carousel = 400
            t.parallax = 500
            t.youtube.height = 400
            t.youtube.width = 650
            break
          }
          case 'xl': {
            t.carousel = 500
            t.parallax = 500
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
  },
  data () {
    return {
      // imagenes: []
      imagenes: [{imagenes: {rutaweb: '222'}}],
      links: null,
      urlchido: '',
      servidor: process.env.VUE_APP_SERVER
      // servidor: process.env.VUE_APP_SERVER
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
