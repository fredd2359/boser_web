<template>
  <v-container>
    <v-row class="justify-center">
      <v-col
        :cols = 8
      >
        <v-carousel
          cycle
          height="400"
          hide-delimiter-background
          interval=5000
          show-arrows-on-hover
        >
          <v-carousel-item
            :src= "imagen.pathImagen"
            reverse-transition="fade-transition"
            transition="fade-transition"
            v-for="(imagen, i) in imagenes"
            :key="i"
          >
            <!-- <v-sheet
              height="100%"
            >
              <v-row
                class="fill-height"
                align="center"
                justify="center"
              >
                <div class="display-3">{{  }} Slide</div>
              </v-row>
            </v-sheet> -->
          </v-carousel-item>
        </v-carousel>
        <div class="section" id="carousel">
          <div class="container">
            <div class="row">
              <div class="col-md-12 mr-auto ml-auto">
                <!-- Carousel Card -->
                <div class="card card-raised card-carousel">
                  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="3000">
                      <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1" class=""></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2" class=""></li>
                      </ol>
                      <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img class="d-block w-100" src="http://localhost:5000/imagenes/estadio.jpg"
                          alt="First slide">
                        <div class="carousel-caption d-none d-md-block">
                        </div>
                      </div>
                      <div class="carousel-item">
                        <img class="d-block w-100" src="memes/DBStrix.jpg"  alt="Second slide">
                          <div class="carousel-caption d-none d-md-block">
                          </div>
                      </div>
                      <div class="carousel-item">
                        <img class="d-block w-100" src="memes/ISKhan.jpg" alt="Third slide">
                        <div class="carousel-caption d-none d-md-block">
                        </div>
                      </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                      <i class="material-icons">keyboard_arrow_left</i>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                      <i class="material-icons">keyboard_arrow_right</i>
                      <span class="sr-only">Next</span>
                    </a>
                  </div>
                </div>
                <!-- End Carousel Card -->
              </div>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => ({
    imagenes: [
      {
        nombre: 'nombre1',
        fecha: 'fecha1',
        pathImagen: 'http://localhost:5000/imagenes/estadio.jpg'
      },
      {
        nombre: 'nombre2',
        fecha: 'fecha2',
        pathImagen: 'http://localhost:5000/imagenes/1.jpg'
      }
    ]
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
