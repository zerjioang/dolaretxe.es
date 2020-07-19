<template>
  <div>
    <pagetitle :page="$t('pagetitle')" />

    <section class="ftco-section ftco-no-pt ftco-no-pb mt-5">
      <div class="container">
        <div class="row no-gutters">
          <div class="col-md-12 ftco-animate">
            <div class="heading-section">
              <h2 class="mb-4">{{$t('title')}}</h2>
              <h5>{{$t('subtitle')}}</h5>
              <p class="justified">{{$t('subtitle_1')}}</p>
            </div>
            <!-- heading finished -->

            <div class="row no-gutters" style="margin-bottom: 30px">
              <div class="col-md-6 ftco-animate text-center fadeInUp ftco-animated">
                <img
                  class="location-img text-center"
                  :src="require('@/assets/images/reference_image.png')"
                  alt="dolaretxe escuela Infantil, Haur Eskola y guarderia en bilbao"
                />
              </div>
              <div class="col-md-6 ftco-animate text-center fadeInUp ftco-animated">
                <p class="justified">
                  {{$t('info_title')}} (
                  <a
                    href="https://goo.gl/maps/8NV7Twm7ARWWiPLDA"
                    target="blank"
                    rel="noopener"
                  >{{$t('view_maps')}}</a>)
                  <br />
                  {{$t('item_dir')}}
                  <strong>Calle Prim, 11. Bajo. 48006 Bilbao</strong>
                  <br />
                  {{$t('item_latlon')}}
                  <strong>43.258462, -2.918624</strong>
                  <br />
                  {{$t('item_pluscode')}}
                  <strong>735J+9G Bilbao</strong>
                  <br />
                  {{$t('item_tel')}}
                  <a href="tel:+34946004558">+34 946004558</a>
                  <br />
                  {{$t('item_email')}}
                  <a href="mailto:info@dolaretxe.es">info@dolaretxe.es</a>
                </p>
                <p class="justified">
                  <a
                    class="btn btn-primary"
                    href="https://goo.gl/maps/8NV7Twm7ARWWiPLDA"
                    rel="noopener"
                    target="_blank"
                  >{{$t('view_maps')}}</a>
                </p>
              </div>
            </div>

            <div>
              <!-- include google maps iframe for free -->
              <iframe
                class="img-responsive vr-iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.6611082492964!2d-2.920260001981129!3d43.25852385975998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe6e2cf49d4cdbeba!2sEscuela%20Infantil%20%C2%B7%20DOLARETXE%20%C2%B7%20Haur%20Eskola!5e0!3m2!1ses!2ses!4v1576769681457!5m2!1ses!2ses"
                frameborder="0"
                style="border:0;"
                allowfullscreen="true"
              ></iframe>

              <h5>{{$t('plazas_title')}}</h5>
              <p class="justified">
                {{$t('')}}
                <a href="mailto:info@dolaretxe.es">info@dolaretxe.es</a>
              </p>
              <h5>{{$t('reservas_title')}}</h5>
              <p class="justified">
                {{$t('reservas_desc')}}
                <a href="mailto:info@dolaretxe.es">info@dolaretxe.es</a>
                {{$t('reservas_docs')}}
              </p>
              <div class="row">
                <div
                  v-for="c in $t('contactList')"
                  :key="c.id"
                  class="col-12 col-xs-6 col-sm-6 col-md-4 col-lg-3"
                >
                  <div class="justify-content-center counter-wrap ftco-animate">
                    <featureBox :text="c.text" :icon="c.icon" :colorClass="c.class" />
                  </div>
                </div>
                <!-- end of v-for -->
              </div>
              <!-- end of row -->
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="ftco-section ftco-no-pt ftco-no-pb mt-5">
      <div class="container">
        <div class="row no-gutters">
          <div class="col-md-12 ftco-animate">
            <div class="heading-section">
              <h2 class="mb-4">{{$t('maps_title')}}</h2>
            </div>
          </div>
        </div>
        <!-- end title row -->
        <div class="row no-gutters" style="margin-bottom: 30px">
          <div class="col-md-12 ftco-animate text-center fadeInUp ftco-animated mt-4">
            <p class="justified">{{$t('maps_desc')}}</p>
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-4 ftco-animate">
                <img
                  class="location-icon"
                  :src="require('@/assets/images/metrobilbao.png')"
                  alt="dolaretxe escuela Infantil, Haur Eskola y guarderia en bilbao"
                />
                <h4 class="title-location">{{$t('title_map_1')}}</h4>
                <h5 class="subtitle-location">4 min (300 m)</h5>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d726.4168301790091!2d-2.9206890707569078!3d43.258393675383246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0xd4e4fc942c3aa05%3A0x7121fd28a048061b!2sEstacion%20Metro%2C%20Unamuno%20Miguel%20Plaza%2C%20Bilbao!3m2!1d43.258618299999995!2d-2.9216335!4m5!1s0xd4e4fca2737235f%3A0xe6e2cf49d4cdbeba!2sEscuela%20Infantil%20%C2%B7%20DOLARETXE%20%C2%B7%20Haur%20Eskola%2C%20Prim%20Kalea%2C%2011%2C%20bajo%2C%2048006%20Bilbo%2C%20BI!3m2!1d43.258397599999995!2d-2.9186365999999997!5e0!3m2!1ses!2ses!4v1582829545050!5m2!1ses!2ses"
                  width="600"
                  height="450"
                  frameborder="0"
                  style="border:0;"
                  allowfullscreen
                  aria-hidden="false"
                ></iframe>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-4 ftco-animate">
                <img
                  class="location-icon-svg"
                  :src="require('@/assets/images/elevator.svg')"
                  alt="dolaretxe escuela Infantil, Haur Eskola y guarderia en bilbao"
                />
                <h4 class="title-location">{{$t('title_map_2')}}</h4>
                <h5 class="subtitle-location">5 min (400 m)</h5>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m22!1m8!1m3!1d1452.8053792425515!2d-2.919990691799964!3d43.25957894478417!3m2!1i1024!2i768!4f13.1!4m11!3e2!4m5!1s0xd4e4fd48acc8f95%3A0xad48f0365f17f8ea!2sAscensor%20Bego%C3%B1a%20-casco%20Viejo%2C%20Bilbao!3m2!1d43.260228!2d-2.919848!4m3!3m2!1d43.2587462!2d-2.9184956!5e0!3m2!1ses!2ses!4v1594920641510!5m2!1ses!2ses"
                  width="600"
                  height="450"
                  frameborder="0"
                  style="border:0;"
                  allowfullscreen
                  aria-hidden="false"
                ></iframe>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-4 ftco-animate">
                <img
                  class="location-icon-svg"
                  :src="require('@/assets/images/street.svg')"
                  alt="dolaretxe escuela Infantil, Haur Eskola y guarderia en bilbao"
                />
                <h4 class="title-location">{{$t('title_map_3')}}</h4>
                <h5 class="subtitle-location">3 min (180 m)</h5>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d2905.686556261801!2d-2.920236434442079!3d43.257990585913994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e2!4m3!3m2!1d43.2575894!2d-2.9174968999999997!4m5!1s0xd4e4fca2737235f%3A0xe6e2cf49d4cdbeba!2sEscuela%20Infantil%20%C2%B7%20DOLARETXE%20%C2%B7%20Haur%20Eskola%2C%20Prim%20Kalea%2C%2011%2C%20bajo%2C%2048006%20Bilbo%2C%20BI!3m2!1d43.258397599999995!2d-2.9186365999999997!5e0!3m2!1ses!2ses!4v1582829347347!5m2!1ses!2ses"
                  width="600"
                  height="450"
                  frameborder="0"
                  style="border:0;"
                  allowfullscreen
                  aria-hidden="false"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="ftco-section ftco-no-pt ftco-no-pb mt-5">
      <div class="container">
        <div class="row no-gutters">
          <div class="col-md-12 ftco-animate">
            <div class="heading-section">
              <h2>{{$t('rrss_title')}}</h2>
              <p class="justified">{{$t('rrss_desc')}}</p>
            </div>
            <!-- end of heading -->
            <div class="row mt-4 mb-4">
              <div class="col-md-12">
                <fbbutton
                  :text="$t('follow_facebook')"
                  link="https://www.facebook.com/dolaretxehaurreskola"
                />
                <fbbutton :text="$t('follow_insta')" link="https://www.instagram.com/dolaretxe" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import template from "@/mixins/template";

