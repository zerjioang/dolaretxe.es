<template>
  <div>
    <pagetitle page="Jornadas" />
    <section class="ftco-section ftco-no-pt ftco-no-pb mt-5 mb-5">
      <div class="container">
        <div class="row no-gutters">
          <div class="col-md-12 wrap-about ftco-animate">
            <div class="heading-section mb-5 pt-5 pl-md-5">
              <div class="pr-md-5 mr-md-5">
                <h2 class="mb-4">Jornadas</h2>
              </div>
              <div class="pr-md-5 mr-md-5">
                <h3 class="mb-4">Calendario Escolar</h3>
              </div>
              <p
                class="justified"
              >El curso escolar se extiende desde septiembre hasta julio inclusive, 11 meses de curso. Abrimos los días hábiles de Navidad y Semana Santa y si hubiera un grupo mínimo de alumnos también la primera quincena de agosto. Disponemos de diferentes jornadas escolares para adaptarse mejor a las necesidades de los padres y los niños. En ningún caso es aconsejable que los niños permanezcan en el centro más de 8 horas diarias.</p>
              <p
                class="justified"
              >Ofrecemos el modelo lingüístico bilingüe (euskera-castellano) con introducción al inglés.</p>

              <!-- start modalidades de jornadas -->
              <div class="pr-md-5 mr-md-5">
                <h3 class="mb-4">Tres jornadas diferentes</h3>
              </div>
              <div class="row">
                <div class="col-xs-6 col-md-4 col-lg-4" v-for="item in jornadaList" :key="item.id">
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
              <!-- end modalidades de jornadas -->

              <!-- start horarios ampliados -->
              <div class="pr-md-5 mr-md-5">
                <h3>Además disponemos de los siguientes horarios ampliados</h3>
                <p>De los que podrás beneficiarte en caso de necesidad para acudir a Dolaretxe</p>
              </div>
              <div class="row">
                <div
                  class="col-xs-6 col-md-6 col-lg-6"
                  v-for="item in horariosAmpliadosList"
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
              <!-- end horarios ampliados -->
            </div>
          </div>
          <div class="col-md-12 wrap-about ftco-animate">
            <div class="heading-section pl-md-5">
              <div>
                <h3 class="mb-4">Entrada y salida</h3>
              </div>
              <p
                class="justified"
              >Hay diferentes momentos de entrada y salida que ofrecen una mayor flexibilidad horaria.</p>
              <ul>
                <li>Entrada: De 7:30h a 9:45h.</li>
                <li>Salidas: De 13:15h a 13:30h</li>
                <li>Salidas: 15:15h a 15:30h</li>
                <li>Salidas: 16:45h a 17:00h</li>
              </ul>
              <p
                class="justified"
              >Además, disponemos de un lugar cubierto para dejar los carros en la escuela.</p>
              <!-- start modalidades de jornadas -->

              <!-- start: apartado que describe la info sobre comidas -->
              <div class="pr-md-5 mr-md-5">
                <h3 class="mb-4">Comida</h3>
              </div>
              <p class="justified">
                Distintas opciones de comedor:
                <strong>Comida casera traída por los padres</strong> o
                <strong>servicio de catering</strong>.
              </p>
              <div class="row">
                <div class="col-xs-6 col-md-6 col-lg-6" v-for="item in comidaList" :key="item.id">
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
              <!-- end: apartado que describe la info sobre comidas -->

              <!-- start: apartado que describe la info sobre ludoteca -->
              <div class="pr-md-5 mr-md-5">
                <h3 class="mb-4">Ludoteca</h3>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <p class="justified">
                    Abrimos la escuela todas las tardes,
                    <strong>Navidades</strong> y
                    <strong>Semana Santa</strong>.
                  </p>
                </div>
                <div class="col-xs-6 col-md-4 col-lg-4" v-for="item in ludotecaList" :key="item.id">
                  <div class="justify-content-center counter-wrap ftco-animate">
                    <featureBox
                      :text="item.text"
                      :subtitle="item.subtitle"
                      :icon="item.icon"
                      :colorClass="item.class"
                    />
                  </div>
                </div>
                <div class="col-md-12">
                  <p class="justified">
                    Y los meses de junio, julio y agosto para niños con edades comprendidas entre los
                    <strong>0 a 6 años</strong>
                  </p>
                </div>
                <div
                  class="col-xs-12 col-md-4 col-lg-4"
                  v-for="item in ludoteca2List"
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
              <!-- end: apartado que describe la info sobre ludoteca -->
            </div>
          </div>
        </div>
      </div>
    </section>

    <sectionActividades />
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
  name: "jornadas-component",
  extends: template,
  methods: {},
  data: () => {
    return {
      imagelist,
      imageIdx: 0,
      current: imagelist[0],
      jornadaList: [
        {
          id: 0,
          icon: "ion-md-briefcase",
          class: "bg-dlrtx-1",
          text: "Jornada de mañana",
          subtitle: "(9:00h a 13:30h)"
        },
        {
          id: 1,
          icon: "ion-md-partly-sunny",
          class: "bg-dlrtx-2",
          text: "Media jornada",
          subtitle: "(9:00h a 15:30h)"
        },
        {
          id: 2,
          icon: "ion-md-cloudy-night",
          class: "bg-dlrtx-3",
          text: "Jornada Completa",
          subtitle: "(9:00h a 17:00h)"
        }
      ],
      horariosAmpliadosList: [
        {
          id: 0,
          icon: "ion-md-briefcase",
          class: "bg-dlrtx-4",
          text: "Ampliado de mañana",
          subtitle: "(7:30h a 9:00h)"
        },
        {
          id: 1,
          icon: "ion-md-partly-sunny",
          class: "bg-dlrtx-5",
          text: "Ampliado de tarde",
          subtitle: "(17:00h a 19:00h)"
        }
      ],
      comidaList: [
        {
          id: 3,
          icon: "ion-md-cart",
          class: "bg-dlrtx-1",
          text: "Túper casero",
          subtitle: "traido por los padres"
        },
        {
          id: 4,
          icon: "ion-md-restaurant",
          class: "bg-dlrtx-1",
          text: "Servicio de comida",
          subtitle: "catering profesional"
        }
      ],
      ludotecaList: [
        {
          id: 5,
          icon: "ion-md-sunny",
          class: "bg-dlrtx-4",
          text: "Todas las tardes "
        },
        {
          id: 6,
          icon: "ion-md-jet",
          class: "bg-dlrtx-4",
          text: "Navidades"
        },
        {
          id: 7,
          icon: "ion-md-subway",
          class: "bg-dlrtx-4",
          text: "Semana Santa"
        }
      ],
      ludoteca2List: [
        {
          id: 8,
          icon: "ion-md-calendar",
          class: "bg-dlrtx-5",
          text: "Junio"
        },
        {
          id: 9,
          icon: "ion-md-calendar",
          class: "bg-dlrtx-5",
          text: "Julio"
        },
        {
          id: 10,
          icon: "ion-md-calendar",
          class: "bg-dlrtx-5",
          text: "Agosto"
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
  },
  mounted() {
    console.log("jornadas::mounted");
    this.jQueryInit();
    this.imageIdx = this.randomIntFromInterval(0, imagelist.length - 1);
    this.current = this.imagelist[this.imageIdx];
  },
  components: {
    pagetitle: () => import("@/components/pagetitle"),
    featureBox: () => import("@/components/featureBox"),
    sectionActividades: () => import("@/components/actividades")
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
</style>