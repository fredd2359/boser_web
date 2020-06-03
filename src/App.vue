<template>
  <div id="app">
    <v-app>
      <v-content>
        <page-header />
        <!-- Sección del cuerpo -->
        <v-container class="d-inline-block pa-2">
          <router-view/>
        </v-container>
      </v-content>
    </v-app>
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <div class="footer-widget">
              <div class="footer-widget-content">
                <div class="media">
                  <div class="media-left">
                    <img class="img1" src="http://localhost:5000/imagenes/logo.png"  style="width: 150px; " alt="...">
                      <p>Boser salseo futbolero es una empresa de youtube que comparte contenido deportivo y futbolero</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="footer-widget">
            <h3>CONTACTO</h3>
            <div class="footer-widget-content">
              <a href="mailto:sales@example.com" class="contact-link">sales@example.com</a>
              <a href="mailto:support@example.com" class="contact-link red"> support@example.com </a>
              <a href="tel:0121234" class="contact-link">(123) 456-789</a>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
        <div class="footer-widget">
          <h3>REDES SOCIALES</h3>
          <div class="footer-widget-content">
            <div class="images-gellary">
              <ul>
                <li><a href="#"><img src="http://localhost:5000/imagenes/redesfb.png" style="width: 85px; " alt="Instagram 01"></a></li>
                <li><a href="#"><img src="http://localhost:5000/imagenes/redesinsta.png" style="width: 85px; " alt="Instagram 02"></a></li>
                <li><a href="#"><img src="http://localhost:5000/imagenes/redestw.png" style="width: 85px; " alt="Instagram 03"></a></li>
                <li><a href="#"><img src="http://localhost:5000/imagenes/redeswhats.png" style="width: 85px; " alt="Instagram 04"></a></li>
                <li><a href="#"><img src="http://localhost:5000/imagenes/redesyt.png" style="width: 85px; " alt="Instagram 05"></a></li>
              </ul>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'
export default {
  name: 'App',
  components: {
    PageHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.responsive {
  width: 100%;
  height: auto;
}
.img1{
    width: 130px;
    position: absolute;
    margin-top: -25px;
    margin-left: 36px;
}
</style>
