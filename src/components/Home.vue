<template>
  <div>
    <div class="hero-wrap hero-bg-color" data-stellar-background-ratio="0.5">
      <div class="overlay"></div>
      <div class="container hero-container">
        <div
          class="row no-gutters slider-text align-items-center justify-content-start hero-center"
          data-scrollax-parent="true"
        >
          <div :style="{'background-image':'url(/img/01.87944593.jpg)'}"
            class="col-lg-6 col-md-6 col-sm-6 col-xs-12 hero-row ftco-animate"
            data-scrollax=" properties: { translateY: '70%' }"
          >
            <h1 class="mb-4" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">
              Escuela Infantil
              <br />
              <span>Dolaretxe</span>
              <br />Haur Eskola
            </h1>
            <p class="mb-4" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">
              <span class="icon-calendar mr-2"></span>
              {{$t('location')}}
            </p>
            <p class="disclaimer">{{$t("centro_autorizado")}}</p>
            <badge class="mb-3" />
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 hero-row ftco-animate">
            <div class="header-img" v-bind:style="{ backgroundImage: 'url(' + require('@/assets/images/landing/01.jpg') + ')' }">
          </div>
          </div>
        </div>
      </div>
    </div>

    <section class="pt-5 pb-5 dolar-gradient-2">
      <div class="container">
        <div class="row d-flex">
          <!-- start: quote -->
          <div class="col-md-12 align-self-stretch ftco-animate text-center">
            <div class="container col-md-12 text-center heading-section ftco-animate">
              <h2 class="mb-3" style="color:white;">{{$t('bienvenido_a_jugar')}}</h2>

              <blockquote class="blockquote" style="color:white;">
                <p class="mb-0">"{{$t('quote_text')}}"</p>
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
            v-if="layout.covidMode"
            class="col-md-3 align-self-stretch ftco-animate text-center"
          >
            <div
              class="media block-6 services d-block card-activity"
              :class="{'card-activity-none':!covidItem.square}"
            >
              <div class="icon">
                <span :class="covidItem.icon"></span>
              </div>
              <div class="media-body">
                <h3 class="heading mb-3">{{covidItem.title}}</h3>
                <p>{{covidItem.description}}</p>
              </div>  
            </div>
          </div>
          <div
            v-for="actividad in actividades"
            :key="actividad.id"
            class="col-md-3 align-self-stretch ftco-animate text-center"
          >
            <div
              class="media block-6 services d-block card-activity"
              :class="{'card-activity-none':!actividad.square}"
            >
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

    <agendaDigital />
    <opiniones />
    <matriculaSection v-if="layout.matriculaAbierta" />

    <section class="ftco-section pt-5 ftco-no-pb">
      <div class="container">
        <div class="row no-gutters">
          <div class="col-md-6">
          <mapCta />
          </div>
          <div class="col-md-6 wrap-about ftco-animate">
            <div class="heading-section mb-5 pt-5 pl-md-5">
              <div>
                <h2 class="mb-4">{{$t('title_visita_centro')}}</h2>
              </div>
              <p class="justified font-20">{{$t('description_centro')}}</p>
              <p>
                <router-link
                  :to="{name: 'visitavirtual'}"
                  class="btn btn-primary mt-1 mr-1"
                >{{$t('empezar_visita')}}</router-link>
                <router-link
                  :to="{name: 'contact'}"
                  class="btn btn-primary mt-1"
                >{{$t('contactanos')}}</router-link>
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
                <h2 class="mb-4">{{$t('servicios_title')}}</h2>
              </div>
              <p class="pr-md-5 mr-md-5 justified font-20">{{$t('servicios_description')}}</p>
              <p class="pr-md-5 mr-md-5 justified font-20">{{$t('servicios_description_2')}}</p>
              <p>
                <router-link :to="{name:'jornadas'}" class="btn btn-primary">{{$t('ver_jornadas')}}</router-link>
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
                <h2 class="mb-4">{{$t('metodologia_title')}}</h2>
              </div>
              <p class="justified font-20">{{$t('metodologia_description')}}</p>
              <p>
                <router-link
                  :to="{name: 'escuela', hash: '#actividades'}"
                  class="btn btn-primary"
                >{{$t('conoce_actividades')}}</router-link>
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
            <h2 class="mb-3">{{$t('acercate_title')}}</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="text-center">
              <p class="contact-text font-20">{{$t('acercate_desc')}}</p>
              <router-link
                class="btn dolar-gradient-orangred py-3 px-4 btn-contact"
                :to="{name:'contact'}"
              >{{$t('acercate_link')}}</router-link>
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
  computed: {
    actividades: function(){
      return this.$t('actividades')
    },
    covidItem: function(){
      return this.$t('covidItem')
    }
  },
  data: () => {
    return {
      layout: {
        matriculaAbierta: process.env.VUE_APP_MATRICULA_ABIERTA == "true",
        covidMode: process.env.VUE_APP_CORONAVIRUS_MODE_ON == "true"
      }
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
    badge: () => import("@/components/badge"),
    agendaDigital: () => import("@/components/agendaDigital")
  }
};
</script>

