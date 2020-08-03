<template>
    <div
        style="width:100%"
    >
        <v-footer
            dark
            padless
        >
            <v-card
                flat
                tile
                style="width:100%"
                class="blue-grey darken-4 white--text text-center"
            >
                <v-card-text>
                    <v-btn
                        v-for="icon in icons"
                        :key="icon"
                        class="mx-4 white--text"
                        icon
                    >
                        <v-icon size="24px">{{ icon }}</v-icon>
                    </v-btn>
                </v-card-text>
        <v-card-text class="white--text pt-0">
            Boser salseo futbolero es una empresa de youtube que comparte contenido deportivo y futbolero
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
            {{ new Date().getFullYear() }} — <strong>Boser_web</strong>
        </v-card-text>
        </v-card>
    </v-footer>
  </div>
    <!-- <div>
         <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-sm-4">
                        <div class="footer-widget">
                            <div class="footer-widget-content">
                                <div class="media">
                                    <div class="media-left">
                                        <img class="img1" src="http://localhost:5000/imagenes/logo.png"  style="width: 150px;display: inline-block" alt="...">
                                        <p style="display: inline-block">Boser salseo futbolero es una empresa de youtube que comparte contenido deportivo y futbolero</p>
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
    </div> -->
</template>
<script>
export default {
  name: 'footer',
  methods: {
  },
  data () {
    return {
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram'
      ]
    }
  }
}
</script>
<style>

</style>
