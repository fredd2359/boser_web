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
            <v-img
              contain
              :height="tamaños.carousel"
              :src="imagen.metadata.url"
              :alt="imagen.filename"
            >
            </v-img>
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
  async created () {
    this.links = (await Visuales.ObtenerLinks()).data
    this.imagenes = (await Visuales.CarouselImgs()).data
    this.urlchido = this.links.links[0].ruta
    this.articulos = (await ArticulosService.ObtenerArticulosPrincipal()).data

    if (this.articulos.objects.length > 0) {
      var el = document.createElement('script')
      el.type = 'application/ld+json'
      var schema = {
        '@context': 'http://schema.org/',
        '@type': ['WebSite', 'ItemList'],
        'url': 'https://salseofutbolero.com',
        'text': 'SalseoFutbolero | Sitio de humor y noticias del futbol Mexicano',
        'potentialAction': {
          '@type': 'SearchAction',
          'target': 'https://salseofutbolero.com/articulo/{q}',
          'query-input': 'required name=q'
        }
        // 'itemListElement': [
        //   {
        //     '@type': 'ListItem',
        //     'position': 1,
        //     'item': {
        //       'image': this.articulos.objects[0].metadata.portada.url,
        //       'url': `https://www.salseofutbolero.com/articulo/${this.articulos.objects[0].slug}`
        //     }
        //   },
        //   {
        //     '@type': 'ListItem',
        //     'position': 2,
        //     'item': {
        //       'image': this.articulos.objects[1].metadata.portada.url,
        //       'url': `https://www.salseofutbolero.com/articulo/${this.articulos.objects[1].slug}`
        //     }
        //   },
        //   {
        //     '@type': 'ListItem',
        //     'position': 3,
        //     'item': {
        //       'image': this.articulos.objects[2].metadata.portada.url,
        //       'url': `https://www.salseofutbolero.com/articulo/${this.articulos.objects[2].slug}`
        //     }
        //   },
        //   {
        //     '@type': 'ListItem',
        //     'position': 4,
        //     'item': {
        //       'image': this.articulos.objects[3].metadata.portada.url,
        //       'url': `https://www.salseofutbolero.com/articulo/${this.articulos.objects[3].slug}`
        //     }
        //   },
        //   {
        //     '@type': 'ListItem',
        //     'position': 5,
        //     'item': {
        //       'image': this.articulos.objects[4].metadata.portada.url,
        //       'url': `https://www.salseofutbolero.com/articulo/${this.articulos.objects[4].slug}`
        //     }
        //   }
        // ]
      }
      var itemList = []
      for (var i = 0; i <= this.articulos.objects.length - 1; i++) {
        var str = JSON.stringify({'@type': 'ListItem',
          'position': i + 1,
          'item': {
            'image': this.articulos.objects[i].metadata.portada.url,
            'url': `https://www.salseofutbolero.com/articulo/${this.articulos.objects[i].slug}`
          }
        })
        // Se crea arreglo de articulos en itemList
        itemList.push(str)
      }
      // Se asignan los articulos en objeto itemListElement a schema
      schema = {...schema, ...{'itemListElement': itemList}}
      el.text = JSON.stringify(schema)
      // Se incrusta el en tag head del DOM
      document.querySelector('head').appendChild(el)
    }
  },
  // INFO: Solo se puede implementar de esta forma si es que no se agararán datos de un api
  // jsonld () {
  //   return {
  //     '@context': 'http://schema.org/',
  //     '@type': ['WebSite', 'ItemList'],
  //     'url': 'https://salseofutbolero.com',
  //     'text': 'SalseoFutbolero | Sitio de humor y noticias del futbol Mexicano',
  //     'potentialAction': {
  //       '@type': 'SearchAction',
  //       'target': 'https://salseofutbolero.com/articulo/{q}',
  //       'query-input': 'required name=q'
  //     },
  //     'itemListElement': [
  //       {
  //         '@type': 'ListItem',
  //         'position': 1,
  //         'item': {
  //           'image': 'algo',
  //           'url': 'algo'
  //         }
  //       },
  //       {
  //         '@type': 'ListItem',
  //         'position': 2,
  //         'item': {
  //           'image': 'algo',
  //           'url': 'algo'
  //         }
  //       }
  //     ]
  //   }
  // },
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