const bgExample01 = require("@/assets/images/dolaretxe-badge.jpg");
const insta01 = require("@/assets/images/insta/6893202215941321790.jpg");
const insta02 = require("@/assets/images/insta/4573505906649595904.jpg");

export default {
  name: "contact-component",
  extends: template,
  methods: {},
  data: () => {
    return {
      bgExample01,
      insta01,
      insta02
    };
  },
  created() {
    console.log("contact::created");
  },
  mounted() {
    console.log("contact::mounted");
    this.jQueryInit();
  },
  components: {
    pagetitle: () => import("@/components/pagetitle"),
    fbbutton: () => import("@/components/fbbutton"),
    featureBox: () => import("@/components/featureBox")
  }
};
</script>

<style type="text/css" scoped="true">
.title-bold {
  font-size: 40px !important;
  font-family: "Rubik", sans-serif;
  font-weight: bold;
}
.vr-iframe {
  min-height: 600px;
  width: 100%;
  padding: 0px;
  margin: 0px;
  min-width: 100%;
}
.img-fullwidth {
  min-height: 200px;
  min-width: 200px;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 0px;
  outline: none;
}
.img-example {
  min-width: 200px;
  min-height: 555px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 3px;
  outline: none;
}
.location-img {
  float: left;
  margin-top: 8px;
}
.title-location {
  max-width: 250px;
  font-size: 18px;
  font-weight: bold;
}
.subtitle-location {
  font-size: 15px;
}
.location-icon {
  margin: 20px;
  max-width: 150px;
}
.location-icon-svg {
  margin: 20px;
  max-width: 80px;
}
iframe {
  width: 100%;
}
</style>

