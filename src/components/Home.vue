<template>
  <div>
    <div class="hero-wrap hero-bg-color" data-stellar-background-ratio="0.5">
      <div class="overlay"></div>
      <div class="container hero-container">
        <div
          class="row no-gutters slider-text align-items-center justify-content-start hero-center"
          data-scrollax-parent="true"
        >
          <div
            class="col-lg-6 col-md-6 col-sm-6 col-xs-12 hero-row ftco-animate"
            data-scrollax=" properties: { translateY: '70%' }"
          >
            <h1 class="mb-4" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">
              Escuela Infantil.
              <br />
              <span>Dolaretexe</span>
              <br />Haurreskola
            </h1>
            <p class="mb-4" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">
              <span class="icon-calendar mr-2"></span>
              {{location}}
            </p>
            <p
              class="disclaimer"
            >Centro Autorizado por el Departamento de Educación del Gobierno Vasco</p>
            <badge class="mb-3" />
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 hero-row">
            <mapCta />
          </div>
        </div>
      </div>
    </div>

    <section class="ftco-section services-section dolar-gradient-2">
      <div class="container">
        <div class="row d-flex">
          <!-- start: quote -->
          <div class="col-md-12 align-self-stretch ftco-animate text-center">
            <div class="container col-md-12 text-center heading-section ftco-animate">
              <h2 class="mb-3" style="color:white;">Bienvenido a jugar</h2>

              <blockquote class="blockquote" style="color:white;">
                <p
                  class="mb-0"
                >"No puede existir trabajo eficaz ni satisfactorio sin juego; no puede existir pensamiento sólido ni saludable sin juego."</p>
                <footer class="blockquote-footer quote-author" style="color:white;">
                  Charles Dickens,
                  <cite title="Dolaretxe quote" class="quote-author">1854</cite>
                </footer>
              </blockquote>
            </div>
          </div>
          <!-- end: quote -->

          <!-- start: actividades list -->
          <div
            v-for="actividad in actividades"
            :key="actividad.id"
            class="col-md-3 align-self-stretch ftco-animate text-center"
          >
            <div class="media block-6 services d-block">
              <div class="icon">
                <span :class="actividad.icon"></span>
              </div>
              <div class="media-body">
                <h3 class="heading mb-3">{{actividad.title}}</h3>
                <p>{{actividad.description}}</p>
              </div>
            </div>
          </div>
          <!-- end: actividades list -->
        </div>
      </div>
    </section>

    <opiniones />
    <matriculaSection v-if="layout.matriculaAbierta" />

    <section class="ftco-section pt-5 ftco-no-pb">
      <div class="container">
        <div class="row no-gutters">
          <div
            class="col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center"
            v-bind:style="{ backgroundImage: 'url(' + require('@/assets/images/landing/01.jpg') + ')' }"
          ></div>
          <div class="col-md-7 wrap-about py-md-5 ftco-animate">
            <div class="heading-section mb-5 pt-5 pl-md-5">
              <div>
                <h2 class="mb-4">Visita nuestro centro!</h2>
              </div>
              <p
                class="justified font-20"
              >Somos un experimentado centro, con más de 10 años de experiencia en Educación Infantil de 0 a 3 años en la calle Prim, a dos minutos de la Plaza Unamuno del Casco Viejo, Bilbao.</p>
              <p>
                <router-link
                  :to="{name: 'visitavirtual'}"
                  class="btn btn-primary mt-1 mr-1"
                >Empezar visita virtual</router-link>
                <router-link
                  :to="{name: 'contact'}"
                  class="btn btn-primary mt-1"
                >Contacta con nosotros</router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="ftco-section pt-5 ftco-no-pb">
      <div class="container">
        <div class="row no-gutters">
          <div class="col-md-12 wrap-about py-md-5 ftco-animate">
            <div class="heading-section mb-5 pt-5 pl-md-5">
              <div>
                <h2 class="mb-4">Servicios</h2>
              </div>
              <p class="pr-md-5 mr-md-5 justified font-20">
                Nuestro horario, de lunes a viernes de
                <strong>7:30</strong> a
                <strong>17:00</strong> con posibilidad de ampliaciones en funcion tus necesidades.
              </p>
              <p class="pr-md-5 mr-md-5 justified font-20">
                Disponemos de diferentes jornadas escolares para adaptarse mejor a las necesidades de los padres y los niños. Consulta la disponibilidad de plazas para el curso actual y
                <strong>¡Echa un vistazo a las jornadas en detalle!</strong>
              </p>
              <p>
                <router-link :to="{name:'jornadas'}" class="btn btn-primary">Ver jornadas</router-link>
              </p>
            </div>
          </div>
          <div
            v-if="false"
            class="col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center"
            v-bind:style="{ backgroundImage: 'url(' + require('@/assets/images/landing/02.jpg') + ')' }"
          ></div>
        </div>
      </div>
    </section>

    <section class="ftco-section pt-5 mb-2">
      <div class="container">
        <div class="row no-gutters">
          <div
            class="col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center"
            v-bind:style="{ backgroundImage: 'url(' + require('@/assets/images/landing/03.jpg') + ')' }"
          ></div>
          <div class="col-md-7 wrap-about py-md-5 ftco-animate">
            <div class="heading-section mb-5 pt-5 pl-md-5">
              <div>
                <h2 class="mb-4">Nuestra metodología</h2>
              </div>
              <p
                class="justified font-20"
              >A través del juego conseguimos un ambiente agradable, divertido e integrador lleno de momentos placenteros que favorecen el aprendizaje, haciendo que el niño o niña eleve su autoestima y se sienta querido y seguro.</p>
              <p>
                <router-link
                  :to="{name: 'actividades'}"
                  class="btn btn-primary"
                >Conoce nuestras actividades</router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <unicef />

    <section class="ftco-section ftco-gallery ftco-no-pt">
      <div class="container-fluid px-4">
        <div class="row justify-content-center">
          <div class="col-md-7 text-center heading-section ftco-animate">
            <h2 class="mb-3">Acercate y conoce Dolaretxe</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="text-center">
              <p
                class="contact-text font-20"
              >Nos encantaría conocerte a ti y a tu/s peque/s. Ponte en contacto con nosotras para comprobar disponibilidad de plazas y concertar una cita para conocer nuestra guarde. Os invitamos a conocer la Escuela Infantil Dolaretxe Haurreskola, donde os proporcionaremos una asistencia más personalizada y os informaremos de todos servicios y tarifas que mejor se adapten a vuestras necesidades.</p>
              <router-link
                class="btn dolar-gradient-orangred py-3 px-4 btn-matricula"
                :to="{name:'contact'}"
              >Contacta con nosotros</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import template from "@/mixins/template";
