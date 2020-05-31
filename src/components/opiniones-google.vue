<template>
  <section class="ftco-section testimony-section ftco-no-pt">
    <div>
      <div class="row justify-content-center mt-md-5 pt-5 mb-5">
        <div class="col-md-12 ftco-animate text-center justify-content-center align-items-center">
          <stars count="5" class="google-stars" />
        </div>
        <div class="container col-md-12 text-center heading-section ftco-animate">
          <h2 class="mx-4">4.9/5 estrellas recibidas por nuestros usuarios nos avalan</h2>
          <h5
            class="text-center mx-4"
          >Y nos hacen ser mejores cada dia. Puedes ver todos los comentarios en Google pero aqui tienes una pequeña muestra!</h5>
        </div>
      </div>
      <div class="row ftco-animate">
        <!--start: carrousel -->
        <div class="col-md-12">
          <div class="carousel-testimony owl-carousel ftco-owl">
            <div class="item">
              <div class="testimony-wrap text-center py-4 pb-5">
                <testimonial
                  name="Carva Carvicie"
                  review="Hemos estado encantados con el paso por Dolaretxe de nuestra hija June. Ha sido un año y medio muy bueno, se lo ha pasado genial y ha ido muy contenta, que es lo importante. El equipo de Dolaretxe un encanto y las instalaciones perfectas."
                />
              </div>
            </div>
            <div class="item">
              <div class="testimony-wrap text-center py-4 pb-5">
                <testimonial
                  name="Maria Villaverde Suanzes"
                  review="Nuestro bebe empezó en Dolaretxe con 11 meses, en seguida se adaptó y va feliz. Se nota que les quieren mucho. Olaia y Maria, sus profesoras, son cariñosas y súper profesionales. Todos los días hacen nuevas actividades y no paran de jugar. Se agradece que hagan fácil algo tan dificil como es separarte de tu bebe. 100% recomendable."
                />
              </div>
            </div>
            <div class="item">
              <div class="testimony-wrap text-center py-4 pb-5">
                <testimonial
                  name="Ainhoa Olano Iriarte"
                  review="Hemos estado encantados con Dolaretxe. El personal y las profesoras son unos grandes profesionales, y ello se refleja en lo contento que ha ido nuestro hijo este año."
                />
              </div>
            </div>
            <div class="item">
              <div class="testimony-wrap text-center py-4 pb-5">
                <testimonial
                  name="Celiña Ivañez"
                  review="Hola, mi puntuación para Dolaretxe, son 5 estrellas, El equipo de esta escuela infantil son grandes profesionales, y un encanto como personas, Mi hijo ha estado allí Super feliz y muy bien atendido, eskerrik asko"
                />
              </div>
            </div>
          </div>
        </div>
        <!-- end: carrousel -->
        <div class="col-md-12 ftco-animate pb-5">
          <div class="heading-section mt-md-5 text-center">
            <a
              class="btn btn-primary"
              href="https://goo.gl/maps/6qhGXF4kZ1yFzGpu5"
              rel="noopener"
              target="_blank"
            >Ver todas las reseñas en Google</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import template from "@/mixins/template";
export default {
  name: "component-google-opiniones",
  mixins: [
    //googlemap
    template
  ],
  created() {
    console.log("google-opinions::created");
  },
  mounted() {
    console.log("google-opinions::mounted");
    this.jQueryInit();
  },
  components: {
    stars: () => import("@/components/stars"),
    testimonial: () => import("@/components/testimonial")
  }
};
</script>

<style scoped>
</style>

<i18n>
{
  "es":{

  },
  "en":{
    
  },
  "eus":{
    
  }
}
</i18n>