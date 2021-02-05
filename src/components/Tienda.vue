<template>
  <v-card>
      <v-card-title
        class="text-h4 titulo"
      >
        Productos
      </v-card-title>
      <v-divider></v-divider>
      <v-card>
          
      </v-card>
  </v-card>
</template>

<script>
// import Visuales from '@/servicios/Visuales'
import PageHeader from '@/components/Header.vue'

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
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
