<template>
  <div>
    <page-header class="width: 100%" />
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
                      height="100%"
                    >
                    <v-card-title class="justify-end">
                      <v-btn
                        class="mx-2"
                        fab
                        dark
                        small
                        color="pink"
                        @click="borrarImagen()"
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
                        <tr v-for="imagen in imagenes.files" style="cursor: pointer;" :key="imagen._id" @click="cambiarImagen(imagen, imagen._id)">
                          <td class="text-left">{{ imagen.filename }}</td>
                          <td class="text-left">{{ imagen.uploadDate }}</td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-col>
              </v-row>
              <v-row class="">
                <v-col class="col-12">
                  <form enctype="multipart/form-data">
                    <v-file-input accept="image/*" type="file" v-model="imagenSubir" label="Subir una Imagen"></v-file-input>
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
      <!-- <v-row>
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
              <i class="far fa-trash-alt"></i>
            </v-btn>
          </v-card-title>
          </v-img>
        </v-card>
      </v-row> -->
    </v-container>
  </div>
</template>

<script>
import Admin from '@/servicios/Admin'
import Visuales from '@/servicios/Visuales'
import PageHeader from '@/components/Header.vue'

export default {
  name: 'admin',
  components: {
    PageHeader
  },
  data: () => ({
    activos: [0],
    imagenSel: '',
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
      if (this._idImagenSel === undefined || this._idImagenSel === 0) {
        // TODO: Implementar mensaje de error para cuando no manda nada
        // o asignarle la primer imagen de una vez? yes
        return false
      }
      // TODO: implementar mensajes de error al eliminar
      const response = (await Admin.eliminarImagen(this._idImagenSel, this.$store.state.token))
      if (response.status === 201) {
        if (this.imagenes.files.length >= 1) {
          this.imagenes.files.splice(this.imagenes.files.findIndex(x => x._id === this._idImagenSel), 1)
          if (this.imagenes.files.length > 0) {
            // Si no va a existir imagenes, se queda con la ultima a borrar
            this._idImagenSel = this.imagenes.files[0]._id
            this.imagenSel = this.imagenes.files[0].metadata.url
          }
        }
        return true
      }
      // TODO: Implementar mensaje de error al borrar
      return false
    },
    async editarLink (idLink, newRuta) {
      const response = await Admin.editarLink({
        _id: idLink,
        newruta: newRuta
      })
      if (response.sucess) {
        return true
      }
      return false
      // Llamar a base de datos para cambio de link

      // Cuando se obtenga la respuesta se actuliza link en posision que se mando modficiar
    },
    async cambiarImagen (imagen) {
      this.imagenSel = imagen.metadata.url.toString()
      this._idImagenSel = imagen._id.toString()
    },
    async subirImagen () {
      // // Llama a back para subir imagen
      const response = (await Admin.subirImagen(this.imagenSubir, this.$store.state.token))
      if (response.success) {
        // TODO: implementar mensaje de OK
        this.imagenes = []
        this.imagenes = (await Visuales.CarouselImgs()).data
        return true
      }
      return false
      // return {
      //   msg: 'Imagen guardada',
      //   success: true
      // }
    }
  },
  async mounted () {
    if (!this.$store.state.isUserLoggedIn) {
      this.$router.push({
        name: 'Login'
      })
    }
    this.imagenes = (await Visuales.CarouselImgs()).data
    this.links = (await Visuales.ObtenerLinks()).data
    if (this.imagenes.files.length === 0) {
      // TODO: implementar mensaje de que no hay imagenes
    }
    if (this.imagenes.files.length > 0) {
      this._idImagenSel = this.imagenes.files[0]._id
      this.imagenSel = this.imagenes.files[0].metadata.url
    }
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
