<template>
  <div>
    <pagetitle v-show="showPageTitle" :page="$t('pagetitle')" />
    <section class="ftco-section ftco-no-pt ftco-no-pb mt-5">
      <div class="container">
        <div class="row no-gutters">
          <div class="col-md-12 wrap-about ftco-animate">
            <div class="heading-section mb-5 pt-5 pl-md-5">
              <div>
                <h2 class="mb-4">{{$t('actividades')}}</h2>
              </div>
              <div>
                <h3 class="mb-4">{{$t('desarrollo_integral')}}</h3>
              </div>
              <p class="justified">{{$t('desc1')}}</p>

              <!-- start cta desarrollo -->
              <div class="row">
                <div
                  class="col-xs-6 col-md-6 col-lg-3"
                  v-for="(item,i) in desarrolloList"
                  :key="item.id"
                >
                  <div class="justify-content-center counter-wrap ftco-animate">
                    <featureBox
                      :text="$t('desarrollo-list-text')[i]"
                      :subtitle="item.subtitle"
                      :icon="item.icon"
                      :colorClass="item.class"
                    />
                  </div>
                </div>
              </div>
              <!-- end cta desarrollo -->
              <p class="justified">{{$t('desc2')}}</p>
              <ul>
                <li v-for="l in $t('lista1')" :key="l">{{l}}</li>
              </ul>
            </div>
          </div>
          <div class="col-md-12 wrap-about ftco-animate">
            <div class="heading-section pl-md-5">
              <div>
                <h3 class="mb-4">{{$t('a-traves-juego')}}</h3>
              </div>
              <p class="justified">{{$t('a-traves-juego-subtitle')}}</p>
              <p class="justified">{{$t('a-traves-del-juego-p')}}</p>
              <ul>
                <li v-for="l in $t('lista-juegos')" :key="l">{{l}}</li>
              </ul>
              <p class="justified">{{$t('desc3')}}</p>
              <p class="justified">{{$t('desc4')}}</p>
              <!-- start modalidades de jornadas -->

              <!-- start: apartado que describe la info sobre desarrollo armonico -->
              <div>
                <h3 class="mb-4">{{$t('title-desarrollo-armonico')}}</h3>
              </div>
              <p class="justified">{{$t('subtitle-desarrollo-armonico')}}</p>
            </div>
            <!-- end: apartado que describe la info sobre desarrollo armonico -->
          </div>

          <div class="col-md-6">
            <ul>
              <li v-for="l in $t('lista-desa-arm-1')" :key="l">{{l}}</li>
            </ul>
          </div>

          <div class="col-md-6">
            <ul>
              <li v-for="l in $t('lista-desa-arm-2')" :key="l">{{l}}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import template from "@/mixins/template";

