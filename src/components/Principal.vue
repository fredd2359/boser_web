<template>
  <div>
    <page-header class="width: 100%" />
    <vue-facebook-page :data-href="LINKP" link-text="Bosser Facebook" />
    <v-row class="justify-center">
      <v-col
        :cols = 10
      >
        <v-carousel
          cycle
          :height="largoCarousel"
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
            <!-- <v-sheet
              height="100%"
            >
              <v-row
                class="fill-height"
                align="center"
                justify="center"
              >
                <div class="display-3">{{  }} Slide</div>
              </v-row>
            </v-sheet> -->
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
    <!-- <v-row>
      row nuevo para preubas de face
      <div class="fb-page" data-href="https://www.facebook.com/bosersalseo/" data-tabs="timeline" data-width="" data-height="" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/bosersalseo/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/bosersalseo/">Boser  Salseo Futbolero</a></blockquote></div>
     </v-row> -->
    <v-row class="justify-center">
      <v-col
        :cols = 2
      >
        <img class="you1" :src='servidor + "/imagenes/Y4.png"'>
      </v-col>
    </v-row>
    <v-row class="justify-center">
      <v-col
        contain
        :sm = 12
        :md = 7
        :lg = 7
      >
      <!-- SE pueden incluir estos valores en la etqueta de youtube, por el momento la responsividad se maneja con bootstrap -->
        <!-- :player-width="YTWidth"
        :player-heigth="YTHeigth" -->
        <youtube
          :video-id="source"
          :player-width="YTWidth"
          :player-height="YTHeigth"
        >
        </youtube>
        <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLYYhQHDVETBOFAxb_Ny4CTKV429r7NGhA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
        <!-- <iframe class="container" width="660" height="415" src="https://www.youtube.com/playlist?list=PLYYhQHDVETBOFAxb_Ny4CTKV429r7NGhA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
      </v-col>
      <v-col
        :sm = 12
        :md = 3
        :lg = 3
      >
        <img class="you" :src='servidor +"/imagenes/Y1.png"' href="https://www.youtube.com/channel/UC5zYksN6pv3jiCBdL0ykrYg">
        <a title="Ver más videos" href="https://www.youtube.com/channel/UC5zYksN6pv3jiCBdL0ykrYg"><img class="you2" :src='servidor +"/imagenes/Y2.png"'></a>
        <a title="Subscribirse" href="https://www.youtube.com/channel/UC5zYksN6pv3jiCBdL0ykrYg"><img class="you2" :src='servidor +"/imagenes/Y3.png"'></a>
      </v-col>
    </v-row>
    <v-row class="justify-center">
      <v-col
      :cols = 12
    >
      <div>
        <img class="you1" style="display: inline-block" :src='servidor +"/imagenes/fb.png"'>
        <img class="you1" style="display: inline-block" :src='servidor +"/imagenes/insta.png"'>
      </div>
      </v-col>
    </v-row>
    <v-row class="justify-center">
      <v-col
        :sm = 6
        :md = 3
        :lg = 2
      >
        <div class="fb-group" data-href="https://www.facebook.com/groups/sectaboseriana/?source_id=955050067872220" data-width="220" data-show-social-context="true" data-show-metadata="true">
        </div>
      </v-col>
      <v-col
        :sm = 12
        :md = 4
        :lg = 5
      >
        <instagram-embed
          :url="'https://www.instagram.com/p/B816cLVpxQo/?utm_source=ig_embed&amp;utm_campaign=loading'"
          :max-width=380
        />
        <!-- <iframe src="https://www.facebook.com/groups/sectaboseriana/?source_id=955050067872220" style="border:none;overflow:hidden" scrolling="yes" frameborder="0" allow="encrypted-media" ></iframe> -->
        <!-- Este div no sirve pero el iframe si carga algo -->
      </v-col>
      <v-col
        :sm = 12
        :md = 5
        :lg = 5
      >
        <instagram-embed
          :url="'https://www.instagram.com/p/B5_VkYmp1EK/?utm_source=ig_embed&amp;utm_campaign=loading'"
          :max-width=380
        />
        <!-- <iframe src="https://www.facebook.com/groups/sectaboseriana/?source_id=955050067872220" style="border:none;overflow:hidden" scrolling="yes" frameborder="0" allow="encrypted-media" ></iframe> -->
        <!-- Este div no sirve pero el iframe si carga algo -->
      </v-col>
    </v-row>
    <!-- <v-row class="justify-center">
      <v-col
        :sm = 12
        :md = 4
        :lg = 4
      >
        <img class="you1" :src='servidor +"/imagenes/tw.png"'>
        <a class="twitter-timeline" data-lang="es" data-width="600" data-height="500" href="https://twitter.com/bosersalseo?ref_src=twsrc%5Etfw">Tweets by bosersalseo</a>
        <a class="twitter-follow-button"
          href="https://twitter.com/bosersalseo?ref_src=twsrc%5Etfw"
          data-size="large">
          Follow @TwitterDev
        </a>
        <a href="https://twitter.com/intent/tweet?screen_name=bosersalseo&ref_src=twsrc%5Etfw" class="twitter-mention-button" data-lang="es" data-show-count="false">Tweet to @bosersalseo</a>
      </v-col>
    </v-row> -->
    <page-footer class="width: 100%" />
  </div>
