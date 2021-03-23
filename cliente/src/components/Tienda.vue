<template>
  <v-card
    light
    :loading="load"
  >
    <v-card-title
      class="text-h4"
    >
      Tienda Boser
    </v-card-title>
    <v-card
      light
      flat
      class="ma-2 d-flex flex-wrap justify-center"
    >
      <!-- <v-divider></v-divider> -->
      <v-card
        v-for="(producto) in productos.data.objects"
        :key="producto._id"
        flat
        class="pointer"
        tile
        elevation="0"
      >
        <v-hover v-slot="{hover}">
          <v-card
            light
            :elevation="hover ? 12 : 2"
            :class="{ 'on-hover': hover} "
            class="ma-2"
            min-width="190"
            max-width="250"
            @click="navegarMercadoLibre(producto.metadata.link_mercadolibre)"
          >
            <v-img
              :src="producto.metadata.imagen.url"
              contain
              height="200px"
              :alt="producto.title"
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
    </v-card>
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
    selectIndex (Index) {
      this.ItemIndex = Index
    },
    navegarMercadoLibre (ruta) {
      window.open(ruta, '_blank')
    }
  },
  computed: {
  },
  async mounted () {
    this.productos = (await ProductosService.ObtenerProductos())
    if (this.productos.success) {
      this.load = false
    }
  },
  data () {
    return {
      load: true,
      productos: {},
      ItemIndex: null
    }
  }
  // jsonld () {
  //   return {
  //     "@context": "https://schema.org",
  //     "@type": "Product",
  //     "aggregateRating": {
  //       "@type": "AggregateRating",
  //       "ratingValue": "3.5",
  //       "reviewCount": "11"
  //     },
  //     "description": "0.7 cubic feet countertop microwave. Has six preset cooking categories and convenience features like Add-A-Minute and Child Lock.",
  //     "name": "Kenmore White 17\" Microwave",
  //     "image": "kenmore-microwave-17in.jpg",
  //     "offers": {
  //       "@type": "Offer",
  //       "availability": "https://schema.org/InStock",
  //       "price": "55.00",
  //       "priceCurrency": "USD"
  //     }
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.left {
  text-align: left;
}
</style>
