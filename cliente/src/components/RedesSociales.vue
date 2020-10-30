<template>
  <v-card
    :elevation="6"
    align= "center"
  >
    <v-row
      align= "center"
    >
      <v-col
        :col = 12
      >
        <div
          class="fb-page left"
          data-href="https://www.facebook.com/BoserSalseoFutboleroOficial/"
          data-tabs="timeline"
          :data-width='tamaños.facebook.width'
          :data-height="tamaños.facebook.height"
          data-small-header="true"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="true"
        >
          <blockquote
            cite="https://www.facebook.com/BoserSalseoFutboleroOficial/"
            class="fb-xfbml-parse-ignore"
          >
            <a
              href="https://www.facebook.com/BoserSalseoFutboleroOficial/"
            >
              Boser  Salseo Futbolero
            </a>
          </blockquote>
        </div>
      </v-col>
    </v-row>
    <v-row
     align= "center"
    >
      <v-col
        :col = 12
      >
        <instagram-embed
          :url="'https://www.instagram.com/p/B5_VkYmp1EK/?utm_source=ig_embed&amp;utm_campaign=loading'"
          :max-width='tamaños.instagram'
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col
        :col = 12
      >
        <a class="twitter-timeline" href="https://twitter.com/bosersalseo?ref_src=twsrc%5Etfw" :data-width="tamaños.twitter.width" data-tweet-limit="3">Tweets by bosersalseo</a>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
import InstagramEmbed from 'vue-instagram-embed'

export default {
  name: 'RedesSociales',
  components: {
    InstagramEmbed
  },
  methods: {},
  computed: {
    tamaños: {
      get: function () {
        var t = {
          'facebook': {
            'height': 0,
            'width': 0
          },
          'instagram': 0,
          'twitter': {
            'height': 0
          }
        }
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': {
            t.facebook.width = 300
            t.facebook.height = 500
            t.instagram = 300
            t.twitter.width = 300
            break
          }
          case 'sm': {
            t.facebook.height = 350
            t.facebook.height = 500
            t.instagram = 400
            t.twitter.width = 350
            break
          }
          case 'md': {
            t.facebook.width = 350
            t.facebook.height = 500
            t.instagram = 350
            t.twitter.width = 350
            break
          }
          case 'lg': {
            t.facebook.width = 340
            t.facebook.height = 500
            t.instagram = 400
            t.twitter.width = 450
            break
          }
          case 'xl': {
            t.facebook.width = 450
            t.facebook.height = 500
            t.instagram = 450
            t.twitter.width = 450
            break
          }
        }
        return t
      }
    }
  },
  data () {
    return {
      icons: []
    }
  }
}
</script>
<style>

</style>
