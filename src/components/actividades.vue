<template>
  <div>
    <pagetitle v-show="showPageTitle" page="Actividades" />
    <section class="ftco-section ftco-no-pt ftco-no-pb mt-5 mb-5">
      <div class="container">
        <div class="row no-gutters">
          <div class="col-md-12 wrap-about ftco-animate">
            <div class="heading-section mb-5 pt-5 pl-md-5">
              <div>
                <h2 class="mb-4">Actividades</h2>
              </div>
              <div>
                <h3 class="mb-4">Desarrollo integral</h3>
              </div>
              <p
                class="justified"
              >La actividad desempeñada por Dolaretxe tiene como propósito principal la calidad en el servicio y en la asistencia, basada en el respeto a la diversidad, ritmos y necesidades específicas de cada niño. Es por ello que las actividades realizadas en Dolaretxe se desarrollan dentro de programas pedagógicos que utilizan el juego y que tienen objetivos específicos adaptados a cada una de las edades y necesidades de cada niño. Las actividades que realizamos en Dolaretxe están orientadas a conseguir el desarrollo integral (físico, intelectual, afectivo y social) de los niños aportándoles experiencias y estímulos enriquecedores.</p>

              <!-- start cta desarrollo -->
              <div class="row">
                <div
                  class="col-xs-6 col-md-6 col-lg-3"
                  v-for="item in desarrolloList"
                  :key="item.id"
                >
                  <div class="justify-content-center counter-wrap ftco-animate">
                    <featureBox
                      :text="item.text"
                      :subtitle="item.subtitle"
                      :icon="item.icon"
                      :colorClass="item.class"
                    />
                  </div>
                </div>
              </div>
              <!-- end cta desarrollo -->
              <p
                class="justified"
              >De este modo conseguiremos un adecuado desarrollo de los niños en los siguientes aspectos:</p>
              <ul>
                <li>Físico: Maduración psicomotriz que favorezca su autonomía.</li>
                <li>Intelectual: Adquirir y desarrollar el lenguaje, memoria visual y auditiva y razonamiento lógico.</li>
                <li>Afectivo y social: Adquirir y desarrollar capacidades emotivas para afrontar diferentes situaciones y comprender a los demás.</li>
              </ul>
            </div>
          </div>
          <div class="col-md-12 wrap-about ftco-animate">
            <div class="heading-section pl-md-5">
              <div>
                <h3 class="mb-4">A traves del juego</h3>
              </div>
              <p
                class="justified"
              >A través del juego conseguimos un ambiente agradable, divertido e integrador lleno de momentos placenteros que favorecen el aprendizaje y hacen que el niño eleve su autoestima, y se sienta querido y seguro.</p>
              <p class="justified">Con el juego logramos que los niños:</p>
              <ul>
                <li>Estimulen su creatividad, imaginación y curiosidad.</li>
                <li>Desarrollen habilidades y valores sociales como respetar, compartir y cooperar.</li>
                <li>Estimulen la capacidad para pensar y solucionar problemas.</li>
                <li>Aumenten la capacidad de concentración y atención.</li>
                <li>Detecten sus limitaciones de forma positiva y logren seguridad en si mismos.</li>
                <li>Incrementen su capacidad psicomotora y de coordinación.</li>
                <li>Avancen en la obtención de habilidades comunicativas.</li>
              </ul>
              <p
                class="justified"
              >Hacemos un seguimiento personalizado y diario de cada niño. Informamos a las familias diariamente de forma oral y a través de la agenda escolar sobre la educación y evolución de los niños.</p>
              <p
                class="justified"
              >Evaluamos trimestralmente la evolución de los niños con boletines de información.</p>
              <!-- start modalidades de jornadas -->

              <!-- start: apartado que describe la info sobre desarrollo armonico -->
              <div>
                <h3 class="mb-4">Desarrollo armónico</h3>
              </div>
              <p
                class="justified"
              >Nos centramos en las siguientes actividades para lograr un desarrollo armónico de acuerdo a cada una de las edades y ritmos de cada uno de los niños.</p>
            </div>
            <!-- end: apartado que describe la info sobre desarrollo armonico -->
          </div>

          <div class="col-md-6">
            <ul>
              <li>Estimulación del lenguaje en las diversas áreas de expresión mediante cuentos, canciones y rimas.</li>
              <li>Juegos de estimulación auditiva reproduciendo sonidos que despierten la memoria auditiva logrando identificar y diferenciar estímulos sonoros.</li>
              <li>Desarrollo de la memoria visual mediante fichas con imágenes (bits de inteligencia) y palabras (vocabulario visual) y que logren establecer relaciones entre ellas.</li>
              <li>A través de los juegos y de la música trabajamos con los niños en conceptos relativos al espacio (derecha/izquierda, arriba/abajo, delante/detrás, etc.), al tiempo (rapidez, ritmo, duración, etc.) para que desarrollen y maduren las habilidades psicomotrices necesarias para el equilibrio y la orientación.</li>
              <li>Atención a la educación artística: Damos especial atención a las artes plásticas para despertar el gusto por lo estético y la expresión artística.</li>
            </ul>
          </div>

          <div class="col-md-6">
            <ul>
              <li>Impulsamos las actividades donde lo niños desarrollan las habilidades sensoriales mediante la manipulación de objetos y materiales con diferentes texturas, colores y formas.</li>
              <li>Atención a la habilidad motora fina promoviendo actividades donde los niños manipulen, agarren, armen y desarmen objetos, pinten con los dedos, manos u otros utensilios, elaboren puzzles…</li>
              <li>Actividades al aire libre que se desarrollan en el patio de juegos como los juegos de agua y arena, el descubrimiento del entorno inmediato y etc.</li>
              <li>Nos centramos en aquellas actividades y juegos que ayuden a que los niños se adapten al medio y a los nuevos hábitos y rutinas de la escuela en aspectos como los horarios, actividades, alimentación e higiene además de las relaciones sociales con otros niños y los adultos.</li>
              <li>Fomentamos los juegos interpretativos (disfraces, teatro…) donde los niños asumen un papel o un personaje que estimule su potencial creativo e imaginativo. De este modo, durante el juego trabajarán el razonamiento y la lógica al enfrentarse a nuevas situaciones, retos y confrontaciones e intentarán buscarles solución.</li>
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
          class: "bg-dlrtx-1",
          text: "Desarrollo fisico"
        },
        {
          id: 1,
          icon: "ion-ios-bowtie",
          class: "bg-dlrtx-2",
          text: "Desarrollo intelectual"
        },
        {
          id: 2,
          icon: "ion-ios-contacts",
          class: "bg-dlrtx-3",
          text: "Desarrollo afectivo"
        },
        {
          id: 3,
          icon: "ion-ios-body",
          class: "bg-dlrtx-4",
          text: "Desarrollo social"
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
  "es":{

  },
  "en":{
    
  },
  "eus":{
    
  }
}
</i18n>