const imagelist = [
  require("@/assets/images/carrousel/jornadas/symNivopage14_0.jpg"),
  require("@/assets/images/carrousel/jornadas/symNivopage14_1.jpg"),
  require("@/assets/images/carrousel/jornadas/symNivopage14_2.jpg"),
  require("@/assets/images/carrousel/jornadas/symNivopage14_3.jpg"),
  require("@/assets/images/carrousel/jornadas/symNivopage14_4.jpg")
];
export default {
  name: "actividades-component",
  props: {
    showPageTitle: {
      type: Boolean,
      default: false
    }
  },
  extends: template,
  methods: {},
  data: () => {
    return {
      imagelist,
      imageIdx: 0,
      current: imagelist[0],
      desarrolloList: [
        {
          id: 0,
          icon: "ion-ios-american-football",
          class: "bg-dlrtx-1"
        },
        {
          id: 1,
          icon: "ion-ios-bowtie",
          class: "bg-dlrtx-2"
        },
        {
          id: 2,
          icon: "ion-ios-contacts",
          class: "bg-dlrtx-3"
        },
        {
          id: 3,
          icon: "ion-ios-body",
          class: "bg-dlrtx-4"
        }
      ]
    };
  },
  methods: {
    randomIntFromInterval: function(min, max) {
      // min and max included
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  },
  created() {
    console.log("jornadas::created");
    this.jQueryInit();
  },
  mounted() {
    console.log("jornadas::mounted");
    this.imageIdx = this.randomIntFromInterval(0, imagelist.length - 1);
    this.current = this.imagelist[this.imageIdx];
  },
  components: {
    pagetitle: () => import("@/components/pagetitle"),
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
.cita-form {
  padding: 0px;
}
li {
  text-align: justify;
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>

<i18n>
{
	"es": {
		"pagetitle": "Actividades",
		"actividades": "Actividades",
		"desarrollo_integral": "Desarrollo integral",
		"desc1": "La actividad desempeñada por Dolaretxe tiene como propósito principal la calidad en el servicio y en la asistencia, basada en el respeto a la diversidad, ritmos y necesidades específicas de cada niño. Es por ello que las actividades realizadas en Dolaretxe se desarrollan dentro de programas pedagógicos que utilizan el juego y que tienen objetivos específicos adaptados a cada una de las edades y necesidades de cada niño. Las actividades que realizamos en Dolaretxe están orientadas a conseguir el desarrollo integral (físico, intelectual, afectivo y social) de los niños aportándoles experiencias y estímulos enriquecedores.",
		"desc2": "De este modo conseguiremos un adecuado desarrollo de los niños en los siguientes aspectos:",
		"lista1": [
			"Físico: Maduración psicomotriz que favorezca su autonomía.",
			"Intelectual: Adquirir y desarrollar el lenguaje, memoria visual y auditiva y razonamiento lógico.",
			"Afectivo y social: Adquirir y desarrollar capacidades emotivas para afrontar diferentes situaciones y comprender a los demás."
		],
		"a-traves-juego": "A traves del juego",
		"a-traves-juego-subtitle": "A través del juego conseguimos un ambiente agradable, divertido e integrador lleno de momentos placenteros que favorecen el aprendizaje y hacen que el niño eleve su autoestima, y se sienta querido y seguro.",
		"a-traves-del-juego-p": "Con el juego logramos que los niños:",
		"lista-juegos": [
			"Estimulen su creatividad, imaginación y curiosidad.",
			"Desarrollen habilidades y valores sociales como respetar, compartir y cooperar.",
			"Estimulen la capacidad para pensar y solucionar problemas.",
			"Aumenten la capacidad de concentración y atención.",
			"Detecten sus limitaciones de forma positiva y logren seguridad en si mismos.",
			"Incrementen su capacidad psicomotora y de coordinación.",
			"Avancen en la obtención de habilidades comunicativas."
		],
		"desc3": "Hacemos un seguimiento personalizado y diario de cada niño. Informamos a las familias diariamente de forma oral y a través de la agenda escolar sobre la educación y evolución de los niños.",
		"desc4": "Evaluamos trimestralmente la evolución de los niños con boletines de información.",
		"title-desarrollo-armonico": "Desarrollo armónico",
		"subtitle-desarrollo-armonico": "Nos centramos en las siguientes actividades para lograr un desarrollo armónico de acuerdo a cada una de las edades y ritmos de cada uno de los niños.",
		"lista-desa-arm-1": [
			"Estimulación del lenguaje en las diversas áreas de expresión mediante cuentos, canciones y rimas.",
			"Juegos de estimulación auditiva reproduciendo sonidos que despierten la memoria auditiva logrando identificar y diferenciar estímulos sonoros.",
			"Desarrollo de la memoria visual mediante fichas con imágenes (bits de inteligencia) y palabras (vocabulario visual) y que logren establecer relaciones entre ellas.",
			"A través de los juegos y de la música trabajamos con los niños en conceptos relativos al espacio (derecha/izquierda, arriba/abajo, delante/detrás, etc.), al tiempo (rapidez, ritmo, duración, etc.) para que desarrollen y maduren las habilidades psicomotrices necesarias para el equilibrio y la orientación.",
			"Atención a la educación artística: Damos especial atención a las artes plásticas para despertar el gusto por lo estético y la expresión artística."
		],
		"lista-desa-arm-2": [
			"Impulsamos las actividades donde lo niños desarrollan las habilidades sensoriales mediante la manipulación de objetos y materiales con diferentes texturas, colores y formas.",
			"Atención a la habilidad motora fina promoviendo actividades donde los niños manipulen, agarren, armen y desarmen objetos, pinten con los dedos, manos u otros utensilios, elaboren puzzles…",
			"Actividades al aire libre que se desarrollan en el patio de juegos como los juegos de agua y arena, el descubrimiento del entorno inmediato y etc.",
			"Nos centramos en aquellas actividades y juegos que ayuden a que los niños se adapten al medio y a los nuevos hábitos y rutinas de la escuela en aspectos como los horarios, actividades, alimentación e higiene además de las relaciones sociales con otros niños y los adultos.",
			"Fomentamos los juegos interpretativos (disfraces, teatro…) donde los niños asumen un papel o un personaje que estimule su potencial creativo e imaginativo. De este modo, durante el juego trabajarán el razonamiento y la lógica al enfrentarse a nuevas situaciones, retos y confrontaciones e intentarán buscarles solución."
		],
		"desarrollo-list-text": [
			"Desarrollo fisico",
			"Desarrollo intelectual",
			"Desarrollo afectivo",
			"Desarrollo social"
		]
	},
	"en": {
		"pagetitle": "",
		"actividades": "",
		"desarrollo_integral": "",
		"desc1": "",
		"desc2": "",
		"lista1": [
			"",
			"",
			""
		],
		"a-traves-juego": "",
		"a-traves-juego-subtitle": "",
		"a-traves-del-juego-p": "",
		"lista-juegos": [
			"",
			"",
			"",
			"",
			"",
			"",
			"."
		],
		"desc3": "",
		"desc4": "",
		"title-desarrollo-armonico": "",
		"subtitle-desarrollo-armonico": "",
		"lista-desa-arm-1": [
			"",
			"",
			"",
			"",
			"."
		],
		"lista-desa-arm-2": [
			"",
			"",
			"",
			"",
			"."
		],
		"desarrollo-list-text": [
			"",
			"",
			"",
			"l"
		]
	},
	"eus": {
		"pagetitle": "Ekitaldiak",
		"actividades": "Ekitaldiak",
		"desarrollo_integral": "Erabateko garapena",
		"desc1": "Dolaretxek landutako aktibitatea kalitatezko laguntzan eta zerbitzuan du funtsezko helburua, dibertsitatearenganako errespetuan oinarrituz, eta baita umeen erritmoan eta beharrizan zehatzetan ere. Horregatik Dolaretxen antolatutako ekitaldiak jokoaren babesa duten egitarau pedagogikoen barne hedatzen dira, ume bakoitzaren beharrizanei eta adinei egokitzen direnak eta helburu zehatzak dituztenak.",
		"desc2": "Dolaretxen egindako ekitaldiak umeen erabateko garapena lortzeko bideratuak daude (fisikoa, intelektuala, afektiboa eta soziala), aberatsak diren esperientziak eta estimuluak eskeiniz. Era honetan lortuko dugu umeen garapen egoki bat alderdi hauetan: ",
		"lista1": [
			"Fisikoa: Bere nortasuna indartuko duen zahartzapen psikomotorea.",
			"Intelektuala: Lengoaiaren, ikusmenaren eta entzumenaren oroimena, eta arrazoiketa logikoa bereganatzea eta garatzea.",
			"Afektiboa eta soziala: Gaitasun hunkigarriak garatzea egoera ezberdinei aurre egiteko eta lagun hurkoa ulertzeko gai izatea."
		],
		"a-traves-juego": "Jokoaren bidez",
		"a-traves-juego-subtitle": "Jokoaren bidez giro atsegina, dibertigarria eta bateratzailea egitea dugu helburu, ikasketa errazten duten une alaiak sortzen ditugu bakoitzak bere buruarekin are eta erosoago egon dadin, umea azken finean maitatua eta segurua sentiarazteko.",
		"a-traves-del-juego-p": "Jolasaren bidez lortzen dugu umeek:",
		"lista-juegos": [
			"Ahalmen sortzailea, irudimena eta ikusmina piztea.",
      "Trebetasuna eta giza-baloreak garatzea, errespetua, partekatzea eta elkarlana bezala, besteak beste.",
      "Arazoak konpontzeko eta pentsatzeko gaitasuna hedatzea.",
      "Arreta eta konzentrazio ahalmena gehitzea.",
      "Norberaren mugak era positibo batez antzematea eta segurtasunaz jabetzea.",
      "Koordinaziozko ahalmena eta psikomotorea gehitzea.",
      "Irekiak izateko gaitasunetan aurrera egitea."
		],
		"desc3": "Ume bakoitzaren neurrira segimendu bat egiten dugu egunez egun. Umeen bilakaeraren eguneroko berriak ematen dizkiegu senitarteei bai ahoz eta baita Eskolako egutegiaren bitartez",
		"desc4": "Hiru hileko ebaluazioak ditugu informaziozko buletinen bitartez.",
		"title-desarrollo-armonico": "Garapen armonikoa",
		"subtitle-desarrollo-armonico": "Hurrengo aktibitateetan arreta jartzen dugu, umeen adinei eta erritmo ezberdinei egokituta daudenak, garapen armoniko bat lortzeko",
		"lista-desa-arm-1": [
			"Errimak, abestiak eta ipuinen bitartez lengoaiaren suspertzea espresioaren arlo ezberdinetan.",
      "Entzumena suspertzeko balio duten jokoak egin, entzumenezko oroimena esnatuko duten soinuak erreproduzitzea estimulu soinudunak antzemateko eta ezberdintzeko.",
      "Ikusmenaren oroimena garatzea irudi txartelen (adimen bit-ak) eta hitzen (ikusmen hiztegia) bitartez eta beraien artean harremanak osatzeko kapazak izatea.",
      "Jokuen eta musikaren bitartez umeekin lan egiten dugu espazioa (eskuina-ezkerra, gora-behera, aurrean-atzean etab.) eta denbora (arintasuna, erritmoa, iraupena etab.) kontzeptuen inguruan oreka eta orientabidea lortzeko, beharrezkoak diren gaitasun psikomotoreak garatzeko eta heltzeko.",
      "Hezkuntza artistikoari arreta: ardura berezia ematen diegu arte plastikoei adierazpen artistikoa eta estetikaren aldeko gogoa esnatzeko."
		],
		"lista-desa-arm-2": [
			"Zentzumenezko gaitasunak hezitzeko aktibitateak bultzatzen ditugu kolore, forma eta ehundura ezberdinak dituzten objektu eta materialen erabilerarekin.",
      "Gaitasun motore finari arreta jartzen diogu umeek ekintza ezberdinak egin ditzaten; hala nola objektuak erabiltzea, hartzea, muntatzea eta desmuntatzea; behatzekin, eskuekin edota beste tresnekin margoztea; puzzleak osatzea etabar.",
      "Jolastokian antolatzen ditugu kanpoko aktibitateak, areetako eta uretako jokoak bezala adibidez, berehalako ingurumenaren aurkikuntza bereganatzea etabar.",
      "Umeak lagundu ahal izaten duten joku eta aktibitateetan arreta jartzen dugu, ingurunea eta ohitura berriei egokitzen diren hoiei; ordutegiak, ekitaldiak, elikagaia eta garbitasuna bezala, eta baita beste ume edota helduenganako giza-harremanak ere.",
      "Antzezpen jokuak sustatzen ditugu (mozorroak, antzerkia) umeek bere irudimenezko botere kreatiboa suspertzeko pertsonai edo paper bat bereganatuz. Era honetan, jokoan arrazoimena eta logika landuko dute umeek, norgehiagoka, erronka eta egoera berriei aurre egingo bait diote, auzi hoiei irtenbide bat bilatuz."
		],
		"desarrollo-list-text": [
			"Garapen fisikoa",
			"Adimenaren garapena",
			"Garapen afektiboa",
			"Garapen soziala"
		]
	}
}
</i18n>