<i18n>
{
	"es": {
        "pagetitle": "Sobre nosotros",
		"title": "Donde estamos",
		"subtitle": "Acércate y conoce la guarde",
		"subtitle_1": "Nos encantaría conocerte a ti y a tu/s peque/s. Ponte en contacto con nosotras para comprobar disponibilidad de plazas y concertar una cita para conocer nuestra guarde. Os invitamos a conocer la Escuela Infantil Dolaretxe Haur Eskola, donde os proporcionaremos una asistencia más personalizada y os informaremos de todos servicios y tarifas que mejor se adapten a vuestras necesidades.",
		"info_title": "Escuela Infantil Haur Eskola",
        "item_dir": "Dirección",
        "item_latlon": "Coordenadas",
        "item_pluscode": "Codigo Plus",
        "item_tel": "Teléfono",
        "item_email": "Correo electrónico",
		"view_maps": "Ver en Google Maps",
		"plazas_title": "Disponibilidad de plazas",
		"plazas_desc": "Disponibilidad de plazas libres para este curso y el próximo. Si deseáis obtener más información o realizar una consulta, pinchar en la dirección de correo electrónico:",
		"reservas_title": "Reserva de plazas",
		"reservas_desc": "Para realizar la reserva de plaza deberían enviar a la dirección de contacto",
        "reservas_docs": "los siguientes documentos",
		"maps_title": "Como llegar",
		"maps_desc": "Descubre la mejor forma de llegar a Dolaretxe Escuela Infantil Haur Eskola ya sea por Metro Bilbao, andando o en coche.",
		"title_map_1": "Desde la salida de Metro Unamuno",
		"title_map_2": "Desde el ascensor de Begoña",
		"title_map_3": "Por la calle Prim dirección Unamuno",
		"rrss_title": "Dolaretxe en las redes",
		"rrss_desc": "Tambien puedes contactar con nosotros mediante nuestro Instagram, Facebook o email",
		"follow_insta": "Siguenos en Instagram",
		"follow_facebook": "Siguenos en Facebook",
		"contactList": [{
				"id": 0,
				"icon": "flaticon-document",
				"class": "bg-dlrtx-1",
				"text": "Ficha de matriculación completada"
			},
			{
				"id": 1,
				"icon": "flaticon-document",
				"class": "bg-dlrtx-2",
				"text": "Hoja de las normas del centro firmada"
			},
			{
				"id": 2,
				"icon": "flaticon-user",
				"class": "bg-dlrtx-3",
				"text": "Fotocopia del DNI de los padres o madres"
			},
			{
				"id": 3,
				"icon": "flaticon-user-1",
				"class": "bg-dlrtx-4",
				"text": "Fotocopia del libro de familia"
			}
		]
	},
	"en": {
		"pagetitle": "",
		"title": "",
		"subtitle": "",
		"subtitle_1": "",
		"info_title": "",
		"item_dir": "",
		"item_latlon": "",
		"item_pluscode": "",
		"item_tel": "",
		"item_email": "",
		"view_maps": "",
		"plazas_title": "",
		"plazas_desc": "",
		"reservas_title": "",
		"reservas_desc": "",
		"reservas_docs": "",
		"maps_title": "",
		"maps_desc": "",
		"title_map_1": "",
		"title_map_2": "",
		"title_map_3": "",
		"rrss_title": "",
		"rrss_desc": "",
		"follow_insta": "",
		"follow_facebook": "",
		"contactList": [{
				"id": 0,
				"icon": "flaticon-document",
				"class": "bg-dlrtx-1",
				"text": ""
			},
			{
				"id": 1,
				"icon": "flaticon-document",
				"class": "bg-dlrtx-2",
				"text": ""
			},
			{
				"id": 2,
				"icon": "flaticon-user",
				"class": "bg-dlrtx-3",
				"text": ""
			},
			{
				"id": 3,
				"icon": "flaticon-user-1",
				"class": "bg-dlrtx-4",
				"text": ""
			}
		]
	},
	"eus": {
		"pagetitle": "Gutaz",
		"title": "Non gaude",
		"subtitle": "Zatoz eta ezagutu ezazu gure haur eskola",
		"subtitle_1": "Zu eta zure txikiak ezagutzea gustatuko litzaiguke. Jar zaitez gurekin harremanetan plazak baditugula egiaztatzeko eta nahi izanez gero, haur eskola ezagutzeko hitzordua egiaztatzeko. Dolaretxe Haur Eskola ezagutzera gonbidatzen zaituztegu. Bertan, laguntza pertsonalizatuagoa emango dizuegu eta zuen beharretara ondoen egokitzen diren zerbitzu eta tarifa guztien berri emango dizuegu.",
		"info_title": "Dolaretxe Haur Eskola",
		"item_dir": "Helbidea",
		"item_latlon": "Koordenatuak",
		"item_pluscode": "Plus Kodea",
		"item_tel": "Telefonoa",
		"item_email": "Helbide elektronikoa",
		"view_maps": "Google Maps-en ikusi",
		"plazas_title": "Plazen erabilgarritasuna",
		"plazas_desc": "Ikasturte honetarako eta datorren ikasturterako plaza libreak. Informazio gehiago lortu edo kontsulta bat egin nahi baduzue, sakatu helbide elektronikoa:",
		"reservas_title": "Matrikulazio eta plaza erreserba on-line",
		"reservas_desc": "Matrikulazio eta plaza erreserba on-line egiteko honako agiri hauek bidali behar dira hurrengo posta elektronikora:",
		"reservas_docs": ".",
		"maps_title": "Nola iritsi",
		"maps_desc": "Dolaretxe Haur Eskolara iristeko modurik onena ezagutu, MetroBilbao-tik, oinez edo autoz.",
		"title_map_1": "Unamuno metroko irteeratik",
		"title_map_2": "Begoñako igogailutik",
		"title_map_3": "Prim kaletik Unamuno kalerantz",
		"rrss_title": "Dolaretxe sareetan",
		"rrss_desc": "Gure Instagram, Facebook edo e-mail bidez ere jar zaitezke gurekin harremanetan",
		"follow_insta": "Instagram-en jarraiguzu",
		"follow_facebook": "Facebook-en jarraiguzu",
		"contactList": [{
				"id": 0,
				"icon": "flaticon-document",
				"class": "bg-dlrtx-1",
				"text": "Dolaretxen matrikulazio fitxa osatua"
			},
			{
				"id": 1,
				"icon": "flaticon-document",
				"class": "bg-dlrtx-2",
				"text": "Funtzionamendu arauen azken orria sinatuta"
			},
			{
				"id": 2,
				"icon": "flaticon-user",
				"class": "bg-dlrtx-3",
				"text": "Gurasoen NAN dokumentuaren kopia"
			},
			{
				"id": 3,
				"icon": "flaticon-user-1",
				"class": "bg-dlrtx-4",
				"text": "Familia-liburuaren dokumentuaren kopia"
			}
		]
	}
}
</i18n>