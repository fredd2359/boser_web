<template>
  <div
    style="width:100%"
  >
    <v-footer
      dark
      padless
    >
      <v-card
        flat
        tile
        style="width:100%"
        class="blue-grey darken-4 white--text text-center"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon.key"
            :class='"mx-4 " + icon.color +"--text"'
            icon
            @click="redireccion(icon.url)"
          >
            <v-icon size="24px">{{ icon.tipoIcono }}</v-icon>
          </v-btn>
        </v-card-text>
        <v-card-text class="white--text pt-0">
          Cada que rueda el balón va dejando historia, yo te la puedo contar. Síguenos en todas Nuestras Redes Sociales
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          El Universo de Boser es Powered By Izk Producciones, Boser Salseo Futbolero (En proceso de Registro ante IMPI 2020)
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>
<script>
export default {
  name: 'foot',
  methods: {
    redireccion (url) {
      window.open(url, '_blank')
    }
  },
  data () {
    return {
      icons: [
        {
          key: 1,
          tipoIcono: 'mdi-facebook',
          color: 'success',
          url: 'https://www.facebook.com/BoserSalseoFutboleroOficial/'
        },
        {
          key: 2,
          tipoIcono: 'mdi-facebook',
          color: 'white',
          url: 'https://www.facebook.com/groups/sectaboseriana/'
        },
        {
          key: 3,
          tipoIcono: 'mdi-facebook',
          color: 'red',
          url: 'https://www.facebook.com/bosergeekof'
        },
        {
          key: 4,
          tipoIcono: 'mdi-twitter',
          color: '',
          url: 'https://twitter.com/bosersalseo'
        },
        {
          key: 5,
          tipoIcono: 'mdi-instagram',
          color: '',
          url: 'https://www.instagram.com/boser_salseo/'
        },
        {
          key: 6,
          tipoIcono: 'mdi-youtube',
          color: 'success',
          url: 'https://www.youtube.com/channel/UC5zYksN6pv3jiCBdL0ykrYg'
        },
        {
          key: 7,
          tipoIcono: 'mdi-youtube',
          color: '',
          url: 'https://www.youtube.com/channel/UCnU1O9i-kTo1q4z8MK3W1Hw'
        },
        {
          key: 8,
          tipoIcono: 'mdi-youtube',
          color: 'red',
          url: 'https://www.youtube.com/channel/UCLci1atxHgW2RJwy735rbFg'
        }
      ]
    }
  }
}
</script>
<style>

</style>