import axios from "axios";

export default {
  name: "home-component",
  props: {
    msg: String
  },
  mixins: [template],
  data: () => {
    return {
      layout: {
        matriculaAbierta: process.env.VUE_APP_MATRICULA_ABIERTA == "true"
      },
      location: "Bilbao. Casco Viejo, Bizkaia",
      actividades: [
        {
          id: 0,
          icon: "flaticon-like",
          title: "Centro autorizado",
          description:
            "Autorizado por el Departamento de Educación del Gobierno Vasco"
        },
        {
          id: 1,
          icon: "flaticon-magic-wand",
          title: "Zona de juegos",
          description: "Con patio exterior vallado para jugar los dias de sol"
        },
        {
          id: 2,
          icon: "flaticon-calendar",
          title: "+10 años",
          description: "10 años de experiencia avalada por nuestros clientes."
        },
        {
          id: 3,
          icon: "flaticon-diploma",
          title: "Calidad",
          description:
            "Calidad en el servicio y colaboradores oficiales de UNICEF"
        },
        {
          id: 4,
          icon: "flaticon-time",
          title: "Flexibilidad Horaria",
          description: "Horarios de entrada y salida adaptables y flexibles"
        },
        {
          id: 5,
          icon: "flaticon-calendar-1",
          title: "11 meses",
          description: "Calendario escolar de hasta 11 mensualidades"
        },
        {
          id: 6,
          icon: "flaticon-worldwide",
          title: "Trilingue",
          description: "Educación en Castellano, Euskera e Ingles"
        }
      ]
    };
  },
  created() {
    console.log("home::created");
  },
  mounted() {
    console.log("home::mounted");
    this.jQueryInit();
  },
  components: {
    featureBox: () => import("@/components/featureBox"),
    mapCta: () => import("@/components/mapCta"),
    matriculaSection: () => import("@/components/matriculaSection"),
    opiniones: () => import("@/components/opiniones-google"),
    unicef: () => import("@/components/sections/section-unicef"),
    badge: () => import("@/components/badge")
  }
};
</script>

<style lang="css" scoped>
.google-stars {
  margin-bottom: 60px;
}

.font-20 {
  font-size: 20px;
}
.quote-author {
  font-size: 14pt;
  font-weight: lighter;
}
.img-example {
  max-width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 3px;
  outline: none;
}
.contact-text {
  width: 100%;
  max-width: 800px;
  text-align: justify;
}
.disclaimer {
  max-width: 400px;
}
.hero-wrap {
  height: auto;
  padding-bottom: 20px;
}

.slider-text {
  height: 690px;
}

.hero-center {
  text-align: left;
}
.hero-row {
  padding: 0px;
}

@media (min-width: 0px) {
  .slider-text {
    height: 990px;
  }
  .hero-row {
    padding-top: 20px;
  }
  .hero-center {
    text-align: center;
    text-align: -webkit-center;
    text-align: -moz-center;
  }
}
/*Small devices (landscape phones, 576px and up)*/
@media (min-width: 576px) {
  .hero-row {
    padding: 5px;
  }
  .hero-center {
    text-align: left;
  }
  .disclaimer {
    max-width: 100%;
  }
  .slider-text {
    height: 555px;
  }
  .hero-container {
    padding-left: 20px;
    max-width: 100%;
    padding-right: 20px;
  }
  .slider-text h1 span {
    font-size: 37px !important;
  }
}

/*Medium devices (tablets, 768px and up)*/
@media (min-width: 768px) {
  .hero-row {
    padding: 5px;
  }
  .slider-text {
    height: 565px;
  }
  .hero-container {
    padding-left: 20px;
    max-width: 100%;
    padding-right: 20px;
  }
  .slider-text h1 span {
    font-size: 50px !important;
  }
}

/*Large devices (desktops, 992px and up)*/
@media (min-width: 992px) {
  .hero-row {
    padding-top: 50px;
  }
  .hero-container {
    padding-left: 10%;
    max-width: 100%;
    padding-right: 10%;
  }
  .slider-text {
    height: 680px !important;
  }
}

/*Extra large devices (large desktops, 1200px and up)*/
@media (min-width: 1200px) {
  .hero-row {
    padding-top: 80px;
  }
  .slider-text {
    height: 960px;
  }
  .hero-container {
    padding-left: 10%;
    padding-right: 10%;
    max-width: 1140px;
  }
}
@media (min-width: 1600px) {
  .hero-row {
    padding-top: 80px;
  }
  .slider-text {
    height: 960px;
  }
  .hero-container {
    padding-left: 10%;
    padding-right: 10%;
    max-width: 1640px;
  }
}
</style>

<style scoped lang="scss">
</style>