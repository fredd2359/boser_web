<template>
  <v-container column>
    <v-row style='margin-top: 5%'>
      <v-expansion-panels
        :accordion=true
        :multiple=true
        :focusable=true
        :hover=true
        :value="activos"
      >
        <v-expansion-panel>
          <v-expansion-panel-header>Imágenes</v-expansion-panel-header>
          <v-expansion-panel-content>
            <!-- Aqui se pondrá la lista de las 10 imagenes y  -->
            <!-- :src="require(`${card}`)" -->
            <v-row class="d-flex justify-center">
              <v-col
                :cols= 6
              >
                <v-card>
                  <v-img
                    :src= "imagenSel"
                    class="white--text align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    height="200px"
                  >
                  <v-card-title class="justify-end">
                    <v-btn
                      class="mx-2"
                      fab
                      dark
                      small
                      color="pink"
                      @click="borrarImagen"
                    >
                      <!-- <v-icon dark>mdi-heart</v-icon> -->
                      <i class="far fa-trash-alt"></i>
                    </v-btn>
                  </v-card-title>
                  </v-img>
                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col block>
                <v-simple-table>
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-left col-nombre">Imagen</th>
                        <th class="text-left col-fecha">Fecha de Subida</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="imagen in imagenes.imagenes" :key="imagen.name" @click="cambiarImagen(imagen)">
                        <td class="text-left">{{ imagen.nombre }}</td>
                        <td class="text-left">{{ imagen.fechaCreacion }}</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-col>
            </v-row>
            <v-row class="">
              <v-col class="col-12">
                <form @submit.prevent="subirImagen" enctype="multipart/form-data">
                  <v-file-input accept="image/*" v-model="imagenSubir" label="Subir una Imagen"></v-file-input>
                  <v-btn
                    color="success"
                    dark
                    @click="subirImagen"
                  >
                    Subir +
                  </v-btn>
                </form>
              </v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>Links</v-expansion-panel-header>
          <v-expansion-panel-content>
            <!-- Aqui se pondrá la modificiación de links de la pagina principal  -->
            <v-row>
              <v-col class="col-12" v-for="link in links.links" :key="link.ruta">
                <form>
                  <v-row v-model="link._id" class="justify-center">
                    <v-text-field
                      v-model="link.ruta"
                      label="Teclear Link"
                    ></v-text-field>
                    <v-btn
                      color="primary"
                      dark
                      @click="editarLink(link._id)"
                    >
                      <i class="far fa-edit"></i>
                    </v-btn>
                  </v-row>
                </form>
              </v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
    <v-row>
      <v-card>
        <v-img
          :src="urlImg"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="200px"
        >
        <v-card-title class="justify-end">
          <v-btn
            class="mx-2"
            fab
            dark
            small
            color="pink"
            @click="borrarImagen"
          >
            <!-- <v-icon dark>mdi-heart</v-icon> -->
            <i class="far fa-trash-alt"></i>
          </v-btn>
        </v-card-title>
        </v-img>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import Admin from '@/servicios/Admin'
import Visuales from '@/servicios/Visuales'
export default {
  data: () => ({
    activos: [0],
    imagenSel: 'http://localhost:5000/imagenes/estadio.jpg',
    _idImagenSel: 0,
    imagenSubir: [],
    urlImg: 'http://localhost:5000/imagenes/estadio.jpg',
    imagenes: [{
      _id: 'asd',
      rutaWeb: 'http://localhost:5000/imagenes/estadio.jpg'
    }],
    links: [{
      _id: '123',
      ruta: 22
    }]
    // userRules: [
    //   v => !!v || 'Usuario es requerido'
    // ],
    // passRules: [
    //   v => !!v || 'Contaseña es requerida'
    // ]
  }),
  methods: {
    async borrarImagen () {
      // Código lógico para el borrado de imagen
      // Primero irá al servidor a borrarla y despues si todo sale bien se borra en el cliente
      const response = (await Admin.borrarImagen(this._idImagenSel)).data
      console.log(response)
    },
    async editarLink (idLink, newRuta) {
      console.log('Entra a metodo editarLink')
      console.log('idLink: ' + idLink)
      const response = await Admin.editarLink({
        _id: idLink,
        newruta: newRuta
      })
      console.log(response)
      return true
      // Llamar a base de datos para cambio de link

      // Cuando se obtenga la respuesta se actuliza link en posision que se mando modficiar
    },
    async cambiarImagen (imagen) {
      console.log(imagen._id.toString())
      this.imagenSel = imagen.rutaWeb.toString()
      this._idImagenSel = imagen._id.toString()
    },
    async subirImagen () {
      console.log('ImagenSel: ')
      console.log(this.imagenSel)
      // Llama a back para subir imagen
      const response = await Admin.subirImagen(this.imagenSel)
      console.log(response)
      // Se envia con la nomencaltura de memes/img.ext
      return {
        msg: 'Imagen guardada',
        success: true
      }
    }
  },
  async mounted () {
    this.imagenes = (await Visuales.CarouselImgs()).data
    this.links = (await Visuales.ObtenerLinks()).data
    const a = this.imagenes.imagenes[0].rutaWeb.toString()
    console.log(a)
    if (typeof a === 'string') {
      console.log('entra a if')
    }
    this.imagenSel = a
    // this.imagenes = resMemes.imagenes
    // console.log(process.env.host + ' ' + process.env.port)
    console.log(this.imagenes.imagenes[0].rutaWeb)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.col-nombre{
  width: 70%
}

.col-fecha{
  width: 30%
}
</style>
