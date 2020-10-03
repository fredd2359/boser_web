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
      >
        <v-card
          :color="active ? undefined : 'grey lighten-1'"
          class="ma-4"
          height="150"
          width="180"
          @click="toggle"
        >
          <v-img
            :src="articulo.metadata.portada.url"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
          >
            <v-card-title
              v-text="typeof articulo.metadata.titulo == 'undefined'? articulo.metadata.titulo : ''"
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
</style>
