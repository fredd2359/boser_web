<template>
  <v-container column>
    <v-flex class="container " style="margin-top: 10%">
      <div class="white elevation-2">
        <v-toolbar
          flat
          dense
          dark
          :src='servidor + "/imagenes/estadio.jpg"'
        >
          <v-toolbar-title>Log In</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          sumbit="login"
          >
            <v-text-field
              v-model="user"
              :rules="userRules"
              label="Usuario"
              :sm= 12
              :md= 6
              :lg= 6
              required
            ></v-text-field>

            <v-text-field
              v-model="password"
              :rules="passRules"
              :type="'password'"
              label="Contraseña"
              required
            ></v-text-field>

            <v-alert
              dense
              outlined
              type="error"
              :value = mostrarAlert
            >
              {{mensaje}}
            </v-alert>

            <v-btn
              color="primary"
              class="mr-4"
              @click="login"
            >
              Iniciar Sesión
            </v-btn>
          </v-form>
        </div>
      </div>
    </v-flex>
  </v-container>
</template>

<script>
import Authentication from '@/servicios/Authentication'
export default {
  name: 'HelloWorld',
  data: () => ({
    show: true,
    valid: true,
    mensaje: '',
    mostrarAlert: false,
    user: '',
    servidor: process.env.VUE_APP_SERVER,
    password: '',
    userRules: [
      v => !!v || 'Usuario es requerido'
    ],
    passRules: [
      v => !!v || 'Contraseña es requerida'
    ]
  }),
  methods: {
    async login () {
      const response = (await Authentication.login({
        user: this.user,
        password: this.password
      }))
      if (response.status === 201) {
        this.mensaje = response.mensaje
        this.mostrarAlert = false
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', this.user)
        // this.$router.push('admin')
        window.location.href = `${location.origin}/admin`
      } else {
        this.mostrarAlert = true
        this.mensaje = response.data.message
      }
    },
    validate () {
      this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    }
  },
  async mounted () {
    if (this.$store.state.isUserLoggedIn) {
      window.location.href = `${location.origin}/admin`
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
