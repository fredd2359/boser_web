<template>
  <v-sheet
    class="mx-auto"
    elevation="8"
    max-width="800"
  >
    <v-slide-group
      v-model="model"
      class="pa-4"
      show-arrows
    >
      <v-slide-item
        v-for="articulo in articulos"
        :key="articulo._id"
        v-slot:default="{ active, toggle }"
        class=""
      >
        <v-card
          :color="active ? undefined : 'grey lighten-1'"
          class="ma-4"
          height="200"
          width="220"
          @click="toggle"
        >
          <v-img
            :src="articulo.metadata.portada.url"
            class="white--text align-end left"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
          >
            <v-chip
              class="ma-0"
              color="deep-orange darken-3"
              text-color="white"
              @click="getArticulo(articulo.slug)"
            >
              {{articulo.metadata.hashtag}}
            </v-chip>
            <!-- :aspect-ratio="16/9" -->
            <v-card-title
              v-text="typeof articulo.metadata.titulo == 'undefined'? '' : articulo.metadata.titulo"
              class="slide-text pl-1 pr-0 pb-0 pt-0 d-inline-block text-truncate"
              style="max-width: 220px;"
            >
            </v-card-title>
          </v-img>
          <!-- <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <v-scale-transition>
              <v-icon
                v-if="active"
                color="white"
              ></v-icon>
            </v-scale-transition>
          </v-row> -->
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>
<script>
import Articulos from '@/servicios/Articulos'

export default {
  name: 'cintillo',
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
    this.articulos = (await Articulos.ObtenerArticulos()).data.objects
  },
  data () {
    return {
      articulos: [],
      model: null
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
.slide-text {
  font-family: 'Paytone One', sans-serif !important;
  font-size: 18px;
}
</style>
