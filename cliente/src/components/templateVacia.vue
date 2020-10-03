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
            
          </v-col>
        </v-row>
        <v-row class="pt-3">
          <v-col class="pb-0">
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
import PageFoot from '@/components/Foot'
import PageRedesSociales from '@/components/RedesSociales'

export default {
  name: 'Principal',
  components: {
    PageHeader,
    PageFoot,
    PageRedesSociales
  },
  methods: {
  },
  computed: {
    source: {
      // get: function () {
      //   return this.$youtube.getIdFromURL(`${window.location.protocol}//www.youtube.com/watch?v=` + this.urlchido)
      // }
    }
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