<style lang="css" scoped>
.card-activity {
  border: 5px;
  border-color: #e4e4e4;
  border-style: dashed;
  padding: 10px;
  height: 250px;
  max-height: 280px;
  padding-top: 20px;
}

.card-activity-none {
  border-color: #e4e4e400;
  padding-top: 0px;
}

.card-activity p {
  text-align: center;
}

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

.btn-contact {
  color: #fff;
  font-weight: 700;
  font-size: 17pt;
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
.header-img {
  min-height: 485px;
  background-repeat: no-repeat;
  height: auto;
  max-height: 800px;
  border-radius: 11px;
  border-style: solid;
  border-color: #b09cb2;
  border-width: 7px;
  background-position: center;
  background-size: cover;
  border-radius: 16px;
  border-image-slice: 1;
  border-image-source: linear-gradient(90deg, rgb(249, 144, 26) 0%, rgb(246, 71, 75) 50%, rgb(184, 121, 174) 100%);
 }
</style>

<i18n>
{
	"es": {
		"location": "Bilbao. Casco Viejo, Vizcaya",
		"centro_autorizado": "Centro Autorizado por el Departamento de Educación del Gobierno Vasco",
		"bienvenido_a_jugar": "Bienvenido a jugar",
    "quote_text": "No puede existir trabajo eficaz ni satisfactorio sin juego; no puede existir pensamiento sólido ni saludable sin juego.",
    "covidItem" : {
        "id": 0,
        "icon": "icon-medkit",
        "title": "COVID-19",
        "description": "Medidas de higiene y protección frente al COVID-19",
        "square": true
      },
		"actividades": [{
				"id": 1,
				"icon": "flaticon-like",
				"title": "Centro autorizado",
				"description": "Autorizado por el Departamento de Educación del Gobierno Vasco",
				"square": false
			},
			{
				"id": 2,
				"icon": "flaticon-magic-wand",
				"title": "Zona de juegos",
				"description": "Con patio exterior vallado para jugar los dias de sol",
				"square": false
			},
			{
				"id": 3,
				"icon": "flaticon-calendar",
				"title": "+10 años",
				"description": "10 años de experiencia avalada por nuestros clientes.",
				"square": false
			},
			{
				"id": 4,
				"icon": "flaticon-diploma",
				"title": "Calidad",
				"description": "Calidad en el servicio y colaboradores oficiales de UNICEF",
				"square": false
			},
			{
				"id": 5,
				"icon": "flaticon-time",
				"title": "Flexibilidad Horaria",
				"description": "Horarios de entrada y salida adaptables y flexibles",
				"square": false
			},
			{
				"id": 6,
				"icon": "flaticon-calendar-1",
				"title": "11 meses",
				"description": "Calendario escolar de hasta 11 mensualidades",
				"square": false
			},
			{
				"id": 7,
				"icon": "flaticon-worldwide",
				"title": "Trilingue",
				"description": "Educación en Castellano, Euskera e Ingles",
				"square": false
			}
		],
		"title_visita_centro": "Visita nuestro centro!",
		"description_centro": "Somos un experimentado centro, con más de 10 años de experiencia en Educación Infantil de 0 a 3 años en la calle Prim, a dos minutos de la Plaza Unamuno del Casco Viejo, Bilbao.",
		"empezar_visita": "Empezar visita virtual",
		"contactanos": "Contacta con nosotros",
		"servicios_title": "Servicios",
		"servicios_description": "Nuestro horario, de lunes a viernes de 7:30 a 17:00 con posibilidad de ampliaciones en funcion tus necesidades.",
		"servicios_description_2": " Disponemos de diferentes jornadas escolares para adaptarse mejor a las necesidades de los padres y los niños. Consulta la disponibilidad de plazas para el curso actual y ¡Echa un vistazo a las jornadas en detalle!",
		"ver_jornadas": "Ver jornadas",
		"metodologia_title": "Nuestra metodología",
		"metodologia_description": "A través del juego conseguimos un ambiente agradable, divertido e integrador lleno de momentos placenteros que favorecen el aprendizaje, haciendo que el niño o niña eleve su autoestima y se sienta querido y seguro.",
		"conoce_actividades": "Conoce nuestras actividades",
		"acercate_title": "Acercate y conoce Dolaretxe",
		"acercate_desc": "Nos encantaría conocerte a ti y a tu/s peque/s. Ponte en contacto con nosotras para comprobar disponibilidad de plazas y concertar una cita para conocer nuestra guarde. Os invitamos a conocer la Escuela Infantil Dolaretxe Haur Eskola, donde os proporcionaremos una asistencia más personalizada y os informaremos de todos servicios y tarifas que mejor se adapten a vuestras necesidades.",
		"acercate_link": "Contacta con nosotros"
	},
	"en": {
		"location": "",
		"centro_autorizado": "",
		"bienvenido_a_jugar": "",
		"quote_text": "",
		"title_visita_centro": "",
		"description_centro": "",
		"empezar_visita": "",
		"contactanos": "",
		"servicios_title": "",
		"servicios_description": "",
		"servicios_description_2": "",
		"ver_jornadas": "",
		"metodologia_title": "",
		"metodologia_description": "",
		"conoce_actividades": "",
		"acercate_title": "",
		"acercate_desc": "",
		"acercate_link": "s"
	},
	"eus": {
		"location": "Bilbao. Casco Viejo, Bizkaia",
		"centro_autorizado": " Eusko Jaurlaritzako Hezkuntza Sailak baimenduta",
		"bienvenido_a_jugar": "Ongi Etorri jolastera",
		"quote_text": "Ez da posible behar bezalako lan erankigorrik egin jokurik ez badago; ezta pentsamendu sendo eta osasuntsurik ere.",
    "covidItem" : {
        "id": 0,
        "icon": "icon-medkit",
        "title": "COVID-19",
        "description": "Higiene-neurriak eta COVID-19 aurkako babesak",
        "square": true
      },
    "actividades": [{
				"id": 1,
				"icon": "flaticon-like",
				"title": "Baimendutako zentroa",
				"description": "Eusko Jaurlaritzako Hezkuntza Sailak baimendua",
				"square": false
			},
			{
				"id": 2,
				"icon": "flaticon-magic-wand",
				"title": "Jolastokia",
				"description": "Kanpoko patioa hesituta, eguzki-egunetan jolasteko",
				"square": false
			},
			{
				"id": 3,
				"icon": "flaticon-calendar",
				"title": "+10 urte",
				"description": "Gure bezeroek bermatutako 10 urteko esperientzia.",
				"square": false
			},
			{
				"id": 4,
				"icon": "flaticon-diploma",
				"title": "Kalitatea",
				"description": "Zerbitzuaren kalitatea eta UNICEFen laguntzaile ofizialak",
				"square": false
			},
			{
				"id": 5,
				"icon": "flaticon-time",
				"title": "Ordutegi-malgutasuna",
				"description": "Sartzeko eta irteteko ordutegi moldagarriak eta malguak",
				"square": false
			},
			{
				"id": 6,
				"icon": "flaticon-calendar-1",
				"title": "11 hilabete",
				"description": "11 hileko eskola-egutegia",
				"square": false
			},
			{
				"id": 7,
				"icon": "flaticon-worldwide",
				"title": "Hirueledun",
				"description": "Gaztelaniazko, euskarazko eta ingelesezko hezkuntza",
				"square": false
			}
		],
		"title_visita_centro": "Bisitatu gure zentroa!",
		"description_centro": " 0-3 urte arteko Haur Hezkuntza Eskola berri bat gara, Prim kalean kokatuta, Bilboko Alde Zaharrean Unamuno enparantzatik bi minutura gaude. ",
		"empezar_visita": "Bisita birtuala hasi",
		"contactanos": "Gurekin harremanetan jarri",
		"servicios_title": "Zerbitzuak",
		"servicios_description": " Dolaretxen astelehenetik ostiralera, goizeko 7:30tik arratsaldeko 17:00ak arte irekitzen ditugu ateak.",
		"servicios_description_2": "Ordutegi ezberdinak eskaintzen ditugu guraso eta umeen beharretara ahalik eta hoberen moldatzeko. Ordutegiak sehaski ikusi.",
		"ver_jornadas": "Jardunaldiak ikusi",
		"metodologia_title": "Zatoz Jolastera",
		"metodologia_description": " Jokoaren bidez giro atsegina, dibertigarria eta bateratzailea egitea dugu helburu, ikasketa errazten duten une alaiak sortzen ditugu bakoitzak bere buruarekin are eta erosoago senti dadin, umea maitatua eta segurua sentiarazteko.",
		"conoce_actividades": "Aktibitateei buruzko informazio gehigarria",
		"acercate_title": "Hurbil zaitez eta ezagutu ezazu Dolaretxe",
		"acercate_desc": "Zu eta zure txikiak ezagutzea gustatuko litzaiguke. Jar zaitez gurekin harremanetan plazak baditugula egiaztatzeko eta bisita hitzordua egiaztatzeko.  Dolaretxe Haur Eskola ezagutzera gonbidatzen zaituztegu. Laguntza pertsonalizatuagoa emango dizuegu, eta zuen beharretara ondoen egokitzen diren zerbitzu eta tarifa guztien berri emango dizuegu.",
		"acercate_link": "Gurekin harremanetan jarri"
	}
}
</i18n>
