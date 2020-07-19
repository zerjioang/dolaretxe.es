<template>
  <div>
    <pagetitle :page="$t('pagetitle')" />
    <section class="ftco-section ftco-no-pt ftco-no-pb mt-5">
      <div class="container">
        <div class="row no-gutters">
          <div
            class="col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center"
            :style="{'background-image': 'url(' + bgEscuela  + ')'}"
          ></div>
          <div class="col-md-7 wrap-about py-md-5 ftco-animate">
            <div class="heading-section mb-5 pt-5 pl-md-5">
              <div>
                <h2 class="mb-4">{{$t('subtitle')}}</h2>
              </div>
              <p
                v-for="sentence in $t('descriptionList')"
                :key="sentence"
                class="justified"
              >{{sentence}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <br />
    <section class="ftco-section ftco-no-pt ftco-no-pb">
      <div class="container">
        <div class="row no-gutters">
          <div class="col-md-7 wrap-about py-md-5 ftco-animate">
            <div class="heading-section mb-5 pt-5 pl-md-5">
              <div>
                <h2 class="mb-4">{{$t('team_title')}}</h2>
              </div>
              <h5>{{$t('team_subtitle_1')}}</h5>
              <p class="pr-md-5 mr-md-5 justified">{{$t('team_subtitle')}}</p>
              <h5>{{$t('ninos_aula')}}</h5>
              <p class="pr-md-5 mr-md-5 justified">{{$t('ninos_aula_subtitle')}}</p>
              <ul>
                <li v-for="sentence in $t('ninosAulaList')" :key="sentence">{{sentence}}</li>
              </ul>
              <h5>{{$t('equipo_docente_title')}}</h5>
              <p class="pr-md-5 mr-md-5 justified">{{$t('equipo_docente_subtitle')}}</p>
            </div>
          </div>
          <div
            class="col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center"
            v-bind:style="{ backgroundImage: 'url(' + bgEquipo + ')' }"
          ></div>
        </div>
      </div>
    </section>

    <div class="ftco-animate fadeInUp ftco-animated align-items-center text-center img-pad">
      <div
        class="img-full"
        v-bind:style="{ backgroundImage: 'url(' + bgInstalaciones + ')' }"
        style="min-height: 500px;"
      ></div>
    </div>

    <section class="ftco-section ftco-no-pt ftco-no-pb">
      <div class="container">
        <div class="row no-gutters">
          <div class="col-md-12 wrap-about ftco-animate">
            <div class="heading-section pl-md-5">
              <div>
                <h2 class="mb-4">{{$t('instalaciones_title')}}</h2>
              </div>
              <h5>{{$t('instalaciones_subtitle')}}</h5>
              <p class="justified">{{$t('instalaciones_desc')}}</p>

              <div class="row">
                <div
                  class="col-xs-6 col-md-4 col-lg-4"
                  v-for="aula in $t('aulasList')"
                  :key="aula.title"
                >
                  <div class="justify-content-center counter-wrap">
                    <featureBox :text="aula.title" :icon="aula.icon" colorClass="bg-dlrtx-1" />
                  </div>
                  <p>{{aula.subtitle}}</p>
                </div>
              </div>

              <h5>{{$t('espacios_especiales_title')}}</h5>

              <div class="row">
                <div
                  class="col-12 col-sm-6 col-md-4 col-lg-3"
                  v-for="espacio in $t('espaciosEspecialesList')"
                  :key="espacio.text"
                >
                  <div class="justify-content-center counter-wrap">
                    <featureBox
                      class="box-especial"
                      style="min-height: 220px;"
                      :text="espacio.text"
                      :icon="espacio.icon"
                      :colorClass="espacio.color"
                    />
                  </div>
                </div>
              </div>

              <p class="justified">{{$t('more_info_title')}}</p>
              <ul>
                <li>{{$t('more_info_1')}}</li>
                <li>{{$t('more_info_2')}}</li>
              </ul>

              <h5>{{$t('visita_virtual_enfasis')}}</h5>
              <p class="justified">{{$t('visita_virtual_description')}}</p>
              <div style="padding: 5px;">
                <router-link
                  class="btn btn-primary"
                  to="visitavirtual"
                >{{$t('empezar_visita_virtual')}}</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div
      class="img-full"
      v-bind:style="{ backgroundImage: 'url(' + bgObjetivos + ')' }"
      style="min-height: 500px;"
    ></div>

    <section class="ftco-section ftco-no-pt ftco-no-pb">
      <div class="container">
        <div class="row no-gutters">
          <div class="col-md-12 wrap-about ftco-animate">
            <div class="heading-section">
              <div>
                <h2>{{$t('objetivos_title')}}</h2>
              </div>
              <div
                class="ftco-animate fadeInUp ftco-animated align-items-center text-center img-pad"
              ></div>
              <p class="justified">{{$t('objetivos_desc')}}</p>

              <div class="row">
                <div
                  v-for="item in $t('objetivos_list')"
                  :key="item.text"
                  class="col-12 col-sm-6 col-md-4 col-lg-4"
                >
                  <div class="justify-content-center counter-wrap">
                    <featureBox
                      class="box-especial"
                      :text="item.text"
                      :icon="item.icon"
                      :colorClass="item.color"
                    />
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6">
                  <p
                    v-for="sentence in $t('objetivos_list_1')"
                    :key="sentence"
                    class="justified"
                  >{{sentence}}</p>
                </div>

                <div class="col-md-6">
                  <p
                    v-for="sentence in $t('objetivos_list_2')"
                    :key="sentence"
                    class="justified"
                  >{{sentence}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <sectionActividades id="actividades" />
    <sectionUnicef id="unicef" />
  </div>
</template>

<script>
import template from "@/mixins/template";

const bgEscuela = require("@/assets/images/escuela/01.jpg");
const bgEquipo = require("@/assets/images/escuela/02.jpg");
const bgInstalaciones = require("@/assets/images/escuela/04.jpg");
const bgObjetivos = require("@/assets/images/escuela/03.jpg");

export default {
  name: "escuela-component",
  extends: template,
  methods: {},
  data: () => {
    return {
      bgEscuela,
      bgEquipo,
      bgInstalaciones,
      bgObjetivos
    };
  },
  created() {
    console.log("escuela::created");
  },
  mounted() {
    console.log("escuela::mounted");
    this.jQueryInit();
  },
  components: {
    featureBox: () => import("@/components/featureBox"),
    sectionUnicef: () => import("@/components/sections/section-unicef"),
    pagetitle: () => import("@/components/pagetitle"),
    sectionActividades: () => import("@/components/actividades")
  }
};
</script>

<style type="text/css" scoped="true">
.img-pad {
  padding-top: 10px;
  padding-bottom: 30px;
}
.box-especial {
  min-height: 210px;
}
.img-full {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>

<i18n>
{
	"es": {
		"pagetitle": "Escuela",
		"subtitle": "Centro de Educación Infantil",
		"descriptionList": [
			"Somos un experimentado centro, con más de 10 años de experiencia en Educación Infantil de 0 a 3 años ubicado en la calle Prim, a tan solo dos minutos de la Plaza Unamuno del Casco Viejo de Bilbao.",
			"El proyecto responde a la necesidad actual de facilitar la conciliación de la vida familiar y la vida laboral de los residentes, comerciantes y trabajadores de la zona.",
			"Ofrecemos el modelo lingüístico bilingüe (euskera-castellano) con introducción al inglés."
		],
		"team_title": "El equipo",
		"team_subtitle": "Dolaretxe nace con el propósito de que los niños aprendan y se desarrollen de forma integral en un entorno familiar y estimulante. Nuestro equipo docente se concentra en la motivación de los pequeños usando el juego como medio para favorecer el aprendizaje, la creatividad y el desarrollo individual de cada uno de los niños a través de sus propios estímulos e intereses.",
		"ninos_aula": "Niños por aula",
		"ninos_aula_subtitle": "El número de niños por aula cumple con los ratios establecidos por el Departamento de Educación del Gobierno Vasco:",
		"ninosAulaList": [
			"8 niños en el aula de 0-1 años.",
			"13 niños en el aula de 1-2 años.",
			"18 niños en el aula de 2 a 3 años."
		],
		"equipo_docente_title": "El equipo docente",
		"equipo_docente_subtitle": "El equipo de Dolaretxe está formado por 8 personas, 2 educadoras por aula. El equipo lleva trabajando de forma conjunta desde la inauguración del centro en el año 2010.",

		"instalaciones_title": "Instalaciones",
		"instalaciones_subtitle": "Instalaciones de alta calidad",
		"instalaciones_desc": "Hemos diseñado un centro educativo amplio, luminoso y seguro para que los niños crezcan en un entorno de alta calidad. En la Escuela Infantil Dolaretxe contamos con 220m2 de instalaciones y un patio de juegos de 300m2 de uso exclusivo. Disponemos de 4 aulas diferencias por edades. La distribución del espacio es el siguiente:",

		"espacios_especiales_title": "Espacios especiales",
		"espaciosEspecialesList": [{
				"text": "Contamos con una sala de usos múltiples",
				"icon": "flaticon-television",
				"color": "bg-dlrtx-3"
			},
			{
				"text": "Espacio de preparación de alimentos",
				"icon": "flaticon-television",
				"color": "bg-dlrtx-3"
			},
			{
				"text": "Patio exterior privado y vallado",
				"icon": "flaticon-television",
				"color": "bg-dlrtx-3"
			},
			{
				"text": "300m2 de zona de juego exclusivo y privado",
				"icon": "flaticon-television",
				"color": "bg-dlrtx-3"
			},
			{
				"text": "Espacio cubierto para carritos",
				"icon": "flaticon-television",
				"color": "bg-dlrtx-3"
			},
			{
				"text": "Diferenciación de espacios y zonas de trabajo",
				"icon": "flaticon-television",
				"color": "bg-dlrtx-3"
			},
			{
				"text": "Entrada y salida sólo peatonal",
				"icon": "flaticon-television",
				"color": "bg-dlrtx-3"
			},
			{
				"text": "Localización lejos de carreteras",
				"icon": "flaticon-television",
				"color": "bg-dlrtx-3"
			}
		],
		"aulasList": [{
				"title": "1 aula de 0-1 años",
				"subtitle": "El aula cuenta con un área específica para el descanso de los menores y otra para la higiene.",
				"icon": "flaticon-user-2"
			},
			{
				"title": "2 aulas de 1-2 años",
				"subtitle": "El aula cuenta con un área específica para el descanso y un baño dentro de la propia clase.",
				"icon": "flaticon-user-4"
			},
			{
				"title": "1 aula de 2-3 años",
				"subtitle": "El aula cuenta con un área específica para el descanso y un baño dentro de la propia clase.",
				"icon": "flaticon-user-6"
			}
		],
		"more_info_title": "Ademas, contamos con:",
		"more_info_1": "La escuela infantil contamos con un espacio diferenciado para las labores de gestión y administración y de uso para el personal: recepción, despacho, sala de reuniones, vestuario, almacén y cuarto baño.",
		"more_info_2": "En Dolaretxe disponemos de un acceso independiente desde el exterior que se realiza a través de una plaza pública garantizando la seguridad de los niños en la salida del centro.",


		"visita_virtual_enfasis": "¡Visita Virtual!",
		"visita_virtual_description": "En Dolaretxe ofrecemos unas instalaciones modernas dotadas de un amplio patio exterior donde los niños podrán disfrutar y aprender jugando tutelados por educadores afectuosos y pacientes.",
		"empezar_visita_virtual": "Empezar visita virtual",
		"team_subtitle_1": "Aprendizaje y desarrollo",
		"objetivos_title": "Objetivos",
		"objetivos_desc": "En Dolaretxe contribuimos a generar un entorno familiar y seguro que favorezca la adquisición de las distintas competencias en cada una de las etapas evolutivas del niño.",
		"objetivos_list": [{
				"text": "Habilidades comunicativas",
				"icon": "flaticon-star",
				"color": "bg-dlrtx-4"
			},
			{
				"text": "Seguridad emocional",
				"icon": "flaticon-sign",
				"color": "bg-dlrtx-4"
			},
			{
				"text": "Convivencia y relaciones sociales",
				"icon": "flaticon-speaker-4",
				"color": "bg-dlrtx-4"
			},
			{
				"text": "Autonomía",
				"icon": "flaticon-zoom-in",
				"color": "bg-dlrtx-4"
			},
			{
				"text": "Respeto y curiosidad",
				"icon": "flaticon-zoom-in",
				"color": "bg-dlrtx-4"
			},
			{
				"text": "Diversidad",
				"icon": "flaticon-share-2",
				"color": "bg-dlrtx-4"
			}
		],
		"objetivos_list_1": [
			"Desarrollar habilidades comunicativas en diferentes lenguajes y formas de expresión para comprender y ser comprendido por los otros, expresar sus ideas, sentimientos, experiencias y deseos.",
			"Adquirir progresivamente una seguridad afectiva y emocional favorecido por este entorno familiar que les permita desarrollar sus capacidades de iniciativa y confianza en sí mismos. ",
			"Establecer relaciones sociales en un ámbito cada vez más amplio y adquirir pautas elementales de convivencia y relación social, aprendiendo a articular progresivamente sus intereses y puntos de vista con los demás, respetando la diversidad y desarrollando actitudes de ayuda y cooperación."
		],
		"objetivos_list_2": [
			"Descubrir, conocer y controlar progresivamente el propio cuerpo para tomar conciencia de sus posibilidades de acción y expresión formándose una imagen positiva de sí mismos. De este modo lograrán cada vez mayor autonomía en sus actividades cotidianas adquiriendo hábitos básicos de salud y bienestar.",
			"Observar y explorar el entorno inmediato (familiar, natural y social) con una actitud de curiosidad, cuidado y respeto.",
			"Representar y recordar aspectos diversos de la realidad, vividos, conocidos o imaginados, y expresarlos mediante las posibilidades simbólicas que ofrecen el juego y otras formas de representación y expresión como el arte para comprender e interpretar el mundo que les rodea."
		]
	},
	"en": {
		"pagetitle": "",
		"subtitle": "",
		"descriptionList": [
			"",
			"",
			""
		],
		"team_title": "",
		"team_subtitle": "",
		"ninos_aula": "",
		"ninos_aula_subtitle": "",
		"ninosAulaList": [
			"",
			"",
			""
		],
		"equipo_docente_title": "",
		"equipo_docente_subtitle": "",

		"instalaciones_title": "",
		"instalaciones_subtitle": "",
		"instalaciones_desc": "",

		"espacios_especiales_title": "",
		"espaciosEspecialesList": [{
				"text": "",
				"icon": "flaticon-television",
				"color": "bg-dlrtx-3"
			},
			{
				"text": "",
				"icon": "flaticon-television",
				"color": "bg-dlrtx-3"
			},
			{
				"text": "",
				"icon": "flaticon-television",
				"color": "bg-dlrtx-3"
			},
			{
				"text": "",
				"icon": "flaticon-television",
				"color": "bg-dlrtx-3"
			},
			{
				"text": "",
				"icon": "flaticon-television",
				"color": "bg-dlrtx-3"
			},
			{
				"text": "",
				"icon": "flaticon-television",
				"color": "bg-dlrtx-3"
			},
			{
				"text": "",
				"icon": "flaticon-television",
				"color": "bg-dlrtx-3"
			},
			{
				"text": "",
				"icon": "flaticon-television",
				"color": "bg-dlrtx-3"
			}
		],
		"aulasList": [{
				"title": "",
				"subtitle": "",
				"icon": "flaticon-user-2"
			},
			{
				"title": "",
				"subtitle": "",
				"icon": "flaticon-user-4"
			},
			{
				"title": "",
				"subtitle": "",
				"icon": "flaticon-user-6"
			}
		],
		"more_info_title": "",
		"more_info_1": "",
		"more_info_2": "",


		"visita_virtual_enfasis": "",
		"visita_virtual_description": "",
		"empezar_visita_virtual": "",
		"team_subtitle_1": "",
		"objetivos_title": "",
		"objetivos_desc": "",
		"objetivos_list_1": [],
		"objetivos_list_2": []
	},
	"eus": {
		"pagetitle": "Eskola",
		"subtitle": "Haur Hezkuntza Eskola",
		"descriptionList": [
			"0-3 urte arteko Haur Hezkuntza Eskola berri bat gara, Prim kalean kokatuta, Bilboko Alde Zaharreko Unamuno enparantza bi minutura dugu.",
			"Inguruko langile, merkatari eta bertakoen bizitza familiarraren egungo beharrizanak erraztera gatoz.",
			"Hizkuntza aldetik eredu elebiduna eskaintzen dugu (euskera-gaztelania), baita ingeleserako lehen pausuak ere."
		],
		"team_title": "Taldea",
		"team_subtitle": " Dolaretxe sortu izan dugu umeek zeharo ikasi eta hazi dezaten ingurune ezagun eta suspergarri batean. Gure irakaskuntza taldeak umeen motibazioan arreta jartzen du, jolasa bitarteko bezala erabiliz ume guztien ikaskuntza, sormena eta garapen pertsonalak laguntzeko beraien estimuluak eta interesak direla medio.",
		"ninos_aula": "Gelako umeen kopuruak",
		"ninos_aula_subtitle": " Dolaretxek betetzen ditu Eusko Jaurlaritzako Hezkuntza Sailak ezartzen dituen neurriak gela bakoitzan sar daitezketen umeen kopuruari buruz:",
		"ninosAulaList": [
			"0-1 urte arteko gelan 8 ume.",
			"1-2 urte arteko gelan 13 ume.",
			"2-3 urte arteko gelan 18 ume."
		],
		"equipo_docente_title": "Irakaskuntza taldea",
		"equipo_docente_subtitle": "Dolaretxeren taldea 8 pertsona osatzen du, 2 hezitzaile ikasgela bakoitzeko. Taldeak elkarrekin lanean aritzen da 2010-2011. ikasturtetik aurrera.",

		"instalaciones_title": "Instalazioak",
		"instalaciones_subtitle": "Kalitate goreneko instalazioak",
		"instalaciones_desc": " Diseinatu nahi izan dugu hezkuntza eskola zabala, argiduna eta segurua, umeek kalitate handiko inguru batean hazi dezaten. Dolaretxe Haur Hezkuntza Eskolan 220m2ko eremua daukagu, eta gainera 300m2ko berezko jolastoki bat ere. 4 gelak ditugu adinen arabera banatuak. Lekuaren antolaketa honakoa da:",

		"espacios_especiales_title": "Gune bereziak",
		"espaciosEspecialesList": [{
				"text": "Balioanitz aretoa",
				"icon": "flaticon-television",
				"color": "bg-dlrtx-3"
			},
			{
				"text": "Elikagaiak prestatzeko gunea",
				"icon": "flaticon-television",
				"color": "bg-dlrtx-3"
			},
			{
				"text": "Kanpoko gune esklusiboa jolastoki bezala",
				"icon": "flaticon-television",
				"color": "bg-dlrtx-3"
			},
			{
				"text": "300m2 jolastoki gune segurua",
				"icon": "flaticon-television",
				"color": "bg-dlrtx-3"
			},
			{
				"text": "Umeen gurdiak gordetzeko aterpea",
				"icon": "flaticon-television",
				"color": "bg-dlrtx-3"
			},
			{
				"text": "Gune eta espazio desberdinak",
				"icon": "flaticon-television",
				"color": "bg-dlrtx-3"
			},
			{
				"text": "Sarrera eta irtera bereziak",
				"icon": "flaticon-television",
				"color": "bg-dlrtx-3"
			},
			{
				"text": "Errepide eta autoetatik urrun",
				"icon": "flaticon-television",
				"color": "bg-dlrtx-3"
			}
		],
		"aulasList": [{
				"title": "0-1 urte arteko gela bat",
				"subtitle": "Atsedenarako gune jakin batez osatua dago, baita garbitasunerako beste leku propio batekin ere.",
				"icon": "flaticon-user-2"
			},
			{
				"title": "1-2 urte arteko gela bi",
				"subtitle": "Atsedenarako gune jakin batez osatua dago, gela barruan bainugela erantsia dago. ",
				"icon": "flaticon-user-4"
			},
			{
				"title": "2-3 urte arteko gela bat",
				"subtitle": "Atsedenarako gune jakin batez osatua dago, gela barruan bainugela erantsia dago.",
				"icon": "flaticon-user-6"
			}
		],
		"more_info_title": "Gainera, zenbait gela desberdin baditugu:",
		"more_info_1": "Haur Hezkuntza Eskolan gune ezberdindu bat daukagu gestio eta administrazio lanentzako, baita langileen erabilpenerako ere: harrera-lekua, bulegoa, bilera gela, aldagela, biltegia eta bainugela.",
		"more_info_2": "Kaletik sartzeko sarrera berezi bat badaukagu enparantza publiko baten bitartez, umeen segurtasuna bermatuz.",


		"visita_virtual_enfasis": "Bisita Birtuala!",
		"visita_virtual_description": " Dolaretxen instalazio modernoak eskaintzen ditugu, kanpo-jolastoki haundi batekin gainera, non umeek gozatu eta ikasi ahal izango dute jolasean eroapen haundiko hezitzaile txeratsuekin.",
		"empezar_visita_virtual": "Hasi Bisita Birtuala",
		"team_subtitle_1": "Ikasketa eta garapena",
		"objetivos_title": "Helburuak",
		"objetivos_desc": " Dolaretxe Haur Hezkuntza Eskolan giro ezaguna eta segurua sortzen laguntzen dugu, honek mesede egiten bait dio umeari hezkuntza aroan zehar hainbat gaitasunak bereganatzeko",
    "objetivos_list": [{
				"text": "Komunikazio-trebetasunak",
				"icon": "flaticon-star",
				"color": "bg-dlrtx-4"
			},
			{
				"text": "Segurtasun emozionala",
				"icon": "flaticon-sign",
				"color": "bg-dlrtx-4"
			},
			{
				"text": "Bizikidetza eta gizarte-harremanak",
				"icon": "flaticon-speaker-4",
				"color": "bg-dlrtx-4"
			},
			{
				"text": "Autonomia",
				"icon": "flaticon-zoom-in",
				"color": "bg-dlrtx-4"
			},
			{
				"text": "Errespetua eta jakin-mina",
				"icon": "flaticon-zoom-in",
				"color": "bg-dlrtx-4"
			},
			{
				"text": "Aniztasuna",
				"icon": "flaticon-share-2",
				"color": "bg-dlrtx-4"
			}
		],
		"objetivos_list_1": [
			"Komunikazio gaitasunak eta adierazpen moduak garatzea hizkuntza ezberdinetan ekar ulermena lortzeko, berezko ideiak, sentimenduak, esperientziak eta grinak espresatzeko gai izatea ere.",
			"Etengabeko segurtasun emozional eta afektiboa lortzea giro ezagun honen laguntzaz, umeek beraien ekimenerako gaitasunak eta segurtasunak garatzen trebeak izan dezatela.",
			"Harreman sozialak ezartzea gero eta zabalagoa den ingurune batean, giza-harremanerako eta bizikidetzarako eredu elementalak erdiestea, besteenganako ikuspuntuak eta interesak antolatzen ikastea etengabe, dibertsitatea errespetatuz, eta kooperazio eta laguntza portaerak garatuz."
		],
		"objetivos_list_2": [
			"Bakoitzaren gorputzaz konturatzea, ezagutzea eta jabetzea etengabe, bere eragin eta espresioen aukerak gogoan izateko bakoitzak bere buruaren irudi positibo bat osatuz. Era honetan, gero eta autonomia handiago bat lortzea eguneroko aktibitateetan oinarrizko osasun eta ongizate ohiturak bereganatuz.",
			"Ingurune gertuena ikustea eta miatzea (familiarra, naturala, gizartearena) errespetu, arreta eta jakinminezko jarrera batekin.",
			"Errealitatearen itxura ezberdinak irudikatzea, gogoratzea eta espresatzea (bizi izanak, ezagunak ala imaginatuak), jokoak eskaintzen dituen aukera sinbolikoen bitartez edota beste errepresentazio eta espresio eren bitartez, artea besteak beste, norberak bere inguruko mundua ulertzeko eta interpretatzeko."
		]
	}
}
</i18n>