</template>

<script>
import Visuales from '@/servicios/Visuales'
import PageHeader from '@/components/Header.vue'
import VueYouTubeEmbed from 'vue-youtube-embed'
import InstagramEmbed from 'vue-instagram-embed'
import PageFooter from '@/components/Footer'

// Vue.use(VueYouTubeEmbed)

export default {
  name: 'Principal',
  components: {
    PageHeader,
    VueYouTubeEmbed,
    InstagramEmbed,
    PageFooter
  },
  methods: {
  },
  computed: {
    source: {
      get: function () {
        return this.$youtube.getIdFromURL('https://www.youtube.com/watch?v=' + this.urlchido)
      }
    }
  },
  async mounted () {
    // this.links = (await Visuales.ObtenerLinks())
    this.imagenes = (await Visuales.CarouselImgs()).data
    switch (this.$vuetify.breakpoint.name) {
      case 'xs': {
        this.anchoFB = 300
        this.largoCarousel = 200
        // No se puede ir mas abajo de 360px
        this.YTHeigth = 360
        this.YTWidth = 250
        break
      }
      case 'sm': {
        this.anchoFB = 555
        this.largoCarousel = 300
        this.YTHeigth = 360
        this.YTWidth = 450
        break
      }
      case 'md': {
        this.anchoFB = 700
        this.largoCarousel = 300
        this.YTHeigth = 360
        this.YTWidth = 500
        break
      }
      case 'lg': {
        this.anchoFB = 900
        this.largoCarousel = 400
        this.YTHeigth = 440
        this.YTWidth = 750
        break
      }
      case 'xl': {
        this.anchoFB = 500
        this.largoCarousel = 150
      }
    }
  },
  data () {
    return {
      // imagenes: []
      imagenes: [{imagenes: {rutaweb: '222'}}],
      anchoFB: 500,
      YTHeigth: 360,
      YTWidth: 100,
      links: null,
      urlchido: 'OJN1wgvhNAg',
      linkFB: null,
      youtubeId: '5MgBikgcWnY',
      servidor: process.env.VUE_APP_SERVER,
      // CONFIG: Cambiar para pagina de FB
      LINKP: 'https://www.facebook.com/bosersalseo/',
      largoCarousel: 200
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.you1{
    width: 100px;
    display:block;
    margin-left: auto;
    margin-right: auto;
}
.you{
    width: 120px;
    display:block;
    margin-left: auto;
    margin-right: auto;
}
.you2{
    width: 190px;
    display:block;
    margin-left: auto;
    margin-right: auto;
}
</style>
