<template>
  <div>
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
                        <i class="far fa-trash-alt"></i>
                      </v-btn>
                    </v-card-title>
                    </v-img>
                  </v-card>
                </v-col>
              </v-row>
              <v-row>
                <v-col block>
                  <v-alert
                    class="mt-2"
                    type="success"
                    :value="successalert"
                    transition="scale-transition"
                  >
                    {{mensaje}}
                  </v-alert>
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
              <v-row>
                <v-col block>
                  <v-alert
                    class="mt-2"
                    type="success"
                    :value="successalertlink"
                    transition="scale-transition"
                  >
                    {{mensaje}}
                  </v-alert>
                </v-col>
              </v-row>
              <!-- Seccion de modificación de links  -->
              <v-row>
                <v-col class="col-12" v-for="enlace in links.links" :key="enlace._id">
                  <form>
                    <v-row class="justify-center">
                      <v-text-field
                        v-model="enlace.ruta"
                        label="Teclear Link"
                      ></v-text-field>
                      <v-btn
                        color="primary"
                        dark
                        @click="editarLink(enlace, enlace.ruta)"
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
    imagenes: [{
      _id: 'asd',
      rutaWeb: 'http://localhost:5000/imagenes/estadio.jpg'
    }],
    links: [{
      _id: '123',
      ruta: 22
    }],
    successalert: false,
    successalertlink: false,
    erroralert: false,
    erroralertlink: false,
    mensajeError: '',
    mensaje: ''
  }),
  methods: {
    async borrarImagen () {
      // Código para el borrado lógico de imagen
      // Primero irá al servidor a borrarla y despues si todo sale bien se borra en el cliente
      if (this._idImagenSel === undefined || this._idImagenSel === 0) {
        // TODO: Implementar mensaje de error para cuando no manda nada
        // o asignarle la primer imagen de una vez? yes
        return false
      }
      // TODO: Probar mensajes de error al eliminar
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
        this.mensaje = 'Se ha eliminado la imagen!'
        this.successalert = true
        this.hide_successalert()
        return true
      }
      this.mensajeError = 'Error, algo ha salido mal, contacte al administrador'
      this.erroralert = true
      this.hide_erroralert()
      return false
    },
    async editarLink (link, newRuta) {
      // Llamar a base de datos para cambio de link
      const response = (await Admin.editarLink({
        _id: link._id,
        ruta: newRuta
      }, this.$store.state.token))
      if (response.success) {
        this.mensaje = 'Se ha modificado el Link!'
        this.successalertlink = true
        this.hide_successalert()
        return true
      }
      this.mensajeError = 'Error, algo ha salido mal, contacte al administrador'
      this.erroralert = true
      this.hide_erroralert()
      return false
    },
    async cambiarImagen (imagen) {
      this.imagenSel = imagen.metadata.url.toString()
      this._idImagenSel = imagen._id.toString()
    },
    async subirImagen () {
      // // Llama a back para subir imagen
      const response = (await Admin.subirImagen(this.imagenSubir, this.$store.state.token))
      if (response.success) {
        this.imagenes = []
        this.imagenes = (await Visuales.CarouselImgs()).data
        this.successalert = !this.successalert
        this.mensaje = 'La imagen se ha sigo guardada correctamente'
        this.hide_successalert()
        return true
      }
      this.erroralert = true
      this.mensajeError = 'Error, algo ha salido mal, contacte al adminsitrador'
      this.hide_erroralert()
      return false
    },
    // TODO: automatizar eventos de hide
    hide_successalert: function (event) {
      // `event` is the native DOM event
      window.setInterval(() => {
        this.successalert = false
        this.successalertlink = false
      }, 7000)
    },
    hide_erroralert: function (event) {
      window.setInterval(() => {
        this.erroralert = false
        this.erroralertlink = false
      }, 7000)
    }
  },
  async mounted () {
    if (!this.$store.state.isUserLoggedIn) {
      // Si no está autenticado se redirige al login
      window.location.href = `${location.origin}/login`
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
