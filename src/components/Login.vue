<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <!-- <h1>Pagina de login</h1>
        <input type='text' name='user' v-model="user" placeholder='Usuario'>
        <input type='password' name='password' v-model="password" placeholder='Contraseña'>
        <button @click="login" >Iniciar Sesión</button> -->
        <v-toolbar flat dense class="green accent-3">
          <v-toolbar-title>Log In</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          >
            <v-text-field
              v-model="user"
              :rules="userRules"
              label="Usuario"
              required
            ></v-text-field>

            <v-text-field
              v-model="password"
              :rules="passRules"
              label="Contraseña"
              required
            ></v-text-field>

            <!-- TODO: Podría ser un recuerdame?  -->
            <!-- <v-checkbox
              v-model="checkbox"
              :counter="10"
              :rules="[v => !!v || 'You must agree to continue!']"
              label="Do you agree?"
              required
            ></v-checkbox> -->

            <v-btn
              block
              color="success"
              class="mr-4"
              @click="login"
            >
              Iniciar Sesión
            </v-btn>
            <v-col cols="12" class="mt-12">
              <v-tooltip v-model="show" top>
                <span>Programmatic tooltip</span>
              </v-tooltip>
            </v-col>
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
  </v-layout>
</template>

<script>
import Authentication from '@/servicios/Authentication'
export default {
  name: 'HelloWorld',
  data: () => ({
    show: false,
    valid: true,
    user: '',
    password: '',
    userRules: [
      v => !!v || 'Usuario es requerido'
    ],
    passRules: [
      v => !!v || 'Contaseña es requerida'
    ]
  }),
  methods: {
    async login () {
      console.log(`Empieza el metodo ${this.user}, valid: ${this.valid}`)
      const response = await Authentication.login({
        user: this.user,
        password: this.password
      })
      console.log('Respuesta: ' + response)
      // Cuando la petición sea exitosa
      // if(response.data)...
      this.$router.push('admin')
      // console.log(response.data)
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
