<template>
  <v-container column>
    <v-flex class="container " style="margin-top: 10%">
      <div class="white elevation-2">
        <!-- <h1>Pagina de login</h1>
        <input type='text' name='user' v-model="user" placeholder='Usuario'>
        <input type='password' name='password' v-model="password" placeholder='Contraseña'>
        <button @click="login" >Iniciar Sesión</button> -->
        <v-toolbar flat dense dark src="http://localhost:5000/imagenes/estadio.jpg">
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
            <!-- TODO: Podría ser un recuerdame?  -->
            <!-- <v-checkbox
              v-model="checkbox"
              :counter="10"
              :rules="[v => !!v || 'You must agree to continue!']"
              label="Do you agree?"
              required
            ></v-checkbox> -->

            <v-btn
              color="primary"
              class="mr-4"
              @click="login"
            >
              Iniciar Sesión
            </v-btn>
            <!-- <v-col cols="12" class="mt-12">
              <v-tooltip v-model="show">
                <span>Programmatic tooltip</span>
              </v-tooltip>
            </v-col> -->
            <!-- <v-btn
              :disabled="!valid"
              color="error"
              class="mr-4"
              @click="reset"
            >
              Reset Form
            </v-btn>

            <v-btn
              color="warning"
              @click="resetValidation"
            >
              Reset Validation
            </v-btn> -->
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
      const res1 = (await Authentication.login({
        user: this.user,
        password: this.password
      }))

      if (res1.status === 201) {
        this.mensaje = res1.data.mensaje
        this.mostrarAlert = false
        this.$router.push('admin')
      }
      this.mostrarAlert = true
      this.mensaje = res1.data.response.data.message
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
