<template>
  <v-card
    light
    :loading="load"
    tile
    class="ma-2"
  >
      <v-card-title
        class="text-h4"
      >
        Productos
      </v-card-title>
      <!-- <v-divider></v-divider> -->
      <v-hover v-slot="{hover}">
        <v-card
          light
          :elevation="hover ? 12 : 2"
          :class="{ 'on-hover': hover }"
          min-width="210"
          max-width="310"
          v-for="producto in productos.data.objects"
          :key="producto._id"
        >
          <v-img
            :src="producto.metadata.imagen.url"
            height="200px"
          ></v-img>
          <v-card-title
            class="text-h4"
            v-text='"$" + producto.metadata.precio'
            style="max-width: 310px;"
          >
          </v-card-title>

          <v-card-subtitle
            class="left text-h5"
            v-text="producto.metadata.nombre"
          >
          </v-card-subtitle>
        </v-card>
      </v-hover>
  </v-card>
</template>

<script>
// import Visuales from '@/servicios/Visuales'
import PageHeader from '@/components/Header.vue'
import ProductosService from '@/servicios/Productos'

export default {
  name: 'Principal',
  components: {
    PageHeader
  },
  methods: {
  },
  computed: {
    // source: {
    // get: function () {
    //   return this.$youtube.getIdFromURL(`${window.location.protocol}//www.youtube.com/watch?v=` + this.urlchido)
    // }
    // }
  },
  async mounted () {
    // this.links = (await Visuales.ObtenerLinks()).data
    this.productos = (await ProductosService.ObtenerProductos())
    if (this.productos.success) {
      this.load = false
    }
  },
  data () {
    return {
      load: true,
      productos: {}
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.left {
  text-align: left;
}
</style>
